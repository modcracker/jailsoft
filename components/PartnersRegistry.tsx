"use client";

import React, { useState } from "react";
import { Search, ShieldAlert, BadgeCheck, CheckCircle2, Navigation, AlertTriangle, Cpu, Hammer } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  type: "Hardware Foundry" | "Systems Integrator" | "GovTech Contractor";
  licenseId: string;
  clearedStatus: "CJIS-Cleared" | "Pending-Reregistration" | "Audit-Required";
  location: string;
  regions: string[];
}

const partners: Partner[] = [
  {
    id: "p1",
    name: "Apex Detention Integrators",
    type: "Systems Integrator",
    licenseId: "JS-PARTNER-4091",
    clearedStatus: "CJIS-Cleared",
    location: "Seattle, WA",
    regions: ["Northwest Command", "Eastern Seaboard Unit"]
  },
  {
    id: "p2",
    name: "Vanguard Solenoid Foundries",
    type: "Hardware Foundry",
    licenseId: "JS-PARTNER-0918",
    clearedStatus: "CJIS-Cleared",
    location: "Cleveland, OH",
    regions: ["Central Plains Sector", "Southern Coast District"]
  },
  {
    id: "p3",
    name: "Cascade Security Contracting Co.",
    type: "GovTech Contractor",
    licenseId: "JS-PARTNER-8812",
    clearedStatus: "CJIS-Cleared",
    location: "Portland, OR",
    regions: ["Northwest Command"]
  },
  {
    id: "p4",
    name: "Titan Corridor Control Systems",
    type: "Systems Integrator",
    licenseId: "JS-PARTNER-7729",
    clearedStatus: "Audit-Required",
    location: "Atlanta, GA",
    regions: ["Southern Coast District"]
  },
  {
    id: "p5",
    name: "Federal Booking Hardware Corp",
    type: "Hardware Foundry",
    licenseId: "JS-PARTNER-1029",
    clearedStatus: "CJIS-Cleared",
    location: "Alexandria, VA",
    regions: ["Eastern Seaboard Unit", "Central Plains Sector"]
  }
];

const sectors = ["All Sectors", "Northwest Command", "Eastern Seaboard Unit", "Central Plains Sector", "Southern Coast District"];

