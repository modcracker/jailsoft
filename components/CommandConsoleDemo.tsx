"use client";

import React, { useState, useEffect, useRef } from "react";
import { Shield, Lock, Unlock, Search, Users, Activity, Play, Terminal, Sparkles, RefreshCw, AlertTriangle, Check, ShieldAlert } from "lucide-react";

interface Inmate {
  bookingId: string;
  name: string;
  status: string;
  risk: "HIGH (Level 4)" | "MEDIUM (Level 3)" | "MINIMUM (Level 1)";
  riskClass: string;
  cell: string;
  intakeDate: string;
}

interface Pod {
  id: string;
  name: string;
  occupancy: string;
  maxCapacity: number;
  status: "SECURE" | "LOCKDOWN" | "RECREATION" | "OVERRIDE ACTIVE";
  color: string;
}

interface Staff {
  id: string;
  name: string;
  role: string;
  badge: string;
  status: "ACTIVE ON POD" | "SICK LEAVE" | "OVERTIME ASSIGNED";
  hours: string;
  efficiency: string;
}

export default function CommandConsoleDemo() {
  const [activeTab, setActiveTab] = useState<"pods" | "inmates" | "roster">("pods");
  const [searchQuery, setSearchQuery] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "SYS_INIT // Booting Jailsoft Safe-Incarceration Kernel...",
    "SEC_STATUS_CHECK // CJIS level 4 secure database connection: VERIFIED",
    "NODE_HEALTH // PLC hardwired relay switches synchronized",
    "INFO // 234 active resident records loaded into county ledger"
  ]);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [pendingPodId, setPendingPodId] = useState<string | null>(null);
  const [securityOverrideCode, setSecurityOverrideCode] = useState("");
  const [overrideAuthorized, setOverrideAuthorized] = useState(false);
  const [overrideError, setOverrideError] = useState("");

  // Simulated Inmates
  const initialInmates: Inmate[] = [
    { bookingId: "B-2026-A109", name: "O'DONNELL, MARCUS R.", status: "Scheduled Court Trans.", risk: "MEDIUM (Level 3)", riskClass: "text-[#d97706]", cell: "Pod A-12", intakeDate: "2026-04-12" },
    { bookingId: "B-2026-H827", name: "VALENCIA, CHRISTIAN G.", status: "Inpatient Ward", risk: "HIGH (Level 4)", riskClass: "text-[#dc2626]", cell: "Pod H-05", intakeDate: "2026-05-30" },
    { bookingId: "B-2026-E441", name: "KOWALSKI, BENJAMIN L.", status: "Work Release Program", risk: "MINIMUM (Level 1)", riskClass: "text-[#16a34a]", cell: "Pod W-31", intakeDate: "2026-06-01" },
    { bookingId: "B-2026-T192", name: "SANTIAGO, REINALDO M.", status: "General Population", risk: "MEDIUM (Level 3)", riskClass: "text-[#d97706]", cell: "Pod B-04", intakeDate: "2026-02-15" },
    { bookingId: "B-2026-P093", name: "HOUSTON, GREGORY S.", status: "Segregated Safe Cells", risk: "HIGH (Level 4)", riskClass: "text-[#dc2626]", cell: "Pod S-02", intakeDate: "2026-06-18" },
    { bookingId: "B-2026-F542", name: "MCKENZIE, THEODORE D.", status: "General Population", risk: "MINIMUM (Level 1)", riskClass: "text-[#16a34a]", cell: "Pod A-02", intakeDate: "2026-05-11" }
  ];
  const [inmates, setInmates] = useState<Inmate[]>(initialInmates);

  // Simulated Pods
  const [pods, setPods] = useState<Pod[]>([
    { id: "A", name: "North Block - Pod Alpha", occupancy: "142", maxCapacity: 150, status: "SECURE", color: "text-[#16a34a]" },
    { id: "B", name: "South Tower - Pod Bravo", occupancy: "84", maxCapacity: 90, status: "LOCKDOWN", color: "text-[#dc2626]" },
    { id: "C", name: "Intake Holding - Pod Charlie", occupancy: "18", maxCapacity: 25, status: "RECREATION", color: "text-blue-500" },
    { id: "D", name: "Special Needs Unit - Pod Delta", occupancy: "12", maxCapacity: 15, status: "SECURE", color: "text-[#16a34a]" }
  ]);

  // Simulated Guards
  const [staff, setStaff] = useState<Staff[]>([
    { id: "S-101", name: "Deputy J. Sterling", role: "Housing Officer", badge: "BADGE_4102", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "Optimized" },
    { id: "S-105", name: "Sergeant K. Vance", role: "Shift Supervisor", badge: "BADGE_1208", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "Overtime Override Needed" },
    { id: "S-109", name: "Officer R. Mendez", role: "Biometric Wicket Guard", badge: "BADGE_9553", status: "OVERTIME ASSIGNED", hours: "18:00 - 06:00", efficiency: "Optimized" },
    { id: "S-112", name: "Officer M. Brody", role: "Perimeter Master Deck", badge: "BADGE_3012", status: "SICK LEAVE", hours: "Off-duty", efficiency: "Requires Redirection" }
  ]);

  // Live simulator log tick
  useEffect(() => {
    const handleLogs = () => {
      const messages = [
        "SYS_FEED // Temperature sensors calibrated on Pod B, 71.9°F",
        "BIOMETRIC // Verification access accepted: Officer BADGE_9553 at Wicket 02",
        "RFID_SCAN // RFID active tracking badge #441 detected at Recreation exit",
        "CJIS // Synchronizing system ledger with Federal Crime Database API...",
        "SYS_MONITOR // Guard ratio in Pod Alpha calculated at 1:12 // COMPLIANT",
        "HARDWARE // Microwave perimeter fence sector 14: Clear // No vibrations",
        "DATABASE // Sentence length auto-reevaluated for booking B-2026-F542",
        "SYS_ALERT // Disciplinary report logging submitted for cell block H-05"
      ];
      const randomIdx = Math.floor(Math.random() * messages.length);
      const timestamp = new Date().toUTCString().split(" ")[4];
      setLogs(prev => [`[${timestamp}] ${messages[randomIdx]}`, ...prev.slice(0, 15)]);
    };

    const interval = setInterval(handleLogs, 4800);
    return () => clearInterval(interval);
  }, []);

  const addLog = (message: string) => {
    const timestamp = new Date().toUTCString().split(" ")[4];
    setLogs(prev => [`[${timestamp}] ${message}`, ...prev.slice(0, 15)]);
  };

  // Staffing optimization simulation
  const handleOptimizeRoster = () => {
    setIsOptimizing(true);
    addLog("COMPUTE_SOLVER // Pulling union rules, shift fatigue matrices, and vacancy profiles...");
    setTimeout(() => {
      setStaff([
        { id: "S-101", name: "Deputy J. Sterling", role: "Housing Officer", badge: "BADGE_4102", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "FIP Auto-Assigned" },
        { id: "S-105", name: "Sergeant K. Vance", role: "Shift Supervisor", badge: "BADGE_1208", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "FIP Auto-Assigned" },
        { id: "S-109", name: "Officer R. Mendez", role: "Biometric Wicket Guard", badge: "BADGE_9553", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "Smart Shift Rotated" },
        { id: "S-115", name: "Deputy A. Fletcher", role: "Perimeter Master Deck", badge: "BADGE_8829", status: "ACTIVE ON POD", hours: "06:00 - 18:00", efficiency: "Auto-Allocated Shift" }
      ]);
      setIsOptimizing(false);
      addLog("SUCCESS // Redundant overtime solved. All pods staffed at optimal CJIS 1:15 ratio");
    }, 1800);
  };

  // Toggle Pod Override Lockdown/Access Action
  const triggerPodAccess = (podId: string) => {
    setPendingPodId(podId);
    setSecurityOverrideCode("");
    setOverrideError("");
    setIsAlertModalOpen(true);
  };

  const handleApplyOverride = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pendingPodId) return;

    if (securityOverrideCode.trim().toUpperCase() === "BYPASS" || securityOverrideCode.trim() === "1234") {
      setPods(prev => prev.map(p => {
        if (p.id === pendingPodId) {
          const transitions: Record<Pod["status"], Pod["status"]> = {
            "SECURE": "LOCKDOWN",
            "LOCKDOWN": "SECURE",
            "RECREATION": "OVERRIDE ACTIVE",
            "OVERRIDE ACTIVE": "SECURE"
          };
          const nextStatus = transitions[p.status];
          const nextColor = nextStatus === "SECURE" ? "text-[#16a34a]" : nextStatus === "LOCKDOWN" ? "text-[#dc2626]" : "text-amber-500";
          addLog(`PHYS_GATE // PLC relay commands sent override to Gate Lock Block ${p.id}. Status set to: ${nextStatus}`);
          return { ...p, status: nextStatus, color: nextColor };
        }
        return p;
      }));
      setIsAlertModalOpen(false);
    } else {
      setOverrideError("SEC_ERROR // Clearance key signature mismatched. GSA Schedule 70 token invalid.");
      addLog(`AUTH_FAIL // Unapproved override attempt detected at Pod ${pendingPodId} console interface`);
    }
  };

  const filteredInmates = inmates.filter(i => 
    i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.bookingId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    i.cell.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="command-console-demo" className="w-full bg-neutral-950 border border-neutral-900 rounded-sm overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.9)] max-w-7xl mx-auto">
      
      {/* Top Banner Status Bar */}
      <div className="bg-neutral-950 border-b border-neutral-900 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-2.5">
          <div className="w-2 h-2 relative flex">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-[#dc2626] uppercase font-bold">
            JMS_NODE_ACTIVE // GRID: COUNTY_WEST_70
          </span>
        </div>
        
        <div className="flex items-center space-x-6 font-mono text-[9px] text-neutral-500">
          <div>DATA_CRYPTO: <span className="text-[#16a34a] font-normal">FIPS_140_2_ACTIVE</span></div>
          <div className="hidden sm:inline">CJIS_LEDGER: <span className="text-white">L4_COMPLIANT</span></div>
          <div>EST_PING: <span className="text-white">4ms</span></div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Dynamic Controls Sidebar Tabs */}
        <div className="col-span-12 lg:col-span-7 border-r border-neutral-900 flex flex-col min-h-[500px]">
          
          <div className="flex border-b border-neutral-900 bg-black">
            <button
              onClick={() => setActiveTab("pods")}
              className={`flex-1 font-sans text-xs uppercase tracking-wider py-4 font-extrabold flex items-center justify-center space-x-2 border-b-2 transition-all ${
                activeTab === "pods" 
                  ? "border-white text-white bg-neutral-900/40" 
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <Activity className="w-4 h-4 opacity-70" />
              <span>Pods Monitor</span>
            </button>
            <button
              onClick={() => setActiveTab("inmates")}
              className={`flex-1 font-sans text-xs uppercase tracking-wider py-4 font-extrabold flex items-center justify-center space-x-2 border-b-2 transition-all ${
                activeTab === "inmates" 
                  ? "border-white text-white bg-neutral-900/40" 
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4 opacity-70" />
              <span>Inmate Ledger</span>
            </button>
            <button
              onClick={() => setActiveTab("roster")}
              className={`flex-1 font-sans text-xs uppercase tracking-wider py-4 font-extrabold flex items-center justify-center space-x-2 border-b-2 transition-all ${
                activeTab === "roster" 
                  ? "border-white text-white bg-neutral-900/40" 
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4 opacity-70" />
              <span>Shift Dispatch</span>
            </button>
          </div>

          <div className="p-6 flex-1 bg-black/45">
            
            {/* View 1: Pods */}
            {activeTab === "pods" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
                  <div className="font-mono text-[9px] text-[#888] uppercase">CELL LOCK BLOCKS FEED & DIGITAL PLC COMMANDS</div>
                  <span className="font-mono text-[9px] text-neutral-500">4 ACTIVE PODS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pods.map((pod) => (
                    <div 
                      key={pod.id} 
                      className={`p-4 bg-neutral-950 border ${pod.status === "LOCKDOWN" ? "border-red-950 hover:border-red-800" : "border-neutral-900 hover:border-neutral-800"} rounded-sm transition-all flex flex-col justify-between`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-widest text-[#777]">POD_BLOCK: 0{pod.id}</span>
                          <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded bg-black/60 font-bold border border-neutral-900 ${pod.color}`}>
                            ● {pod.status}
                          </span>
                        </div>
                        <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider pt-0.5">{pod.name}</h4>
                        <div className="flex items-center space-x-2 pt-2">
                          <div className="w-full bg-neutral-900 h-1.5 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${pod.status === "LOCKDOWN" ? "bg-red-600" : "bg-neutral-600"}`}
                              style={{ width: `${(parseInt(pod.occupancy) / pod.maxCapacity) * 100}%` }}
                            />
                          </div>
                          <span className="font-mono text-[10px] text-neutral-400 whitespace-nowrap">
                            {pod.occupancy}/{pod.maxCapacity}
                          </span>
                        </div>
                      </div>

                      <div className="flex space-x-2 pt-4">
                        <button
                          onClick={() => triggerPodAccess(pod.id)}
                          className={`flex-1 py-1.5 rounded-sm font-sans text-[9px] font-black uppercase tracking-wider text-center transition-all flex items-center justify-center space-x-1 border ${
                            pod.status === "LOCKDOWN"
                              ? "bg-red-950 border-red-900 text-red-200 hover:bg-black hover:text-white"
                              : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:bg-neutral-850 hover:text-white hover:border-neutral-700"
                          }`}
                        >
                          <Lock className="w-3 h-3" />
                          <span>Toggle Gate Force</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* View 2: Inmates Ledger database */}
            {activeTab === "inmates" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-1">
                  <div className="font-mono text-[9px] text-[#888] uppercase">MUNICIPAL CRIMINAL REGISTER LEDGER</div>
                  <span className="font-mono text-[9px] text-neutral-500">6 CURRENT RESIDENTS</span>
                </div>

                {/* Database Search Filter Input */}
                <div className="relative">
                  <Search className="w-4.5 h-4.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search ledger by inmate name, Booking ID, or housing location..."
                    className="w-full bg-[#050505] border border-neutral-900 rounded-sm pl-10 pr-4 py-2.5 font-sans text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[9px] text-neutral-500 hover:text-white"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                  {filteredInmates.length === 0 ? (
                    <div className="p-8 text-center bg-[#050505] border border-neutral-900 rounded-sm text-neutral-500 text-xs">
                      No matching records found. Use alternate search parameters.
                    </div>
                  ) : (
                    filteredInmates.map((inmate) => (
                      <div 
                        key={inmate.bookingId} 
                        className="p-3 bg-[#050505] hover:bg-neutral-950 border border-neutral-900 hover:border-neutral-800 rounded-sm transition-colors flex items-center justify-between flex-wrap gap-2 text-xs"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-sans font-bold uppercase text-white tracking-wide">{inmate.name}</span>
                            <span className="font-mono text-[9px] text-neutral-500">{inmate.bookingId}</span>
                          </div>
                          <div className="flex items-center space-x-3 text-[10px] text-neutral-400">
                            <span>Loc: <span className="text-white font-mono">{inmate.cell}</span></span>
                            <span>Status: <span className="text-neutral-300 font-sans italic">{inmate.status}</span></span>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className={`font-mono text-[9px] font-extrabold uppercase ${inmate.riskClass}`}>
                            {inmate.risk}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}

            {/* View 3: Guard Duty schedules */}
            {activeTab === "roster" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-900">
                  <div className="font-mono text-[9px] text-[#888] uppercase">OFFICER ASSIGNMENTS & SHIFT ALLOCATOR</div>
                  <button
                    onClick={handleOptimizeRoster}
                    disabled={isOptimizing}
                    className="font-mono text-[9px] text-white hover:text-neutral-300 transition-colors uppercase font-bold flex items-center space-x-1"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isOptimizing ? "animate-spin" : ""}`} />
                    <span>{isOptimizing ? "CALCULATING..." : "RUN OPTIMIZATION"}</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {staff.map((guard) => (
                    <div 
                      key={guard.id} 
                      className="p-3 bg-neutral-950 border border-neutral-900 rounded-sm flex items-center justify-between flex-wrap gap-2 text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center font-mono text-[10px] font-extrabold text-neutral-400">
                          {guard.id.split("-")[1]}
                        </div>
                        <div>
                          <h5 className="font-sans font-bold text-white uppercase tracking-wider">{guard.name}</h5>
                          <p className="font-mono text-[9px] text-neutral-500">{guard.role}{" // "}{guard.badge}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-mono text-[9px] text-neutral-400 lowercase">{guard.hours}</div>
                        <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded-sm uppercase ${
                          guard.status === "ACTIVE ON POD" 
                            ? "bg-[#16a34a]/10 text-[#16a34a] border border-[#16a34a]/20" 
                            : guard.status === "SICK LEAVE"
                            ? "bg-neutral-900 text-neutral-500 border border-neutral-850"
                            : "bg-red-950/20 text-red-400 border border-red-900/30"
                        }`}>
                          {guard.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-[10px] text-neutral-500 font-light leading-relaxed">
                  *Shift optimization calculations prevent staffing gaps while automatically protecting deputy unions against unapproved mandatory overtime rotations.
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Right Side: Log Feed terminal terminal */}
        <div className="col-span-12 lg:col-span-5 bg-[#050505] p-6 flex flex-col justify-between border-t lg:border-t-0 border-neutral-900 min-h-[500px]">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-900">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-white opacity-70" />
                <span className="font-mono text-[10px] font-black uppercase tracking-wider text-white">LIVE AUDIT RECODER FEED</span>
              </div>
              <span className="font-mono text-[7px] text-[#16a34a] bg-[#16a34a]/10 border border-[#16a34a]/20 px-1.5 py-0.5 rounded font-bold uppercase tracking-widest">
                STREAMING
              </span>
            </div>

            <div className="space-y-2 font-mono text-[10px] leading-relaxed max-h-[360px] overflow-y-auto pr-1">
              {logs.map((log, idx) => (
                <div key={idx} className={`p-1.5 rounded-sm ${idx === 0 ? "bg-neutral-900 text-white font-bold" : "text-neutral-500"}`}>
                  <span className="opacity-40">{">"}</span> {log}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-neutral-900 mt-6 space-y-4">
            <div className="bg-neutral-950 p-4 border border-neutral-900 rounded-sm space-y-2">
              <h5 className="font-sans font-bold text-[10px] uppercase text-white tracking-widest flex items-center">
                <Sparkles className="w-3.5 h-3.5 text-white mr-1.5" />
                <span>EVALUATION INTERACTIVE INSTRUCTIONS</span>
              </h5>
              <p className="font-sans text-[10px] text-neutral-400 font-light leading-relaxed">
                Click toggles in the left panel to test active PLC gate relays, run staffing logic solvers, or query simulated offender demographic indices. Use authorization key <span className="font-mono font-bold bg-neutral-900 px-1 text-white border border-neutral-850">BYPASS</span> to authorize locks.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Override Credential Modal */}
      {isAlertModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-950 border border-neutral-800 p-6 max-w-sm w-full rounded-sm space-y-4">
            <div className="flex items-center space-x-3 text-amber-500">
              <ShieldAlert className="w-8 h-8 flex-shrink-0" />
              <div>
                <h4 className="font-sans font-black text-xs uppercase tracking-widest text-white">PLC GATE LOCK OVERRIDE</h4>
                <p className="font-mono text-[7px] text-neutral-400 uppercase tracking-wider">Awaiting government cryptographic token</p>
              </div>
            </div>

            <p className="font-sans text-[11px] text-neutral-400 leading-normal font-light">
              You are requesting to toggle the secure gate lock hardware relay for <span className="font-bold text-white">Pod {pendingPodId}</span>. Enter authorization bypass key below to confirm local simulation authority.
            </p>

            <form onSubmit={handleApplyOverride} className="space-y-3">
              <div>
                <label className="block font-mono text-[8px] text-neutral-500 uppercase tracking-widest pb-1.5">
                  CRYPTO SECURE PASSKEY TOKEN
                </label>
                <input
                  type="text"
                  value={securityOverrideCode}
                  onChange={(e) => setSecurityOverrideCode(e.target.value)}
                  placeholder="Enter token (e.g. BYPASS)"
                  autoFocus
                  className="w-full bg-black border border-neutral-900 rounded-sm px-3 py-2 text-xs text-white font-mono placeholder-neutral-700 focus:outline-none focus:border-neutral-500 text-center"
                />
                {overrideError && (
                  <p className="font-mono text-[8px] text-red-500 pt-1.5">{overrideError}</p>
                )}
              </div>

              <div className="flex space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAlertModalOpen(false)}
                  className="flex-1 py-2 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white font-mono text-[9px] uppercase tracking-wider text-center bg-black rounded-sm transition-colors"
                >
                  ABORT
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-white hover:bg-neutral-200 text-black font-mono text-[9px] font-bold uppercase tracking-wider text-center rounded-sm transition-colors"
                >
                  RELEASE GATE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
