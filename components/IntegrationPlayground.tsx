"use client";

import React, { useState } from "react";
import { Cpu, Terminal, ArrowRight, ToggleLeft, ToggleRight, Check, Play } from "lucide-react";

interface IntegrationScenario {
  id: string;
  name: string;
  endpoint: string;
  method: "POST" | "GET";
  headers: Record<string, string>;
  requestBody: Record<string, any>;
  successResponse: Record<string, any>;
  errorResponse: Record<string, any>;
}

const scenarios: IntegrationScenario[] = [
  {
    id: "court",
    name: "County Court Records Sync API",
    endpoint: "/api/v1/integrations/court-sync",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CJIS-Fingerprint": "sha256:49fe82daef2cdbc"
    },
    requestBody: {
      court_case_id: "CR-2026-9041",
      resident_name: "John Doe",
      bond_amount_usd: 15000.00,
      classification_override_code: "PREA_MEDIUM_SEG"
    },
    successResponse: {
      status: "synchronized",
      county_booking_updated: true,
      last_evaluated_timestamp_utc: "2026-06-22T18:41:00Z",
      records_inserted_count: 1
    },
    errorResponse: {
      error: "UNAUTHORIZED_SECURE_GATEWAY_CREDENTIALS",
      cjis_auth_state: "failed",
      certification_level: 4,
      remedy: "Please verify your private X-CJIS-Fingerprint client token headers inside GovCloud settings page."
    }
  },
  {
    id: "gate",
    name: "Biometric Access Gate Protocol",
    endpoint: "/api/v3/hardware/wicket-gate/clearance",
    method: "POST",
    headers: {
      "Authorization": "Bearer js_gate_token_4812",
      "X-Terminal-Hardware-ID": "HW-WICKET-A1"
    },
    requestBody: {
      scan_vector_type: "iris_projection_hash",
      biometric_dim_projection: [0.124, 0.942, -0.451, 0.003],
      requested_corridor_id: "SEC-GUARD-POD-3"
    },
    successResponse: {
      clearance_state: "APPROVED",
      override_signal_sent: true,
      seconds_lock_open_duration: 5,
      staff_id: "EMP-40291"
    },
    errorResponse: {
      clearance_state: "DENIED",
      threat_level_raised: "warn_operator",
      reason: "RECOGNITION_MATRICES_MISMATCH",
      details: "Raw scan does not query matching dimensional structures in the staff registry database."
    }
  },
  {
    id: "relay",
    name: "Dry-Contact PLC Lock Controller",
    endpoint: "/api/v2/relays/solenoid-wicket/command",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Safety-Bypass-Signature": "sha256:f62b083b"
    },
    requestBody: {
      action: "SECURE_EMERGENCY_LOCK",
      housing_block_id: "BLOCK_C_MAX_DET",
      override_battery_latch: "ENGAGED"
    },
    successResponse: {
      status: "FAIL_SECURE_LOCKED_SUCCESS",
      relays_tripped: ["SOLENOID_BLOCK_C_WICKET_1", "SOLENOID_BLOCK_C_WICKET_2"],
      voltage_v: 24.2,
      latency_ms: 0.12
    },
    errorResponse: {
      status: "RELAY_COMMAND_FAILED",
      reason: "PLC_LOW_LEVEL_SIGN_OFF_MISSING",
      voltage_v: 0.0,
      details: "Direct signal block command requires a cryptographically signed bypass signature before triggering hardware relays."
    }
  }
];