export default function PartnersRegistry() {
  const [selectedSector, setSelectedSector] = useState("All Sectors");
  const [searchQuery, setSearchQuery] = useState("");
  const [verifyIdQuery, setVerifyIdQuery] = useState("");
  const [verificationResult, setVerificationResult] = useState<"not_queried" | "found" | "not_found">("not_queried");
  const [verifiedPartner, setVerifiedPartner] = useState<Partner | null>(null);

  const filteredPartners = partners.filter(p => {
    const matchesSector = selectedSector === "All Sectors" || p.regions.includes(selectedSector);
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  const handleVerifyLicense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyIdQuery.trim()) return;
    
    const found = partners.find(p => p.licenseId.toUpperCase() === verifyIdQuery.trim().toUpperCase());
    if (found) {
      setVerificationResult("found");
      setVerifiedPartner(found);
    } else {
      setVerificationResult("not_found");
      setVerifiedPartner(null);
    }
  };

  return (
    <div id="partners-registry-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <Hammer className="w-4 h-4 text-emerald-500" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">LICENCED OUTLET DIRECTORY</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Partner Verification Registry & Sectors
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Browse certified GovTech installers, low-voltage hardware manufacturers, and authorized representatives. Test licencing accreditation using the validation tool.
          </p>
        </div>
        <span className="font-mono text-[8.5px] text-neutral-550 border border-neutral-900 bg-neutral-950 px-3 py-1.5 rounded-sm shrink-0">
          REGO_STATUS: SYNCED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Filter and Lookup */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Sector Buttons */}
          <div className="space-y-2">
            <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block">
              FILTER BY SECTOR AREA
            </span>
            <div className="flex flex-wrap gap-1.5">
              {sectors.map(sec => (
                <button
                  key={sec}
                  onClick={() => setSelectedSector(sec)}
                  className={`px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider rounded-sm transition-all border ${
                    selectedSector === sec
                      ? "bg-white text-black border-white font-bold"
                      : "bg-[#050505] text-neutral-500 border-neutral-900 hover:border-neutral-700 hover:text-white"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </div>
          </div>

          {/* Search Inputs */}
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600 pointer-events-none" />
            <input
              type="text"
              placeholder="Search partner organizations by name or location registry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-900 rounded-sm py-3 pl-11 pr-4 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-black transition-all"
            />
          </div>

          <div className="space-y-3">
            <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block">
              FOUND DIRECTORY ENTRIES ({filteredPartners.length})
            </span>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredPartners.map(p => (
                <div key={p.id} className="p-4 bg-[#050505] border border-neutral-900 hover:border-neutral-800 transition-all rounded-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-[8px] px-1.5 py-0.5 bg-neutral-900 text-neutral-500 rounded uppercase font-semibold">
                        {p.type}
                      </span>
                      <span className="font-mono text-[8.5px] text-neutral-600">&bull; {p.location}</span>
                    </div>
                    <h4 className="font-sans font-extrabold text-[12.5px] text-white uppercase tracking-wide">
                      {p.name}
                    </h4>
                    <p className="font-mono text-[9px] text-neutral-550 text-neutral-500">
                      LICENSE ID: <span className="text-neutral-300 font-bold">{p.licenseId}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-neutral-950 text-[9px]">
                    <span className="font-sans text-neutral-500 flex items-center space-x-1">
                      <Navigation className="w-3 h-3 text-neutral-600" />
                      <span>{p.regions[0]}</span>
                    </span>

                    {p.clearedStatus === "CJIS-Cleared" ? (
                      <span className="text-emerald-500 font-mono text-[8px] font-bold flex items-center space-x-1 uppercase">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>CLEARED</span>
                      </span>
                    ) : (
                      <span className="text-red-500 font-mono text-[8px] font-bold flex items-center space-x-1 uppercase">
                        <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                        <span>AUDIT BLOCK</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {filteredPartners.length === 0 && (
                <div className="col-span-2 p-8 bg-[#0a0505]/40 border border-neutral-900 rounded text-center space-y-2">
                  <AlertTriangle className="w-6 h-6 text-neutral-600 mx-auto" />
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                    No partner organizations match the selected criteria under current cache registers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Real-time License Verification */}
        <div className="lg:col-span-4 bg-black border border-neutral-900 rounded p-6 space-y-5">
          <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-widest block font-bold">
            PARTNER CHALLENGE GATE
          </span>

          <form onSubmit={handleVerifyLicense} className="space-y-4">
            <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
              Enter our test licensing reference index codes to verify active background clearance. Common test credentials:
              <br />
              <span className="font-mono text-[#c6934c] select-all bg-neutral-950 border border-neutral-900 px-1 py-0.5 rounded inline-block mt-1">JS-PARTNER-4091</span> or <span className="font-mono text-[#c6934c] select-all bg-neutral-955 bg-neutral-950 border border-neutral-900 px-1 py-0.5 rounded inline-block mt-1">JS-PARTNER-1029</span>
            </p>

            <div className="space-y-1.5">
              <label htmlFor="verify-partner-input" className="font-mono text-[8.5px] text-neutral-500 block uppercase">
                ENTER ACCREDITATION LICENSE ID
              </label>
              <input
                id="verify-partner-input"
                type="text"
                placeholder="e.g., JS-PARTNER-4091"
                value={verifyIdQuery}
                onChange={(e) => setVerifyIdQuery(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-900 rounded-sm py-3 px-4 text-xs font-mono uppercase tracking-widest text-[#c6934c] placeholder-neutral-705 focus:outline-none focus:border-neutral-550 transition-all font-bold"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-200 text-black font-sans text-xs font-black uppercase tracking-widest py-3 flex items-center justify-center space-x-2.5 rounded-sm transition-all shadow-md shrink-0 py-4"
            >
              <BadgeCheck className="w-3.5 h-3.5 shrink-0" />
              <span>QUERY REGISTRY LOGS</span>
            </button>
          </form>

          {/* Result Block */}
          {verificationResult !== "not_queried" && (
            <div className="mt-4 pt-4 border-t border-neutral-950 animate-fade-in">
              {verificationResult === "found" && verifiedPartner ? (
                <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 rounded text-xs space-y-2.5">
                  <div className="flex items-center space-x-2 text-emerald-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>VERIFIED RECORD SYNCED</span>
                  </div>
                  <div className="space-y-1 font-sans">
                    <h5 className="font-extrabold text-[12.5px] uppercase text-white">{verifiedPartner.name}</h5>
                    <p className="text-neutral-400 text-[11px] leading-relaxed">
                      Licencing status actively cleared under Federal CJIS Level 4 Background Checks. Permitted for physical installation inside regional correctional sites.
                    </p>
                  </div>
                  <div className="text-[9px] font-mono text-neutral-500 flex items-center justify-between pt-1 border-t border-emerald-950">
                    <span>STATUS: VALID</span>
                    <span>EXPIRY: 2029-06</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-red-950/20 border border-red-900/30 rounded text-xs space-y-2">
                  <div className="flex items-center space-x-2 text-red-400 font-mono text-[9px] font-bold uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-red-500" />
                    <span>NOT ACCREDITED DETECTED</span>
                  </div>
                  <p className="font-sans text-neutral-400 leading-relaxed font-light">
                    The requested license ID was not found in our live active registry logs. Access is blocked. Contact operations desks for updates on pending contractors.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between border-t border-neutral-950 pt-3 text-[8.5px] text-neutral-500 font-mono">
            <span>GOV_PARTNERS: AUDITED</span>
            <span>CLEARED NODES: 5 ACTIVE</span>
          </div>

        </div>
      </div>

    </div>
  );
}
