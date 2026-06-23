"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ShieldAlert, Shield, Cpu, PhoneCall, Send, Terminal, CheckCircle2, RefreshCw } from "lucide-react";

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

  const [dispatchNode, setDispatchNode] = useState("");
  const [dispatchStatus, setDispatchStatus] = useState<"idle" | "dispatching" | "dispatched">("idle");
  const [incidentLevel, setIncidentLevel] = useState("L1_DIAGNOSTICS");

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dispatchNode.trim()) return;
    setDispatchStatus("dispatching");
    setTimeout(() => {
      setDispatchStatus("dispatched");
    }, 1205);
  };

  const resetDispatch = () => {
    setDispatchNode("");
    setDispatchStatus("idle");
  };

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
        <a href="https://www.evu.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neutral-300 underline font-extrabold transition-colors">
          VISIT WWW.EVU.COM →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <ChevronDown className="w-3.5 h-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              
              {/* Massive structured Mega-menu anchored relative to Products, styled with ultra polished high density grid & custom dispatch widget */}
              <div className="absolute left-[-160px] xl:left-[-220px] top-full hidden group-hover:grid grid-cols-4 gap-6 bg-black border border-neutral-800 p-6 w-[840px] shadow-[0_20px_40px_rgba(0,0,0,0.95)] z-50 before:content-[''] before:absolute before:block before:w-full before:h-4 before:-top-4 before:left-0">
                {productCategories.map((category) => (
                  <div key={category.name} className="space-y-4">
                    {/* Header with category specific icons */}
                    <div className="flex items-center space-x-1.5 border-b border-neutral-900 pb-2">
                      {category.name === "Software Systems" && <Shield className="w-3.5 h-3.5 text-neutral-400" />}
                      {category.name === "Security Hardware" && <Cpu className="w-3.5 h-3.5 text-neutral-400" />}
                      {category.name === "Secure Communications" && <PhoneCall className="w-3.5 h-3.5 text-neutral-400" />}
                      <span className="font-mono text-[9px] font-bold text-neutral-300 tracking-wider uppercase">
                        {category.name}
                      </span>
                    </div>
                    
                    <ul className="space-y-2">
                      {category.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="group/link flex items-center space-x-1.5 font-sans text-[11px] text-neutral-400 hover:text-white transition-colors duration-155 block truncate"
                          >
                            <span className="text-[9px] text-neutral-600 group-hover/link:text-emerald-400 transition-colors">▶</span>
                            <span className="border-b border-transparent group-hover/link:border-emerald-500/20">{link.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Column 4: Interactive Dispatch Panel */}
                <div className="col-span-1 bg-neutral-950/90 border border-neutral-900 focus-within:border-neutral-800 p-4 rounded-sm flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center space-x-1.5 border-b border-neutral-900 pb-2 mb-2">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="font-mono text-[9px] font-bold text-neutral-300 tracking-wider uppercase">
                        SYS_DISPATCH_CONSOLE
                      </span>
                    </div>
                    <p className="font-sans text-[10px] text-neutral-500 leading-relaxed font-light">
                      Query operational logs or dispatch priority hardware synchronization teams to high-security zones.
                    </p>
                  </div>

                  {dispatchStatus === "idle" && (
                    <form onSubmit={handleDispatch} className="space-y-2">
                      <div>
                        <label className="block font-mono text-[8px] text-neutral-400 uppercase tracking-widest mb-1 flex items-center">
                          Target Node / Zone ID
                        </label>
                        <input
                          type="text"
                          required
                          value={dispatchNode}
                          onChange={(e) => setDispatchNode(e.target.value)}
                          placeholder="ZONE-D // BLOCK-12"
                          className="w-full bg-black border border-neutral-800 px-2 py-1 text-[10px] font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-600"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-[8px] text-neutral-400 uppercase tracking-widest mb-1 flex items-center">
                          Priority Protocol
                        </label>
                        <select
                          value={incidentLevel}
                          onChange={(e) => setIncidentLevel(e.target.value)}
                          className="w-full bg-black border border-neutral-800 px-1.5 py-1 text-[10px] font-mono text-neutral-300 focus:outline-none focus:border-neutral-600"
                        >
                          <option value="L1_DIAGNOSTICS">L1 // DIAGNOSTICS CHECK</option>
                          <option value="L2_HARDWARE_SYNC">L2 // HARDWARE RESYNC</option>
                          <option value="L3_SEC_RESTORE">L3 // LOCKDOWN OVERRIDE</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-white hover:bg-neutral-200 text-black text-[9px] font-sans font-black uppercase tracking-wider py-1.5 transition-all flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <Send className="w-3 h-3" />
                        <span>Dispatch Signal</span>
                      </button>
                    </form>
                  )}

                  {dispatchStatus === "dispatching" && (
                    <div className="py-6 flex flex-col items-center justify-center space-y-2">
                      <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin" />
                      <span className="font-mono text-[9px] text-neutral-400 tracking-wider uppercase animate-pulse">
                        Encrypting & Routing...
                      </span>
                    </div>
                  )}

                  {dispatchStatus === "dispatched" && (
                    <div className="bg-neutral-900/50 border border-emerald-950 p-2.5 rounded-sm space-y-2">
                      <div className="flex items-center space-x-1.5 text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                          SIGNAL SENT SUCCESSFULLY
                        </span>
                      </div>
                      <div className="font-mono text-[8px] text-neutral-400 space-y-0.5">
                        <p>NODE: <span className="text-white">{dispatchNode}</span></p>
                        <p>LEVEL: <span className="text-white">{incidentLevel}</span></p>
                        <p>STAMP: <span className="text-emerald-500">2026-06-22</span></p>
                        <p>CODE: <span className="text-white">SYS_OP_0x8C1B</span></p>
                      </div>
                      <button
                        type="button"
                        onClick={resetDispatch}
                        className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[8px] font-mono uppercase tracking-wider py-1 transition-all cursor-pointer"
                      >
                        Reset Console
                      </button>
                    </div>
                  )}
                </div>
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
              
              <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)] before:content-[''] before:absolute before:block before:w-full before:h-4 before:-top-4 before:left-0">
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
              
              <div className="absolute left-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)] before:content-[''] before:absolute before:block before:w-full before:h-4 before:-top-4 before:left-0">
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
              
              <div className="absolute right-0 top-full hidden group-hover:block bg-black border border-neutral-800 py-3 w-48 shadow-[0_15px_30px_rgba(0,0,0,0.8)] before:content-[''] before:absolute before:block before:w-full before:h-4 before:-top-4 before:left-0">
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
