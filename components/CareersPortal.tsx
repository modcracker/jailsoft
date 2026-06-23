"use client";

import React, { useState } from "react";
import { Hammer, Sparkles, Check, ChevronRight, Terminal, AlertTriangle, ShieldCheck, Mail, Send } from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  classification: "FTE" | "Contract";
  specs: string[];
  responsibilities: string[];
}

const jobs: JobOpening[] = [
  {
    id: "j1",
    title: "Senior Full-Stack GovTech Architect",
    department: "Sovereign Database Division",
    classification: "FTE",
    specs: ["Minimum 8-year GovTech lifecycle experience", "Proficiency in rust/C++ and secure PostgreSQL architectures", "Active CJIS Security Level 4 clearance preferred"],
    responsibilities: [
      "Design zero-trust data synchronization engines running on top of localized private networks.",
      "Author rigorous data isolation models to strictly secure medical, housing, and court files from side-channel leaks.",
      "Optimize relational query latency under tight offline replication conditions."
    ]
  },
  {
    id: "j2",
    title: "Embedded PLC Systems Engineer",
    department: "Physical Security & Solenoids Unit",
    classification: "FTE",
    specs: ["Durable low-level firmware experience (C/Assembly)", "Familiarity with industrial backup battery relays and dry contacts", "On-site physical site testing capacity required"],
    responsibilities: [
      "Maintain firmware on ruggedized locking solenoids, biometric wickets, and light curtains.",
      "Integrate wet-and-dry relays with industrial PLC controllers, achieving under 150ms command execution loops.",
      "Collaborate directly with hardware manufacturing partners to run extreme high-voltage stress tests."
    ]
  }
];