export default function IntegrationPlayground() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [triggerFailState, setTriggerFailState] = useState(false);
  const [executionState, setExecutionState] = useState<"idle" | "running" | "complete">("idle");
  const [logs, setLogs] = useState<string[]>([]);
  const [rawResponse, setRawResponse] = useState<Record<string, any> | null>(null);

  const scenario = scenarios[selectedIdx];

  const handleSimulateApi = () => {
    if (executionState === "running") return;
    setExecutionState("running");
    setRawResponse(null);
    setLogs(["[API_PORTAL] Connecting to central GovCloud sandbox proxy..."]);

    setTimeout(() => {
      setLogs(prev => [...prev, `[API_PORTAL] Initializing ${scenario.method} handshake with remote endpoint '${scenario.endpoint}'...`]);
    }, 150);

    setTimeout(() => {
      setLogs(prev => [
        ...prev,
        `[API_PORTAL] Evaluating client headers. Cert signature detected with key ID: '${scenario.headers["X-CJIS-Fingerprint"] || scenario.headers["Authorization"] || "X-Safety-Bypass-Signature"}'`
      ]);
    }, 300);

    setTimeout(() => {
      if (triggerFailState) {
        setLogs(prev => [...prev, "[API_PORTAL] SECURITY ERROR REJECTED: VALIDATION CHECK DETECTED FAILURE STATE ON REMOTE CLUSTER INDEX."]);
        setRawResponse(scenario.errorResponse);
        setExecutionState("complete");
      } else {
        setLogs(prev => [...prev, "[API_PORTAL] TRANSACTION APPROVED: Transaction hash generated and cached inside write-ahead logs successfully."]);
        setRawResponse(scenario.successResponse);
        setExecutionState("complete");
      }
    }, 550);
  };

  return (
    <div id="integration-playground-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center space-x-2">
            <Cpu className="w-4 h-4 text-emerald-500" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">MOCK ENDPOINT CLIENT</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Corrections API Integration Playground
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Interact with Jailsoft&apos;s secure network schemas. Choose a scenario below, toggle simulated failures to test edge cases, and execute live queries to examine response structures.
          </p>
        </div>
        <span className="font-mono text-[8.5px] text-neutral-550 border border-neutral-900 bg-neutral-950 px-3 py-1.5 rounded-sm shrink-0">
          API_STANDARDS: COMPLIANT_v1.0
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Control Panel / Tabs */}
        <div className="lg:col-span-4 space-y-4">
          <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest block">
            SELECT WORKSPACE COMPONENT
          </span>

          <div className="space-y-2">
            {scenarios.map((sc, scIdx) => {
              const isActive = scIdx === selectedIdx;
              return (
                <button
                  key={sc.id}
                  onClick={() => {
                    setSelectedIdx(scIdx);
                    setRawResponse(null);
                    setLogs([]);
                    setExecutionState("idle");
                  }}
                  className={`w-full text-left p-4 rounded border transition-all ${
                    isActive
                      ? "bg-amber-950/20 border-amber-500 text-white shadow-md"
                      : "bg-[#050505] border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                  }`}
                >
                  <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block mb-1">
                    SCENARIO 0{scIdx + 1}
                  </span>
                  <span className="font-sans font-bold text-xs uppercase tracking-wide block">
                    {sc.name}
                  </span>
                  <div className="flex items-center space-x-2 pt-2.5 mt-2.5 border-t border-neutral-900/40 text-[9px] font-mono text-neutral-500">
                    <span className="px-1.5 py-0.5 bg-neutral-900 text-neutral-400 rounded">
                      {sc.method}
                    </span>
                    <span className="truncate max-w-[150px]">{sc.endpoint}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-4 bg-[#050505] border border-neutral-900 rounded-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider">
                INJECT HANDSHAKE FAULT
              </span>
              <button
                onClick={() => setTriggerFailState(!triggerFailState)}
                className="focus:outline-none transition-colors"
                id="toggle-failure-simulation"
              >
                {triggerFailState ? (
                  <ToggleRight className="w-8 h-8 text-red-500" />
                ) : (
                  <ToggleLeft className="w-8 h-8 text-neutral-800 animate-pulse" />
                )}
              </button>
            </div>
            <p className="font-sans text-[10.5px] text-neutral-400 font-light leading-relaxed">
              Activate direct API fault simulation to audit error recovery behaviors inside downstream consumer modules.
            </p>
          </div>
        </div>

        {/* Center Request Inspector / Live response */}
        <div className="lg:col-span-8 bg-[#050505] border border-neutral-900 rounded p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-950 pb-3">
              <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">
                MOCK CLIENT WORKSPACE REQUEST REGISTER
              </span>
              <span className="font-mono text-[8px] text-amber-500 px-1.5 py-0.5 bg-amber-950/20 border border-amber-900/30 rounded">
                SEC_ISOLATED
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-[9.5px]">
              {/* Endpoint, headers */}
              <div className="p-4 bg-black border border-neutral-900 rounded space-y-2">
                <span className="text-[#a4b0be] uppercase text-[8px] block tracking-wide">REQUEST METADATA:</span>
                <div>
                  <span className="text-neutral-500">URI:</span> <span className="text-[#2ed573]">{scenario.endpoint}</span>
                </div>
                <div>
                  <span className="text-neutral-500">METHOD:</span> <span className="text-amber-400">{scenario.method}</span>
                </div>
                <div className="pt-2 border-t border-neutral-950 space-y-1">
                  <span className="text-neutral-500 text-[8px] block">SECURITY CLIENT HEADERS:</span>
                  {Object.entries(scenario.headers).map(([k, v]) => (
                    <div key={k} className="text-neutral-400 text-[8.5px]">
                      {k}: <span className="text-cyan-400 font-extrabold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* JSON Payload */}
              <div className="p-4 bg-black border border-neutral-900 rounded space-y-1 overflow-x-auto select-all max-h-40 overflow-y-auto">
                <span className="text-[#a4b0be] uppercase text-[8px] block tracking-wide">REQUEST BODY (JSON):</span>
                <pre className="text-neutral-300 font-mono leading-relaxed text-[8.5px] whitespace-pre-wrap pt-1.5">
                  {JSON.stringify(scenario.requestBody, null, 2)}
                </pre>
              </div>
            </div>

            <button
              onClick={handleSimulateApi}
              disabled={executionState === "running"}
              className="w-full bg-white hover:bg-neutral-200 text-black font-sans text-xs font-black uppercase tracking-widest py-3 flex items-center justify-center space-x-2.5 rounded-sm transition-all shadow-md shrink-0 py-4"
            >
              <Play className="w-3.5 h-3.5 fill-black shrink-0" />
              <span>{executionState === "running" ? "EXECUTING HANDSHAKE OVER SECURE PORT..." : "EXECUTE INTEGRATION TRANSIT"}</span>
            </button>
          </div>

          {/* Simulated Logs and response JSON */}
          {(logs.length > 0 || rawResponse) && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-neutral-950 pt-4">
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
                  TRANSIT EVENTS LOG
                </span>
                <div className="bg-black/60 border border-neutral-900 p-3 font-mono text-[8.5px] text-[#05c46b] space-y-1 rounded max-h-40 overflow-y-auto max-w-full">
                  {logs.map((log, lIdx) => (
                    <div key={lIdx} className="leading-relaxed">{log}</div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-7 space-y-2">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
                  RAW RESPONSE FROM REGISTER
                </span>
                {rawResponse && (
                  <div className="bg-black p-3.5 border border-neutral-900 font-mono text-[8.5px] text-neutral-250 text-neutral-350 rounded overflow-x-auto select-all max-h-40 overflow-y-auto max-w-full">
                    <pre className="text-[#eccc68]">
                      {JSON.stringify(rawResponse, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-neutral-500 font-mono text-[8.5px] border-t border-neutral-950 pt-3">
            <span>GOVERNMENT INTERFACE CERTIFIED</span>
            <span>MAPPED CORE PORTS: SECURE</span>
          </div>

        </div>

      </div>

    </div>
  );
}
