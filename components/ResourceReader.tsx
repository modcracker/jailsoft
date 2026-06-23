"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, HelpCircle, FileText, CheckSquare, ListOrdered, Calendar, 
  User, Search, Download, Check, Sparkles, AlertCircle, ArrowRight,
  MapPin, Cpu, ShieldCheck, Building, Award, Terminal
} from "lucide-react";

interface ResourceReaderProps {
  slug: string;
  resourceName: string;
}

interface CaseStudyDetail {
  id: string;
  title: string;
  facility: string;
  type: "county" | "state" | "juvenile" | "federal";
  scale: string;
  challenge: string;
  bottlenecks: string;
  solution: string;
  results: string;
  repName: string;
  repTitle: string;
  repLocation: string;
  repInitials: string;
  quote: string;
  metrics: { label: string; value: string; desc: string; type: "alert" | "info" | "success" }[];
  products: { name: string; url: string }[];
  compliance: string[];
}

// 5 rich, high-fidelity case studies loaded dynamically
const caseStudies: CaseStudyDetail[] = [
  {
    id: "cs-westside",
    title: "Consolidated Digital Ledger & Real-Time Roster Migration",
    facility: "Westside Regional Corrections Complex",
    type: "county",
    scale: "1,500 active beds // 180 security staff daily",
    challenge: "Operating on a mix of paper ledgers and disconnected spreadsheets left the booking desk open to severe communication lags. Shifting guard rosters took hours each morning, creating high overtime costs and leaving blocks vulnerable during shifts.",
    bottlenecks: "Long intake processing (over 45 minutes average), key control record discrepancy risks, and hand-scheduled resident transfers that frequently conflicted with active educational and court times.",
    solution: "A complete software replacement, migrating 400,000 historical resident files into carbon-copied Jailsoft cloud database systems. We deployed the Facility Management Suite integrated with biometric gate controls and automatic shift dispatch engines.",
    results: "Average intake booking speed dropped below 12 minutes. Automated labor calculations cut overtime costs by 55%, and biometric verification solved cross-block resident tracking errors.",
    repName: "Superintendent Harold Boyd",
    repTitle: "Facility Director",
    repLocation: "Westside Regional Corrections Complex",
    repInitials: "HB",
    quote: "Jailsoft completely transformed our administrative oversight. Before replacing our spreadsheets with dynamic scheduling, shift dispatch spent 4 hours every morning tracing rosters. Now, booking, cell scheduling, and compliance sit consolidated inside a secure screen, protecting us from liability.",
    metrics: [
      { label: "Assault Incident Rate", value: "-42% Reduction", desc: "Observed drop in active housing yard infractions within 60 days of deploying biometric wicket gate tracking.", type: "alert" },
      { label: "Shift Dispatch Overtime", value: "-55% Overtime Saved", desc: "Consolidated labor schedules resolved redundancy and kept guard shifts aligned with union labor safety ratios.", type: "success" },
      { label: "Intake Booking Delay", value: "-71% Processing Time", desc: "Cut intake checkout times from 42 minutes to under 12 minutes with automated system of record integrations.", type: "info" }
    ],
    products: [
      { name: "Inmate Records System", url: "/products/inmate-records-system" },
      { name: "Scheduling & Staffing", url: "/products/scheduling-and-staffing" },
      { name: "Facility Management Suite", url: "/products/facility-management-suite" }
    ],
    compliance: ["Title 15 County Regulations", "CJIS Level 4 Standards", "FIPS 140-2 Key Verification"]
  },
  {
    id: "cs-jefferson",
    title: "High-Traffic Dynamic Booking Verification & Medical Intake Triage",
    facility: "Jefferson County Intake Center",
    type: "county",
    scale: "800 active beds // 120 county marshals daily",
    challenge: "Handling up to 80 booking events every day created massive lines at the intake desk. Security officials struggled to verify background warrants quickly, leading to legal liability risks and double-booking.",
    bottlenecks: "Legacy state databases failed to synchronize. Medical triage cards were filled out on paper, meaning vital medical holds were often missed during busy weekend intakes.",
    solution: "We installed an automated check-in screen integrated with outbound JSON API gateways connected directly to state databases. The system includes Jailsoft's Classification and Intake Medical Screening module, forcing digital triage validations that lock booking records until complete.",
    results: "Warrant checks are now completed in milliseconds. Intake processing times dropped from 50 minutes to 9 minutes, and medical safety incidents decreased to zero due to automatic health-hold flags.",
    repName: "Sheriff Sandra Vance",
    repTitle: "County Sheriff",
    repLocation: "Jefferson County Sheriff’s Department",
    repInitials: "SV",
    quote: "In our high-turnover intake harbor, error-free booking is a matter of life and safety. Jailsoft’s Classification Engine and direct biometric verify lines completely eliminated double-booking and intake backlog.",
    metrics: [
      { label: "Warrant Query Latency", value: "<15ms Live Search", desc: "Instantly checks local, state, and national indices for active outstanding warrants.", type: "success" },
      { label: "Triage Miss Rates", value: "0% Missed Health Alerts", desc: "Enforces required question forms before a resident can be assigned to a general housing block.", type: "info" },
      { label: "Holding Yard Crowds", value: "-62% Peak Backlog", desc: "Optimized intake routes moved residents into safe blocks quickly, reducing holding cell congestion.", type: "alert" }
    ],
    products: [
      { name: "Inmate Records System", url: "/products/inmate-records-system" },
      { name: "Classification & Risk Assessment", url: "/products/classification-and-risk-assessment" },
      { name: "Biometric Access Control", url: "/products/biometric-access-control" }
    ],
    compliance: ["CJIS Level 4 Data Rules", "HIPAA Data Privacy Standards", "PREA Standard 115.11"]
  },
  {
    id: "cs-mountain",
    title: "Hardwired PLC Solenoid Isolation & Perimeter Sensory Network",
    facility: "Mountain State Penitentiary",
    type: "state",
    scale: "2,800 active beds // 320 state correction officers",
    challenge: "Aging electronic door relays suffered from high latency and frequent connection failures. Intermittent network drops occasionally un-synced door indicators on command console maps, requiring slow manual checks.",
    bottlenecks: "Legacy central server configuration was prone to total block lockdowns during minor local software crashes. Local wiring lacked tamper-proof alerts, leaving doors at risk during power cuts.",
    solution: "A complete upgrade to dry-contact PLC relays running on low-voltage copper loops. We installed hardwired magnetic latch solenoid override circuits connected directly to autonomous, solid-state gate controller controllers.",
    results: "State-wide compliance audits passed with zero issues. Door command latency dropped to 0.1 seconds, and local lock loops remain fully functional even during county fiber disconnects.",
    repName: "Warden Terrence Miller",
    repTitle: "Lead Warden",
    repLocation: "MSP Department of Corrections",
    repInitials: "TM",
    quote: "Upgrading doors in a live high-security facility is the equivalent of heart surgery. Jailsoft’s hardwired PLC architecture permitted block-by-block isolation, upgrading older physical panels without compromising safety.",
    metrics: [
      { label: "Relay Reaction Latency", value: "0.1 Second Latency", desc: "Instant response for emergency lock signals and secure guard corridor clearance.", type: "success" },
      { label: "Signal Override State", value: "100% Fail-Secure Active", desc: "Industrial high-capacity dry cell batteries lock solonoids safely during power outages.", type: "alert" },
      { label: "External Sensory Errors", value: "0 False Disconnects", desc: "Configured self-healing fiber rings that automatically isolate cable cuts without affecting the network.", type: "info" }
    ],
    products: [
      { name: "Smart Door Control Systems", url: "/products/smart-door-control-systems" },
      { name: "Perimeter Security Sensors", url: "/products/perimeter-security-sensors" },
      { name: "Duress & Panic Systems", url: "/products/duress-and-panic-systems" }
    ],
    compliance: ["FIPS 140-2 Level 3 Secure Devices", "NFPA Health Regulations", "NIST System Standards"]
  },
  {
    id: "cs-tricounty",
    title: "Unified Juvenile Facility Calendaring & Educational Program Integration",
    facility: "Tri-County Youth Recovery Campus",
    type: "juvenile",
    scale: "350 rehabilitation beds // 45 educational coordinators",
    challenge: "Coordinating educational calendars, parental visits, and counselor schedules on paper led to constant resident movement conflicts. Residents missed scheduled education hours, leading to compliance warnings.",
    bottlenecks: "Family scheduling requests were handled manually over public phone systems, taking hours of staff time. Guard escorts often forgot counselor appointments due to last-minute shifts.",
    solution: "Deployed Jailsoft's comprehensive Visitation Management portal and Scheduling & Staffing engine. Outbound parent requests were moved entirely to secure family web kiosks, allowing families to schedule online, while active schedules synchronized with counselors' security dashboards.",
    results: "Rehabilitative class participation jumped by 42%. Manual scheduling workloads dropped to zero, and the facility achieved perfect PREA classification and segregation safety reviews.",
    repName: "Director Marcus Hayes",
    repTitle: "Executive Campus Director",
    repLocation: "Tri-County Youth Campus",
    repInitials: "MH",
    quote: "Integrating video visits with automated records transformed the atmosphere of our educational halls. Removing paper lines meant case managers could devote real time to healing and group sessions.",
    metrics: [
      { label: "Educational Hours Logged", value: "+42% Class Attendance", desc: "Dynamic calendars automatically schedule escort guards for academic blocks.", type: "success" },
      { label: "Visits Self-Scheduled", value: "92% Online Adoption", desc: "Families book and verify their background clear certificates online without calling staff.", type: "info" },
      { label: "Segregation Incidents", value: "0 Security Disputes", desc: "PREA matching loops prevent scheduling overlaps between rival groups.", type: "alert" }
    ],
    products: [
      { name: "Visitation Management", url: "/products/visitation-management" },
      { name: "Scheduling & Staffing", url: "/products/scheduling-and-staffing" },
      { name: "Facility Management Suite", url: "/products/facility-management-suite" }
    ],
    compliance: ["PREA Segment Safety Rules", "ADA Communication Access", "Title 15 Youth Guidelines"]
  },
  {
    id: "cs-jointintel",
    title: "Secure Outbound Data Segregation & Joint-Agency Document Enveloping",
    facility: "Federal Detention Unit, Joint Intelligence Site",
    type: "federal",
    scale: "600-bed federal multi-agency detention hub",
    challenge: "State and federal agencies operating within the same physical building needed to share records without exposing sensitive, non-public investigation files.",
    bottlenecks: "Legacy files combined multi-jurisdictional audits in one database, leading to potential data leaks and security concerns during standard court inquiries.",
    solution: "Jailsoft deployed a private government hybrid cloud instance with separate database containers. Standard records are stored on isolated, encrypted tables with different levels of access.",
    results: "The facility passed three consecutive federal audits with zero security findings. Database query times dropped below 10 milliseconds, and secure electronic data sharing eliminated paper records entirely.",
    repName: "Special Analyst Diana Vance",
    repTitle: "Federal Security Lead",
    repLocation: "Joint Intelligence Security Office",
    repInitials: "DV",
    quote: "For multi-jurisdictional intelligence hubs, secure data segregation is absolutely critical. Jailsoft's CJIS Level 4 columns allow our federal audit teams to review active records with total isolation.",
    metrics: [
      { label: "Government Cloud Sync", value: "100% Secure Transfer", desc: "Encrypts transfer pipelines using AES-GCM-256 standard and FIPS protocols.", type: "success" },
      { label: "Audit Findings Rate", value: "0 Discovered Warnings", desc: "Complete records history logs every read action down to individual milliseconds.", type: "alert" },
      { label: "Data Search Latency", value: "<10ms Database Queries", desc: "Delivers search results instantly across deep historical files and intelligence indices.", type: "info" }
    ],
    products: [
      { name: "Data Analytics Dashboard", url: "/products/data-analytics-dashboard" },
      { name: "Inmate Records System", url: "/products/inmate-records-system" },
      { name: "Classification & Risk Assessment", url: "/products/classification-and-risk-assessment" }
    ],
    compliance: ["CJIS Level 4 Information Policy", "FIPS 140-2 Level 4 Devices", "NIST SP 800-53 Level High"]
  }
];

