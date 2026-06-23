"use client";

import React, { useState } from "react";
import { Globe, Search, ArrowRight, Download, Send, Check } from "lucide-react";

interface PressRelease {
  id: string;
  date: string;
  title: string;
  department: string;
  text: string;
  subhead: string;
}

const releases: PressRelease[] = [
  {
    id: "pr1",
    date: "June 12, 2026",
    title: "Jailsoft Acquired by EVU Software Network",
    department: "Corporate Communications",
    subhead: "Leading corrections GovTech platform joins prominent industrial software conglomerate to expand sovereign customer support capabilities.",
    text: "Jailsoft Research Group is pleased to announce its formalized integration into the EVU corporate software network. Over its 15-year history of independent systems architecture delivery, Jailsoft has stood apart through its absolute prioritization of data durability, zero-trust cryptographic layers, and high-uptime facilities overrides. Becoming an elite subsidiary of EVU secures long-term capital backing, access to advanced aerospace manufacturing resources, and broader scale support pipelines for regional and state-wide corrections agencies. Under the corporate governance alignment, Jailsoft will continue directing research and software laboratories under its respected historic corporate brand and staff hierarchies."
  },
  {
    id: "pr2",
    date: "March 18, 2026",
    title: "Successful Launch of JMS Secure Ledger Core v4.2",
    department: "Labs Development Division",
    subhead: "New multi-master relational sync schedules deliver 99.999% database uptime across fully isolated local-network facility servers.",
    text: "Jailsoft Labs has completed nationwide rollouts of the JMS Secure Ledger Core database engine. Version 4.2 incorporates offline-first dual-master ledger replication, ensuring that even under complete regional fiber outages or total local electrical grid failovers, sheriff desk booking terminals can proceed with mugshots, classification metrics, and case logs autonomously. All database schemas are dynamically packaged to run inside hardened server arrays on site, utilizing write-ahead transaction records. Once grid connectivity re-establishes, the ledger negotiates secure synchronization, preventing conflicting data entries while avoiding unapproved manual administrative corrections."
  },
  {
    id: "pr3",
    date: "October 02, 2025",
    title: "National PREA and NIST Compliance Audit Score Passed",
    department: "Compliance & Security Auditing",
    subhead: "Independent third-party audits verify perfect compliance scores across NIST SP 800-53 standards and PREA inmate grouping rules.",
    text: "The Jailsoft compliance team has issued report logs validating that Jailsoft's physical access systems, inmate registries, and records modules have successfully passed independent third-party audits. Testing was directed against severe threat vectors, verifying that our symmetric AES-256-GCM database column encryption, low-voltage door controller relays, and high-dimensional biometric iris hashes withstand extreme intrusion attempts. Furthermore, our automated housing classification modules complied flawlessly with the National Prison Rape Elimination Act (PREA) standards, neutralizing liability vectors for county and municipal government boards."
  }
];

