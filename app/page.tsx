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
      <section className="relative pt-20 pb-16 md:py-32 border-b border-neutral-900 select-none overflow-hidden">
        {/* Immersive high-security correctional monitoring background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBgImg}
            alt="Detention Monitoring Security Command Desk background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 grayscale contrast-[1.25] brightness-[0.35]"
            placeholder="blur"
            referrerPolicy="no-referrer"
          />
          {/* Real-time deep radial vignette overlay keeping layout fully accessible and modern */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Subtle grid line backdrop backing */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 z-0" />
        
        {/* Dynamic vertical rules accent in hero center (Palantir design) */}
        <div className="absolute right-12 top-1/4 hidden xl:flex space-x-[3px] h-48 opacity-15 z-0">
          <div className="w-[1px] bg-white h-full" />
          <div className="w-[2px] bg-neutral-400 h-full" />
          <div className="w-[1px] bg-white h-full" />
          <div className="w-[4px] bg-neutral-600 h-full" />
          <div className="w-[1px] bg-white h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Tactical Frame Themed Container */}
          <div className="border border-neutral-800 bg-neutral-950/70 p-6 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-md rounded-sm">
            {/* Industrial corner marks */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/40" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/40" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/40" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/40" />
            
            {/* Ambient secure status readout */}
            <div className="absolute top-3 right-4 font-mono text-[8px] text-neutral-500 select-none tracking-[0.25em] hidden sm:flex items-center space-x-2">
              <span className="w-1 h-1 bg-yellow-500 rounded-full animate-ping" />
              <span>SYS_CLEARANCE_SECURE // NODE:42.109.90.1</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-[9px] text-neutral-450 tracking-[0.35em] uppercase block text-neutral-500">
                  SOVEREIGN TECHNOLOGY SYSTEM-OF-RECORD
                </span>
                
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
                  Sovereign <br className="hidden sm:inline" />
                  Corrections <br className="hidden sm:inline" />
                  Technology Platforms.
                </h1>

                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-2xl">
                  Jailsoft engineers high-uptime software ledgers, hardware overrides, and monitored communications systems for high-pressure corrections environments. Designed to prevent security gaps, reduce operational friction, and maintain complete compliance rules.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="bg-white hover:bg-neutral-200 text-black px-6 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-150 border border-white text-center w-full xs:w-auto"
                  >
                    Request Credentials →
                  </Link>
                  <Link
                    href="/about"
                    className="bg-black hover:bg-neutral-950 text-white px-6 py-4 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-150 border border-neutral-800 hover:border-white text-center w-full xs:w-auto"
                  >
                    About Our Research Labs
                  </Link>
                </div>
              </div>

              {/* Majestic High-Security Software Dashboard Mockup */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/3] bg-neutral-950 border border-neutral-800 rounded-sm overflow-hidden group">
                  {/* Tactical overlay frames */}
                  <div className="absolute top-3 left-3 z-10 font-mono text-[7px] text-neutral-400 uppercase tracking-widest bg-black/80 px-2 py-1 border border-neutral-800">
                    ACTIVE_SYS_FEED // CONSOLE.VIEW_01
                  </div>
                  <Image
                    src={dashboardMockup}
                    alt="Jailsoft Enterprise Core Dashboard Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover grayscale contrast-[1.1] brightness-[0.85] transition-all duration-300 group-hover:scale-[1.01] group-hover:brightness-95 group-hover:contrast-[1.15]"
                    placeholder="blur"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 right-3 z-10 font-mono text-[7px] text-white/50 tracking-wider">
                    JMS_SYS: ACTIVE
                  </div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neutral-500/50" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neutral-500/50" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neutral-500/50" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neutral-500/50" />
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
      <section className="py-16 bg-neutral-950/40 border-b border-neutral-900 select-none relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neutral-900/10 rounded-full blur-[120px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-900 mb-12">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
                <span className="font-mono text-[9px] text-neutral-500 tracking-[0.35em] uppercase block">
                  JAILSOFT SECURITY PLATFORM TRIAL
                </span>
              </div>
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-[0.05em] text-white">
                Sovereign JMS Control Center
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-lg mt-2 md:mt-0 leading-relaxed">
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
      <section className="py-16 md:py-24 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-900 mb-12">
            <div className="space-y-2">
              <span className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase block">
                SYSTEM SEGMENTS AND CONFIGURATIONS
              </span>
              <h2 className="font-sans font-bold text-xl md:text-3xl uppercase tracking-widest text-white animate-fade-in">
                System Framework Modules
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-md mt-2 md:mt-0">
              Explore specific clinical software modules, built to function offline, maintain data separation, and secure facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Col 1: Software Core */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-900">
                <Shield className="w-4 h-4 text-white" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-white">
                  I. SOFTWARE ECOSYSTEMS
                </h3>
              </div>
              <div className="space-y-4">
                {sections.software.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-950 hover:bg-neutral-900 border border-neutral-905 border-neutral-900 p-5 rounded-sm hover:border-white transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white group-hover:text-neutral-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light pt-1.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2: Hardware Core */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-900">
                <Cpu className="w-4 h-4 text-white" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-white">
                  II. SECURITY HARDWARE
                </h3>
              </div>
              <div className="space-y-4">
                {sections.hardware.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-950 hover:bg-neutral-900 border border-neutral-905 border-neutral-900 p-5 rounded-sm hover:border-white transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white group-hover:text-neutral-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light pt-1.5">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Communications */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 pb-3 border-b border-neutral-900">
                <Key className="w-4 h-4 text-white" />
                <h3 className="font-mono text-[11px] font-bold tracking-widest uppercase text-white">
                  III. MONITOR CHANNELS
                </h3>
              </div>
              <div className="space-y-4">
                {sections.comms.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block group bg-neutral-950 hover:bg-neutral-900 border border-neutral-905 border-neutral-900 p-5 rounded-sm hover:border-white transition-all duration-200"
                  >
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-white group-hover:text-neutral-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light pt-1.5">
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
              
              <div className="flex gap-x-6 gap-y-2 flex-wrap pt-4 font-mono text-[10px] text-neutral-500 uppercase">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                  <span>CJIS level 4 compliant Data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
                  <span>PREA Safety checklists</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-white" />
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

      {/* Sovereign Procurement & GSA Contracting Portal */}
      <section className="py-16 md:py-24 border-t border-neutral-900 bg-[#030303] relative overflow-hidden select-none">
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-neutral-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-8 border-b border-neutral-900 mb-12">
            <div className="space-y-3">
              <span className="font-mono text-[9px] text-[#dc2626] tracking-[0.35em] uppercase block font-bold">
                MUNICIPAL PROCUREMENT & SHERIFF DEPT GUIDELINES
              </span>
              <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-[0.05em] text-white">
                RFP Bidding & Contracts
              </h2>
            </div>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-md mt-2 md:mt-0 leading-relaxed">
              Jailsoft facilitates smooth administrative review with complete compliance documentation. We adhere to GSA specifications, support sole-source sheriff procurement procedures, and provide pre-written RFP matrices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-sm relative group hover:border-[#16a34a]/40 transition-colors">
              <div className="w-8 h-8 rounded bg-[#050505] border border-neutral-800 flex items-center justify-center font-mono text-[10px] text-white font-bold mb-4">
                01
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white mb-2">GSA Schedule 70 Contract</h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Direct purchasing bypass for federal penitentiaries and eligible county sheriffs. Pre-negotiated GSA pricing simplifies procurement timelines, reducing red tape from 12 months down to 14 business days.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-sm relative group hover:border-[#16a34a]/40 transition-colors">
              <div className="w-8 h-8 rounded bg-[#050505] border border-neutral-800 flex items-center justify-center font-mono text-[10px] text-white font-bold mb-4">
                02
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white mb-2">Sole Source Justification</h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Because Jailsoft remains the only certified provider with localized hardwired door overrides and offline database ledgers built into a single CJIS platform, sheriff offices can expedite sole-source justifications seamlessly.
              </p>
            </div>

            <div className="p-6 bg-[#030303] border border-neutral-900 rounded-sm relative group hover:border-white transition-colors">
              <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-[10px] text-white font-bold mb-4">
                03
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white mb-2">RFP Matrix Assist</h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Our policy specialists assist county boards in writing clear, unambiguous RFP specifications regarding server uptime, PREA audit logging compliance, and backup satellite telemetry requirements.
              </p>
            </div>

            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-sm relative group hover:border-[#16a34a]/40 transition-colors">
              <div className="w-8 h-8 rounded bg-[#050505] border border-neutral-800 flex items-center justify-center font-mono text-[10px] text-white font-bold mb-4">
                04
              </div>
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white mb-2">CJIS Compliance Bonding</h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
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
      <section className="py-16 md:py-24 border-t border-neutral-900 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 mb-12">
            <span className="font-mono text-[9px] text-neutral-500 tracking-wider uppercase block">
              CORRECTIONAL TECHNOLOGY AND SYSTEMS MANAGEMENT STANDARDS
            </span>
            <h2 className="font-display font-black text-2xl md:text-4xl uppercase tracking-widest text-white">
              Sovereign Jail Management & Prison Software Lexicon
            </h2>
            <p className="font-sans text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
              Managing large-scale detention facilities, high-intake county jails, and secure state penitentiaries requires a robust mesh of software architecture and hardwired physical safeguards. In modern correctional systems, computerized ledgers represent the backbone of risk mitigation, state audit compliance, and general security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                1. Jail Management Software (JMS)
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                A primary database engine tracking every inmate or detainee from initial booking, mugshot intake, property storage, and medical triaging, to eventual release or court transfer. A modern JMS must prevent misclassifications, coordinate safe cell grouping, and maintain high-speed access records.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                2. Prison Management Systems (PMS)
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Long-term administrative software targeting recidivism scoring, vocational training credits, disciplinary incident tracking, case manager assignments, and sentence progress calculations, customized for complex state and federal custody networks.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                3. CJIS & PREA Compliance Engines
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Adhering to the Criminal Justice Information Services (CJIS) security protocols ensures inmate fingerprints, records, and cases are shielded under certified federal standards. Integrated PREA compliance modules manage safe housing choices.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                4. Automated Guard & Shift Schedulers
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Maintains safe deputy-to-inmate ratios across all housing pods. Automated scheduling software prevents fatigue-related errors, logs actual shift clock-ins, overrides manual overtime favorites, and aligns with union or county staffing policies.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                5. Secure Resident Communications & Calling
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
                Provides monitored voicemail pipelines, real-time audio translation filters, digital mail inspecting systems, and high-HD video visitation kiosks. Designed to keep families safely connected while ensuring jail staff can automatically scan for critical code words.
              </p>
            </div>

            <div className="space-y-3 p-6 bg-neutral-950 border border-neutral-900 rounded-sm">
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                6. Smart Physical Gates & PLC Relays
              </h3>
              <p className="font-sans text-[11px] text-neutral-400 leading-relaxed font-light">
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
                "description": "Jailsoft is a high-security sovereign technological ledger and administrative system-of-record engineered for incarceration environments, county jails, federal prisons, and municipal lockups.",
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
