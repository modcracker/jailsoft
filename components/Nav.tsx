"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ShieldAlert } from "lucide-react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productCategories = [
    { name: "Software Systems", href: "/products/facility-management-suite", links: [
      { name: "Facility Management Suite", href: "/products/facility-management-suite" },
      { name: "Inmate Records System", href: "/products/inmate-records-system" },
      { name: "Scheduling and Staffing", href: "/products/scheduling-and-staffing" },
      { name: "Visitation Management", href: "/products/visitation-management" },
      { name: "Commissary Platform", href: "/products/commissary-platform" },
      { name: "Incident Reporting", href: "/products/incident-reporting" },
      { name: "Classification & Risk", href: "/products/classification-and-risk-assessment" },
      { name: "Data Analytics", href: "/products/data-analytics-dashboard" }
    ]},
    { name: "Security Hardware", href: "/products/smart-door-control-systems", links: [
      { name: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { name: "Biometric Access Control", href: "/products/biometric-access-control" },
      { name: "Surveillance & CCTV", href: "/products/surveillance-and-cctv-integration" },
      { name: "Perimeter Security Sensors", href: "/products/perimeter-security-sensors" },
      { name: "Duress & Panic Systems", href: "/products/duress-and-panic-systems" },
      { name: "Facility IoT Network", href: "/products/facility-iot-network" }
    ]},
    { name: "Secure Communications", href: "/products/inmate-calling-platform", links: [
      { name: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { name: "Secure Messaging System", href: "/products/secure-messaging-system" },
      { name: "Video Visitation", href: "/products/video-visitation" },
      { name: "Monitoring and Recording", href: "/products/call-monitoring-and-recording" },
      { name: "Family Notifications", href: "/products/family-notification-services" }
    ]}
  ];

  const solutions = [
    { name: "County Jails", href: "/solutions/county-jails" },
    { name: "State Prisons", href: "/solutions/state-prisons" },
    { name: "Federal Facilities", href: "/solutions/federal-facilities" },
    { name: "Juvenile Detention", href: "/solutions/juvenile-detention" },
    { name: "Private Corrections", href: "/solutions/private-corrections" }
  ];

  const resources = [
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Technical Whitepapers", href: "/resources/whitepapers" },
    { name: "Operations Blog", href: "/resources/blog" },
    { name: "Compliance & Standards", href: "/resources/compliance-and-standards" },
    { name: "FAQ Database", href: "/resources/faq" },
    { name: "Tech Glossary", href: "/resources/glossary" }
  ];

  const trustPages = [
    { name: "System Security", href: "/security" },
    { name: "Integrations Portal", href: "/integrations" },
    { name: "Partner Ecosystem", href: "/partners" },
    { name: "Careers Unit", href: "/careers" },
    { name: "Press Archive", href: "/press" }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-black border-b border-neutral-900 text-white select-none font-sans">
      {/* Top Corporate Acquisition Alert Panel */}
      <div className="w-full bg-neutral-950 border-b border-neutral-900 px-4 py-1.5 text-center font-mono text-[9px] tracking-[0.15em] text-neutral-400 flex items-center justify-center space-x-2">
        <span className="w-1.5 h-1.5 bg-neutral-100 rounded-full animate-pulse shrink-0" />
        <span className="uppercase text-neutral-300 font-medium">Acquisition Notice:</span>
        <span className="hidden xs:inline">Jailsoft acquired by EVU.com</span>
        <span className="xs:hidden">Acquired by EVU.com</span>
        <span className="text-neutral-700 font-mono">|</span>
        <a href="https://evu.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 underline font-extrabold transition-colors">
          VISIT EVU.COM →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo & Vertical Bar design */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <Link href="/" className="group flex items-center space-x-3">
              {/* Premium, High-Security Fortress Insignia Logo Mark */}
              <div className="relative flex items-center justify-center w-8 h-8 bg-neutral-950 border border-neutral-800 rounded-sm group-hover:border-neutral-500 transition-colors">
                <svg className="w-5 h-5 text-white transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer security border lock */}
                  <rect x="5" y="11" width="14" height="9" rx="1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11V7a4 4 0 018 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Center secure override tumbler indicator */}
                  <path d="M12 14v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                {/* Active telemetry neon status lock point */}
                <span className="absolute -top-[1.5px] -right-[1.5px] w-2 h-2 bg-neutral-400 rounded-full border border-black shadow-[0_0_3px_rgba(255,255,255,0.7)]" />
              </div>
              <span className="font-sans font-black text-sm sm:text-base tracking-[0.25em] text-white uppercase group-hover:text-neutral-300 transition-colors">
                JAIL<span className="text-neutral-500 font-light">SOFT</span>
              </span>
            </Link>
            
            {/* Tiny clinical status rail header (hidden on mobile, neat discrete touch) */}
            <div className="hidden xs:flex items-center space-x-2 border-l border-neutral-800 pl-3 sm:pl-4 text-neutral-500 font-mono text-[9px] tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-neutral-400 animate-pulse rounded-full shrink-0" />
              <span className="hidden sm:inline">SYS_ARCHIVED_V4.2</span>
              <span className="sm:hidden">ARCHIVED</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products dropdown trigger */}
            <div className="relative group">
              <Link
                href="/products"
                className="flex items-center space-x-1.5 font-sans text-xs uppercase tracking-widest font-semibold hover:text-neutral-300 transition-colors py-2"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              
              {/* Massive structured Mega-menu */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:grid grid-cols-3 gap-6 bg-black border border-neutral-800 p-6 w-[640px] shadow-[0_15px_30px_rgba(0,0,0,0.8)] filter">
                {productCategories.map((category) => (
                  <div key={category.name} className="space-y-3">
                    <span className="font-mono text-[9px] font-bold text-neutral-500 tracking-wider uppercase border-b border-neutral-900 pb-1.5 block">
                      {category.name}
                    </span>
                    <ul className="space-y-1.5">
                      {category.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="font-sans text-[11px] text-neutral-400 hover:text-white transition-colors duration-150 block truncate"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link
                href="/solutions"
                className="flex items-center space-x-1.5 font-sans text-xs uppercase tracking-widest font-semibold hover:text-neutral-300 transition-colors py-2"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              
              <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-[11px] text-neutral-400 hover:text-white hover:bg-neutral-950 transition-colors px-4 py-2 block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <Link
                href="/resources"
                className="flex items-center space-x-1.5 font-sans text-xs uppercase tracking-widest font-semibold hover:text-neutral-300 transition-colors py-2"
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              
              <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-[11px] text-neutral-400 hover:text-white hover:bg-neutral-950 transition-colors px-4 py-2 block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Trust pages dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1.5 font-sans text-xs uppercase tracking-widest font-semibold hover:text-neutral-300 transition-colors py-2">
                <span>Identity & Trust</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              
              <div className="absolute right-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
                <Link
                  href="/about"
                  className="font-sans text-[11px] text-neutral-400 hover:text-white hover:bg-neutral-950 transition-colors px-4 py-2 block border-b border-neutral-900"
                >
                  About Corporate Overview
                </Link>
                {trustPages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-sans text-[11px] text-neutral-400 hover:text-white hover:bg-neutral-950 transition-colors px-4 py-2 block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Primary Action Button (Monochrome, no colors) */}
            <Link
              href="/contact"
              className="bg-white hover:bg-neutral-200 text-black px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-150 border border-white"
            >
              Request Access
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-neutral-900 bg-neutral-950 py-4 px-4 space-y-4 font-mono text-[11px]">
          {/* Mobile Products Navigation */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown("products")}
              className="w-full flex justify-between items-center text-white py-2 uppercase tracking-wider font-semibold"
            >
              <span>Products</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === "products" && (
              <div className="bg-black/40 pl-3 border-l border-neutral-800 space-y-2 py-1 mt-1">
                {productCategories.map((cat) => (
                  <div key={cat.name} className="space-y-1.5 py-1">
                    <span className="text-neutral-500 text-[9px] uppercase tracking-wider font-bold block">{cat.name}</span>
                    <div className="space-y-1 pl-2">
                      {cat.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-neutral-400 hover:text-white py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Solutions */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown("solutions")}
              className="w-full flex justify-between items-center text-white py-2 uppercase tracking-wider font-semibold"
            >
              <span>Solutions</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === "solutions" && (
              <div className="bg-black/40 pl-3 border-l border-neutral-800 space-y-1 py-1 mt-1">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-neutral-400 hover:text-white py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Resources */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown("resources")}
              className="w-full flex justify-between items-center text-white py-2 uppercase tracking-wider font-semibold"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === "resources" && (
              <div className="bg-black/40 pl-3 border-l border-neutral-800 space-y-1 py-1 mt-1">
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-neutral-400 hover:text-white py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Trust Pages */}
          <div className="space-y-1">
            <button
              onClick={() => toggleDropdown("trust")}
              className="w-full flex justify-between items-center text-white py-2 uppercase tracking-wider font-semibold"
            >
              <span>Identity & Trust</span>
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>
            {activeDropdown === "trust" && (
              <div className="bg-black/40 pl-3 border-l border-neutral-800 space-y-1 py-1 mt-1">
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block text-neutral-400 hover:text-white py-1 border-b border-neutral-900 pb-1"
                >
                  About Corporate Overview
                </Link>
                {trustPages.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-neutral-400 hover:text-white py-1"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA request Access on mobile */}
          <div className="pt-2 border-t border-neutral-900">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-white text-black py-3 px-4 font-sans text-xs font-bold uppercase tracking-widest transition-colors duration-150 border border-white"
            >
              Request Access
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
