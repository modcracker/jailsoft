"use client";

import React, { useState } from "react";
import { Layers, MapPin, Calculator, Shield, Cpu, Sparkles, Server, Check } from "lucide-react";

interface SolutionBlueprintProps {
  slug: string;
  solutionName: string;
}

interface SectorInfo {
  id: string;
  name: string;
  desc: string;
  products: string[];
  vulnerabilityRisk: "HIGH" | "MEDIUM" | "CONTROLLED";
  colorClass: string;
}

export default function SolutionBlueprint({ slug, solutionName }: SolutionBlueprintProps) {
  const [selectedSec, setSelectedSec] = useState<string>("sec-booking");
  const [bedsCount, setBedsCount] = useState<number>(500);

  // Sector Mapping info
  const sectors: Record<string, SectorInfo> = {
    "sec-booking": {
      id: "sec-booking",
      name: "Sector A // Booking & Intake Desk",
      desc: "High-traffic resident registration area containing dynamic arrest data validation, warrant queries, biometric scanners, and medical intake triage units.",
      products: ["Inmate Records System", "Biometric Access Control", "Classification & Risk Assessment"],
      vulnerabilityRisk: "HIGH",
      colorClass: "bg-red-500/10 border-red-500/30 text-red-400"
    },
    "sec-control": {
      id: "sec-control",
      name: "Sector B // Security Control Deck",
      desc: "Central tactical control deck operating hardwired PLC gate control, CCTV surveillance feeds, perimeter sensors, and panic alarms in real time.",
      products: ["Smart Door Control Systems", "Surveillance and CCTV Integration", "Duress and Panic Systems"],
      vulnerabilityRisk: "CONTROLLED",
      colorClass: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
    },
    "sec-cells": {
      id: "sec-cells",
      name: "Sector C // Cell Blocks & Dayrooms",
      desc: "Offender housing quarters and shared dayrooms demanding robust physical barricade control, regular security checkpoints, and active incident logging.",
      products: ["Facility Management Suite", "Incident Reporting Code Engine", "Secure Messaging System"],
      vulnerabilityRisk: "HIGH",
      colorClass: "bg-amber-500/10 border-amber-500/30 text-amber-400"
    },
    "sec-visitation": {
      id: "sec-visitation",
      name: "Sector D // Visiting Wickets & Kiosks",
      desc: "Public-facing wickets managing physical and video visiting appointments, tracking visitor background warrants, and secure communication channels.",
      products: ["Visitation Management", "Video Visitation Kiosks", "Inmate Calling Platform"],
      vulnerabilityRisk: "MEDIUM",
      colorClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
    }
  };

  // Safe Calculator Formulas depending on bedsCount and solution slug
  const calculateMetrics = () => {
    let multiplier = 1.0;
    if (slug === "state-prisons") multiplier = 1.4;
    if (slug === "federal-facilities") multiplier = 1.8;
    if (slug === "juvenile-detention") multiplier = 0.8;

    const clusterNodes = Math.ceil((bedsCount * multiplier) / 250);
    const estimatedStaffRatio = Math.max(1, Math.round((bedsCount * multiplier) / 60));
    const databaseThrottlesSLA = (99.95 + (estimatedStaffRatio * 0.0001)).toFixed(3);
    const costLiabilityRatio = (bedsCount * 22.8 * multiplier).toLocaleString(undefined, { maximumFractionDigits: 0 });

    return {
      clusterNodes,
      estimatedStaffRatio,
      databaseThrottlesSLA,
      costLiabilityRatio
    };
  };

  const metrics = calculateMetrics();
  const activeSector = sectors[selectedSec] || sectors["sec-booking"];

  return (
    <div id="solution-blueprint-container" className="pt-16 border-t border-neutral-900 bg-neutral-950/40 pb-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-900">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-cyan-950/20 border border-cyan-900/30 rounded-full">
              <Layers className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span className="font-mono text-[8px] text-cyan-400 uppercase tracking-widest font-bold">TACTICAL ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
              FACILITY DEPLOYMENT BLUEPRINT
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-2xl leading-normal">
              Map system logic directly onto structural zones of corrections facilities. Review active product integrations and hover zones to inspect physical security overlays.
            </p>
          </div>
          <div className="flex items-center space-x-3 font-mono text-[9px] text-neutral-500 bg-black/40 border border-neutral-900 px-3 py-2 rounded-sm">
            <Server className="w-3.5 h-3.5 text-neutral-400" />
            <span className="uppercase tracking-widest text-[8px]">{slug.toUpperCase()}_DEPLOYMENT_GRID</span>
          </div>
        </div>

        {/* Blueprint Sector Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Interactive SVG/Grid Blueprint */}
          <div className="lg:col-span-7 bg-[#030303] border border-neutral-900 rounded-sm p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                01 / INTERACTIVE SITE PLAN LAYER
              </span>
              
              {/* Site Grid Mock */}
              <div className="grid grid-cols-2 gap-4 aspect-[16/10] bg-zinc-950 border border-neutral-800 p-4 rounded-sm relative overflow-hidden">
                
                {/* Visual grid blueprint guidelines */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03] pointer-events-none">
                  {[...Array(36)].map((_, i) => (
                    <div key={i} className="border border-white" />
                  ))}
                </div>

                {sectors && Object.values(sectors).map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSec(sec.id)}
                    className={`p-4 rounded-sm border relative text-left transition-all duration-300 flex flex-col justify-between ${
                      selectedSec === sec.id
                        ? "bg-cyan-950/20 border-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                        : "bg-black border-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#777]">
                        ZONE_{sec.id.split("-")[1].toUpperCase()}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedSec === sec.id ? "bg-cyan-400 animate-pulse" : "bg-neutral-800"}`} />
                    </div>
                    
                    <div className="mt-4">
                      <div className="font-sans font-bold text-xs uppercase tracking-wide">
                        {sec.name.split("//")[1]?.trim() || sec.name}
                      </div>
                      <span className="font-mono text-[8px] text-neutral-510 text-neutral-500 block pt-1 uppercase">
                        RISK: {sec.vulnerabilityRisk}
                      </span>
                    </div>
                  </button>
                ))}

              </div>
              
              <div className="font-sans text-[10px] text-neutral-500 italic text-center">
                *Click sectors above to view sub-compartment product logs and regulatory safety checks.
              </div>
            </div>

            {/* Selected Sector Properties */}
            <div className="mt-6 pt-6 border-t border-neutral-900 space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
                  {activeSector.name}
                </span>
                <span className="font-mono text-[7px] px-2 py-0.5 rounded bg-amber-950/20 text-amber-400 border border-amber-900/40 uppercase font-semibold">
                  RISK: {activeSector.vulnerabilityRisk}
                </span>
              </div>
              
              <p className="font-sans text-xs text-neutral-400 leading-normal font-light">
                {activeSector.desc}
              </p>

              {/* Integrated Products Lists */}
              <div className="space-y-1.5 pt-2">
                <span className="font-mono text-[8px] text-[#777] uppercase tracking-wider block">
                  DEPLOYED INTEGRATION MODULES
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeSector.products.map((p, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 bg-cyan-950/10 border border-cyan-900/20 rounded-full font-mono text-[7.5px] text-cyan-400 font-semibold uppercase tracking-wider"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                      <span>{p}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Panel: Interactive ROI & Sizing Calculator */}
          <div className="lg:col-span-5 bg-black border border-neutral-900 rounded-sm p-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                  02 / SYSTEM SIZING CALCULATOR
                </span>
                <h3 className="font-sans font-bold text-sm text-white uppercase tracking-wider">
                  Select Facility Bed Capacity
                </h3>
                <p className="font-sans text-xs text-neutral-400 font-light leading-normal">
                  Toggle population sizes dynamically to calculate essential node parameters, suggested shift ratios, and estimated liability offset statistics.
                </p>
              </div>

              {/* Bed count range slider inputs */}
              <div className="space-y-4 bg-neutral-950 border border-neutral-900 p-4 rounded-sm">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest text-[9.5px]">BEDS / POPULATION</span>
                  <span className="text-white font-extrabold">{bedsCount.toLocaleString()} Beds</span>
                </div>
                
                <input
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={bedsCount}
                  onChange={(e) => setBedsCount(parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer bg-neutral-800 rounded-lg appearance-none h-1.5 focus:outline-none"
                />
                
                <div className="flex justify-between font-mono text-[8.5px] text-[#555]">
                  <span>100 MIN</span>
                  <span>5,000 BED MED</span>
                  <span>10,000 MAX</span>
                </div>
              </div>

              {/* Calculated Results Area */}
              <div className="space-y-3 pt-2">
                <span className="font-mono text-[8.5px] text-[#777] uppercase tracking-wider block">
                  SLA ESTIMATED INFRASTRUCTURE TARGETS
                </span>

                <div className="grid grid-cols-2 gap-3">
                  
                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-sm space-y-1">
                    <span className="font-mono text-[8px] text-[#555] uppercase block">Suggested Server Nodes</span>
                    <div className="font-mono text-lg font-black text-cyan-400">
                      {metrics.clusterNodes} Nodes
                    </div>
                    <span className="font-mono text-[7px] text-neutral-500 uppercase">Kubernetes High-Availability</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-sm space-y-1">
                    <span className="font-mono text-[8px] text-[#555] uppercase block">Liability Mitigation Index</span>
                    <div className="font-mono text-lg font-black text-emerald-400">
                      ${metrics.costLiabilityRatio} / yr
                    </div>
                    <span className="font-mono text-[7px] text-neutral-500 uppercase">Audit-Shield Savings</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-sm space-y-1">
                    <span className="font-mono text-[8px] text-[#555] uppercase block">Smart Staff Dispatch Units</span>
                    <div className="font-mono text-lg font-black text-white">
                      1:{metrics.estimatedStaffRatio} ratio
                    </div>
                    <span className="font-mono text-[7px] text-neutral-500 uppercase">Audit-Safe Compliant</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-sm space-y-1">
                    <span className="font-mono text-[8px] text-[#555] uppercase block">Encrypted Database SLA</span>
                    <div className="font-mono text-lg font-black text-white">
                      {metrics.databaseThrottlesSLA}%
                    </div>
                    <span className="font-mono text-[7px] text-neutral-500 uppercase">High-Availability API</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick specifications pill-boxes footer */}
            <div className="pt-4 border-t border-neutral-900 mt-4 space-y-2">
              <span className="font-mono text-[8px] text-[#444] uppercase tracking-wider block">
                COMPLIANCE SIGNATURE ENVELOPES
              </span>
              <div className="flex flex-wrap gap-1.5 pt-0.5 select-none">
                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-850 rounded-full font-mono text-[7px] text-neutral-400 uppercase font-semibold">
                  CJIS Level 4 Secure
                </span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-850 rounded-full font-mono text-[7px] text-neutral-400 uppercase font-semibold">
                  GSA Schedule 70 IT
                </span>
                <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-850 rounded-full font-mono text-[7px] text-neutral-400 uppercase font-semibold">
                  SaaS Model Compliant
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
