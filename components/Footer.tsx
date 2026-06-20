"use client";

import React from "react";
import Link from "next/link";
import BarDivider from "./BarDivider";
import Image from "next/image";

interface FooterLink {
  name: string;
  href: string;
  badge?: string;
  badgeColor?: string;
}

export default function Footer() {
  const links: Record<string, FooterLink[]> = {
    products: [
      { name: "View Technology Catalog (17)", href: "/products", badge: "CORE", badgeColor: "bg-emerald-950/50 text-emerald-400 border-emerald-900/30" },
      { name: "Facility Management Suite", href: "/products/facility-management-suite" },
      { name: "Inmate Records System", href: "/products/inmate-records-system" },
      { name: "Smart Door Controls", href: "/products/smart-door-control-systems" },
      { name: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { name: "Secure Messaging", href: "/products/secure-messaging-system" }
    ],
    solutions: [
      { name: "View All Solutions (5)", href: "/solutions", badge: "GSA APPROVED", badgeColor: "bg-amber-950/50 text-amber-400 border-amber-900/30" },
      { name: "County Jails", href: "/solutions/county-jails" },
      { name: "State Prisons", href: "/solutions/state-prisons" },
      { name: "Federal Facilities", href: "/solutions/federal-facilities" },
      { name: "Juvenile Detention", href: "/solutions/juvenile-detention" }
    ],
    resources: [
      { name: "View Knowledge Hub (6)", href: "/resources", badge: "PUBLIC", badgeColor: "bg-neutral-900 text-neutral-300 border-neutral-800" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Technical Whitepapers", href: "/resources/whitepapers" },
      { name: "Compliance & Standards", href: "/resources/compliance-and-standards" },
      { name: "FAQ Database", href: "/resources/faq" }
    ],
    firm: [
      { name: "Corporate Identity", href: "/about" },
      { name: "System Security", href: "/security", badge: "CJIS L4", badgeColor: "bg-red-950/50 text-red-400 border-red-900/30" },
      { name: "Integrations Interface", href: "/integrations" },
      { name: "Partner Network", href: "/partners" },
      { name: "Careers Unit", href: "/careers" },
      { name: "Press Releases", href: "/press" }
    ]
  };

  return (
    <footer className="bg-black text-white border-t border-neutral-950 pt-16 pb-10 select-none font-sans relative overflow-hidden">
      
      {/* Decorative High-Performance UX Color Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-600 via-neutral-850 to-neutral-950" />
      
      {/* Subtle ambient colored light leaks inside the dark canvas */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-950/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-neutral-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Active Telemetry Status Bar with Live Color Nodes */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-neutral-900 text-[10px] font-mono text-neutral-500">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1.5 bg-neutral-950 border border-neutral-900 px-2.5 py-1 rounded-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[#10b981] font-bold">SECURE NODE: L4_ACTIVE</span>
            </span>
            <span className="hidden leading-none sm:inline text-neutral-850">|</span>
            <span className="hidden sm:inline">CJIS DATACENTERS // 04_REGIONAL</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="flex items-center space-x-1">
              <span className="w-1 h-1 rounded-full bg-emerald-400" />
              <span>GSA Schedule 70 Contracted</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="w-1 h-1 rounded-full bg-[#3b82f6]" />
              <span>FIPS 140-2 Encrypted</span>
            </span>
          </div>
        </div>

        {/* Main Grid content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Col 1: Products */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] font-extrabold text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-2 flex items-center space-x-1.5">
              <span className="w-1 h-2 bg-emerald-500 rounded-xs" />
              <span>Software & Assets</span>
            </h4>
            <ul className="space-y-3">
              {links.products.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-y-1">
                  <Link
                    href={item.href}
                    className="text-[11px] text-[#999999] hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                  {item.badge && (
                    <span className={`inline-block font-mono text-[7px] font-bold px-1 py-0.5 rounded-sm border uppercase max-w-fit leading-none ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] font-extrabold text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-2 flex items-center space-x-1.5">
              <span className="w-1 h-2 bg-amber-500 rounded-xs" />
              <span>Solutions by Scope</span>
            </h4>
            <ul className="space-y-3">
              {links.solutions.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-y-1">
                  <Link
                    href={item.href}
                    className="text-[11px] text-[#999999] hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                  {item.badge && (
                    <span className={`inline-block font-mono text-[7px] font-bold px-1 py-0.5 rounded-sm border uppercase max-w-fit leading-none ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] font-extrabold text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-2 flex items-center space-x-1.5">
              <span className="w-1 h-2 bg-blue-500 rounded-xs" />
              <span>Research & Help</span>
            </h4>
            <ul className="space-y-3">
              {links.resources.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-y-1">
                  <Link
                    href={item.href}
                    className="text-[11px] text-[#999999] hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                  {item.badge && (
                    <span className={`inline-block font-mono text-[7px] font-bold px-1 py-0.5 rounded-sm border uppercase max-w-fit leading-none ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate / Trust */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] font-extrabold text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-2 flex items-center space-x-1.5">
              <span className="w-1 h-2 bg-red-500 rounded-xs" />
              <span>Jailsoft Organization</span>
            </h4>
            <ul className="space-y-3">
              {links.firm.map((item) => (
                <li key={item.name} className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 gap-y-1">
                  <Link
                    href={item.href}
                    className="text-[11px] text-[#999999] hover:text-white transition-colors block"
                  >
                    {item.name}
                  </Link>
                  {item.badge && (
                    <span className={`inline-block font-mono text-[7px] font-bold px-1 py-0.5 rounded-sm border uppercase max-w-fit leading-none ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Vertical Bar Motif Sep */}
        <BarDivider variant="minimal" className="mt-12 opacity-30" />

        {/* Legal & Attribution line */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 text-[10px] text-neutral-500 font-mono pt-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>© 2026 Jailsoft. All rights reserved.</span>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              
              {/* Refined Premium EVU Brand Container Card */}
              <a
                href="https://evu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-neutral-950 border border-neutral-900 hover:border-emerald-500/40 px-2.5 py-1 rounded-[3px] transition-all duration-300 group"
              >
                <div className="relative flex-shrink-0">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4E0BAQG8HakZjfsXQA/company-logo_200_200/B4EZVJCAEKGgAI-/0/1740687016580/evuresidential_logo?e=2147483647&v=beta&t=AV66_LB6z7CCTai58p5fuaKyqeqSDO-PRQJRx_QyExE"
                    alt="EVU Logo"
                    width={13}
                    height={13}
                    className="object-contain rounded-xs filter brightness-90 group-hover:brightness-100 transition-all"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-emerald-500 rounded-full border border-black animate-pulse shadow-[0_0_4px_#10b981]" />
                </div>
                <span className="font-sans font-black text-[8px] tracking-widest text-neutral-400 group-hover:text-white transition-colors uppercase">
                  AN {"EVU"} COMPANY
                </span>
              </a>
            </span>
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors underline decoration-neutral-900 hover:decoration-white">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-white transition-colors underline decoration-neutral-900 hover:decoration-white">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center space-x-1.5 md:justify-end">
            <span>Website by</span>
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white underline decoration-neutral-800 hover:decoration-white font-medium transition-colors"
            >
              Feelize
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
