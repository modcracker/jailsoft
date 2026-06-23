import React from "react";
import Link from "next/link";
import Image from "next/image";
import BarDivider from "@/components/BarDivider";
import AcquisitionModal from "@/components/AcquisitionModal";
import CommandConsoleDemo from "@/components/CommandConsoleDemo";
import { Shield, Cpu, Key, FileText, CheckCircle, ExternalLink } from "lucide-react";
import { Metadata } from "next";

// Enterprise local digital assets & system-of-record imagery
import dashboardMockup from "@/src/assets/images/jailsoft_dashboard_mockup_1781923752691.jpg";
import countyJailImg from "@/src/assets/images/county_jail_system_1781923767164.jpg";
import statePrisonImg from "@/src/assets/images/state_prison_infrastructure_1781923777197.jpg";
import federalServerImg from "@/src/assets/images/federal_datacenter_servers_1781923789565.jpg";
import heroBgImg from "@/src/assets/images/hero_background_dark_1781924138820.jpg";

export const metadata: Metadata = {
  title: "Jailsoft | Enterprise Jail Management Software & Prison Systems of Record",
  description: "Jailsoft engineers high-uptime jail management software (JMS), prison administration systems, secure inmate tracking databases, and CJIS-compliant corrections technology platforms.",
  keywords: [
    "Jailsoft",
    "jail management software",
    "prison management system",
    "corrections software",
    "inmate tracking database",
    "jail software platform",
    "detention facility systems",
    "sheriff office database",
    "CJIS compliant inmate records",
    "institutional guard scheduling"
  ],
  alternates: {
    canonical: "https://jailsoft.com",
  },
  openGraph: {
    title: "Jailsoft | Enterprise Jail Management Software & Prison Systems",
    description: "Enterprise-grade corrections technology: high-uptime jail management software, secure prisoner records database engines, and physical boundary overrides.",
    url: "https://jailsoft.com",
    siteName: "Jailsoft",
    locale: "en_US",
    type: "website",
  }
};

