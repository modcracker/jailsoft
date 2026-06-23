"use client";

import React, { useState } from "react";
import { ShieldCheck, ToggleLeft, ToggleRight, Sparkles, AlertCircle, RefreshCw, Terminal, Check } from "lucide-react";

interface HardeningItem {
  id: string;
  name: string;
  category: "DATABASE" | "HARDWARE" | "SYSTEM" | "BIOMETRIC";
  desc: string;
  hardened: boolean;
  impact: string;
}

export default function SecurityHardeningMatrix() {
  const [items, setItems] = useState<HardeningItem[]>([
    {
      id: "aes",
      name: "Symmetric AES-256 Column Locking",
      category: "DATABASE",
      desc: "Apply isolated field-level symmetric keys protecting resident mugshot data and booking files directly on local tables.",
      hardened: true,
      impact: "CJIS Requirement 5.10 compliance satisfied safely"
    },
    {
      id: "relay",
      name: "Low-Voltage Solenoid Isolation",
      category: "HARDWARE",
      desc: "Bypass electronic networks with hardwired PLC dry loops. Prevents doors from unlatching during total fiber crashes.",
      hardened: true,
      impact: "Zero-latency door overrides locked securely"
    },
    {
      id: "audit",
      name: "Un-unwritable Audit Log Daemon",
      category: "SYSTEM",
      desc: "Pipes all terminal clicks and administrator changes directly into read-only transactional write-ahead tables.",
      hardened: false,
      impact: "Vulnerable to log deletion if unauthorized root is gained"
    },
    {
      id: "biometric",
      name: "Biometric High-Dimensional Hash Projection",
      category: "BIOMETRIC",
      desc: "Destroy raw biological pictures immediately at wicket terminals. Store only irreversible biometric projection hashes.",
      hardened: true,
      impact: "Shields county from digital asset privacy lawsuits"
    }
  ]);

  const [diagnosticMode, setDiagnosticMode] = useState<"idle" | "running" | "complete">("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [score, setScore] = useState(75);

  const toggleHardened = (id: string) => {
    setItems(prev =>
      prev.map(item => {
        if (item.id === id) {
          const nextHardened = !item.hardened;
          return { ...item, hardened: nextHardened };
        }
        return item;
      })
    );
  };

  const calculateScore = () => {
    const activeCount = items.filter(i => i.hardened).length;
    return Math.round((activeCount / items.length) * 100);
  };

  const runDiagnostic = () => {
    if (diagnosticMode === "running") return;
    setDiagnosticMode("running");
    setScanProgress(0);
    setLogs(["[00:01] INITIALIZING SECURE SCAN DESTRUCTION PROTOCOLS..."]);
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setScanProgress(currentProgress);

      if (currentProgress === 20) {
        setLogs(prev => [...prev, "[00:12] VERIFYING FIPS-140 COMPLIANT MODULE BOUNDARIES..."]);
      } else if (currentProgress === 40) {
        setLogs(prev => [...prev, `[00:24] SCANNING DATABASE TIERS - CURRENT ENCRYPTION AT ${items.find(i=>i.id==="aes")?.hardened ? "AES-256-GCM" : "PLAINTEXT ERROR"}`]);
      } else if (currentProgress === 60) {
        setLogs(prev => [...prev, `[00:36] DETECTING SOLENOID RELAYS STATUS: ${items.find(i=>i.id==="relay")?.hardened ? "HARDWIRED FAIL-SECURE" : "UNSECURED NETWORK LOOPED"}`]);
      } else if (currentProgress === 80) {
        setLogs(prev => [...prev, `[00:48] CHECKING AUDIT DAEMON REGISTERS: ${items.find(i=>i.id==="audit")?.hardened ? "ACTIVE & WRITE-LOCKED" : "LOG DELETION THREAT FOUND"}`]);
      } else if (currentProgress >= 100) {
        clearInterval(interval);
        setDiagnosticMode("complete");
        setScore(calculateScore());
        setLogs(prev => [...prev, `[00:59] SCAN COMPLETED SECURELY. NETWORK CALCULATED SCORE: ${calculateScore()}% CERTIFIED.`]);
      }
    }, 250);
  };

  const estimatedScore = calculateScore();

  return (
    <div id="security-hardening-matrix-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">ZERO-TRUST OVERWATCH MATRIX</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Interactive Security Hardening Playground
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Toggle the security controls of Jailsoft&apos;s database ledgers and door controllers below. Then, execute a live compliance diagnostic scan to evaluate the protection score of your mock facility.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="font-mono text-[8px] bg-[#0c2e17]/30 border border-[#166534]/50 text-emerald-400 px-3 py-1.5 rounded uppercase font-bold">
            ESTIMATED HARDENING ID: JS-SEC_HARD_901
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Micro Hardening Toggles */}
        <div className="lg:col-span-7 space-y-4">
          <span className="font-mono text-[8.5px] text-neutral-550 uppercase tracking-widest block font-bold">
            01 // HARDENING VECTORS
          </span>

          <div className="space-y-3.5">
            {items.map(item => (
              <div
                key={item.id}
                className={`p-4 rounded border transition-all duration-300 grid grid-cols-12 gap-4 ${
                  item.hardened
                    ? "bg-[#041a12]/30 border-emerald-900/60"
                    : "bg-[#1f0909]/20 border-red-950/40"
                }`}
              >
                <div className="col-span-9 md:col-span-10 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-mono text-[8px] px-1.5 py-0.5 bg-neutral-900 text-neutral-500 rounded uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wide">
                      {item.name}
                    </h4>
                  </div>
                  <p className="font-sans text-[10.5px] text-neutral-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                  <p className="font-mono text-[9px] text-neutral-500">
                    IMPACT: <span className={item.hardened ? "text-emerald-400" : "text-amber-500"}>{item.impact}</span>
                  </p>
                </div>

                <div className="col-span-3 md:col-span-2 flex items-center justify-end">
                  <button
                    onClick={() => toggleHardened(item.id)}
                    className="focus:outline-none transition-colors"
                  >
                    {item.hardened ? (
                      <ToggleRight className="w-8 h-8 text-emerald-500 hover:text-emerald-400" />
                    ) : (
                      <ToggleLeft className="w-8 h-8 text-neutral-700 hover:text-neutral-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Interactive Compliance Diagnostic Terminal */}
        <div className="lg:col-span-5 bg-black border border-neutral-900 rounded p-6 space-y-6">
          <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-widest block font-bold">
            02 // SECURE COMPLIANCE SCANNER
          </span>

          {/* Big Scorecard */}
          <div className="p-4 bg-neutral-950/80 border border-neutral-900 rounded flex items-center justify-between">
            <div className="space-y-1">
              <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-wider block font-medium">
                Current audit score
              </span>
              <div className="font-mono text-3xl font-black text-white">
                {estimatedScore}% <span className="text-xs text-neutral-500 font-normal">SECURE</span>
              </div>
            </div>
            
            {estimatedScore === 100 ? (
              <div className="p-2.5 bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 rounded-sm flex items-center space-x-2">
                <Sparkles className="w-4 h-4 animate-pulse shrink-0" />
                <span className="font-mono text-[8.5px] font-bold">PERFECT SHIELD</span>
              </div>
            ) : (
              <div className="p-2.5 bg-amber-950/20 border border-amber-900/30 text-amber-500 rounded-sm flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span className="font-mono text-[8.5px] font-bold">HARDEN NEEDED</span>
              </div>
            )}
          </div>

          {/* Trigger button */}
          <button
            onClick={runDiagnostic}
            disabled={diagnosticMode === "running"}
            className="w-full bg-white hover:bg-neutral-200 text-black font-sans text-xs font-black uppercase tracking-widest py-3 flex items-center justify-center space-x-2.5 rounded-sm transition-all shadow-md py-4 shrink-0"
          >
            <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${diagnosticMode === "running" ? "animate-spin" : ""}`} />
            <span>{diagnosticMode === "running" ? "RUNNING DIAGNOSTICS..." : "EXECUTE COMPLIANCE SCAN"}</span>
          </button>

          {/* Terminal log panel */}
          {logs.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-[9px] font-mono text-neutral-550 border-b border-neutral-950 pb-2">
                <Terminal className="w-3.5 h-3.5 text-neutral-500" />
                <span>DIAGNOSTIC SIMULATOR STREAM</span>
              </div>

              {/* Progress bar */}
              {diagnosticMode === "running" && (
                <div className="w-full bg-neutral-950 h-1.5 rounded-full overflow-hidden border border-neutral-900">
                  <div
                    className="bg-emerald-500 h-full transition-all duration-300"
                    style={{ width: `${scanProgress}%` }}
                  />
                </div>
              )}

              <div className="bg-[#050505] border border-neutral-900 p-4 font-mono text-[9px] text-[#05c46b] rounded-sm space-y-1.5 max-h-40 overflow-y-auto select-all max-w-full">
                {logs.map((log, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="text-[10px] text-neutral-550 flex items-center justify-between text-neutral-500 font-mono">
            <span>AUDITED VIA NIST_SP_800-53</span>
            <span>VERIFIED: GREEN</span>
          </div>

        </div>
      </div>

    </div>
  );
}
