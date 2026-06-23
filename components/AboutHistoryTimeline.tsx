"use client";

import React, { useState } from "react";
import { Compass, Clock, Award, Shield, Cpu, ChevronRight, Check } from "lucide-react";

interface Milestone {
  year: string;
  quarter: string;
  title: string;
  division: "Labs" | "Research" | "Governance";
  description: string;
  notes: string;
  metrics: string;
}

const milestones: Milestone[] = [
  {
    year: "2011",
    quarter: "Q2",
    title: "Founding & Relay R&D",
    division: "Labs",
    description: "Jailsoft is established as an independent systems developer in regional technology hubs. Our initial focus centers on engineering low-latency dry-contact solid-state PLC relays for high-security doors.",
    notes: "Successfully isolated physical solenoid latency to 0.4 seconds across steel containment wickets.",
    metrics: "Initial 24V Solenoid Prototypes passed safety review"
  },
  {
    year: "2015",
    quarter: "Q1",
    title: "Government Records Release",
    division: "Governance",
    description: "Launched Jailsoft JMS Core v1.0. We pioneered field-level encrypted column storage designed specifically for county booking desks requiring CJIS compliance controls.",
    notes: "Direct integration adapters deployed to regional Court registries to prevent manual transcription errors.",
    metrics: "12 regional county installations activated with CJIS validation"
  },
  {
    year: "2019",
    quarter: "Q4",
    title: "Biometric Integration Trials",
    division: "Research",
    description: "Established the Jailsoft Research Group to design dual-factor biometric access controllers. Developed mathematical projection hashing to convert organic samples into secure data streams.",
    notes: "Eliminated raw medical and physical tracking data storage from core databases to prevent compliance risks.",
    metrics: "FRR (False Reject Rate) optimized below 0.001%"
  },
  {
    year: "2023",
    quarter: "Q3",
    title: "Offline Mesh Network Framework",
    division: "Labs",
    description: "Pioneered offline-first local database replication micro-clusters. Systems continue operating autonomously with local caching even during state fiber grid outages.",
    notes: "Configured multi-master relational sync schedules with strict transaction check-sums.",
    metrics: "99.999% active database state of record uptime recorded"
  },
  {
    year: "2026",
    quarter: "Q2",
    title: "Strategic Transition to EVU Conglomerate",
    division: "Governance",
    description: "Joined the elite industrial portfolio of EVU. Integration of aerospace-grade materials, expanded sovereign support registries, and corporate-audited security compliance standards.",
    notes: "Sustained corporate identity with dedicated systems engineering laboratories at Jailsoft Labs.",
    metrics: "Full integration with EVU secure auditing and NIST SP 800 standards"
  }
];

export default function AboutHistoryTimeline() {
  const [activeIdx, setActiveIdx] = useState<number>(milestones.length - 1);
  const activeMilestone = milestones[activeIdx];

  return (
    <div id="about-history-timeline-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none">
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 mb-8 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-amber-500" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">CHRONOLOGY DIRECTIVE</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Labs History & Governance Archive
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Select standard milestones of the Jailsoft Labs and Research Group since 2011 to drill into specific engineering breakthroughs and corporate audit statements.
          </p>
        </div>
        <span className="font-mono text-[8.5px] text-neutral-550 border border-neutral-900 bg-neutral-950 px-2.5 py-1.5 rounded-sm shrink-0">
          SECURE_CHRONO_v4
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Timelines Rail selection */}
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block">
            SELECT HISTORICAL MILESTONE
          </span>

          <div className="relative border-l border-neutral-900 pl-4 ml-2 space-y-6">
            {milestones.map((ms, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={ms.year}
                  onClick={() => setActiveIdx(idx)}
                  className="w-full text-left relative flex items-start group"
                >
                  {/* Selector dot on vertical line */}
                  <div
                    className={`absolute -left-[21px] w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500 border-amber-400 scale-125"
                        : "bg-neutral-950 border-neutral-800 group-hover:border-neutral-500"
                    }`}
                  />
                  
                  <div className={`space-y-1 transition-all ${isActive ? "pl-2" : ""}`}>
                    <div className="flex items-center space-x-2">
                      <span className={`font-mono text-xs font-black tracking-wider ${isActive ? "text-amber-400" : "text-neutral-400 group-hover:text-white"}`}>
                        {ms.year}
                      </span>
                      <span className="font-mono text-[8px] px-1 bg-neutral-900 border border-neutral-800 text-neutral-500 rounded">
                        {ms.quarter}
                      </span>
                      <span className={`font-mono text-[8px] uppercase ${
                        ms.division === "Labs" ? "text-cyan-400" : ms.division === "Research" ? "text-purple-400" : "text-emerald-400"
                      }`}>
                        [{ms.division}]
                      </span>
                    </div>
                    <span className={`font-sans font-bold text-[11px] uppercase tracking-wide block ${isActive ? "text-white" : "text-neutral-500 group-hover:text-neutral-300"}`}>
                      {ms.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Detailed Dossier View */}
        <div className="lg:col-span-7 bg-[#050505] border border-neutral-900 rounded p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-950 pb-4">
            <div className="space-y-1">
              <span className="font-mono text-[8px] text-neutral-600 block uppercase">ACTIVE DOSSIER RECORD</span>
              <h4 className="font-sans font-black text-sm uppercase tracking-wider text-white">
                {activeMilestone.year} &mdash; {activeMilestone.title}
              </h4>
            </div>
            <span className="font-mono text-[8px] px-2.5 py-1 bg-amber-950/20 border border-amber-900/30 text-amber-400 rounded font-bold">
              REV_{activeMilestone.year}
            </span>
          </div>

          <div className="space-y-4 font-sans text-xs text-neutral-300 leading-relaxed font-light">
            <p className="bg-black/50 border-l-2 border-amber-500/50 p-4 rounded-sm leading-relaxed text-neutral-200">
              {activeMilestone.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-neutral-900/40 border border-neutral-900/50 rounded-sm">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block mb-1">
                  CORE TECHNICAL METRIC
                </span>
                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  {activeMilestone.metrics}
                </span>
              </div>
              <div className="p-3.5 bg-neutral-900/40 border border-neutral-900/50 rounded-sm">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block mb-1">
                  HISTORICAL LAB NOTATIONS
                </span>
                <span className="text-[11px] block italic text-neutral-400">
                  &ldquo;{activeMilestone.notes}&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Secure verification block */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-950 mt-4 text-[10px] text-neutral-550 text-neutral-500 font-mono">
            <span className="uppercase text-[8px]">LOG_STATE_VERIFIED</span>
            <div className="flex items-center space-x-1">
              <Check className="w-3 h-3 text-emerald-500" />
              <span className="uppercase text-[8px] text-emerald-500 font-semibold">AUTHENTICATED CHRONO ENTRY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
