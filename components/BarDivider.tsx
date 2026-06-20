import React from "react";
import { cn } from "@/lib/utils";

interface BarDividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  variant?: "rhythmic" | "minimal" | "structural";
}

export default function BarDivider({
  className,
  orientation = "horizontal",
  variant = "rhythmic",
}: BarDividerProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("inline-flex items-stretch justify-center h-full space-x-1 select-none", className)}>
        <div className="w-[1px] bg-neutral-800 h-full" />
        <div className="w-[2px] bg-neutral-700 h-full opacity-60" />
        <div className="w-[1px] bg-neutral-850 h-full" />
        <div className="w-[4px] bg-neutral-800 h-full opacity-20" />
        <div className="w-[1px] bg-neutral-700 h-full" />
      </div>
    );
  }

  // Horizontal structural elements
  if (variant === "minimal") {
    return (
      <div className={cn("w-full flex items-center justify-between select-none py-4", className)}>
        <div className="w-full h-[1px] bg-neutral-205 bg-neutral-800" />
        <div className="flex space-x-1.5 px-4 shrink-0">
          <div className="w-[2px] h-3 bg-neutral-400" />
          <div className="w-[1px] h-3 bg-neutral-605 bg-neutral-500" />
          <div className="w-[3px] h-3 bg-neutral-300" />
          <div className="w-[1px] h-3 bg-neutral-500" />
          <div className="w-[5px] h-3 bg-neutral-450 bg-neutral-300" />
        </div>
        <div className="w-full h-[1px] bg-neutral-800" />
      </div>
    );
  }

  if (variant === "structural") {
    return (
      <div className={cn("w-full flex justify-center py-2 select-none", className)}>
        <div className="flex h-6 justify-center items-center space-x-1 text-neutral-800 font-mono text-[9px] tracking-[0.3em]">
          <span>[</span>
          <div className="w-[1px] h-4 bg-neutral-800" />
          <div className="w-[2px] h-4 bg-neutral-600" />
          <div className="w-[1px] h-4 bg-neutral-800" />
          <div className="w-[4px] h-4 bg-neutral-500" />
          <div className="w-[1px] h-4 bg-neutral-800" />
          <div className="w-[3px] h-4 bg-neutral-400" />
          <div className="w-[1px] h-4 bg-neutral-800" />
          <span>SYS_ALIGN]</span>
        </div>
      </div>
    );
  }

  // Default barcode/rhythmic design representing structural jail bars
  return (
    <div className={cn("w-full py-6 select-none", className)}>
      <div className="w-full h-[1px] bg-neutral-800" />
      <div className="flex items-center justify-between mt-1">
        <span className="font-mono text-[9px] text-neutral-500 tracking-wider">SECURE LINK BOUNDARY</span>
        <div className="flex items-end space-x-[2px] h-2 opacity-80">
          <div className="w-[1px] h-2 bg-neutral-400" />
          <div className="w-[1px] h-1.5 bg-neutral-400" />
          <div className="w-[3px] h-2.5 bg-neutral-400" />
          <div className="w-[1px] h-2 bg-neutral-400" />
          <div className="w-[2px] h-1.5 bg-neutral-400" />
          <div className="w-[1px] h-2 bg-neutral-400" />
          <div className="w-[4px] h-3 bg-neutral-400" />
          <div className="w-[1px] h-1 bg-neutral-400" />
          <div className="w-[2px] h-2 bg-neutral-400" />
          <div className="w-[1px] h-2.5 bg-neutral-400" />
          <div className="w-[3px] h-2 bg-neutral-400" />
          <div className="w-[1px] h-1.5 bg-neutral-400" />
          <div className="w-[1px] h-2 bg-neutral-400" />
        </div>
        <span className="font-mono text-[9px] text-neutral-500 tracking-wider">J_S_SYS</span>
      </div>
    </div>
  );
}
