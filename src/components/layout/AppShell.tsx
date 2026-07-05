"use client";

import { useLanguage } from "@/context/LanguageContext";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MouseGlow } from "@/components/layout/MouseGlow";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { dir } = useLanguage();

  return (
    <>
      <LoadingScreen />
      <SmoothScroll>
        <div dir={dir}>
          <MouseGlow />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