export default function ResourceReader({ slug, resourceName }: ResourceReaderProps) {
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);
  const [glossaryLetter, setGlossaryLetter] = useState<string>("B");
  const [paperPage, setPaperPage] = useState<number>(1);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [complianceChecks, setComplianceChecks] = useState<Record<string, boolean>>({
    "cjis-1": true,
    "cjis-2": true,
    "prea-1": false,
    "prea-2": true,
    "fips-1": false
  });

  // Dynamic Case Studies Selection Engine
  const [caseSearchQuery, setCaseSearchQuery] = useState("");
  const [caseCategory, setCaseCategory] = useState<"all" | "county" | "state" | "juvenile" | "federal">("all");
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);

  // Toggle checklist
  const toggleCompliance = (id: string) => {
    setComplianceChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // 1. FAQ Data
  const faqItems = [
    {
      q: "Is Jailsoft's database infrastructure fully compliant with CJIS Level 4 regulatory mandates?",
      a: "Yes. All data stored inside the Jailsoft state of record and database schemas is secured with mandatory AES-256 field-level encryption, FIPS 140-2 endpoint certificates, and tamper-proof write-ahead transaction logs, complying entirely with CJIS Level 4 guidelines."
    },
    {
      q: "Can the door override system isolate specific physical blocks during network outages?",
      a: "Absolutely. The hardwired physical PLC door control units run autonomous solid-state logic loops. If the secondary fiber network goes down, local lock wickets remain fully operational, permitting manual physical key overrides or offline local keypad controls."
    },
    {
      q: "What is Jailsoft's standard software support SLA policy for emergency overrides?",
      a: "We maintain a 99.99% active uptime SLA guarantee. Our dedicated tier-1 field response engineers are available 24/7/365 to handle emergency situations, offering remote bypass diagnostics within 15 minutes of authenticated secure tickets."
    },
    {
      q: "Does Jailsoft support integrations with legacy county criminal justice warrant systems?",
      a: "Yes. Jailsoft includes an enterprise-ready, CJIS-authorized, outbound XML/JSON API gateway that bridges seamlessly with various legacy local, state, and provincial databases to auto-verify criminal backgrounds and outstanding court dates."
    }
  ];

  // 2. Glossary Dictionary Content
  const glossaryTerms: Record<string, { term: string; desc: string }[]> = {
    "B": [
      { term: "Biometric Wicket", desc: "A secure physical passage gate integrated with iris scanners or fingerprint metrics ensuring authenticated personnel tracking." },
      { term: "Booking Ledger Register", desc: "The primary digital system of record recording intake details, arrest demographics, and classification scores." }
    ],
    "C": [
      { term: "CJIS security check", desc: "Criminal Justice Information Services security directives mandated by FBI standards for accessing national crime indexes." },
      { term: "Containment Boundary Status", desc: "The combined state of hardwired locks, door relays, and proximity sensors isolating cell block corridors." }
    ],
    "D": [
      { term: "Duress Alarm Override", desc: "A hardwired, solid-state alarm response priority triggering force locks on dayroom gates while alerting guards." },
      { term: "Dynamic Shift dispatch", desc: "Algorithms resolving staff roster assignments based on union labor safety ratios, sick leave alerts, and housing occupancy." }
    ],
    "F": [
      { term: "FIPS 140-2 certification", desc: "Federal Information Processing Standard specifying cryptographic core criteria protecting highly classified information." },
      { term: "Facility Map PLC Relay", desc: "A low-level electronic circuit connecting physical magnetic latches directly to digital network state monitors." }
    ]
  };

  // Simulate Document Download click
  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 3500);
  };

  // Process case study search filtering
  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesCategory = caseCategory === "all" || cs.type === caseCategory;
    const matchesSearch = cs.title.toLowerCase().includes(caseSearchQuery.toLowerCase()) ||
                          cs.facility.toLowerCase().includes(caseSearchQuery.toLowerCase()) ||
                          cs.challenge.toLowerCase().includes(caseSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCS = filteredCaseStudies[activeCaseIdx] || filteredCaseStudies[0] || caseStudies[0];

  return (
    <div id="resource-reader-container" className="pt-16 border-t border-neutral-900 bg-neutral-950/40 pb-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-900">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-amber-950/20 border border-amber-900/30 rounded-full">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-mono text-[8px] text-amber-400 uppercase tracking-widest font-bold">RESOURCE HUB</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
              EVALUATION MODULE & WORKSPACE
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-2xl leading-normal">
              Examine technical manuals, view interactive federal check-sheets, or query specific jargon entries directly associated with the {resourceName} resource sector.
            </p>
          </div>
          <div className="hidden sm:flex items-center space-x-3 font-mono text-[9px] text-neutral-500 bg-black/40 border border-neutral-900 px-3 py-2 rounded-sm">
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span className="uppercase tracking-widest text-[8px]">CORE_{slug.toUpperCase()}_REV_2026</span>
          </div>
        </div>

        {/* 1. RETAIL RENDERER: CASE STUDIES HUB */}
        {slug === "case-studies" && (
          <div className="space-y-8">
            
            {/* Search & Category Filter bar */}
            <div className="bg-black/40 border border-neutral-900 p-4 rounded-md flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category buttons */}
              <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
                {[
                  { id: "all", label: "ALL DEPLOYMENTS" },
                  { id: "county", label: "COUNTY DETENTION" },
                  { id: "state", label: "STATE PRISONS" },
                  { id: "juvenile", label: "JUVENILE REHAB" },
                  { id: "federal", label: "FEDERAL HUBS" }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setCaseCategory(cat.id as any);
                      setActiveCaseIdx(0);
                    }}
                    className={`px-3 py-1.5 font-mono text-[8.5px] font-bold tracking-widest border rounded transition-all ${
                      caseCategory === cat.id
                        ? "bg-amber-950/20 border-amber-500 text-amber-450 text-white"
                        : "bg-neutral-950 border-neutral-900 text-neutral-450 text-neutral-400 hover:text-white hover:border-neutral-800"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-72">
                <Search className="w-3.5 h-3.5 text-neutral-550 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Query deployment records..."
                  value={caseSearchQuery}
                  onChange={(e) => {
                    setCaseSearchQuery(e.target.value);
                    setActiveCaseIdx(0);
                  }}
                  className="w-full bg-[#050505] border border-neutral-900 text-white rounded font-sans text-xs pl-9 pr-4 py-2 placeholder-neutral-600 focus:outline-none focus:border-neutral-800"
                />
              </div>

            </div>

            {/* Main Interactive Workplace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Case Studies Picker Card Grid */}
              <div className="lg:col-span-4 space-y-3">
                <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block">
                  AVAILABLE PORTFOLIO ({filteredCaseStudies.length})
                </span>
                
                {filteredCaseStudies.length === 0 ? (
                  <div className="p-8 text-center bg-black border border-neutral-900 rounded">
                    <span className="font-mono text-[10px] text-neutral-500 block">NO RECORDS MATCHED</span>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {filteredCaseStudies.map((cs, idx) => {
                      const isActive = cs.id === activeCS.id;
                      return (
                        <button
                          key={cs.id}
                          onClick={() => setActiveCaseIdx(idx)}
                          className={`w-full text-left p-4 rounded-sm border transition-all duration-300 flex flex-col justify-between ${
                            isActive
                              ? "bg-amber-950/20 border-amber-500/75 text-white shadow-xl"
                              : "bg-black border-neutral-900 text-neutral-400 hover:border-neutral-850 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full mb-2">
                            <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">
                              {cs.type.toUpperCase()} DETENTION
                            </span>
                            <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-amber-400 animate-pulse" : "bg-neutral-850"}`} />
                          </div>
                          
                          <h4 className="font-sans font-bold text-xs uppercase tracking-wide line-clamp-1 mb-1.5 text-neutral-100">
                            {cs.facility}
                          </h4>
                          
                          <p className="font-sans text-[10px] text-neutral-450 line-clamp-2 leading-relaxed">
                            {cs.title}
                          </p>
                          
                          <div className="flex items-center justify-between pt-3 border-t border-neutral-900/40 mt-3 font-mono text-[8px] text-neutral-500">
                            <span>SCALE: {cs.scale.split("//")[0].trim()}</span>
                            <span className="text-amber-500 uppercase tracking-widest font-bold">VIEW CASE →</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Case Case Workspace Details */}
              <div className="lg:col-span-8 bg-zinc-950/20 border border-neutral-900 rounded-md p-6 lg:p-8 space-y-8">
                
                {/* Active Case Study Title Header */}
                <div className="space-y-3 pb-6 border-b border-neutral-950">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[8px] px-2 py-0.5 bg-neutral-900 border border-neutral-850 rounded text-neutral-400 uppercase font-semibold">
                      LOG_ID: {activeCS.id.toUpperCase()}
                    </span>
                    <span className="font-mono text-[8px] px-2 py-0.5 bg-amber-950/25 border border-amber-900/30 rounded text-amber-400 uppercase font-bold tracking-wider">
                      {activeCS.type.toUpperCase()}_SECTOR
                    </span>
                    <span className="font-mono text-[8px] px-2 py-0.5 bg-neutral-900 border border-neutral-850 rounded text-neutral-405 text-neutral-400 uppercase">
                      SCALE: {activeCS.scale}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-xl lg:text-2xl text-white uppercase tracking-wider">
                    {activeCS.facility}
                  </h3>
                  
                  <p className="font-display text-sm text-neutral-400 leading-relaxed font-light">
                    {activeCS.title}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="space-y-3">
                  <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                    OPERATIONAL RATIOS // SYSTEM BENCHMARKS
                  </span>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {activeCS.metrics.map((metric, mIdx) => {
                      let color = "text-cyan-400";
                      let bg = "bg-neutral-950/80 border-neutral-900";
                      if (metric.type === "alert") {
                        color = "text-red-500";
                        bg = "bg-red-950/5 border-red-950/30";
                      } else if (metric.type === "success") {
                        color = "text-emerald-400";
                        bg = "bg-emerald-900/5 border-emerald-950/30";
                      }
                      return (
                        <div key={mIdx} className={`p-4 rounded-sm border ${bg} flex flex-col justify-between`}>
                          <span className="font-sans text-[10px] text-neutral-500 uppercase tracking-wider block font-bold leading-none mb-2">
                            {metric.label}
                          </span>
                          <div>
                            <div className={`font-mono text-xl lg:text-2xl font-black ${color}`}>
                              {metric.value}
                            </div>
                            <p className="font-sans text-[10px] text-neutral-400 font-light pt-1.5 leading-normal">
                              {metric.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Warden/Representative Blockquote */}
                <div className="p-6 bg-[#030303] border border-neutral-900 rounded-sm space-y-4">
                  <span className="font-mono text-[9px] text-amber-500 uppercase tracking-wider block font-bold">
                    OFFICIAL DEPLOYMENT TESTIMONY
                  </span>
                  <blockquote className="font-sans text-xs md:text-sm text-neutral-200 font-light italic leading-relaxed">
                    &ldquo;{activeCS.quote}&rdquo;
                  </blockquote>
                  
                  <div className="flex items-center space-x-3.5 pt-2">
                    <div className="w-9 h-9 bg-neutral-900 border border-neutral-800 rounded-full flex items-center justify-center font-mono text-xs text-amber-400 font-extrabold uppercase">
                      {activeCS.repInitials}
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                        {activeCS.repName}
                      </div>
                      <div className="font-mono text-[8px] text-neutral-500 uppercase">
                        {activeCS.repTitle} &bull; {activeCS.repLocation}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Narrative Walkthrough */}
                <div className="space-y-6 pt-2">
                  <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block border-b border-neutral-900 pb-2">
                    DEPLOYMENT WORKFLOW LOGS
                  </span>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs text-neutral-300 leading-relaxed">
                    
                    <div className="space-y-2 p-4 bg-black/40 border border-neutral-950 rounded-sm">
                      <div className="font-mono text-[8px] text-neutral-500 uppercase font-bold">01 // CORE CHALLENGE</div>
                      <p className="font-light">{activeCS.challenge}</p>
                    </div>

                    <div className="space-y-2 p-4 bg-black/40 border border-neutral-950 rounded-sm">
                      <div className="font-mono text-[8px] text-neutral-500 uppercase font-bold">02 // LEGACY SYSTEM BOTTLENECKS</div>
                      <p className="font-light">{activeCS.bottlenecks}</p>
                    </div>

                    <div className="space-y-2 p-4 bg-black/40 border border-neutral-950 rounded-sm">
                      <div className="font-mono text-[8px] text-neutral-500 uppercase font-bold">03 // TARGET INTEGRATION STEPS</div>
                      <p className="font-light">{activeCS.solution}</p>
                    </div>

                    <div className="space-y-2 p-4 bg-black/40 border border-neutral-950 rounded-sm">
                      <div className="font-mono text-[8px] text-neutral-500 uppercase font-bold">04 // AUDITED RESULTS ENVELOPE</div>
                      <p className="font-light">{activeCS.results}</p>
                    </div>

                  </div>
                </div>

                {/* Hardware/Software integrated pills */}
                <div className="p-4 bg-[#050505] border border-neutral-900 rounded-sm space-y-3">
                  <span className="font-mono text-[8.5px] text-[#777] uppercase tracking-wider block">
                    CORRECTIONS HARDWARE & SOFTWARE INTEGRATED
                  </span>
                  
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {activeCS.products.map((p, idx) => (
                      <Link
                        key={idx}
                        href={p.url}
                        className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 hover:border-amber-500/25 rounded font-sans text-[10px] text-neutral-300 uppercase transition-all duration-300"
                      >
                        <Cpu className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="font-medium">{p.name}</span>
                        <ArrowRight className="w-3 h-3 text-neutral-500 shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Audit & Compliance signature matrix */}
                <div className="flex flex-wrap gap-2 select-none justify-between items-center text-[10px] text-neutral-500 pt-3 border-t border-neutral-950">
                  <div className="flex flex-wrap gap-1.5">
                    {activeCS.compliance.map((com, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-neutral-900 text-neutral-400 rounded-full font-mono text-[8px] uppercase">
                        {com}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono text-[8px] uppercase tracking-widest">
                    CJIS LEVEL 4 AUDIT RECORDED: VERIFIED
                  </span>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* 2. RETAIL RENDERER: WHITEPAPERS */}
        {slug === "whitepapers" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Chapter Browser Navigation */}
            <div className="lg:col-span-4 bg-black border border-neutral-900 p-6 rounded-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                  DOCUMENT CHAPTERS
                </span>
                
                <div className="space-y-2 pt-1">
                  {[
                    { page: 1, title: "1. Core Security Architecture & Cryptographic Keys" },
                    { page: 2, title: "2. CJIS Level 4 Data Compliance Schemas" },
                    { page: 3, title: "3. Hardwired PLC Hardware Solenoids Isolation" },
                    { page: 4, title: "4. Physical Biometric Vectors Audit Protocols" }
                  ].map((item) => (
                    <button
                      key={item.page}
                      onClick={() => setPaperPage(item.page)}
                      className={`w-full text-left p-3 rounded-sm border font-mono text-[10px] transition-all ${
                        paperPage === item.page
                          ? "bg-amber-950/20 border-amber-500 text-white"
                          : "bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Secure verification block */}
              <div className="space-y-2 pt-4 border-t border-neutral-900">
                <span className="font-mono text-[8.5px] text-[#777] uppercase tracking-wider block">
                  SHA-256 SECURED VERIFICATION
                </span>
                <div className="p-3 bg-[#050505] border border-neutral-900 rounded font-mono text-[9px] text-amber-500 select-all overflow-x-auto">
                  SHA256: 8a92efd1a039bfe8902acdefcb9911e2
                </div>
              </div>
            </div>

            {/* Simulated pdf text segment and simulate download triggers */}
            <div className="lg:col-span-8 bg-black border border-neutral-900 rounded-md p-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">
                    SYSTEM MANUAL CHAPTER // EXCERPT PAGE {paperPage} OF 4
                  </span>
                  <span className="font-mono text-[8.5px] text-amber-400 uppercase font-bold tracking-widest">
                    RECODER STATUS: ENCRYPTED
                  </span>
                </div>

                {paperPage === 1 && (
                  <div className="space-y-4">
                    <h4 className="font-sans font-black text-sm uppercase tracking-wide text-white">1. Core Security Architecture & Cryptographic Keys</h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      Jailsoft implements rigorous hardware-level boundary isolation policies that dictate zero-trust network logic. When dynamic command parameters are directed to an active magnetic latch, they undergo digital signature analysis requiring SHA-256 certificate authorization. Under extreme load scenarios, automated hardware limits disconnect third-party network modules while keeping internal PLC circuits sealed against unauthorized digital signals.
                    </p>
                  </div>
                )}
                {paperPage === 2 && (
                  <div className="space-y-4">
                    <h4 className="font-sans font-black text-sm uppercase tracking-wide text-white">2. CJIS Level 4 Data Compliance Schemas</h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      To comply with state administrative database criteria, our database tables utilize column-level field audits. Any edit to a booking file, resident status modification, or movement authorization triggers transactional hashing. If an altered field registry mismatch is detected, the affected system instantly raises warning flags to shift commanders while routing alerts to remote secure servers.
                    </p>
                  </div>
                )}
                {paperPage === 3 && (
                  <div className="space-y-4">
                    <h4 className="font-sans font-black text-sm uppercase tracking-wide text-white">3. Hardwired PLC Hardware Solenoids Isolation</h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      Physical containment is established using dry contact relay loops connected to specialized dual-latching Solenoids. Operating over local low-voltage copper circuits, these latches require a 24-volt continuous trigger pulse to alter state. In case of localized power failures, backup battery banks automatically lock solonoids into secure position, satisfying life-safety compliance protocols through fire-latch overrides.
                    </p>
                  </div>
                )}
                {paperPage === 4 && (
                  <div className="space-y-4">
                    <h4 className="font-sans font-black text-sm uppercase tracking-wide text-white">4. Physical Biometric Vectors Audit Protocols</h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      Failsafe movement audits mandate dual-factor validations across housing transitions. Biometric irises are transformed into desensitized digital spatial vector points immediately upon registration. Raw biological patterns are instantly destroyed in memory, storing only high-dimension hash projections. This prevents reverse-engineering of citizen personal health criteria, shielding the municipality from privacy lawsuits.
                    </p>
                  </div>
                )}
              </div>

              {/* Simulate CSV/PDF Download */}
              <div className="pt-6 border-t border-neutral-900 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-sans text-[10.5px] text-neutral-400 font-light">
                  Download full PDF handbook detailing GSA G-Cloud specifications.
                </span>
                
                <button
                  onClick={handleSimulateDownload}
                  disabled={downloadSuccess}
                  className={`px-5 py-2.5 font-sans text-[10px] font-black uppercase tracking-widest rounded-sm transition-all flex items-center space-x-2 shrink-0 ${
                    downloadSuccess 
                      ? "bg-emerald-950 border border-emerald-900 text-emerald-400 cursor-default" 
                      : "bg-white hover:bg-neutral-200 text-black"
                  }`}
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>DOWNLOADING SECURE BUNDLE...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Secure PDF</span>
                    </>
                  )
                }
                </button>
              </div>
            </div>

          </div>
        )}

        {/* 3. RETAIL RENDERER: COMPLIANCE AND STANDARDS */}
        {slug === "compliance-and-standards" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Interactive compliance audit checklist */}
            <div className="lg:col-span-8 bg-black border border-neutral-900 rounded-md p-6 space-y-6">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                01 / FEDERAL COMPLIANCE CHECK-SHEET WORKSHEET
              </span>

              <div className="space-y-3.5">
                {[
                  { id: "cjis-1", audit: "CJIS Requirement 5.10.1.2: AES-256 Field Encryption on Offender Database", desc: "Mandates that all citizen Personally Identifiable Information (PII) files stored inside local databases uses strong field-locked symmetric encryption keys." },
                  { id: "cjis-2", audit: "CJIS Requirement 5.6.2.1.1: Standard Multi-factor login on Administration screens", desc: "Forces secure certificate tokens or secondary biometric handshakes before allowing administrative adjustments to rosters." },
                  { id: "prea-1", audit: "PREA Standard 115.11: Objective Classification & Segregation Risk Logic", desc: "Demands rigorous statistical screening of every resident to calculate objective hazard levels prior to housing grid assignment." },
                  { id: "prea-2", audit: "PREA Standard 115.13: Double-Blind CCTV Incident Audit Logs", desc: "Verifies CCTV storage feeds cannot be altered or purged by housing block command guards without secondary signoff." },
                  { id: "fips-1", audit: "FIPS 140-2 Level 3: Hardwired Cryptographic Module for Locks Override", desc: "Requires physical key management modules that store master lock relays behind military-grade physical chassis tamper sensors." }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => toggleCompliance(item.id)}
                    className="w-full text-left p-4 bg-[#050505] hover:bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800 rounded-sm transition-all flex items-start space-x-4"
                  >
                    <div className="pt-0.5 shrink-0">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                        complianceChecks[item.id]
                          ? "bg-emerald-500 border-emerald-400 text-black text-xs font-bold"
                          : "border-neutral-700 bg-black"
                      }`}>
                        {complianceChecks[item.id] && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
                        {item.audit}
                      </h5>
                      <p className="font-sans text-[11px] text-neutral-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Audit Status Ledger panel */}
            <div className="lg:col-span-4 bg-[#030303] border border-neutral-900 rounded-md p-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                  02 / COMPLIANCE AUDIT DISCOVERY
                </span>
                
                <div className="space-y-4 pt-1">
                  <div className="p-4 bg-[#050505] border border-neutral-900 rounded-sm space-y-1">
                    <span className="font-mono text-[8px] text-neutral-500 block uppercase">Overall Audit Score</span>
                    <div className="font-mono text-3xl font-black text-emerald-400">
                      {Object.values(complianceChecks).filter(Boolean).length * 20}% Checked
                    </div>
                    <p className="font-sans text-[10.5px] text-neutral-400 font-light leading-normal pt-1">
                      Toggle checkboxes on the left checklist in real time to simulate auditing validation tests!
                    </p>
                  </div>

                  {Object.values(complianceChecks).filter(Boolean).length === 5 ? (
                    <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-sm flex items-start space-x-3 text-emerald-400">
                      <Sparkles className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h6 className="font-sans font-bold text-xs uppercase text-white tracking-wider">SECURE SHIELD GREEN</h6>
                        <p className="font-sans text-[10px] text-neutral-400 font-light pt-0.5 leading-normal">
                          All systems evaluated matching Federal Standards. Perfect liability protection secured.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 bg-amber-950/20 border border-amber-900/40 rounded-sm flex items-start space-x-3 text-amber-500">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <h6 className="font-sans font-bold text-xs uppercase text-white tracking-wider font-extrabold">PENDING DISCOVERY</h6>
                        <p className="font-sans text-[10px] text-neutral-400 font-light pt-0.5 leading-normal">
                          Click outstanding boxes to complete compliance review simulating real-life field conditions.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="font-mono text-[8.5px] text-neutral-500 pt-6">
                LEDGER ID: REG_DOC_FIP_CJIS_PREA_9921
              </div>
            </div>

          </div>
        )}

        {/* 4. RETAIL RENDERER: FAQ */}
        {slug === "faq" && (
          <div className="max-w-3xl mx-auto bg-black border border-neutral-900 p-6 rounded-md space-y-4">
            <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block pb-2 border-b border-neutral-900">
              EXPANDABLE FAQS & COMPLIANCE DEBATES
            </span>
            
            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = faqOpenIndex === idx;
                return (
                  <div key={idx} className="border border-neutral-900 rounded-sm bg-[#050505]">
                    <button
                      onClick={() => setFaqOpenIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between font-sans text-xs font-bold uppercase tracking-wide text-white hover:bg-neutral-950 transition-colors"
                    >
                      <span>{item.q}</span>
                      <span className="text-amber-500 font-mono text-sm shrink-0 pl-4">{isOpen ? "[-]" : "[+]"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 font-sans text-xs text-neutral-300 leading-relaxed font-light border-t border-neutral-950 pt-2.5">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. RETAIL RENDERER: GLOSSARY */}
        {slug === "glossary" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Alphabet index letters selector */}
            <div className="lg:col-span-3 bg-[#030303] border border-neutral-900 p-6 rounded-md flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                  GLOSSARY INDEX
                </span>
                
                <div className="grid grid-cols-2 gap-2 pt-1 select-none">
                  {["B", "C", "D", "F"].map((letter) => (
                    <button
                      key={letter}
                      onClick={() => setGlossaryLetter(letter)}
                      className={`py-3.5 text-center font-mono text-lg font-black tracking-widest rounded transition-all border ${
                        glossaryLetter === letter
                          ? "bg-amber-950/20 border-amber-500 text-white shadow-sm"
                          : "bg-black border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="font-mono text-[8px] text-neutral-600 uppercase leading-normal pt-6">
                *Alphabetical indices cover prison logistics terminology, CJIS databases and electronics keywords.
              </div>
            </div>

            {/* Terms display */}
            <div className="lg:col-span-9 bg-black border border-neutral-900 rounded-md p-6 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-900 pb-3">
                <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold">
                  INDEX GLOSSARY // LETTER &apos;{glossaryLetter}&apos; ENTRIES
                </span>
                <span className="font-mono text-[9px] text-[#555]">
                  {glossaryTerms[glossaryLetter]?.length || 0} TOTAL SPECIFIC DEFINITIONS FOUND
                </span>
              </div>

              <div className="space-y-6">
                {glossaryTerms[glossaryLetter]?.map((item, idx) => (
                  <div key={idx} className="space-y-2 p-4 bg-[#050505] border border-neutral-900 rounded-sm">
                    <h4 className="font-sans font-extrabold text-sm text-amber-400 uppercase tracking-wide">
                      {item.term}
                    </h4>
                    <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 6. GENERAL FALLBACK */}
        {!["case-studies", "whitepapers", "compliance-and-standards", "faq", "glossary"].includes(slug) && (
          <div className="max-w-3xl mx-auto bg-black border border-neutral-900 p-8 rounded-md space-y-6 text-center">
            <HelpCircle className="w-12 h-12 text-amber-500 mx-auto" />
            <div className="space-y-2">
              <h3 className="font-sans font-black text-lg text-white uppercase tracking-wider">
                SECURE DOCUMENT RECODER WORKSPACE
              </h3>
              <p className="font-sans text-xs text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
                This legal or administrative file sits sealed inside the municipal archive directory. Secure authorization certificates verify local preview rights under FIPS protection models.
              </p>
            </div>
            
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded font-mono text-[9px] text-neutral-400 uppercase tracking-widest select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>CJIS Level 4 Ledger Match Verified</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
