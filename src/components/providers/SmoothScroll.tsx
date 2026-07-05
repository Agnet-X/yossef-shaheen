"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_OFFSET = -96;
const HOME_PATH = "/";

type ScrollContextValue = {
  scrollToId: (id: string) => void;
};

const ScrollContext = createContext<ScrollContextValue | null>(null);

export function useScrollTo() {
  const ctx = useContext(ScrollContext);
  return (
    ctx?.scrollToId ??
    ((id: string) => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.assign(`${HOME_PATH}#${id}`);
    })
  );
}

function scrollElementIntoView(
  lenis: Lenis | null,
  el: HTMLElement,
  duration = 1.1
) {
  if (lenis) {
    lenis.scrollTo(el, { offset: NAV_OFFSET, duration });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const scrollToIdRef = useRef<(id: string) => void>(() => {});

  const scrollToId = useCallback(
    (id: string) => {
      const el = document.getElementById(id);

      if (el && pathname === HOME_PATH) {
        scrollElementIntoView(lenisRef.current, el);
        return;
      }

      router.push(`${HOME_PATH}#${id}`);
    },
    [pathname, router]
  );

  scrollToIdRef.current = scrollToId;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      event.preventDefault();
      scrollToIdRef.current(hash.slice(1));
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (pathname !== HOME_PATH) return;

    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    let attempts = 0;
    const interval = window.setInterval(() => {
      attempts += 1;
      const el = document.getElementById(hash);
      if (el && lenisRef.current) {
        scrollElementIntoView(lenisRef.current, el, attempts === 1 ? 0 : 1.1);
        window.clearInterval(interval);
      } else if (attempts >= 40) {
        window.clearInterval(interval);
      }
    }, 50);

    return () => window.clearInterval(interval);
  }, [pathname]);

  return (
    <ScrollContext.Provider value={{ scrollToId }}>
      {children}
    </ScrollContext.Provider>
  );
}
