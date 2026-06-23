"use client";

import React, { useEffect, useState } from "react";
import BarDivider from "./BarDivider";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function AcquisitionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("jailsoft_acquisition_dismissed") === "true";
    setTimeout(() => {
      if (!isDismissed) {
        setIsOpen(true);
      }
      setIsHydrated(true);
    }, 0);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.setItem("jailsoft_acquisition_dismissed", "true");
    setIsOpen(false);
  };

  if (!isHydrated || !isOpen) {
    return null;
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop blur and overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-[8px]"
        />

        {/* Modal Outer frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-lg bg-black border-2 border-neutral-800 text-white p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] filter drop-shadow"
        >
          {/* Top Bar Rhythms (Prison Bar Accent) */}
          <div className="flex h-12 justify-center items-center space-x-1.5 opacity-60 mb-6 select-none">
            <div className="w-[1px] h-8 bg-neutral-500" />
            <div className="w-[1px] h-8 bg-neutral-500" />
            <div className="w-[3px] h-8 bg-neutral-500" />
            <div className="w-[1px] h-8 bg-neutral-500" />
            <div className="w-[5px] h-8 bg-neutral-500" />
            <div className="w-[1px] h-8 bg-neutral-500" />
            <div className="w-[2px] h-8 bg-neutral-500" />
            <div className="w-[1px] h-8 bg-neutral-500" />
            <div className="w-[4px] h-8 bg-neutral-500" />
          </div>

          <div className="text-center space-y-6">
            <h2 className="font-sans font-bold text-lg md:text-xl uppercase tracking-[0.25em] text-white">
              Notice of Acquisition
            </h2>

            <div className="w-12 h-[1px] bg-neutral-600 mx-auto" />

            {/* EVU Logo Showcase */}
            <div className="flex justify-center items-center py-2">
              <div className="relative w-20 h-20 bg-neutral-900 border border-neutral-800 p-2 rounded-sm overflow-hidden flex items-center justify-center">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQG8HakZjfsXQA/company-logo_200_200/B4EZVJCAEKGgAI-/0/1740687016580/evuresidential_logo?e=2147483647&v=beta&t=AV66_LB6z7CCTai58p5fuaKyqeqSDO-PRQJRx_QyExE"
                  alt="EVU Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <p className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-light">
              Jailsoft and its associated patents, trademarks, and intellectual property have been acquired by{" "}
              <span className="font-medium text-white font-mono">EVU.com</span>, effective June 2026.
            </p>

            <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto font-light">
              For current product information, support, and inquiries, please visit EVU.com.
            </p>

            <BarDivider variant="minimal" className="py-2 opacity-50" />

            <div className="mt-8 space-y-4">
              {/* Primary Call To Action */}
              <a
                href="https://www.evu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-white text-black py-4 px-6 font-sans text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-200 border border-white"
              >
                Continue to EVU.com →
              </a>

              {/* Secondary Escape Link */}
              <button
                onClick={handleDismiss}
                type="button"
                className="block w-full text-center text-neutral-400 hover:text-white font-sans text-[10px] uppercase tracking-widest underline decoration-neutral-600 hover:decoration-white transition-all duration-200"
              >
                View archived Jailsoft site
              </button>
            </div>
          </div>

          {/* Bottom Bar Rhythms */}
          <div className="flex justify-between items-center mt-8 pt-4 border-t border-neutral-900 font-mono text-[8px] text-neutral-600">
            <span>REF: J_S_ACQ_2026</span>
            <span>EVU COMMUNIQUE</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
