"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BarDivider from "./BarDivider";
import { cn } from "@/lib/utils";
import { 
  Check, 
  ShieldAlert, 
  Cpu, 
  Database, 
  Activity, 
  Signal, 
  FileText, 
  Settings, 
  Compass, 
  Workflow, 
  ShieldCheck, 
  RefreshCw 
} from "lucide-react";

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
  const [ticker, setTicker] = useState("SECURE_LINK_CONNECTED");
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      const stateLog = [
        "SECURE_LINK_CONNECTED",
        "AUDIT_DAEMON_PASSING",
        "AES256_ACTIVE",
        "FIPS_COMPLIANT_LOOP",
        "NODE_TELEMETRY_GREEN"
      ];
      setTicker(stateLog[Math.floor(Math.random() * stateLog.length)]);
      setPulse(prev => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const getTheme = () => {
    const lowerTitle = title.toLowerCase();
    const lowerSub = subtitle.toLowerCase();
    
    // 1. Solutions
    if (lowerTitle.includes("prison") || lowerTitle.includes("jail") || lowerTitle.includes("facilities") || lowerTitle.includes("detention") || lowerTitle.includes("corrections") || lowerSub.includes("ward") || lowerSub.includes("facility")) {
      return {
        mode: "solution",
        accent: "sky",
        accentText: "text-sky-400",
        accentBg: "bg-sky-950/20",
        accentBorder: "border-sky-900/30",
        glow: "shadow-[0_0_40px_rgba(56,189,248,0.04)]",
        badge: "DEPLOYMENT BLUEPRINT MANUAL",
        pillTag: "● REGIONAL OVERVIEW",
        icon: Compass,
        gridStyle: "grid-cols-1 lg:grid-cols-12",
        headerClass: "from-sky-500/10 to-transparent",
        glowColor: "rgba(56,189,248,0.15)"
      };
    }
    
    // 2. Hardware
    if (lowerTitle.includes("door") || lowerTitle.includes("biometric") || lowerTitle.includes("surveillance") || lowerTitle.includes("perimeter") || lowerTitle.includes("duress") || lowerTitle.includes("iot") || lowerTitle.includes("cctv") || lowerTitle.includes("hardware") || lowerTitle.includes("sensor")) {
      return {
        mode: "hardware",
        accent: "amber",
        accentText: "text-amber-500",
        accentBg: "bg-amber-950/20",
        accentBorder: "border-amber-900/30",
        glow: "shadow-[0_0_40px_rgba(245,158,11,0.04)]",
        badge: "INDUSTRIAL PHYSICAL SECURITY HARDWARE",
        pillTag: "● CONTROL SCHEMATIC",
        icon: Cpu,
        gridStyle: "grid-cols-1 lg:grid-cols-12",
        headerClass: "from-amber-500/10 to-transparent",
        glowColor: "rgba(245,158,11,0.15)"
      };
    }

    // 3. Comms
    if (lowerTitle.includes("calling") || lowerTitle.includes("messaging") || lowerTitle.includes("visitation") || lowerTitle.includes("notification") || lowerTitle.includes("recording") || lowerTitle.includes("mail") || lowerTitle.includes("comms")) {
      return {
        mode: "comms",
        accent: "emerald",
        accentText: "text-emerald-400",
        accentBg: "bg-emerald-950/20",
        accentBorder: "border-emerald-930/30",
        glow: "shadow-[0_0_40px_rgba(52,211,153,0.04)]",
        badge: "COMMUNICATIONS NETWORK SYSTEM",
        pillTag: "● LIVE AUDIO/SIGNAL TELEMETRY",
        icon: Signal,
        gridStyle: "grid-cols-1 lg:grid-cols-12",
        headerClass: "from-emerald-500/10 to-transparent",
        glowColor: "rgba(52,211,153,0.15)"
      };
    }

    // 4. Static / Editorial pages
    if (lowerTitle.includes("identity") || lowerTitle.includes("careers") || lowerTitle.includes("security & cryptography") || lowerTitle.includes("integrations") || lowerTitle.includes("partner") || lowerTitle.includes("press") || lowerTitle.includes("compliance") || lowerTitle.includes("overview") || lowerTitle.includes("contact")) {
      return {
        mode: "static",
        accent: "zinc",
        accentText: "text-neutral-300",
        accentBg: "bg-neutral-900/40",
        accentBorder: "border-neutral-800",
        glow: "shadow-none",
        badge: "GOVERNMENT & CORPORATE BRIEFING",
        pillTag: "● OFFICIAL RELEASE",
        icon: FileText,
        gridStyle: "grid-cols-1 lg:grid-cols-12",
        headerClass: "from-zinc-500/5 to-transparent",
        glowColor: "rgba(255,255,255,0.03)"
      };
    }

    // 5. Software Data Ledgers
    return {
      mode: "software",
      accent: "cyan",
      accentText: "text-cyan-400",
      accentBg: "bg-cyan-950/20",
      accentBorder: "border-cyan-900/30",
      glow: "shadow-[0_0_40px_rgba(34,211,238,0.04)]",
      badge: "ENTERPRISE SOFTWARE PLATFORM",
      pillTag: "● SECURE CUSTODY DATABASE",
      icon: Database,
      gridStyle: "grid-cols-1 lg:grid-cols-12",
      headerClass: "from-cyan-500/10 to-transparent",
        glowColor: "rgba(34,211,238,0.15)"
    };
  };

  const theme = getTheme();
  const HeroIcon = theme.icon;

  return (
    <div className={cn(
      "relative bg-black text-white py-12 md:py-20 select-none overflow-hidden border-b border-neutral-900",
      theme.glow
    )}>
      {/* Dynamic Grid Background Overlay per mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] transition-all">
        {theme.mode === "hardware" ? (
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
        ) : theme.mode === "comms" ? (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#059669_1px,transparent_1px),linear-gradient(to_bottom,#059669_1px,transparent_1px)] [background-size:32px_32px]" />
        ) : theme.mode === "solution" ? (
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:28px_28px]" />
        ) : theme.mode === "software" ? (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b2_1px,transparent_1px),linear-gradient(to_bottom,#0891b2_1px,transparent_1px)] [background-size:40px_40px]" />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:36px_36px]" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Indicator with accent colors */}
        <div className="flex items-center space-x-2 font-mono text-[9px] text-neutral-500 uppercase tracking-[0.2em] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          {title.toLowerCase().includes("product") || theme.mode === "hardware" || theme.mode === "comms" || (theme.mode === "software" && title.toLowerCase().includes("suite")) ? (
            <>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="text-neutral-800">/</span>
            </>
          ) : null}
          {theme.mode === "solution" ? (
            <>
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <span className="text-neutral-800">/</span>
            </>
          ) : null}
          <span className={cn("font-medium", theme.accentText)}>{title.split("|")[0].trim()}</span>
        </div>

        {/* Dynamic Concept Sub-Header based on current page archetype */}
        <div className="mb-4">
          <span className={cn(
            "inline-flex items-center space-x-2 px-3 py-1 bg-neutral-950/60 border rounded-sm font-mono text-[8.5px] uppercase tracking-widest font-semibold",
            theme.accentText,
            theme.accentBorder
          )}>
            <HeroIcon className="w-3 h-3 animate-pulse" />
            <span>{theme.badge}</span>
          </span>
        </div>

        {/* Title & Subtitle Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-neutral-900">
          <div className="lg:col-span-8 space-y-4">
            <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.08em] text-white leading-none">
              {title.split("|")[0].trim()}
            </h1>
            <p className="font-sans text-sm md:text-lg text-neutral-400 font-light max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          </div>
          
          {/* Subtle real-time metadata indicator block */}
          <div className="lg:col-span-4 lg:flex flex-col items-end text-right space-y-1.5 font-mono text-[9px]">
            <span className="text-neutral-600 uppercase tracking-widest font-bold">NODE STATUS METRIC</span>
            <div className={cn(
              "inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-sm border bg-black/60",
              theme.accentBorder
            )}>
              <span className={cn(
                "w-1.5 h-1.5 rounded-full animate-ping", 
                theme.mode === "hardware" ? "bg-amber-500" :
                theme.mode === "comms" ? "bg-emerald-400" :
                theme.mode === "solution" ? "bg-sky-400" :
                theme.mode === "software" ? "bg-cyan-400" : "bg-neutral-400"
              )} />
              <span className="text-neutral-400 font-mono text-[8.5px] tracking-widest font-medium uppercase">
                {ticker}
              </span>
            </div>
          </div>
        </div>

        {/* Bar Rhythm Motif */}
        <BarDivider variant="minimal" className="py-4 opacity-30" />

        {/* Main Content Area - Split Grid */}
        <div className={cn("grid gap-12 mt-4", theme.gridStyle)}>
          
          {/* Left Column: Descriptive texts & desaturated graphic display */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Visual Graphic Display with custom frame, grids, and wireframe tags based on Archetype */}
            <div className={cn(
              "relative w-full aspect-[16/10] bg-neutral-950 border rounded-sm overflow-hidden shadow-2xl group",
              theme.accentBorder
            )}>
              {/* Corner HUD markers for physical products */}
              {theme.mode !== "static" && (
                <>
                  <div className={cn("absolute top-3 left-3 font-mono text-[8px] z-20 px-2 py-0.5 rounded bg-black/80 border uppercase", theme.accentBorder, theme.accentText)}>
                    FIPS_CAM_FEED_[H.264]
                  </div>
                  <div className="absolute bottom-3 right-3 font-mono text-[8.5px] z-20 text-neutral-500 bg-black/80 px-2 py-0.5 rounded border border-neutral-800">
                    LATENCY: 12ms
                  </div>
                  {/* Subtle scope guide lines */}
                  <div className={cn("absolute inset-x-0 top-1/2 border-t opacity-15 pointer-events-none", theme.accentBorder)} />
                  <div className={cn("absolute inset-y-0 left-1/2 border-l opacity-15 pointer-events-none", theme.accentBorder)} />
                </>
              )}

              <Image
                src={image}
                alt={title}
                fill
                className={cn(
                  "object-cover grayscale-95 transition-all duration-700 hover:scale-[1.03]",
                  theme.mode === "hardware" ? "brightness-75 contrast-125" : 
                  theme.mode === "comms" ? "brightness-90 contrast-105" : 
                  theme.mode === "solution" ? "brightness-80" : "brightness-[0.85] contrast-[1.02]"
                )}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none opacity-80" />
            </div>

            {/* Content paragraph blocks */}
            <div className="space-y-6">
              {paragraphs.map((p, idx) => (
                <p key={idx} className="font-sans text-xs md:text-sm text-neutral-300 leading-relaxed font-light">
                  {p}
                </p>
              ))}
            </div>

            {/* Theme-Specific Capabilities box */}
            {features && features.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-neutral-900">
                <span className="font-mono text-[9px] text-[#777] tracking-[0.2em] uppercase block">
                  🛡️ SYSTEM CAPABILITIES / PROTOCOLS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feat, idx) => (
                    <div key={idx} className={cn(
                      "flex items-start space-x-3 bg-neutral-950/60 border p-4 rounded-sm transition-all hover:bg-neutral-900/40",
                      theme.accentBorder
                    )}>
                      <Check className={cn("w-4 h-4 shrink-0 mt-0.5", theme.accentText)} />
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
            
            {/* Specs Table with Archetype design */}
            {specs && specs.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-mono text-[9px] text-neutral-500 tracking-[0.2em] uppercase flex items-center space-x-2">
                  <SettingTabIcon theme={theme.mode} />
                  <span>TECHNICAL SPECIFICATIONS</span>
                </h3>
                <div className={cn(
                  "border rounded-sm overflow-hidden divide-y divide-neutral-900 bg-neutral-950/40 shadow-inner",
                  theme.accentBorder
                )}>
                  {specs.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-3 p-3.5 font-mono text-[11px] hover:bg-neutral-900/20 transition-all duration-200">
                      <div className="col-span-1 text-neutral-500 uppercase tracking-widest font-normal text-[10px]">
                        {item.name}
                      </div>
                      <div className="col-span-2 text-white font-medium pl-4 border-l border-neutral-900 text-right text-neutral-300">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Compliance Matrix panel */}
            {compliance && compliance.length > 0 && (
              <div className={cn(
                "space-y-4 bg-neutral-950 p-6 rounded-sm border",
                theme.accentBorder
              )}>
                <h3 className="font-mono text-[9px] text-neutral-500 tracking-[0.2em] uppercase block">
                  COMPLIANCE AUDIT BOUNDARY
                </h3>
                <div className="flex flex-wrap gap-2 pt-1">
                  {compliance.map((comp, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "inline-flex items-center space-x-1.5 px-3 py-1 border rounded-full font-mono text-[8.5px] uppercase tracking-wider transition-all duration-300 hover:text-white hover:bg-neutral-900",
                        theme.accentBg,
                        theme.accentBorder,
                        theme.accentText
                      )}
                    >
                      <span className={cn(
                        "w-1 h-1 rounded-full animate-pulse shrink-0",
                        theme.mode === "hardware" ? "bg-amber-500" :
                        theme.mode === "comms" ? "bg-emerald-400" :
                        theme.mode === "solution" ? "bg-sky-400" :
                        theme.mode === "software" ? "bg-cyan-400" : "bg-neutral-400"
                      )} />
                      <span>{comp}</span>
                    </span>
                  ))}
                </div>
                <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light pt-2 border-t border-neutral-900">
                  Operated in adherence with public safety requirements. Restricts unauthorized data extraction, and builds durable liability coverage for operations leaders.
                </p>
              </div>
            )}

            {/* Deep Related Linkings */}
            {links && links.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-900">
                <h3 className="font-mono text-[9px] text-neutral-510 text-neutral-500 tracking-[0.2em] uppercase block">
                  RELATED SECTOR LEDGERS
                </h3>
                <div className="space-y-3">
                  {links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={cn(
                        "group flex items-center justify-between w-full border bg-neutral-950/60 hover:bg-neutral-900/60 text-neutral-300 hover:text-white px-5 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 rounded-sm",
                        theme.accentBorder
                      )}
                    >
                      <span>{link.label}</span>
                      <span className="inline-flex items-center space-x-1.5 font-mono text-[8px] bg-neutral-900 px-2.5 py-1 border border-neutral-800 rounded-sm text-neutral-500 group-hover:text-white transition-all duration-300">
                        <span>ESTABLISHING LOG</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
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

function SettingTabIcon({ theme }: { theme: string }) {
  if (theme === "hardware") return <Cpu className="w-3.5 h-3.5 text-amber-500 shrink-0" />;
  if (theme === "comms") return <Signal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
  if (theme === "software") return <Database className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
  if (theme === "solution") return <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />;
  return <Settings className="w-3.5 h-3.5 text-neutral-500 shrink-0" />;
}