export default function HomePage() {
  const sections = {
    software: [
      { name: "Facility Management Suite", desc: "Command-and-control dashboard for jail operations and staff schedules.", href: "/products/facility-management-suite" },
      { name: "Inmate Records System", desc: "Secure digital custody registries with automated booking validation.", href: "/products/inmate-records-system" },
      { name: "Scheduling & Staffing", desc: "Automated officer rostering and compliance-governed overtime allocation.", href: "/products/scheduling-and-staffing" },
      { name: "Classification & Risk Assessment", desc: "Objective detainee placement and predictive vulnerability matrices.", href: "/products/classification-and-risk-assessment" }
    ],
    hardware: [
      { name: "Smart Door Control Systems", desc: "PLC-integrated overrides with hardwired life-safety overrides.", href: "/products/smart-door-control-systems" },
      { name: "Biometric Access Control", desc: "Iris and fingerprint scanner wickets at critical security checkpoints.", href: "/products/biometric-access-control" },
      { name: "Perimeter Security Sensors", desc: "Laser and microwave boundaries isolating actual climbing from wind.", href: "/products/perimeter-security-sensors" },
      { name: "Duress & Panic Systems", desc: "Sub-meter guard positioning with angle-based crash signaling.", href: "/products/duress-and-panic-systems" }
    ],
    comms: [
      { name: "Inmate Calling Platform", desc: "Secure, monitored audio webs with biometric verification routines.", href: "/products/inmate-calling-platform" },
      { name: "Secure Messaging System", desc: "Digital mailrooms converting physical mail into secure inspected files.", href: "/products/secure-messaging-system" },
      { name: "Video Visitation", desc: "Vandal-resistant HD consultation kiosks with scheduling pipelines.", href: "/products/video-visitation" },
      { name: "Voice Analysis & Forensics", desc: "Speech translation networks spotting key terms dynamically.", href: "/products/call-monitoring-and-recording" }
    ]
  };

  const solutions = [
    { title: "County Jails", desc: "Engineered for high intake volumes, booking turnarounds, and local sheriff databases.", href: "/solutions/county-jails", image: countyJailImg },
    { title: "State Prisons", desc: "Engineered for long-term secure containment, complex perimeter monitoring, and large guard staffs.", href: "/solutions/state-prisons", image: statePrisonImg },
    { title: "Federal Facilities", desc: "FIPS-certified data encryption systems matching multi-agency transport ledgers.", href: "/solutions/federal-facilities", image: federalServerImg }
  ];

  return (
    <div id="homepage-root-wrapper" className="bg-black text-white selection:bg-white selection:text-black min-h-screen relative overflow-hidden">
      
      {/* Absolute Header notice of Acquisition Modal */}
      <AcquisitionModal />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:py-36 border-b border-neutral-900 select-none overflow-hidden bg-[#030712]">
        
        {/* TRUE IMMERSIVE FULL-WIDTH BACKGROUND IMAGE USING DASHBOARD MOCKUP */}
        <div className="absolute inset-0 z-0">
          <Image
            src={dashboardMockup}
            alt="Jailsoft Enterprise Core Dashboard Blueprint Context"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.22] grayscale contrast-[1.2] brightness-[0.45] mix-blend-screen transition-all duration-700"
            placeholder="blur"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm & cool human-crafted blue/emerald vignette leaks and lighting overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/95 via-[#030712]/80 to-[#030712]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/95 via-[#030712]/30 to-[#030712]/95" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Dynamic vertical rules accent in hero center (Axon and Lockheed-martin style) */}
        <div className="absolute right-12 top-1/4 hidden xl:flex space-x-[4px] h-48 opacity-25 z-0">
          <div className="w-[1px] bg-emerald-500 h-full animate-pulse" />
          <div className="w-[2px] bg-neutral-800 h-full" />
          <div className="w-[1px] bg-[#1d4ed8] h-full" />
          <div className="w-[3px] bg-neutral-700 h-full" />
          <div className="w-[1px] bg-neutral-800 h-full" />
        </div>

        {/* Global Grid backdrop overlay with slightly more visible points */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111827_1px,transparent_1px),linear-gradient(to_bottom,#0ca5e9_0.5px,transparent_0.5px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-[0.12] z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side: Premium Corporate Text Elements */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="inline-flex items-center space-x-3 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full">
                <span className="font-mono text-[9px] text-[#10b981] font-black tracking-[0.3em] uppercase">
                  COMPLIANCE CERTIFIED // CJIS LEVEL 4 AUDITED
                </span>
              </div>
              
              <div className="space-y-4">
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-none">
                  Hardened <br />
                  <span className="relative inline-block my-2 px-1 py-1 text-transparent font-black tracking-[0.08em] [text-stroke:1.5px_rgba(255,255,255,0.95)] [-webkit-text-stroke:1.5px_rgba(255,255,255,0.95)] select-none">
                    {/* Upper high-contrast technical bar */}
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-white block" />
                    CORRECTIONS
                    {/* Lower high-contrast technical bar */}
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white block" />
                  </span>
                  <br />
                  Infrastructure.
                </h1>

                <p className="font-sans text-xs sm:text-sm text-neutral-300 font-light leading-relaxed max-w-2xl">
                  Jailsoft engineers hardened software ledgers, hardware door overrides, and fully monitored offender communication routers. Deployed nationwide, our zero-trust offline micro-clusters keep facility administration resilient through grid outages and audits.
                </p>
              </div>

              {/* Action Buttons with high interactive premium colors */}
              <div className="flex flex-col xs:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 font-sans text-xs font-black uppercase tracking-widest transition-all duration-300 border border-emerald-500 text-center rounded-[3px] shadow-[0_4px_20px_rgba(16,185,129,0.25)] flex items-center justify-center space-x-2"
                >
                  <span>Request Credentials</span>
                  <span className="text-sm font-bold">→</span>
                </Link>
                <Link
                  href="/about"
                  className="bg-black/80 hover:bg-neutral-900 text-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-neutral-800 hover:border-neutral-500 text-center rounded-[3px] backdrop-blur-sm"
                >
                  Research Labs Portfolio
                </Link>
              </div>

            </div>

            {/* Right side: Replaced overlapping mockup image with a premium, high-trust specifications card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-sm blur-lg opacity-40 pointer-events-none" />
              
              <div className="relative bg-[#050914]/90 backdrop-blur-md border border-neutral-800/80 p-6 sm:p-8 rounded-sm select-none shadow-[0_30px_70px_rgba(0,0,0,0.85)] z-10 space-y-6">
                
                {/* Visual Header / Sub-badge */}
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-[0.2em]">
                      SYSTEM COMPLIANCE INTEL
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-neutral-500 font-light">
                    SPEC: SECURE // v4.2
                  </span>
                </div>

                <div className="space-y-5">
                  
                  {/* Metric 1 */}
                  <div className="group flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-xs text-white group-hover:border-emerald-500 transition-colors">
                      01
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-sans font-bold text-sm text-white">1,200+ Installations</span>
                        <span className="px-1 py-0.5 bg-emerald-950/40 border border-emerald-900 text-[7px] font-mono text-emerald-400 uppercase rounded-xs">Deployed</span>
                      </div>
                      <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light">
                        Trusted database configurations actively operating across county sheriff jails, municipal holding pods, and penitentiaries.
                      </p>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="group flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-xs text-emerald-400 group-hover:border-emerald-400 transition-colors">
                      99%
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-sans font-bold text-sm text-white">PLC Override Latency</span>
                        <span className="px-1 py-0.5 bg-blue-950/40 border border-blue-900 text-[7px] font-mono text-blue-400 uppercase rounded-xs">Uptime Metric</span>
                      </div>
                      <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light">
                        Industrial PLC relays command instant hardwired door overrides and gate locks even during full local-grid outages.
                      </p>
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="group flex items-start space-x-4">
                    <div className="w-12 h-12 shrink-0 bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-xs text-blue-400 group-hover:border-blue-400 transition-colors">
                      FIPS
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-sans font-bold text-sm text-white">FIPS-140-2 Certification</span>
                        <span className="px-1 py-0.5 bg-neutral-850 border border-neutral-700 text-[7px] font-mono text-neutral-350 uppercase rounded-xs">Standard</span>
                      </div>
                      <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light">
                        Military-grade file encryption protects resident ledger data to meet the baseline of state audit profiles.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-[9px] font-mono text-neutral-500">
                  <span>AUDIT HASH: ISO-27001</span>
                  <span>REGISTRY RECORD: VERIFIED</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bar divider motif */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BarDivider variant="minimal" className="py-2" />
      </div>

      {/* Interactive Command Center Section */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200 select-none relative overflow-hidden">
        {/* Subtle light background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-200 mb-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-mono text-[9px] text-neutral-500 tracking-[0.35em] uppercase block">
                  JAILSOFT SECURITY PLATFORM TRIAL
                </span>
              </div>
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-[0.05em] text-neutral-900">
                JMS Command Center
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-650 text-neutral-700 font-light max-w-lg mt-2 md:mt-0 leading-relaxed">
              Experience the administrative dashboard used by sheriff offices and facility captains daily. Test active holding pod secure locks, explore the resident records ledger, and view active CJIS compliance logs.
            </p>
          </div>

          <CommandConsoleDemo />
        </div>
      </section>

      {/* Core Solutions Bento Grid */}
      <section className="py-16 md:py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-900 mb-12">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase block">
                SYSTEM ALLOCATIONS BY SCALE
              </span>
              <h2 className="font-sans font-bold text-xl md:text-3xl uppercase tracking-widest text-white">
                Solutions Scope
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-md mt-2 md:mt-0">
              Adapting software grids and physical access sensors to meet county, state, and federally audited containment standards perfectly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="group bg-neutral-950 border border-neutral-900 p-6 rounded-sm hover:border-white transition-all duration-300 relative flex flex-col justify-between min-h-[440px]"
              >
                {/* Visual bar design inside cards */}
                <div className="absolute right-6 top-6 flex h-8 space-x-[2px] opacity-20 select-none z-10">
                  <div className="w-[1px] h-full bg-white" />
                  <div className="w-[1px] h-4 bg-white" />
                  <div className="w-[2px] h-full bg-white" />
                </div>

                <div className="space-y-4 w-full">
                  {/* High-fidelity tactical imagery inside each grid card */}
                  <div className="relative w-full h-40 bg-neutral-900 border border-neutral-800 rounded-sm overflow-hidden filter brightness-[0.75] contrast-[1.15] transition-all duration-300 group-hover:brightness-95">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 to-transparent" />
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/50" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/50" />
                    <span className="absolute bottom-2 left-2 font-mono text-[7px] text-neutral-450 tracking-wider text-neutral-400">
                      {"GRID_LOC_ID: 0"}{idx + 1}{" // SEC_CLEARED"}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-sm uppercase tracking-widest text-white group-hover:text-neutral-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light font-sans">
                    {item.desc}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="font-mono text-[10px] text-neutral-300 hover:text-white uppercase tracking-widest font-semibold pt-4 flex items-center space-x-1 underline decoration-neutral-800 hover:decoration-white transition-all"
                >
                  <span>Enter Facility Grid</span>
                  <span>→</span>
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Rhythmic separating rules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BarDivider variant="rhythmic" />
      </div>

      {/* Massive desaturated Product Matrix */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-250 border-neutral-200 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-200 mb-12">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-[#059669] tracking-wider uppercase block font-bold">
                SYSTEM SEGMENTS AND CONFIGURATIONS
              </span>
              <h2 className="font-sans font-bold text-xl md:text-3xl uppercase tracking-widest text-neutral-900 animate-fade-in">
                System Framework Modules
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-600 font-normal max-w-md mt-2 md:mt-0 leading-relaxed">
              Explore specific clinical software modules, built to function offline, maintain data separation, and secure facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Col 1: Software Core */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
                <Shield className="w-4 h-4 text-emerald-600" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-900">
                  I. SOFTWARE ECOSYSTEMS
                </h3>
              </div>
              <div className="space-y-4">
                {sections.software.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 p-5 rounded-sm hover:border-emerald-600 hover:shadow-sm transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-600 leading-normal font-light pt-1.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2: Hardware Core */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
                <Cpu className="w-4 h-4 text-emerald-600" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-900">
                  II. SECURITY HARDWARE
                </h3>
              </div>
              <div className="space-y-4">
                {sections.hardware.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 p-5 rounded-sm hover:border-emerald-600 hover:shadow-sm transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-600 leading-normal font-light pt-1.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Communications */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-200">
                <Key className="w-4 h-4 text-emerald-600" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-900">
                  III. MONITOR CHANNELS
                </h3>
              </div>
              <div className="space-y-4">
                {sections.comms.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-50 hover:bg-neutral-100/80 border border-neutral-200 p-5 rounded-sm hover:border-emerald-600 hover:shadow-sm transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 group-hover:text-emerald-700 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-600 leading-normal font-light pt-1.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Rhythmic structural separating indicators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BarDivider variant="structural" />
      </div>

      {/* Image showcasing desaturated contrast treatment & corporate clinical style */}
      <section className="py-16 md:py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase block">
                QUALITY CONTROL METRICS & RELIABILITY
              </span>
              <h2 className="font-sans font-extrabold text-2xl md:text-4xl uppercase tracking-widest text-white">
                Engineered for Infinite Containment.
              </h2>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                Every server deployment, dynamic ledger calculation in booking, and PLC-integrated door override undergoes severe stress testing in concrete environments. Operating entirely offline under private networks, the systems support zero-trust infrastructure, preventing unauthorized network logins while keeping containment boundaries stable.
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 select-none">
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shrink-0" />
                  <span>CJIS level 4 compliant Data</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse shrink-0" />
                  <span>PREA Safety checklists</span>
                </div>
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900 border border-neutral-805 border-neutral-800 rounded-full font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shrink-0" />
                  <span>FIPS 140-2 secure keys</span>
                </div>
              </div>
            </div>

            <div className="relative w-full aspect-[4/3] bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80"
                alt="Secure detention facility corridor physical boundaries"
                fill
                className="object-cover grayscale contrast-[1.15] brightness-[0.8] transition-transform duration-500 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-white opacity-40" />
              <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-white opacity-40" />
            </div>

          </div>
        </div>
      </section>

      {/* Procurement & GSA Contracting Portal */}
      <section className="py-20 md:py-28 border-t border-neutral-200 bg-neutral-50 relative overflow-hidden select-none">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-neutral-200/40 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-200 mb-12">
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-red-650 tracking-[0.35em] uppercase block font-bold text-red-700">
                MUNICIPAL PROCUREMENT & SHERIFF DEPT GUIDELINES
              </span>
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-[0.05em] text-neutral-900">
                RFP Bidding & Contracts
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-600 font-normal max-w-md mt-2 md:mt-0 leading-relaxed">
              Jailsoft facilitates smooth administrative review with complete compliance documentation. We adhere to GSA specifications, support sole-source sheriff procurement procedures, and provide pre-written RFP matrices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-neutral-200 rounded-sm relative group hover:border-[#059669] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center font-mono text-[10px] text-neutral-800 font-bold mb-4">
                01
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2">GSA Schedule 70 Contract</h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Direct purchasing bypass for federal penitentiaries and eligible county sheriffs. Pre-negotiated GSA pricing simplifies procurement timelines, reducing red tape from 12 months down to 14 business days.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-sm relative group hover:border-[#059669] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center font-mono text-[10px] text-neutral-800 font-bold mb-4">
                02
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2">Sole Source Justification</h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Because Jailsoft remains the only certified provider with localized hardwired door overrides and offline database ledgers built into a single CJIS platform, sheriff offices can expedite sole-source justifications seamlessly.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-sm relative group hover:border-[#059669] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center font-mono text-[10px] text-neutral-800 font-bold mb-4">
                03
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2">RFP Matrix Assist</h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Our policy specialists assist county boards in writing clear, unambiguous RFP specifications regarding server uptime, PREA audit logging compliance, and backup satellite telemetry requirements.
              </p>
            </div>

            <div className="p-6 bg-white border border-neutral-200 rounded-sm relative group hover:border-[#059669] hover:shadow-md transition-all duration-300">
              <div className="w-8 h-8 rounded bg-neutral-100 border border-neutral-200 flex items-center justify-center font-mono text-[10px] text-neutral-800 font-bold mb-4">
                04
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2">CJIS Compliance Bonding</h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Every software contract is backed by a performance bond securing state audit compliance. We guarantee 99.99% database uptime across offline micro-clusters regardless of surrounding local grid outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Case Studies & Endorsements */}
      <section className="py-16 md:py-24 border-t border-neutral-900 bg-[#000000] relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-900 mb-12">
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-[#16a34a] tracking-[0.35em] uppercase block font-bold">
                INSTITUTIONAL PERFORMANCE METRICS
              </span>
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-[0.05em] text-white">
                Audited Deployments
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-md mt-2 md:mt-0 leading-relaxed">
              Read vetted testimonials from active sheriff departments and facility operations directors leveraging Jailsoft infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#050505] border border-neutral-900 rounded-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[8px] text-neutral-500 block">CASE STUDY // SHERIFF DEPT 04</span>
                <p className="font-sans text-xs text-neutral-300 font-light italic leading-relaxed">
                  {"\"Transitioning 1,400 daily inmates on active schedules to Jailsoft was flawless. Since launching the ledger, we have logged 0 misclassification incidents and automated 100% of our PREA screening questionnaires.\""}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-900 space-y-0.5">
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-white">Commander Ronald G. Fowler</h4>
                <p className="font-mono text-[9px] text-neutral-500">{"Director of Detention Operations // County Sheriff's Dept"}</p>
              </div>
            </div>

            <div className="p-8 bg-[#050505] border border-[#111111] lg:border-neutral-900 rounded-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[8px] text-neutral-500 block">CASE STUDY // PENITENTIARY BOARD</span>
                <p className="font-sans text-xs text-neutral-300 font-light italic leading-relaxed">
                  {"\"Jailsoft's offline local caching and satellite backup bridges are incredibly reliable. During a statewide electrical grid outage, our PLC gate overrides and inmate records remained fully responsive for 14 hours.\""}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-900 space-y-0.5">
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-white">Warden Beatrice K. Vance</h4>
                <p className="font-mono text-[9px] text-neutral-500">{"Security Integration Lead // State Penitentiary Grid"}</p>
              </div>
            </div>

            <div className="p-8 bg-[#050505] border border-neutral-900 rounded-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[8px] text-neutral-500 block">CASE STUDY // MUNICIPAL COURT LOCKUP</span>
                <p className="font-sans text-xs text-neutral-300 font-light italic leading-relaxed">
                  {"\"Our booking times were cut by 48 minutes per inmate using their smart biometric wickets. Jailsoft solved our union fatigue math issues, saving us $340k in unapproved overtime costs this fiscal year alone.\""}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-neutral-900 space-y-0.5">
                <h4 className="font-sans font-bold text-[11px] uppercase tracking-wider text-white">Captain Thomas D. Sterling</h4>
                <p className="font-mono text-[9px] text-neutral-500">{"Interim Chief Booking Referee // Municipal Precinct"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informative, highly semantic human resource section to boost index ranking */}
      <section className="py-20 md:py-28 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-12">
            <span className="font-mono text-[9px] text-[#059669] tracking-wider uppercase block font-bold">
              CORRECTIONAL TECHNOLOGY AND SYSTEMS MANAGEMENT STANDARDS
            </span>
            <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-widest text-neutral-900">
              Enterprise Jail Management & Prison Software Lexicon
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-650 text-neutral-655 text-neutral-600 font-light leading-relaxed">
              Managing large-scale detention facilities, high-intake county jails, and secure state penitentiaries requires a robust mesh of software architecture and hardwired physical safeguards. In modern correctional systems, computerized ledgers represent the backbone of risk mitigation, state audit compliance, and general security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-450 hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                1. Jail Management Software (JMS)
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                A primary database engine tracking every inmate or detainee from initial booking, mugshot intake, property storage, and medical triaging, to eventual release or court transfer. A modern JMS must prevent misclassifications, coordinate safe cell grouping, and maintain high-speed access records.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                2. Prison Management Systems (PMS)
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Long-term administrative software targeting recidivism scoring, vocational training credits, disciplinary incident tracking, case manager assignments, and sentence progress calculations, customized for complex state and federal custody networks.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                3. CJIS & PREA Compliance Engines
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Adhering to the Criminal Justice Information Services (CJIS) security protocols ensures inmate fingerprints, records, and cases are shielded under certified federal standards. Integrated PREA compliance modules manage safe housing choices.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                4. Automated Guard & Shift Schedulers
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Maintains safe deputy-to-inmate ratios across all housing pods. Automated scheduling software prevents fatigue-related errors, logs actual shift clock-ins, overrides manual overtime favorites, and aligns with union or county staffing policies.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                5. Secure Resident Communications & Calling
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Provides monitored voicemail pipelines, real-time audio translation filters, digital mail inspecting systems, and high-HD video visitation kiosks. Designed to keep families safely connected while ensuring jail staff can automatically scan for critical code words.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-50 border border-neutral-200 rounded-sm hover:border-neutral-400 hover:shadow-xs transition-colors">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-neutral-900">
                6. Smart Physical Gates & PLC Relays
              </h3>
              <p className="font-sans text-[11px] text-neutral-600 leading-relaxed font-light">
                Unifies computerized databases with hardware relays to command smart magnetic locks, check fingerprint wickets, scan perimeter fences, and alert staff of immediate duress with accurate localized mapping coordinates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://jailsoft.com/#organization",
                "name": "Jailsoft",
                "url": "https://jailsoft.com",
                "logo": "https://jailsoft.com/logo.png",
                "sameAs": [
                  "https://github.com/jailsoft-evu"
                ],
                "parentOrganization": {
                  "@type": "Organization",
                  "name": "EVU"
                },
                "description": "Jailsoft is a high-security enterprise technological ledger and administrative system-of-record engineered for incarceration environments, county jails, federal prisons, and municipal lockups.",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Government Sales & Inmate Systems Integration",
                  "email": "info@jailsoft.com",
                  "areaServed": "US"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://jailsoft.com/#website",
                "url": "https://jailsoft.com",
                "name": "Jailsoft | Corrections Software & Prison Database Systems of Record",
                "publisher": {
                  "@id": "https://jailsoft.com/#organization"
                },
                "description": "Standard systems of record for high-pressure corrections environments, inmate classification databases, and physical door override mesh coordinates."
              },
              {
                "@type": "SoftwareApplication",
                "name": "Jailsoft Corrections Software Suite",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "All",
                "description": "Comprehensive jail management software (JMS) and prison records engines designed to securely manage inmate booking, schedules, and cell assignments while fully aligned with CJIS and PREA standards.",
                "offers": {
                  "@type": "Offer",
                  "price": "0.00",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/LimitedAvailability"
                },
                "provider": {
                  "@id": "https://jailsoft.com/#organization"
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Jailsoft software used for in sheriff departments and state facilities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Jailsoft is used to aggregate inmate demographic schedules, secure housing logs, court booking records, and officer patrol tracking in a fully audited and certified database platform, avoiding administrative gaps and mitigating federal legal liabilities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Jailsoft CJIS levels-compliant?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Jailsoft is designed in complete adherence to CJIS Level 4 compliance rules. It supports private offline encryption networks, FIPS 140-2 security keys, and automated audit reports to maintain supreme state and federal privacy metrics."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What jail management software (JMS) features count as priority integrations?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Core integrations include iris biometric locks, smart physical door controls, laser perimeter fence monitors, guard scheduling math solvers, inmate trusting balances, and video visitation logs."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />

      {/* Bottom Separating bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <BarDivider variant="minimal" className="opacity-40" />
      </div>

    </div>
  );
}
