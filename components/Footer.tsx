"use client";

import React from "react";
import Link from "next/link";
import BarDivider from "./BarDivider";
import Image from "next/image";

interface FooterLink {
  name: string;
  href: string;
}

export default function Footer() {
  const links: Record<string, FooterLink[]> = {
    products: [
      { name: "View Technology Catalog (17)", href: "/products" },
      { name: "Facility Management Suite", href: "/products/facility-management-suite" },
      { name: "Inmate Records System", href: "/products/inmate-records-system" },
      { name: "Smart Door Controls", href: "/products/smart-door-control-systems" },
      { name: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { name: "Secure Messaging", href: "/products/secure-messaging-system" }
    ],
    solutions: [
      { name: "View All Solutions (5)", href: "/solutions" },
      { name: "County Jails", href: "/solutions/county-jails" },
      { name: "State Prisons", href: "/solutions/state-prisons" },
      { name: "Federal Facilities", href: "/solutions/federal-facilities" },
      { name: "Juvenile Detention", href: "/solutions/juvenile-detention" }
    ],
    resources: [
      { name: "View Knowledge Hub (6)", href: "/resources" },
      { name: "Case Studies", href: "/resources/case-studies" },
      { name: "Technical Whitepapers", href: "/resources/whitepapers" },
      { name: "Compliance & Standards", href: "/resources/compliance-and-standards" },
      { name: "FAQ Database", href: "/resources/faq" }
    ],
    firm: [
      { name: "Corporate Identity", href: "/about" },
      { name: "System Security & CJIS", href: "/security" },
      { name: "Integrations Interface", href: "/integrations" },
      { name: "Partner Network", href: "/partners" },
      { name: "Careers Unit", href: "/careers" },
      { name: "Press Releases", href: "/press" }
    ]
  };

  return (
    <footer className="bg-neutral-950 text-white border-t border-neutral-900 pt-16 pb-12 select-none font-sans relative overflow-hidden">
      
      {/* Crisp real-color accent border at the top of footer: Emerald brand identity line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid content - Clean Human-Styled Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Col 1: Products */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black text-emerald-400 tracking-widest uppercase border-b border-neutral-900 pb-3">
              Software & Platforms
            </h4>
            <ul className="space-y-2.5">
              {links.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-3">
              Solutions Scope
            </h4>
            <ul className="space-y-2.5">
              {links.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-3">
              Research Hub
            </h4>
            <ul className="space-y-2.5">
              {links.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate / Trust */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black text-neutral-400 tracking-widest uppercase border-b border-neutral-900 pb-3">
              Jailsoft Corporate
            </h4>
            <ul className="space-y-2.5">
              {links.firm.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Horizontal Divider Motif */}
        <BarDivider variant="minimal" className="mt-16 opacity-15" />

        {/* Legal & Attribution row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 text-[11px] text-neutral-500 font-sans mt-8 pt-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-neutral-400">© 2026 Jailsoft. All rights reserved.</span>
              <span className="text-neutral-800 hidden sm:inline">|</span>
              
              {/* Premium EVU Parent Company Badge */}
              <a
                href="https://www.evu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/30 px-3 py-1.5 rounded-sm transition-all duration-200 group"
              >
                <Image
                  src="https://media.licdn.com/dms/image/v2/D4E0BAQG8HakZjfsXQA/company-logo_200_200/B4EZVJCAEKGgAI-/0/1740687016580/evuresidential_logo?e=2147483647&v=beta&t=AV66_LB6z7CCTai58p5fuaKyqeqSDO-PRQJRx_QyExE"
                  alt="EVU Logo"
                  width={14}
                  height={14}
                  className="object-contain rounded-xs filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-150"
                  referrerPolicy="no-referrer"
                />
                <span className="font-sans font-extrabold text-[9px] tracking-wider text-neutral-400 group-hover:text-emerald-400 transition-colors uppercase">
                  AN EVU COMPANY
                </span>
              </a>
            </span>
            <Link href="/legal/privacy-policy" className="hover:text-white transition-colors duration-150 underline decoration-neutral-800 hover:decoration-white">
              Privacy Policy
            </Link>
            <Link href="/legal/terms-of-service" className="hover:text-white transition-colors duration-150 underline decoration-neutral-800 hover:decoration-white">
              Terms of Service
            </Link>
          </div>

          <div className="flex items-center space-x-1.5 md:justify-end text-neutral-500">
            <span>Website by</span>
            <a
              href="https://feelize.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white underline decoration-neutral-800 hover:decoration-white font-medium transition-colors duration-150"
            >
              Feelize
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