export default function CareersPortal() {
  const [selectedJobIdx, setSelectedJobIdx] = useState(0);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [showApplySuccess, setShowApplySuccess] = useState(false);

  // Aptitude Challenge state
  const [challengeSolved, setChallengeSolved] = useState<"unattempted" | "wrong" | "solved">("unattempted");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const selectedJob = jobs[selectedJobIdx];

  const options = [
    {
      id: 1,
      label: "Use prepared statements with parameter binding: 'SELECT * FROM residents WHERE name = $1'",
      isCorrect: true,
      feedback: "Correct! Parameter binding treats input strings purely as values, rendering SQL injection payloads totally inert."
    },
    {
      id: 2,
      label: "Use standard client-side base64 encoding on 'name' parameter before concatenating.",
      isCorrect: false,
      feedback: "Incorrect. Base64 is simple encoding, not secure sanitization. Attackers can easily embed payload strings in base64."
    },
    {
      id: 3,
      label: "Replace single quotes with double quotes dynamically inside the concatenated string.",
      isCorrect: false,
      feedback: "Incorrect. Quote replacement is fragile and bypassable under various database SQL configurations."
    }
  ];

  const handleTestOption = (optId: number, isCorrect: boolean) => {
    setSelectedOption(optId);
    if (isCorrect) {
      setChallengeSolved("solved");
    } else {
      setChallengeSolved("wrong");
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!submittedEmail.trim()) return;
    setShowApplySuccess(true);
    setTimeout(() => {
      setSubmittedEmail("");
    }, 2000);
  };

  return (
    <div id="careers-portal-root" className="bg-black/40 border border-neutral-900 rounded-md p-6 lg:p-8 select-none space-y-8">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-neutral-900 gap-4">
        <div className="space-y-1.5 font-sans">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-emerald-500" />
            <span className="font-mono text-[9px] text-[#888] uppercase tracking-[0.25em]">SECURE TALENT INTAKE</span>
          </div>
          <h3 className="font-sans font-black text-lg lg:text-xl text-white uppercase tracking-wider">
            Jailsoft Labs Open Positions
          </h3>
          <p className="font-sans text-xs text-neutral-400 font-light max-w-xl leading-normal">
            Explore our specialized systems engineering roles. You can review current openings and even take our secure coding aptitude test below to stand out.
          </p>
        </div>
        <span className="font-mono text-[8.5px] text-neutral-550 border border-neutral-900 bg-neutral-950 px-3 py-1.5 rounded-sm shrink-0">
          CAREERS_REG: ACTIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Careers selector & Job details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-widest block font-bold">
              01 // OPEN LAB ROLES
            </span>

            <div className="flex flex-wrap gap-2">
              {jobs.map((job, idx) => (
                <button
                  key={job.id}
                  onClick={() => {
                    setSelectedJobIdx(idx);
                    setShowApplySuccess(false);
                  }}
                  className={`px-4 py-2.5 font-sans text-xs uppercase tracking-wide rounded-sm border transition-all text-left ${
                    idx === selectedJobIdx
                      ? "bg-white text-black border-white font-extrabold"
                      : "bg-[#050505] text-neutral-400 border-neutral-900 hover:border-neutral-800 hover:text-white"
                  }`}
                >
                  {job.title}
                </button>
              ))}
            </div>
          </div>

          {/* Job Details Dossier */}
          <div className="p-6 bg-[#050505] border border-neutral-900 rounded space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-950 pb-3">
              <div className="space-y-1">
                <span className="font-mono text-[8px] text-neutral-650 text-neutral-500 block uppercase">
                  CLASSIFICATION: {selectedJob.classification} &bull; {selectedJob.department}
                </span>
                <h4 className="font-sans font-black text-sm uppercase tracking-wider text-white">
                  {selectedJob.title}
                </h4>
              </div>
            </div>

            <div className="space-y-4 font-sans text-xs leading-relaxed font-light">
              <div className="space-y-2">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
                  POSITION REQUIREMENT SPECIFICATIONS:
                </span>
                <ul className="space-y-1 text-neutral-300">
                  {selectedJob.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 pt-2">
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
                  PRIMARY RESPONSIBILITIES:
                </span>
                <ul className="space-y-2 text-neutral-400 font-light">
                  {selectedJob.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2 leading-relaxed">
                      <span className="text-emerald-500 font-mono text-[9px] font-bold shrink-0 mt-0.5">[{rIdx + 1}]</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Simulated interactive Application Form */}
            <form onSubmit={handleApply} className="pt-4 border-t border-neutral-950 flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-600 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter secure contact email to apply..."
                  value={submittedEmail}
                  onChange={(e) => setSubmittedEmail(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-900 rounded-sm py-3.5 pl-11 pr-4 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-neutral-500 focus:bg-black transition-all font-mono"
                />
              </div>
              <button
                type="submit"
                className="bg-white hover:bg-neutral-200 text-black font-sans text-xs font-black uppercase tracking-widest px-6 py-4 rounded-sm flex items-center justify-center space-x-2 transition-all shadow"
              >
                <Send className="w-3.5 h-3.5 shrink-0" />
                <span>SUBMIT CASE</span>
              </button>
            </form>

            {showApplySuccess && (
              <div className="p-3.5 bg-emerald-950/20 border border-emerald-950/30 text-emerald-400 rounded-sm font-mono text-[10px] text-center animate-pulse">
                APPLICATION PACKET REGISTERED. LABS HUMAN RESOURCES WILL RETRIEVE.
              </div>
            )}
          </div>
        </div>

        {/* Right: Security Aptitude test */}
        <div className="lg:col-span-5 bg-black border border-neutral-900 rounded p-6 space-y-5">
          <div className="space-y-1">
            <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-widest block font-bold">
              02 // LAB TECHNICAL APTITUDE CHECK
            </span>
            <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
              Audit the vulnerable database code snippet below to prove your development capabilities. Identify and select the absolute safest patch technique.
            </p>
          </div>

          {/* Code display */}
          <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-sm space-y-1 max-w-full">
            <span className="font-mono text-[8px] text-red-400 uppercase tracking-wide block flex items-center space-x-1">
              <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
              <span>DETECTOR: HIGH RISK IMMINANT SECURITY OVERRIDE FLOW</span>
            </span>
            <pre className="text-neutral-300 font-mono text-[9px] leading-relaxed select-all overflow-x-auto pt-2 max-w-full">
              {`// Vulnerable Node.js Endpoint concats inputs\n`}
              {`const query = "SELECT * FROM residents"\n`}
              {`  + " WHERE name = '" + req.body.name + "'";\n`}
              {`db.execute(query);`}
            </pre>
          </div>

          <div className="space-y-2.5">
            <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">
              CHOOSE SECURE STRUCTURAL REMEDY:
            </span>

            <div className="space-y-2">
              {options.map((opt) => {
                const isSelected = opt.id === selectedOption;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleTestOption(opt.id, opt.isCorrect)}
                    className={`w-full text-left p-3.5 rounded border transition-all text-xs font-sans flex items-start space-x-3 leading-relaxed ${
                      isSelected
                        ? opt.isCorrect
                          ? "bg-emerald-950/10 border-emerald-500 text-emerald-100"
                          : "bg-red-950/10 border-red-500 text-red-100"
                        : "bg-[#050505] border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                    }`}
                  >
                    <span className="font-mono text-[9px] text-neutral-500 shrink-0 mt-0.5">[{opt.id}]</span>
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Feedback display */}
          {challengeSolved !== "unattempted" && (
            <div className="animate-fade-in pt-2">
              {challengeSolved === "solved" ? (
                <div className="p-4 bg-emerald-950/20 border border-emerald-900/30 text-emerald-400 rounded-sm space-y-2.5">
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>APTITUDE APPROVED CERTIFICATION SECURED</span>
                  </div>
                  <p className="font-sans text-[11px] leading-relaxed text-neutral-300 font-light">
                    {options.find(o => o.isCorrect)?.feedback} Your score has been pinned to your virtual application record. Excellent diagnostics work!
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-red-950/20 border border-red-900/30 text-red-450 text-red-400 rounded-sm space-y-1.5">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-red-400 block">
                    SANITY VERIFICATION COMPACT COMPROMISED
                  </span>
                  <p className="font-sans text-[11px] leading-relaxed text-neutral-300 font-light">
                    That patch routine still permits vulnerabilities under query engines. Select a different mitigation to fully block injections.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between pt-1 border-t border-neutral-950 text-[8.5px] text-neutral-500 font-mono">
            <span>APTITUDE_SYSTEM: READY</span>
            <span>DIFFICULTY: LEVEL 2</span>
          </div>

        </div>
      </div>

    </div>
  );
}
