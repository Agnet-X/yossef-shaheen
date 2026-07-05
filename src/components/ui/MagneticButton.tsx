"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  href,
  onClick,
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const variants = {
    primary:
      "bg-[#D4AF37] text-[#0B0B0B] hover:bg-[#E8C547] border border-[#D4AF37]",
    secondary:
      "bg-transparent text-white border border-white/20 hover:border-[#D4AF37] hover:text-[#D4AF37]",
    ghost: "bg-white/5 text-white border border-white/10 hover:bg-white/10",
  };

  const sharedClass = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-500",
    variants[variant],
    className
  );

  const motionProps = {
    animate: { x: position.x, y: position.y },
    transition: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
    onMouseMove: handleMouse,
    onMouseLeave: reset,
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        className={sharedClass}
        {...motionProps}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 shimmer opacity-0 transition-opacity hover:opacity-100" />
        )}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      className={sharedClass}
      {...motionProps}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
