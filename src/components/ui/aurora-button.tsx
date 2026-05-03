"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

interface AuroraButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
}

export function AuroraButton({
  className,
  children,
  glowClassName,
  ...props
}: AuroraButtonProps) {
  return (
    <div className="relative group w-max">
      {/* Gradient border container - The "Aurora" Glow */}
      <div
        className={cn(
          "absolute -inset-[1px] rounded-full bg-gradient-to-r from-orange-600 via-orange-400 to-yellow-500 opacity-70 blur-md transition-all duration-500",
          "group-hover:opacity-100 group-hover:blur-lg",
          glowClassName
        )}
      />

      {/* Button Body */}
      <button
        className={cn(
          "relative rounded-full bg-[#0a0a0a] px-8 py-3",
          "text-white shadow-xl flex items-center justify-center",
          "transition-all hover:bg-black/80",
          "border border-white/10 uppercase text-[10px] md:text-xs tracking-widest font-semibold",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}