export default function PressReleaseTerminal() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [newsQuery, setNewsQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const activeRelease = releases[selectedIdx];

  const filteredReleases = releases.filter(
    (r) =>
      r.title.toLowerCase().includes(newsQuery.toLowerCase()) ||
      r.subhead.toLowerCase().includes(newsQuery.toLowerCase())
  );

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput("");
    }, 2000);
  };

  return (
    <div id="press-release-terminal-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 gap-4">
        <div className="space-y-1.5 font-sans">
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">MEDIA DISSEMINATION GRID</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Press Archive & Corporate Releases
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Browse official public bulletins, systems upgrade statements, and historic acquisition milestones issued by Jailsoft Research Group and specialized divisions.
          </p>
        </div>
        <span className="font-mono text-[8.5px] text-neutral-550 border border-neutral-900 bg-neutral-950 px-3 py-1.5 rounded-sm shrink-0">
          DISCLOSURE_MODE: AUDITED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Release Selection Feed */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600 pointer-events-none" />
            <input
              type="text"
              placeholder="Search press releases and bulletins..."
              value={newsQuery}
              onChange={(e) => setNewsQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-900 rounded-sm py-3.5 pl-11 pr-4 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-black transition-all"
            />
          </div>

          <div className="space-y-3 max-h-[440px] overflow-y-auto">
            {filteredReleases.map((release) => {
              const fileIdx = releases.findIndex((r) => r.id === release.id);
              const isActive = fileIdx === selectedIdx;
              return (
                <button
                  key={release.id}
                  onClick={() => {
                    const originalIdx = releases.findIndex((r) => r.id === release.id);
                    if (originalIdx !== -1) setSelectedIdx(originalIdx);
                  }}
                  className={`w-full text-left p-4 rounded border transition-all flex flex-col justify-between ${
                    isActive
                      ? "bg-amber-955 bg-amber-950/25 border-amber-500 text-white shadow-md"
                      : "bg-[#050505] border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[8.5px] text-neutral-500 mb-1.5 uppercase">
                    <span>{release.date}</span>
                    <span>{release.department}</span>
                  </div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wide block leading-snug">
                    {release.title}
                  </span>
                  <p className="font-sans text-[10.5px] text-neutral-400 line-clamp-2 mt-2 leading-relaxed">
                    {release.subhead}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Press Kit / Asset download widget */}
          <div className="p-4 bg-[#050505] border border-neutral-900 rounded-sm space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-950 pb-2">
              <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block font-bold">
                PRESS MEDIA SUITE
              </span>
              <span className="font-mono text-[7px] text-neutral-650 text-neutral-500">v1.1</span>
            </div>
            <p className="font-sans text-[11px] text-neutral-400 font-light leading-relaxed">
              Retrieve full desaturated style guides, verified logos, and official acquisition disclosure brochures.
            </p>
            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white font-mono text-[9px] uppercase tracking-wider py-2.5 rounded border border-neutral-800 flex items-center justify-center space-x-2 transition-all">
              <Download className="w-3.5 h-3.5 shrink-0" />
              <span>DOWNLOAD REGS KIT (.ZIP)</span>
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Document Reader */}
        <div className="lg:col-span-7 bg-[#050505] border border-neutral-900 rounded p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-950 pb-3">
              <span className="font-mono text-[8px] text-neutral-500 uppercase font-bold text-neutral-600">
                OFFICIAL PRESS RELEASE DOCUMENT REPRESENTATIVE
              </span>
              <span className="font-mono text-[8px] text-emerald-500 font-extrabold px-1.5 py-0.5 bg-emerald-950/20 border border-emerald-900/30 rounded">
                DECLASSIFIED
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-neutral-500 font-mono text-[9px] uppercase">
                <span>{activeRelease.date}</span>
                <span>&bull;</span>
                <span>{activeRelease.department}</span>
              </div>
              <h4 className="font-sans font-black text-lg text-white uppercase tracking-wider leading-snug">
                {activeRelease.title}
              </h4>
              <p className="font-sans text-xs italic text-neutral-400 leading-relaxed font-light border-l-2 border-neutral-800 pl-4 py-1">
                {activeRelease.subhead}
              </p>
            </div>

            <div className="font-sans text-xs text-neutral-300 leading-relaxed font-light pt-3 space-y-3">
              <p className="leading-relaxed font-sans">{activeRelease.text}</p>
              <p className="leading-relaxed font-sans">
                For additional inquiries, media scheduling access, or compliance reports, verify your credentials at our Central Operations Desk inside the office locations.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-5 border-t border-neutral-950">
            <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
              SUBSCRIBE TO ENCRYPTED PRESS DISSEMINATION QUEUE:
            </span>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter email to queue reports..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-grow bg-neutral-950 border border-neutral-900 rounded-sm py-3 px-4 text-xs font-mono text-[#c6934c] placeholder-neutral-700 focus:outline-none focus:border-neutral-550 transition-all"
              />
              <button
                type="submit"
                className="bg-white hover:bg-neutral-200 text-black font-sans text-xs font-black uppercase tracking-widest px-5 py-3 rounded-sm flex items-center justify-center space-x-2 transition-all shadow"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>REGISTER EMAIL</span>
              </button>
            </form>

            {subscribed && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-950/30 text-emerald-400 rounded-sm font-mono text-[9.5px] text-center animate-pulse">
                EMAIL ENQUEUED SECURELY. RELEASE BROADCASTS WILL BE DELIVERED.
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-neutral-500 font-mono text-[8.5px] border-t border-neutral-950 pt-3">
            <span>OFFICIAL COMMUNICATIONS REGISTERED</span>
            <span>PUBLISHED AT: 18:41:00 UTC</span>
          </div>

        </div>

      </div>

    </div>
  );
}
