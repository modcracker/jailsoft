"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BarDivider from "./BarDivider";
import { cn } from "@/lib/utils";
import { Check, ShieldAlert, Cpu } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  features: string[];
  specs: { name: string; value: string }[];
  compliance: string[];
  links: { label: string; href: string }[];
}

export default function PageHero({
  title,
  subtitle,
  image,
  paragraphs,
  features,
  specs,
  compliance,
  links,
}: PageHeroProps) {
  return (
    <div className="bg-black text-white py-12 md:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Indicator */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">{title.split("|")[0].trim()}</span>
        </div>

        {/* Title & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-neutral-900">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.1em] text-white leading-none">
              {title.split("|")[0].trim()}
            </h1>
            <p className="font-sans text-sm md:text-lg text-neutral-400 font-light max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          {/* Subtle metadata indicator */}
          <div className="hidden lg:col-span-4 lg:flex flex-col items-end text-right font-mono text-[10px] text-neutral-500 space-y-1">
            <span className="text-neutral-600 uppercase tracking-wider">Classification</span>
            <span className="text-white font-medium tracking-widest uppercase">System of Record</span>
          </div>
        </div>

        {/* Bar Rhythm Motif */}
        <BarDivider variant="minimal" className="py-4 opacity-50" />

        {/* Main Content Area - Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          
          {/* Left Column: Descriptive texts & desaturated graphic display */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual Graphic Display */}
            <div className="relative w-full aspect-[16/10] bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover grayscale contrast-[1.05] brightness-[0.9] transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Content paragraph blocks */}
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            {/* Core Features list */}
            {features && features.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-900">
                <h3 className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase block">
                  Core Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-neutral-950/60 border border-neutral-900 p-4 rounded-sm">
                      <Check className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span className="font-sans text-xs text-neutral-300 leading-normal font-light">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Engineering Specs, Compliance details, Internal Dynamic linkings */}
          <div className="lg:col-span-5 space-y-8 lg:border-l lg:border-neutral-900 lg:pl-8">
            
            {/* Specs Table */}
            {specs && specs.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase flex items-center space-x-2">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>TECHNICAL SPECIFICATIONS</span>
                </h3>
                <div className="border border-neutral-850 border-neutral-800 rounded-sm overflow-hidden divide-y divide-neutral-900">
                  {specs.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-3 p-3.5 font-mono text-[11px] hover:bg-neutral-950 transition-colors">
                      <div className="col-span-1 text-neutral-500 uppercase tracking-wider font-light">
                        {item.name}
                      </div>
                      <div className="col-span-2 text-white font-medium pl-4 border-l border-neutral-900 text-right">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

             {/* Compliance Matrix panel */}
            {compliance && compliance.length > 0 && (
              <div className="space-y-4 bg-neutral-950 border border-neutral-900 p-6 rounded-sm">
                <h3 className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase block mb-2">
                  Compliance and Standards
                </h3>
                <div className="flex flex-wrap gap-2">
                  {compliance.map((comp, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-black border border-neutral-800 rounded-sm font-mono text-[9px] text-neutral-400 tracking-wider uppercase"
                    >
                      {comp}
                    </span>
                  ))}
                </div>
                <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light pt-2">
                  Audited regularly to ensure strict alignment with federal, state, and local regulatory protocols, shielding operators from liability and ensuring pristine standard records.
                </p>
              </div>
            )}

            {/* Deep Internal Linkings */}
            {links && links.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-900">
                <h3 className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase block">
                  Related Resources
                </h3>
                <div className="space-y-2">
                  {links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block w-full border border-neutral-800 hover:border-white bg-black hover:bg-white text-white hover:text-black p-4 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-200 text-center"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Global horizontal bar motif at footer separator */}
        <BarDivider variant="structural" className="mt-16 opacity-30" />

      </div>
    </div>
  );
}
