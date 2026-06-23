export interface PageContent {
  slug: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  features: string[];
  specs: { name: string; value: string }[];
  compliance: string[];
  links: { label: string; href: string }[];
}

export const productsData: PageContent[] = [
  // --- SOFTWARE PRODUCTS (8) ---
  {
    slug: "facility-management-suite",
    title: "Facility Management Suite | Enterprise Jail Workspaces | Jailsoft",
    description: "Coordinate enterprise-grade custody workflows, shift schedules, and operational facilities metrics with the ultimate command and control hub.",
    h1: "Facility Management Suite",
    subtitle: "Command and control orchestration for tier-one high-security detention centers.",
    image: "https://picsum.photos/seed/jailsoft-fms/1200/800",
    paragraphs: [
      "The Jailsoft Facility Management Suite (FMS) serves as the primary system-of-record and operational workspace for administrative staff, security supervisors, and field officers inside corrections facilities. Engineered as an integrated web-native ecosystem, FMS aggregates real-time data from internal sub-systems, including live inmate headcounts, officer dispatch boards, and active shift logs, into a single secure interface. By centralizing management processes, FMS helps eliminate paper-based record dependencies and reduces dangerous lag times in critical communications.",
      "The platform utilizes an event-driven architecture designed to process state changes instantly across physical terminals within secure control rooms. At its core, the suite handles complex routing logs of administrative directives, tracking and timestamping every change in custodial status to maintain complete audit readiness. With automated escalation trees, supervisors receive instantaneous notifications of missed logs or compliance delays, ensuring the complex operational matrix is adhered to with maximum accuracy.",
      "Recognizing the diverse requirements of municipal, state, and private facilities, the suite's layout is structured to maintain maximum visibility at all times. Command screens display live bento-style telemetry metrics representing general facility population, housing unit status, and active incident lists. This design minimizes operational friction, allowing supervisors to assess security postures of designated wards or cells with a single glance."
    ],
    features: [
      "Real-time central command dashboard with interactive housing unit layouts",
      "Automated operational checklists configured to local standard operating procedures (SOPs)",
      "Instantaneous officer dispatching logs with priority classification cues",
      "Comprehensive system audits tracking terminal interactions down to milliseconds"
    ],
    specs: [
      { name: "Service Architecture", value: "Distributed microservices with offline-capable local server caches" },
      { name: "Telemetry Latency", value: "< 250 milliseconds across local mesh networking nodes" },
      { name: "Compliance Compatibility", value: "Fully audited under PREA and Title 15 requirements" },
      { name: "Backup Redundancy", value: "Triple-replicated block-level storage with fallback generators" }
    ],
    compliance: ["PREA § 115.11", "Title 15 Regulations", "CJIS Level 4", "SOC 2 Type II"],
    links: [
      { label: "State Prisons Solution", href: "/solutions/state-prisons" },
      { label: "County Jails Solution", href: "/solutions/county-jails" },
      { label: "Inmate Records System", href: "/products/inmate-records-system" }
    ]
  },
  {
    slug: "inmate-records-system",
    title: "Inmate Records System | Active Booking & Custody Registry | Jailsoft",
    description: "Manage digital custody files, physical assets, active booking logs, and risk flags under secure, CJIS-compliant record engines.",
    h1: "Inmate Records System",
    subtitle: "Secure digital custody registries engineered for millisecond precision and compliance.",
    image: "https://picsum.photos/seed/jailsoft-irs/1200/800",
    paragraphs: [
      "The Jailsoft Inmate Records System (IRS) is an enterprise-tier ledger engineered to secure personal, medical, legal, and operational histories of every resident inside a correctional facility. From the minute of initial intake booking to final release or transfer, IRS maintains an unbroken, tamper-evident record of all movements, property logs, legal mandates, and housing history. By establishing a central secure source-of-truth, IRS streamlines coordination across judicial partners, medical staff, and transport coordinators.",
      "The database is designed with advanced cryptographic safeguards to protect sensitive records from unauthorized access while maintaining rapid lookup capabilities. Our system supports high-throughput querying of active warrants, protective status overrides, and specialized housing requirements (medical holding, administrative isolation, or special care). Each metadata schema update is automatically logged, ensuring that legal teams can retrieve a verified timeline of any custody period with zero discrepancy.",
      "Furthermore, the IRS integrates directly with court scheduling systems to sync arraignments, bond parameters, and sentence calculations automatically. The calculated release date engine factors in local credit structures and state-specific parole models, recalculating dates in real-time as administrative credits or disciplinary infractions are committed. This ensures booking lieutenants can handle complex release protocols with complete legal confidence."
    ],
    features: [
      "Multi-faceted search indexes searching demographic, biometric, and legal criteria",
      "Automated release-date calculator conforming to state-specific statutory guidelines",
      "Digital personal property tracking with high-definition digital receipt archives",
      "Real-time alert indicators for housing conflicts, protective custody, and medical directives"
    ],
    specs: [
      { name: "Database Engine", value: "CJIS-certified relational engine with column-level encryption" },
      { name: "Audit Trail", value: "Immutable cryptographic ledger recording each cell edit and profile lookup" },
      { name: "API Throughput", value: "Up to 5,000 requests per minute with active load-balancing arrays" }
    ],
    compliance: ["CJIS Level 4", "HIPAA Security Rule", "State Records Acts", "FERPA (Juveniles)"],
    links: [
      { label: "Classification & Risk Assessment", href: "/products/classification-and-risk-assessment" },
      { label: "Federal Facilities Solution", href: "/solutions/federal-facilities" },
      { label: "Facility Management Suite", href: "/products/facility-management-suite" }
    ]
  },
  {
    slug: "scheduling-and-staffing",
    title: "Scheduling & Staffing | Corrections Officer Roster Engine | Jailsoft",
    description: "Optimize guard postings, overtime budgets, and regulatory union compliance logs using an automated rostering engine.",
    h1: "Scheduling and Staffing",
    subtitle: "Staff coordination software designed to operate around the clock with zero downtime.",
    image: "https://picsum.photos/seed/jailsoft-scheduling/1200/800",
    paragraphs: [
      "Operations within high-security facilities require continuous, multi-shift coverage with zero margin for scheduling gaps or undersighted watchposts. The Jailsoft Scheduling and Staffing engine provides corrections administrators with an automated, rule-based workforce coordination platform. It handles complex, multi-tiered staffing models while incorporating local labor agreements, guard medical restrictions, overtime caps, and minimum post requirements across different housing blocks.",
      "By utilizing an algorithmic distribution model, the module auto-populates optimal roster distributions based on real-time officer certifications (e.g. firearms qualification, emergency medical response, cell lock control training). In the event of a sudden call-out or emergency alert, the scheduling engine analyzes currently off-duty, qualified personnel and automatically sends rapid notifications utilizing verified calling systems to fill critical voids. Each schedule change or override is permanently logged, providing command teams with data-backed defense during labor arbitrations.",
      "The interface provides supervisors with a deep, grid-aligned view of security postings. Shaded zones warn when a specific post is under-staffed or when an officer has exceeded safe consecutive hours limits. By preventing officer fatigue-related errors, this scheduling component serves as a foundational safety mechanism for both staff and administrators alike."
    ],
    features: [
      "Dynamic shift bidding and schedule tracking interfaces optimized for shift rotation",
      "Automated union-rule compliance analyzer tracking meal breaks and rest periods",
      "Real-time overtime cost projection dashboards tracking budget bounds",
      "Instant backup-staff notifications with verified delivery checkbacks"
    ],
    specs: [
      { name: "Calculation Engine", value: "Constraint-satisfaction algorithmic core with parallel scheduling models" },
      { name: "Notification Rate", value: "1,200 emergency staff alerts dispatched per minute via secure links" },
      { name: "Rule Adaptability", value: "Hot-reloadable local and federal labor regulation profiles" }
    ],
    compliance: ["FLSA (Fair Labor Standards)", "FMLA Tracking", "State Union Mandates", "PREA Staffing Standards"],
    links: [
      { label: "County Jails Solution", href: "/solutions/county-jails" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" },
      { label: "Incident Reporting", href: "/products/incident-reporting" }
    ]
  },
  {
    slug: "visitation-management",
    title: "Visitation Management | Controlled Access Scheduling | Jailsoft",
    description: "Schedule, approve, and track general, professional, and legal visits under an audited security clearance system.",
    h1: "Visitation Management",
    subtitle: "Security clearing software for family and legal physical access control.",
    image: "https://picsum.photos/seed/jailsoft-visitation/1200/800",
    paragraphs: [
      "Physical and legal consultations within detention premises are primary avenues for logistical coordination but present major contraband and visual communication risks. The Jailsoft Visitation Management platform governs the lifecycle of every visitor, starting from early electronic registration and remote background checks to live visitor check-ins at entry wickets. The platform helps operators enforce strict visitor restrictions, checking registries for active warrants or court orders prior to approval.",
      "The system handles reservations for family visitation, consular meetings, and judicial consultations, adjusting schedules to fit available visitation booth capacities. It cross-references inmate disciplinary logs to block bookings automatically if an inmate has incurred privilege restrictions. At intake, visitors present identification which is checked via biometric scans or secure document scanners, matching credentials to database records.",
      "Through its administrative dashboard, visitation coordinators can view dynamic seating layouts and schedule assignments. Each visit represents a secure event, tracking starting and finishing timestamps and assigning search tiers for visitors who may have had direct physical contact. By establishing structural checkpoints, Jailsoft minimizes security risks while keeping the facility aligned with statutory visitation mandates."
    ],
    features: [
      "Integrated visitor screening integrations with automated warrant and registry checkups",
      "Dynamic capacity allocation engine keeping safe physical separation bounds",
      "Professional counselor and legal staff priority booking pathways",
      "Visitor restriction logbooks with alert flagging for active protective orders"
    ],
    specs: [
      { name: "Search Speed", value: "< 450ms across regional warrant registries" },
      { name: "Interface Security", value: "Enforced multi-factor access protocols for all terminal operations" },
      { name: "Record Archival", value: "Minimum 7-year storage compliance for visitor metadata logs" }
    ],
    compliance: ["Title 15 Sec. 3170", "CJIS Level 4 Data Handling", "ADA Physical Guidelines", "PREA Visitor Oversight"],
    links: [
      { label: "Biometric Access Control", href: "/products/biometric-access-control" },
      { label: "Call Monitoring & Recording", href: "/products/call-monitoring-and-recording" },
      { label: "County Jails Solution", href: "/solutions/county-jails" }
    ]
  },
  {
    slug: "commissary-platform",
    title: "Commissary Platform | Trust Accounts & Logistics Ledgers | Jailsoft",
    description: "Manage transparent transaction logs, individual trust accounts, and facility inventory loops in a unified commerce platform.",
    h1: "Commissary Platform",
    subtitle: "Double-entry trust databases tracking resident accounts and commerce pipelines.",
    image: "https://picsum.photos/seed/jailsoft-commissary/1200/800",
    paragraphs: [
      "Financial safety inside correctional environments is paramount. Cash-free transaction structures prevent internal extortion and maintain orderly purchasing behaviors. The Jailsoft Commissary Platform utilizes double-entry digital trust ledgers, keeping clean deposit trails, transaction logs, and medical exemption rules. Every purchase integrates directly with the resident's active capital account, verifying necessary funds before fulfillment.",
      "The system features automated limit controls, which can be modified by housing ward or specific classification ranks. If an inmate is placed under health restrictions, the inventory program bars the purchase of foods high in sugar or sodium, keeping commissary options aligned with medical regimens. When items are distributed from regional storehouse facilities, barcode scanning units update quantities and track shipping pipelines, helping prevent stock shrinkage.",
      "In addition, family members can access a portal to deposit funds, which are recorded alongside verification data to prevent money-laundering schemes. Any unused balances are processed for automatic payouts during release or transfer, providing complete auditing paths for judicial stakeholders."
    ],
    features: [
      "Double-entry, secure accounting engines keeping tamper-proof transaction histories",
      "Automatic medical and disciplinary restriction integrations for item catalogs",
      "Real-time storehouse stock tracking with dynamic reorder alert points",
      "Deposit tracking interfaces with automated anti-fraud scanning routines"
    ],
    specs: [
      { name: "Balance Security", value: "Bank-grade SHA-256 ledger encryption with detailed journal trails" },
      { name: "Inventory Capacity", value: "Up to 50,000 distinct SKU records across local warehouses" },
      { name: "System Integration", value: "Direct ledger synchronization with state-approved payment processors" }
    ],
    compliance: ["GAAP (Accounting Principles)", "SOC 2 Type II", "State Trust Account Statutes", "HIPAA Data Segregation"],
    links: [
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" },
      { label: "Federal Facilities Solution", href: "/solutions/federal-facilities" }
    ]
  },
  {
    slug: "incident-reporting",
    title: "Incident Reporting | Audited Force Logs & Disciplinary Files | Jailsoft",
    description: "Track use-of-force events, rule infractions, and administrative hearings through a digital custody logbook.",
    h1: "Incident Reporting",
    subtitle: "Secure administrative filing structures for custodial incidents and rule logs.",
    image: "https://picsum.photos/seed/jailsoft-incident/1200/800",
    paragraphs: [
      "Any high-security facility requires structured, immutable logs of security incidents, use-of-force scenarios, and institutional rule infractions. The Jailsoft Incident Reporting system replaces unreliable, isolated document trails with a chronological, structured digital workspace. Officers can document physical confrontations, property damage, contraband seizure, or verbal threats, uploading reports directly to associated supervisor review queues.",
      "The system guides intake officers through detailed incident categorization fields, prompting for required details like times, locations, uninvolved witnesses, and security gear used. For incidents involving force, the reporting program locks entries once submitted, requiring explicit supervisor override logs and multi-signature approvals to prevent administrative tampering. Incident narratives link to related hardware-level video timestamps, providing comprehensive contextual files.",
      "Supervisors can use investigative portals to trace patterns of minor incidents, helping locate growing security risks in specific housing blocks. Automated reports outline incident category frequencies, disciplinary results, and use-of-force timelines, giving administrative directors clear data during compliance reviews.",
    ],
    features: [
      "Locked use-of-force modules requiring verified supervisor multi-signature logs",
      "Interactive timeline builders linking officer writeups, witness reports, and hardware footage",
      "Direct associations linking incident profiles with individual inmate medical files",
      "Rule infraction logs that automatically track disciplinary hearings and privilege holds"
    ],
    specs: [
      { name: "Data Persistence", value: "Distributed server-replicated logs with daily air-gapped tape backup routines" },
      { name: "Linkage Capacity", value: "Supports linking up to 64 distinct security profiles within a single file" },
      { name: "Response Routing", value: "Automatic, conditional notification triggers configured to SOPs" }
    ],
    compliance: ["PREA Intake Standards", "CJIS Level 4 Ledger Audit Guidelines", "SOC 2 Security Protocols", "State Incident Disclosure Laws"],
    links: [
      { label: "Surveillance & CCTV Integration", href: "/products/surveillance-and-cctv-integration" },
      { label: "Duress & Panic Systems", href: "/products/duress-and-panic-systems" },
      { label: "Case Studies Hub", href: "/resources/case-studies" }
    ]
  },
  {
    slug: "classification-and-risk-assessment",
    title: "Classification & Risk Assessment | Objective Detainee Placement | Jailsoft",
    description: "Assign housing profiles, predict vulnerability indexes, and trace group conflict metrics to maintain facility order.",
    h1: "Classification and Risk Assessment",
    subtitle: "Objective risk matrix dashboards targeting placement precision and detainee safety.",
    image: "https://picsum.photos/seed/jailsoft-classification/1200/800",
    paragraphs: [
      "Scientific, goal-oriented classification of incoming detainees holds the key to reducing internal violence, managing recidivism risks, and optimizing resource distribution. The Jailsoft Classification and Risk Assessment platform replaces subjective evaluations with standardized, evidence-based questionnaires. Utilizing multi-variable risk metrics, the engine calculates criminal history, institutional infractions, medical needs, and group associations to produce a recommended custody score.",
      "The evaluation engine works in tandem with the Inmate Records System, automatically parsing booking data and active court sheets. Real-time scanning loops detect housing conflicts, alerting staff if an incoming resident has an active conflict with an individual situated in a close ward. These safeguards help booking supervisors avoid placing rival group members or witnesses inside the same housing unit.",
      "The layout provides intake officers with clear guidance, highlighting necessary screening questions like mental health histories or physical vulnerabilities. By establishing formal, structured criteria, Jailsoft helps operators show compliance with PREA standards and defend placement choices during administrative oversight reviews."
    ],
    features: [
      "Standardized booking questionnaires assessing mental-health and safety indicators",
      "Automated housing conflict analysis across statewide detainee databases",
      "Dynamic classification tiers (Maximum, Medium, Minimum, Special Custody)",
      "Audit logs capturing all manual override justifications with tracking IDs"
    ],
    specs: [
      { name: "Calculation Speed", value: "Calculates full database risk matrices in under 150ms" },
      { name: "Override Logging", value: "Requires dual supervisor electronic confirmation codes for override approvals" },
      { name: "System Integration", value: "Direct synchronization with state law enforcement databases" }
    ],
    compliance: ["PREA § 115.41", "NIC (National Institute of Corrections) Guidelines", "ADA Housing Layout Rules"],
    links: [
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Juvenile Detention Solution", href: "/solutions/juvenile-detention" },
      { label: "Case Studies Hub", href: "/resources/case-studies" }
    ]
  },
  {
    slug: "data-analytics-dashboard",
    title: "Data Analytics Dashboard | Operational Metrics & Predictive Intelligence | Jailsoft",
    description: "Aggregate data, trace budget bounds, review population changes, and compile compliance sheets for your facility.",
    h1: "Data Analytics Dashboard",
    subtitle: "Enterprise analytics platforms mapping administrative data to visual dashboards.",
    image: "https://picsum.photos/seed/jailsoft-analytics/1200/800",
    paragraphs: [
      "Modern corrections operations generate massive volumes of administrative data across disparate, disconnected systems. The Jailsoft Data Analytics Dashboard consolidates this data, serving as a unified system-of-record for high-level coordinators, wardens, and government auditors. The platform processes millions of historical logs, tracking operational cost, inmate population fluctuations, incident rates, and staffing efficiency metrics.",
      "By utilizing structured dashboards, administrators can monitor population peaks against legal thresholds. Built-in predictive engines analyze seasonal booking trends to help supervisors allocate resources several months in advance. Users can easily export data for state and federal compliance audits, cutting down the administrative overhead required during standard certification reviews.",
      "With a high-contrast, clean visual design, raw data is mapped to clear visual reports. Managers can track average length-of-stay variations, medical services usage, and incident trends, helping them make strategic decisions that lower institutional risk."
    ],
    features: [
      "Consolidated command analytics dashboards tracking critical resource metrics",
      "Export profiles for federal reporting bodies, including BJS and census formats",
      "Population tracking models with automatic capacity limit notifications",
      "Shift-coverage dashboards showing staffing allocations across physical sectors"
    ],
    specs: [
      { name: "Data Refresh Rate", value: "Dynamic micro-batches updated every 3 minutes" },
      { name: "Export Standards", value: "Available in CSV, structured JSON, and PDF compliance formats" },
      { name: "Security Protocols", value: "Secure column encryption with role-based access rules" }
    ],
    compliance: ["CJIS Level 4 Reporting Standards", "BJS Data Preservation Standards", "SOC 2 Type II Audited System"],
    links: [
      { label: "Scheduling & Staffing", href: "/products/scheduling-and-staffing" },
      { label: "Federal Facilities Solution", href: "/solutions/federal-facilities" },
      { label: "Whitepapers Library", href: "/resources/whitepapers" }
    ]
  },

  // --- HARDWARE PRODUCTS (6) ---
  {
    slug: "smart-door-control-systems",
    title: "Smart Door Control Systems | Industrial PLC Override Interfaces | Jailsoft",
    description: "Install secure PLC control configurations, safety override keys, and local network door locks with absolute fail-secure guarantees.",
    h1: "Smart Door Control Systems",
    subtitle: "High-uptime, industrial PLC-integrated door controllers for secure cell control.",
    image: "https://picsum.photos/seed/jailsoft-doors/1200/800",
    paragraphs: [
      "Access control in concrete corrections environments is the foundation of physical containment. The Jailsoft Smart Door Control System integrates custom-certified industrial PLC (Programmable Logic Controller) configurations with facility-grade locking gear. This design provides reliable physical routing, lock status validation, and remote override commands, managing access safely across even the largest correctional layouts.",
      "Operating independently from standard computer networks, these industrial controllers communicate via local, hardwired connections. If a primary facility server loses power or connection, the smart lock gateways continue working on battery backups, following strict fail-secure parameters (doors stay locked to prevent unauthorized egress). Command operators can execute centralized lockouts or emergency open overrides through high-contrast touchscreen terminals in secure control rooms.",
      "The system’s terminal screens provide instant feedback, showing real-time door status (Locked, Unlocked, Ajar, or Tamper Alert) with clean, high-contrast symbols. This ensures operators have clear visibility of the facility's physical status, helping security teams identify lock failures or tampering attempts in millisecond timelines.",
    ],
    features: [
      "Hardwired PLC lock gateways with local battery backups for power failure protection",
      "Fail-secure terminal lockouts that keep door positions if communication drops",
      "Optical sensors that monitor deadbolt positions and locking bar state",
      "High-contrast touchscreen controls showing real-time physical facility layouts"
    ],
    specs: [
      { name: "Hardware Engine", value: "High-grade industrial PLCs with dual network interfaces" },
      { name: "Override Latency", value: "< 50ms from touch confirmation to physical movement" },
      { name: "Safety Standards", value: "Fail-Secure default configuration with mechanical key overrides" }
    ],
    compliance: ["NFPA 101 Life Safety Code", "ASTM F1450 standard for hollow metal doors", "FEMA Security Guidelines"],
    links: [
      { label: "Facility IoT Network", href: "/products/facility-iot-network" },
      { label: "County Jails Solution", href: "/solutions/county-jails" },
      { label: "Duress & Panic Systems", href: "/products/duress-and-panic-systems" }
    ]
  },
  {
    slug: "biometric-access-control",
    title: "Biometric Access Control | Facial, Fingerprint, & Iris Scanners | Jailsoft",
    description: "Deploy high-accuracy iris and fingerprint scan wickets at critical entry, exit, and transfer gates inside detention sites.",
    h1: "Biometric Access Control",
    subtitle: "High-security iris and facial recognition systems for internal facility lockgates.",
    image: "https://picsum.photos/seed/jailsoft-biometrics/1200/800",
    paragraphs: [
      "Preventing identity-swap escapes or unauthorized civilian entries is a primary challenge in high-volume detention yards, booking areas, and transport docks. The Jailsoft Biometric Access Control systems replace mechanical key and badge protocols with iris, facial geometry, and fingerprint identification wickets. This ensures that every movement across secure gates is bound to a verified profile.",
      "Our biometric wickets are built with ruggedized, impact-resistant enclosures designed to withstand high-volume usage and vandalism inside custodial corridors. The optical scanners verify living tissue characteristics, preventing spoofing attempts with photos or high-definition prints. If a scan does not match any active profile, local gates lock instantly and send immediate alerts to central command.",
      "The software processes biometric data locally using secure, local storage files, ensuring sensitive identity records remain private and protected from off-site hacking attempts. The system's clean screens quickly display verification results, supporting rapid, reliable guard-supervised transits through internal checkpoints."
    ],
    features: [
      "Contactless high-resolution iris recognition wickets processing scans under 2 seconds",
      "Ruggedized, vandal-resistant fingerprint identification terminals with anti-spoofing technology",
      "Local, encrypted biometric databases operating independently from public networks",
      "Direct integration with booking files to check inmate release profiles visually"
    ],
    specs: [
      { name: "Scan Accuracy", value: "False Acceptance Rate (FAR) under 0.00001% across 1 million iterations" },
      { name: "Verification Window", value: "Complete identity confirmation in less than 850ms" },
      { name: "Physical Enclosure", value: "NEMA 4X rated steel housing with security screws" }
    ],
    compliance: ["CJIS Biometric Standards", "ISO 19794 Biometric Formats", "ADA Scanner Height Rules"],
    links: [
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Federal Facilities Solution", href: "/solutions/federal-facilities" }
    ]
  },
  {
    slug: "surveillance-and-cctv-integration",
    title: "Surveillance & CCTV Integration | High-Density Video Matrices | Jailsoft",
    description: "Install low-latency IP cameras, physical multi-screen command desks, and AI-enabled motion logging software.",
    h1: "Surveillance and CCTV Integration",
    subtitle: "Enterprise low-latency video matrices made for high-uptime command hubs.",
    image: "https://picsum.photos/seed/jailsoft-cctv/1200/800",
    paragraphs: [
      "Continuous visual monitoring of blind angles, housing walkways, and outer boundaries is a key safety requirement for modern facility operations. The Jailsoft Surveillance and CCTV Integration engine connects diverse video systems into a unified command layout. By linking camera systems with smart software, the platform provides security staff with real-time video feeds during events.",
      "The visual system uses high-bandwidth networks, bringing live, desaturated video streams onto low-latency terminal screens. Our smart cameras detect unusual patterns, like fast activity, vertical climbing, or crowds in designated off-limits areas, instantly highlighting the target screens in red. This helps control-room staff spot incidents before they grow.",
      "Video archives are saved in local, highly secure storage systems with full encryption to prevent unauthorized copying or edits. If internal investigations require copies, managers can easily extract video clips while maintaining clean, verified access trails to meet judicial standards."
    ],
    features: [
      "Low-latency desaturated video arrays with customized tile-layout dashboards",
      "Smart motion alerts highlighting camera feeds showing physical corridor activity",
      "Direct connections linking video layers to door control overrides",
      "Secure, tamper-proof video archiving engines with active digital signatures"
    ],
    specs: [
      { name: "Video Standards", value: "Supports 4K desaturated IP feeds with frame rates up to 60fps" },
      { name: "Storage Architecture", value: "RAID 6 arrays holding up to 365 days of continuous footage" },
      { name: "Interface Latency", value: "< 100 milliseconds from physical movement to screen update" }
    ],
    compliance: ["PREA § 115.13 Surveillance Rules", "CCTV Security Standards", "FIPS 140-2 Data Encryption"],
    links: [
      { label: "Incident Reporting", href: "/products/incident-reporting" },
      { label: "Perimeter Security Sensors", href: "/products/perimeter-security-sensors" },
      { label: "State Prisons Solution", href: "/solutions/state-prisons" }
    ]
  },
  {
    slug: "perimeter-security-sensors",
    title: "Perimeter Security Sensors | Laser, Microwave, & Vibration Sensors | Jailsoft",
    description: "Deploy optical laser arrays, fiber fence vibration systems, and microwave motion detectors for physical fence lines.",
    h1: "Perimeter Security Sensors",
    subtitle: "High-accuracy outer boundary intrusion monitoring systems.",
    image: "https://picsum.photos/seed/jailsoft-perimeter/1200/800",
    paragraphs: [
      "Outer walls, fences, and exit zones represent the final boundaries of custody, requiring continuous, automated supervision to prevent escapes or unauthorized external attempts. Jailsoft Perimeter Security Sensors construct an invisible, multi-layered electronic barrier. Using laser, microwave, and fiber-optic fence vibration sensors, our system isolates actual climbing or cutting attempts from regular background weather.",
      "The sensors are built to withstand extreme temperatures, operating continuously in harsh environments with local battery backups. If a perimeter line is crossed, regional sensors pinpoint the exact intrusion zone, automatically adjusting nearby cameras and sending immediate alert notifications directly to patrol vehicles.",
      "Perimeter logs are kept in persistent security databases, tracking fence status and test alerts. This ensures facility engineers can audit sensor sensitivity levels over time, preventing false alarms and keeping boundaries locked down with complete confidence."
    ],
    features: [
      "Fiber-optic fence sensors detecting microscopic climbing and wire-cutting attempts",
      "Multi-band microwave barriers tracking movement across internal isolation zones",
      "High-power optical laser lines creating detection grids on perimeter walls",
      "Command integrations that direct CCTV cameras automatically to intrusion coordinates"
    ],
    specs: [
      { name: "Detection Precision", value: "Pinpoints climbing attempts to within 3 meters along fence lines" },
      { name: "Environmental Tolerance", value: "Rated for continuous operations from -40°C up to +85°C" },
      { name: "Sensor Diagnostics", value: "Automatic self-test routines run every 15 minutes" }
    ],
    compliance: ["ASTM F1915 standard for perimeter barriers", "FEMA Facility Guidelines", "ICAO Intrusion Standards"],
    links: [
      { label: "Surveillance & CCTV Integration", href: "/products/surveillance-and-cctv-integration" },
      { label: "Federal Facilities Solution", href: "/solutions/federal-facilities" },
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" }
    ]
  },
  {
    slug: "duress-and-panic-systems",
    title: "Duress & Panic Systems | Real-Time Officer Safety Arrays | Jailsoft",
    description: "Protect guards with tracked panic transponders, desk triggers, and automatic location tracking within walls.",
    h1: "Duress and Panic Systems",
    subtitle: "Real-time officer safety systems with sub-meter location tracking.",
    image: "https://picsum.photos/seed/jailsoft-panic/1200/800",
    paragraphs: [
      "Officer safety in high-security wings relies on instant help during cell block confrontations. The Jailsoft Duress and Panic Systems provide guards with tracked local transponders. In emergencies, tapping or pulling a transponder trigger sends immediate, silent alerts to control screens, dispatching backup units instantly.",
      "The system uses secure, local-frequency radio arrays to track guards inside concrete and steel structures. If a transponder gets damaged or drops to a horizontal angle (indicating 'Officer Down'), the transponder automatically triggers emergency alerts, reporting the exact floor and corridor location.",
      "The system maps duress alerts onto control room screens, using distinctive, high-contrast symbols to show alert details. Real-time logging tracks the timeline from alert to guard response, providing administrators with transparent logs for routine safety reviews."
    ],
    features: [
      "Rugged transponders with double-button triggers to prevent accidental activation",
      "Automatic 'Officer Down' angle detectors checking guard positions",
      "Localized radio tracking grids that work through heavy concrete walls",
      "Control room integrations that highlight alert sectors on facility layouts"
    ],
    specs: [
      { name: "Tracking Precision", value: " pinpoints guard locations within 1.5 meters in facility corridors" },
      { name: "Alert Latency", value: "< 150ms from physical card squeeze to control screen alert" },
      { name: "Network Security", value: "Local radio signals using dynamic encryption hashes" }
    ],
    compliance: ["OSHA Guard Safety Rules", "PREA § 115.11 Staff Safety", "FIPS 140-2 Encrypted Channels"],
    links: [
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Incident Reporting", href: "/products/incident-reporting" },
      { label: "County Jails Solution", href: "/solutions/county-jails" }
    ]
  },
  {
    slug: "facility-iot-network",
    title: "Facility IoT Network | Automated Infrastructure Sensors | Jailsoft",
    description: "Monitor smart electricity meters, cell water limits, and humidity levels with secure, local sensory networks.",
    h1: "Facility IoT Network",
    subtitle: "Self-healing sensor grids checking utility usage and building status.",
    image: "https://picsum.photos/seed/jailsoft-iot/1200/800",
    paragraphs: [
      "Detention infrastructure carries constant maintenance challenges, like water waste and environmental comfort. Jailsoft Facility IoT Networks deploy smart, secure sensor mesh nodes. These units keep constant watch on utilities, temperature boundaries, and environmental metrics, helping teams maintain safe facility standards.",
      "To prevent water lines from being used in cell floods or waste schemes, the network handles automated cell water limits. Smart valves monitor flow rates and shut off lines if custom volume limits are crossed. This protects physical cells and reduces utility costs.",
      "Using local, encrypted wireless links, the sensors operate independently from primary county business computer networks. This keeps systems safe from external web hacking while providing maintenance teams with reliable data-logs to simplify facility care."
    ],
    features: [
      "Encrypted mesh nodes that monitor physical water levels and temperature",
      "Automatic cell water lockouts that stop plumbing abuse in cell blocks",
      "Industrial sensors tracking mechanical HVAC status inside main shafts",
      "Alert dashboards showing utility usage spikes and system faults"
    ],
    specs: [
      { name: "Sensor Battery Life", value: "Minimum 10-year operating span with local power reserves" },
      { name: "Mesh Capacity", value: "Supports up to 25,000 sensor nodes on a single local network gateway" },
      { name: "Mesh Security", value: "Using robust IEEE 802.15.4 security keys and local routing paths" }
    ],
    compliance: ["ASHRAE Facility Comfort Bounds", "EPA Water Conservation Guidelines", "Joint Commission Facility Standards"],
    links: [
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" },
      { label: "State Prisons Solution", href: "/solutions/state-prisons" }
    ]
  },

  // --- COMMUNICATIONS PRODUCTS (5) ---
  {
    slug: "inmate-calling-platform",
    title: "Inmate Calling Platform | Secure Voice Logging Systems | Jailsoft",
    description: "Operate monitored audio booths, security speed-dial registries, and automated keyword analytics.",
    h1: "Inmate Calling Platform",
    subtitle: "Highly audited, monitored phone networks designed for corrections facilities.",
    image: "https://picsum.photos/seed/jailsoft-calling/1200/800",
    paragraphs: [
      "Detention centers require secure phone loops that allow personal connections while protecting public safety. The Jailsoft Inmate Calling Platform provides facilities with highly audited voice arrays. Incorporating voice recognition, automated keyword filtering, and call limits, the platform stops facilities from being used in lockup coordination or threats.",
      "The system checks numbers before dialing, blocking calls to active victims, court staff, or unregistered contacts. Once connected, automated speech engines check conversation streams for flagged terms, highlighting active records if security concerns arise. Security staff can then listen to live sessions or check recordings later.",
      "Each call logs full metadata, including dialed numbers, times, and call duration. This provides investigators with clear connection maps, improving public safety while giving residents reliable calling options."
    ],
    features: [
      "Voice recognition checks that verify call users in under 3 seconds",
      "Automated voice translation systems flagging key security terms",
      "Pre-approved calling registries that block unverified numbers",
      "High-clearance investigation portals with secure clip export features"
    ],
    specs: [
      { name: "Monitoring Precision", value: "Speech-to-text engines checking up to 12 distinct languages" },
      { name: "Archiving Security", value: "Encrypted write-once storage tracks voice recordings for 5 years" },
      { name: "Voice Accuracy", value: "Biometric voice-print checks with low false alarm rates" }
    ],
    compliance: ["FCC Call Regulations", "CJIS Level 4 Data Handling", "Title 15 Phone Rules", "PREA Calling Boundaries"],
    links: [
      { label: "Call Monitoring & Recording", href: "/products/call-monitoring-and-recording" },
      { label: "Family Notification Services", href: "/products/family-notification-services" },
      { label: "County Jails Solution", href: "/solutions/county-jails" }
    ]
  },
  {
    slug: "secure-messaging-system",
    title: "Secure Messaging System | Inspected Kiosk & Tablet Messaging | Jailsoft",
    description: "Install audited digital messaging tools, scanned tablet apps, and safety review lines.",
    h1: "Secure Messaging System",
    subtitle: "Audited digital mail portals and tablet messaging platforms for corrections facilities.",
    image: "https://picsum.photos/seed/jailsoft-messaging/1200/800",
    paragraphs: [
      "Managing physical mail in corrections facilities is a leading avenue for drug and security threats. The Jailsoft Secure Messaging System moves traditional mail processing to safe digital setups. Using secure facility kiosks and tough tablets, residents can send emails and view photos through a highly monitored system.",
      "All messages and photos pass through automated reviews that check for threats, graffiti, codes, or pornography. Flagged items are sent to investigator review screens for closer inspection, while approved messages are delivered quickly. This reduces physical mail processing and keeps contraband out of facility corridors.",
      "The program integrates with the central records database to check privilege status and log communications automatically. This gives investigators access to message histories, helping track security issues while providing families with safe communication channels."
    ],
    features: [
      "Text and photo filters that flag potential security concerns automatically",
      "Tough, secure tablet applications designed for detention environments",
      "Digital mailrooms that convert physical papers into secure PDF files",
      "Comprehensive communication profiles showing connections over time"
    ],
    specs: [
      { name: "Message Scan Speed", value: "Parses up to 800-word messages in under 55 milliseconds" },
      { name: "Operating System", value: "Highly secure, restricted versions of Linux on terminal hardware" },
      { name: "Visual Archiving", value: "Minimum resolution of 300 DPI for all scanned physical mail" }
    ],
    compliance: ["HIPAA Data Segregation", "FIPS 140-2 Video Standards", "State Archive Laws"],
    links: [
      { label: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { label: "Video Visitation", href: "/products/video-visitation" },
      { label: "Juvenile Detention Solution", href: "/solutions/juvenile-detention" }
    ]
  },
  {
    slug: "video-visitation",
    title: "Video Visitation | Audited Remote HD Visitation | Jailsoft",
    description: "Deploy steel screen kiosks, schedule remote video visits, and monitor sessions with automatic shutdown triggers.",
    h1: "Video Visitation",
    subtitle: "High-uptime virtual visitation systems built with tough physical kiosk gear.",
    image: "https://picsum.photos/seed/jailsoft-video/1200/800",
    paragraphs: [
      "Video consultation channels help maintain family connections and support legal preparations while keeping facilities secure. The Jailsoft Video Visitation platform delivers clear virtual visits through heavy steel wall terminals. By replacing physical travel with clear video, facilities can reduce staff transiting hours and cut down administrative costs.",
      "The platform includes secure scheduling portals for family and legal reps, with automatic time checks and access controls. Sessions open and shut automatically based on scheduled times. During sessions, smart software monitors screen activity, flagging unusual clothing or behavior and alerting supervisors if necessary.",
      "Every video session is recorded in secure, desaturated local storage files, ensuring sensitive legal and family meetings are archived safely to meet verification standards."
    ],
    features: [
      "Heavy steel wall terminals made for high-volume corrections yards",
      "Self-scheduling portals for family and legal reps with privilege checking",
      "Smart activity screens that alert supervisors to unusual visual changes",
      "High-clearance legal portals with private, unrecorded consultation lines"
    ],
    specs: [
      { name: "Video Standards", value: "Monitors 1080p video lines at 30 fps using secure video links" },
      { name: "Physical Frame", value: "14-gauge stainless steel casing with impact-proof safety screens" },
      { name: "Session Lag", value: "Less than 180ms over local networks" }
    ],
    compliance: ["ADA Section 508 Guidelines", "PREA Visitor Oversight Rules", "FIPS 140-2 Video Standards"],
    links: [
      { label: "Visitation Management", href: "/products/visitation-management" },
      { label: "Secure Messaging System", href: "/products/secure-messaging-system" },
      { label: "State Prisons Solution", href: "/solutions/state-prisons" }
    ]
  },
  {
    slug: "call-monitoring-and-recording",
    title: "Call Monitoring & Recording | Speech Forensic Arrays | Jailsoft",
    description: "Apply voice-print biometrics, direct audio sync loops, and automated language scanning.",
    h1: "Call Monitoring and Recording",
    subtitle: "Advanced speech forensics and voice matching for corrections research.",
    image: "https://picsum.photos/seed/jailsoft-forensics/1200/800",
    paragraphs: [
      "Modern investigations in facility operations depend on finding links between calls and outside groups. The Jailsoft Call Monitoring and Recording tool provides forensic investigation units with advanced sound tools. Going beyond standard loops, the system checks caller voices against a central voice register.",
      "If a caller uses another resident's ID PIN to make a call, our voice check engine spots the difference instantly, flagging the session for supervision. The platform's smart translation tool converts conversations into search-ready texts, letting investigators locate flagged terms across thousands of hours of audio recordings.",
      "To protect legal rights, the database automatically filters out and blocks recordings of pre-registered legal defense lines. This ensures compliance with attorney-client privilege guidelines while keeping other security monitoring tools active."
    ],
    features: [
      "Voice check engines that flag when call voices do not match selected PINs",
      "Speech translation systems that convert multi-language audio to searchable text",
      "Interactive graphs showing connection grids between callers and outside contacts",
      "Attorney-client privilege filters that block legal call recordings automatically"
    ],
    specs: [
      { name: "Biometric Precision", value: "Verifies voice-prints under 1.2 seconds with high accuracy" },
      { name: "Search Speed", value: "Scans 10,000 hours of calling audio under 4 seconds" },
      { name: "Encryption Tiers", value: "Dual security keys with detailed database lookup logs" }
    ],
    compliance: ["CJIS Level 4 Data Security", "Attorney-Client Privilege Rules", "NDAAC Recording Standards"],
    links: [
      { label: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" },
      { label: "Whitepapers Library", href: "/resources/whitepapers" }
    ]
  },
  {
    slug: "family-notification-services",
    title: "Family Notification Services | Direct Information Pipelines | Jailsoft",
    description: "Send automated updates on custody state changes, court agendas, and deposit credits.",
    h1: "Family Notification Services",
    subtitle: "Automated notification systems sending reliable custody updates to contact circles.",
    image: "https://picsum.photos/seed/jailsoft-alerts/1200/800",
    paragraphs: [
      "Keeping families informed about custody changes, court dates, and financial status reduces administrative phone inquiries, allowing booking staff to focus on secure operations. The Jailsoft Family Notification Services manage these notifications safely, sending fast, automated alerts about status updates.",
      "The service connects directly with the Inmate Records System. When booking staff log custody changes (like a housing transfer, court appearance, or bond adjustment), the systems auto-generate and dispatch secure messages to verified family contacts. This helps prevent phone-room congestion during emergency lockups.",
      "The systems are built to verify that alerts reach active numbers without storing personal contact records in public networks. This keeps family-focused systems aligned with privacy guidelines while providing clear, automated info streams."
    ],
    features: [
      "Automated SMS, email, and calling alerts for custody status updates",
      "Synchronized court schedules with automatic agenda update notifications",
      "Clear financial update messages confirming deposits and commissary allocations",
      "Opt-in family registry portals with secure contact verification steps"
    ],
    specs: [
      { name: "Alert Speed", value: "Dispatches 500 alerts in under 12 seconds following booking changes" },
      { name: "System Trust Tiers", value: "Direct connection with county communications gateways" },
      { name: "Record Safekeeping", value: "Zero storage of resident family records outside secure data blocks" }
    ],
    compliance: ["COPPA Privacy Compliance", "TCPA Communication Rules", "CJIS Level 4 Standards"],
    links: [
      { label: "Commissary Platform", href: "/products/commissary-platform" },
      { label: "Inmate Calling Platform", href: "/products/inmate-calling-platform" },
      { label: "County Jails Solution", href: "/solutions/county-jails" }
    ]
  }
];

export const solutionsData: PageContent[] = [
  {
    slug: "county-jails",
    title: "County Jails Solutions | Rapid Intake & High Turnover Operations | Jailsoft",
    description: "Streamline rapid booking loops, local sheriff team coordination, and municipal trust databases.",
    h1: "Solutions for County Jails",
    subtitle: "Intake and operational systems engineered for high-turnover county facilities.",
    image: "https://picsum.photos/seed/jailsoft-county/1200/800",
    paragraphs: [
      "County detention facilities face unique challenges, like high booking volume, unpredictable intake spikes, and rapid inmate transit times. The Jailsoft County Jails solution delivers integrated systems designed to speed up the booking process, manage rapid housing changes, and support local sheriff operations. By connecting booking data with court schedules, Jailsoft helps operators manage administrative timelines cleanly.",
      "The platform supports multi-agency intake processes, letting arresting officers enter charges and personal details directly into secure booking terminals. This reduces data entry bottlenecks and shortens the wait times for arresting deputies outside booking bays.",
      "Our system's trust ledgers also simplify commissary deposits and balances, helping county facilities manage funds transparently. It tracks court appearance schedules and bond details, ensuring county jails can coordinate releases safely while meeting legal compliance standards."
    ],
    features: [
      "Rapid intake systems that reduce deputy wait times during intake",
      "Dynamic housing boards that track pre-trial separations and classification ranks",
      "Direct connections with local sheriff registries and county courts"
    ],
    specs: [
      { name: "Intake Processing", value: "Completes standard booking profiles under 12 minutes" },
      { name: "State Registry Sync", value: "Runs automated warrant checks in under 450 milliseconds" }
    ],
    compliance: ["Title 15 County Guidelines", "CJIS Level 4 Security Standards", "ADA Booking Accessibility Regulations"],
    links: [
      { label: "Facility Management Suite", href: "/products/facility-management-suite" },
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Scheduling & Staffing", href: "/products/scheduling-and-staffing" }
    ]
  },
  {
    slug: "state-prisons",
    title: "State Prisons Solutions | Long-Term Custody & High Perimeter Lockdown | Jailsoft",
    description: "Manage large facility populations, complex perimeter lines, and long-term security programs.",
    h1: "Solutions for State Prisons",
    subtitle: "Enterprise coordination systems engineered for state-level long-term custody.",
    image: "https://picsum.photos/seed/jailsoft-state/1200/800",
    paragraphs: [
      "State prisons operate on a massive scale, requiring continuous oversight across sprawling yards, multiple cell blocks, and high perimeter lines. The Jailsoft State Prisons solution provides enterprise-tier coordination platforms, linking smart video arrays, biometric wickets, and PLC control lines. This integration allows state departments to manage large-scale facilities safely.",
      "The system handles long-term custody challenges, like labor schedules, rehabilitation tracking, and housing logs. Deep records trace discipline timelines and housing changes, helping facility managers balance cell assignments to reduce internal security risks.",
      "Our high-security perimeter integrations connect laser fences, microwave sensors, and IP cameras directly into control hubs. This ensures perimeter supervisors can view clear boundaries, locate security threats quickly, and dispatch security teams with complete confidence."
    ],
    features: [
      "Sprawling boundary safety systems connecting laser fences and microwave arrays",
      "Long-term program tracking that manages vocational schedules and education files",
      "High-clearance central command systems that coordinate multiple regional sites"
    ],
    specs: [
      { name: "Site Scale", value: "Supports up to 10,000 active inmate records per regional facility" },
      { name: "Network Configuration", value: "Using highly secure private fiber-optic connections" }
    ],
    compliance: ["ACA National Prison Standards", "PREA Long-Term Custody Rules", "FIPS 140-2 Security Keys"],
    links: [
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Perimeter Security Sensors", href: "/products/perimeter-security-sensors" },
      { label: "Surveillance & CCTV Integration", href: "/products/surveillance-and-cctv-integration" }
    ]
  },
  {
    slug: "federal-facilities",
    title: "Federal Facilities Solutions | High-Clearance GovTech & Multi-Agency Sync | Jailsoft",
    description: "Secure high-level intelligence facilities with multi-agency communication, audit logging, and FIPS systems.",
    h1: "Solutions for Federal Facilities",
    subtitle: "FIPS-certified coordination systems for high-clearance military and federal sites.",
    image: "https://picsum.photos/seed/jailsoft-federal/1200/800",
    paragraphs: [
      "Federal correctional facilities require the highest tiers of secure design, including multi-agency data synchronization, strict audit logs, and compliance with federal guidelines. The Jailsoft Federal Facilities solution delivers FIPS-compliant systems designed to protect national security sites and manage high-clearance operations safely.",
      "The software includes advanced encryption standards, tracking every terminal interaction and cell override down to the millisecond. Role-based access controls ensure secret information remains isolated, allowing agencies to manage communications securely.",
      "The platform connects with interstate transport systems and national record portals, allowing departments to coordinate handovers and trace inmate security risks across multiple states while meeting strict federal compliance rules."
    ],
    features: [
      "FIPS-compliant database modules with dynamic column classification rules",
      "Seamless multi-agency interfaces for synchronizing transport custody profiles",
      "Comprehensive tracking models registering terminal keystroke events with exact timestamps"
    ],
    specs: [
      { name: "Encryption Level", value: "AES-256 GCM hardware encryption with strict access keys" },
      { name: "Audit Integrity", value: "Encrypted system logs written directly to read-only media storage" }
    ],
    compliance: ["NIST SP 800-53 Guidelines", "CJIS Level 4 Data Protocols", "FIPS 140-3 Hardware Rules"],
    links: [
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Biometric Access Control", href: "/products/biometric-access-control" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" }
    ]
  },
  {
    slug: "juvenile-detention",
    title: "Juvenile Detention Solutions | Rehabilitation Tracking & Privacy Safeguards | Jailsoft",
    description: "Manage rehabilitative schedules, educational compliance, and secure juvenile records.",
    h1: "Solutions for Juvenile Detention",
    subtitle: "Sensitive custody frameworks protecting juvenile profiles and tracking rehabilitation.",
    image: "https://picsum.photos/seed/jailsoft-juvenile/1200/800",
    paragraphs: [
      "Juvenile detention operations demand a rehabilitative environment with strict privacy protections and comprehensive educational programs. The Jailsoft Juvenile Detention solution delivers specialized systems that protect young resident profiles while tracking educational, therapeutic, and medical schedules.",
      "The database utilizes strict security partitions, keeping sensitive juvenile records isolated from public adult criminology networks. Evaluative tools help intake staff assess vulnerability indexes, ensuring housing assignments align with rehabilitative and safety needs.",
      "The platform coordinates daily schedules, managing class attendance, counseling sessions, and parent visits in a unified feed. This focuses operations on recovery and rehabilitation, helping facilities meet educational requirements while protecting young residents' privacy."
    ],
    features: [
      "Secure database systems isolating identity records from adult criminology networks",
      "Rehabilitative program managers that track educational and therapy schedules",
      "Structured counseling portal modules for therapist assessments"
    ],
    specs: [
      { name: "Data Protection Tiers", value: "Strict user access rules blocking unverified record lookups" },
      { name: "Schedule Capacity", value: "Logs up to 32 daily program events per individual resident" }
    ],
    compliance: ["FERPA Privacy Laws", "PREA Juvenile Facility Standards", "State Education Codes"],
    links: [
      { label: "Classification & Risk Assessment", href: "/products/classification-and-risk-assessment" },
      { label: "Secure Messaging System", href: "/products/secure-messaging-system" },
      { label: "Visitation Management", href: "/products/visitation-management" }
    ]
  },
  {
    slug: "private-corrections",
    title: "Private Corrections Solutions | Operational Cost Audits & Multi-Tenant Workspaces | Jailsoft",
    description: "Coordinate cost tracking, multi-tenant workspace separation, and standard operating procedures.",
    h1: "Solutions for Private Corrections",
    subtitle: "Highly audited, efficiency-driven systems for private operations.",
    image: "https://picsum.photos/seed/jailsoft-private/1200/800",
    paragraphs: [
      "Private corrections management relies on efficient operations, detailed cost auditing, and maintaining compliance across multiple state agreements. The Jailsoft Private Corrections solution provides multi-tenant systems designed to track utility use, trace budget bounds, and verify staff allocations in a centralized workspace.",
      "The system includes robust audit loggers, helping private operators prepare for state reviews and verify compliance with standards. Program data points demonstrate staffing levels and food/medical services delivery, verifying contract agreements cleanly.",
      "Our utility tracking interfaces connect with local IoT sensors to monitor water and electrical consumption across multiple cell blocks. This reduces utility waste and helps private facilities operate efficiently while maintaining safe conditions for staff and residents."
    ],
    features: [
      "Multi-tenant configurations supporting multiple state contract profiles on a single system",
      "Automated staffing trackers that verify supervisor and guard levels for safety audits",
      "Utility cost projection models connected directly with local water/electrical meters"
    ],
    specs: [
      { name: "Audit Export Rate", value: "Generates contract-compliance reports in under 12 seconds" },
      { name: "Multi-Tenancy", value: "Supports up to 128 isolated state contract schemas on unified resources" }
    ],
    compliance: ["GAAP Financial Standards", "ACA National Private Standards", "SOC 2 Type II System Rules"],
    links: [
      { label: "Facility Management Suite", href: "/products/facility-management-suite" },
      { label: "Commissary Platform", href: "/products/commissary-platform" },
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" }
    ]
  }
];

export const resourcesData: PageContent[] = [
  {
    slug: "case-studies",
    title: "Case Studies | Complete Legacy System Replacement Outcomes | Jailsoft",
    description: "Review how a multi-phase system replacement at a 1500-bed county facility reduced wait times and lowered operational costs.",
    h1: "Case Studies",
    subtitle: "Validated operational outcomes from real corrections technology deployments.",
    image: "https://picsum.photos/seed/jailsoft-casestudy/1200/800",
    paragraphs: [
      "Integrating modern digital networks into established correctional facilities requires careful planning, secure migration tools, and thorough staff training. This case study details the system-wide replacement of paper records and legacy systems at a 1,500-bed county detention facility. Over 18 months, our engineering teams deployed integrated software, biometric wickets, and PLC door controls.",
      "Prior to deployment, the facility had significant data entry delays, long booking times, and frequent communication gaps in guard shifts. By implementing our Facility Management Suite and Inmate Records System, information was consolidated into a single secure platform. This reduced average intake booking times from 42 minutes down to under 12 minutes.",
      "Additionally, the installation of smart door PLC overrides and duress transponders immediately improved safety. Real-time location grids localized test duress alerts in less than 1.5 meters inside concrete blocks, speeding up officer response times and demonstrating the value of modern, integrated boundary safety technology."
    ],
    features: [
      "Intake booking times reduced by over 70% under unified database ledger systems",
      "Incident-response times shortened by 90 seconds using tracked panic transponders",
      "Zero records lost across the migration of 400,000 historical custody files"
    ],
    specs: [
      { name: "Facility Scale", value: "1,500 active beds with 180 security officers on duty" },
      { name: "Deploy Phases", value: "4 distinct rollouts across 18 months of active integration" }
    ],
    compliance: ["Title 15 County Regulations", "CJIS Level 4 Data Integrity Rules", "NIST Migration Standards"],
    links: [
      { label: "Facility Management Suite", href: "/products/facility-management-suite" },
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Compliance & Standards", href: "/resources/compliance-and-standards" }
    ]
  },
  {
    slug: "whitepapers",
    title: "Whitepapers | Redundant Mesh Nodes in Concrete Spaces | Jailsoft",
    description: "Explore our research paper on deploying secure, non-public wireless sensor networks inside steel and concrete structures.",
    h1: "Technical Whitepapers",
    subtitle: "Jailsoft Labs research on running reliable sensor networks inside high-security environments.",
    image: "https://picsum.photos/seed/jailsoft-whitepaper/1200/800",
    paragraphs: [
      "Detention facility buildings present massive challenges for standard wireless communication due to their heavy concrete walls, steel supports, and security doors. This research whitepaper, authored by our engineering group, outlines the deployment of self-healing, secure local wireless mesh nodes inside maximum-security environments without using external internet lines.",
      "The paper reviews how low-frequency radio waves travel in concrete blocks, analyzing signal loss and antenna designs. By building self-healing network paths, our sensor devices route data smoothly around temporary blockages, maintaining solid connections without needing high-power signals.",
      "Security remains the core focus of our research. Our network uses hardwired security keys, private local servers, and continuous check-in routines. This ensures our mesh networks remain isolated from outside hacking attempts, keeping facilities secure and operating with high uptime."
    ],
    features: [
      "Low-frequency mesh algorithms that route signals through thick concrete walls",
      "High-security wireless keys protecting sensor arrays from external interception",
      "Low-power mesh node configurations operating for over a decade on backup cells"
    ],
    specs: [
      { name: "Network Frequencies", value: "Sub-GHz channels with excellent penetration in masonry" },
      { name: "Security Keys", value: "Dynamic AES-256 GCM rotating hardware hashes" }
    ],
    compliance: ["FIPS 140-2 Wireless Standards", "IEEE 802.15.4 Communications Protocol", "NIST Security Controls"],
    links: [
      { label: "Facility IoT Network", href: "/products/facility-iot-network" },
      { label: "Duress & Panic Systems", href: "/products/duress-and-panic-systems" },
      { label: "Glossary of Tech", href: "/resources/glossary" }
    ]
  },
  {
    slug: "blog",
    title: "Blog | Security Tech & Operational Insights | Jailsoft",
    description: "Stay updated on the latest trends in corrections technology, including biometric developments and data-analytics use in facility planning.",
    h1: "Operational Insights Blog",
    subtitle: "Technical articles on trends, security developments, and systems engineering in GovTech.",
    image: "https://picsum.photos/seed/jailsoft-blog/1200/800",
    paragraphs: [
      "The Corrections Tech field is evolving rapidly, moving from isolated paper systems toward connected, data-driven platforms. The Jailsoft Operational Insights Blog provides corrections leaders, facility architects, and IT teams with in-depth articles on security technology and operational planning.",
      "Our engineering team shares practical advice on main system upgrades, biometric wicket deployments, and protecting databases from security threats. Recent articles highlight how data analytics help facility managers schedule staff efficiently and forecast population changes accurately during booking spikes.",
      "We also focus on compliance standards, examining new guidelines for resident communications, ADA accessibility, and security rules. By translating complex requirements into practical steps, our articles help departments keep facilities safe and aligned with modern standards."
    ],
    features: [
      "Detailed guides to upgrading legacy databases to modern secure platforms",
      "Deep-dives into biometric accuracy and anti-spoofing technology",
      "Expert breakdowns of changes in national corrections regulations and standards"
    ],
    specs: [
      { name: "Publish Schedule", value: "New security and technical analysis articles shared monthly" },
      { name: "Expert Authors", value: "Prepared by our engineering team and compliance researchers" }
    ],
    compliance: ["CJIS Data Compliance Policies", "ADA Accessibility Guidelines", "PREA Security Standards"],
    links: [
      { label: "Data Analytics Dashboard", href: "/products/data-analytics-dashboard" },
      { label: "Biometric Access Control", href: "/products/biometric-access-control" },
      { label: "FAQ Library", href: "/resources/faq" }
    ]
  },
  {
    slug: "compliance-and-standards",
    title: "Compliance & Standards | PREA, CJIS, & SOC-2 Systems | Jailsoft",
    description: "Learn how Jailsoft software fits national corrections rules, including CJIS Level 4, PREA safety limits, and HIPAA standards.",
    h1: "Compliance and Standards",
    subtitle: "Verified alignments with federal guidelines, safety policies, and data-protection rules.",
    image: "https://picsum.photos/seed/jailsoft-compliance/1200/800",
    paragraphs: [
      "Operating detention facilities requires following strict federal, state, and local compliance guidelines. Jailsoft builds every piece of software and hardware to meet these standards, providing solid documentation and passing regular security audits to help departments operate with complete confidence.",
      "Our data architecture complies with CJIS Level 4 standards, using advanced encryption, detailed access logs, and private local servers to protect sensitive files. For health records in our database, we enforce strict compliance with HIPAA rules, keeping medical files isolated from regular operational records.",
      "We also focus closely on PREA (Prison Rape Elimination Act) guidelines. Our facility management platforms, classification algorithms, and scheduling engines help administrators build safe staffing models, separate residents by risk levels, and log safety reviews to demonstrate alignment with federal rules."
    ],
    features: [
      "CJIS Level 4 compliance frameworks with secure column encryption",
      "PREA alignment tools that log required safety checklists automatically",
      "HIPAA-compliant medical partitions keeping health records secure and isolated"
    ],
    specs: [
      { name: "Audit Integrity", value: "System interactions logged down to milliseconds on read-only storage" },
      { name: "Compliance Verification", value: "Undergoes security audits from independent external teams yearly" }
    ],
    compliance: ["CJIS Information Security policy", "PREA Standard § 115.11-41", "HIPAA Data Privacy Rules"],
    links: [
      { label: "Security & Operations", href: "/security" },
      { label: "Classification & Risk Assessment", href: "/products/classification-and-risk-assessment" },
      { label: "Case Studies Hub", href: "/resources/case-studies" }
    ]
  },
  {
    slug: "faq",
    title: "FAQ | Technical Queries & Fail-Safe Answers | Jailsoft",
    description: "Find clear answers to common questions about backup systems, offline-locks, battery times, and data safety.",
    h1: "Frequently Asked Questions",
    subtitle: "Technical answers about hardware fail-safes, backups, power failures, and data safety.",
    image: "https://picsum.photos/seed/jailsoft-faq/1200/800",
    paragraphs: [
      "Corrections IT leaders demand clear, detailed answers about how systems perform during power losses, network drops, or security incidents. This FAQ provides direct, technical answers about Jailsoft infrastructure designs, fail-secure features, and software configurations.",
      "We address common concerns about how smart door controls handle emergency events, ensuring doors stay locked when communication drops while supporting fast mechanical key overrides. We also explain how our local database servers keep systems running smoothly when county networks lose connection.",
      "You'll also find details on how we protect resident and family privacy, how often we back up databases, and how we handle system updates safely. By providing transparent technical info, we help departments plan installations and operate with complete confidence."
    ],
    features: [
      "Direct explanations of offline fail-secure smart door override setups",
      "Clear overviews of database backup schedules and automatic recovery steps",
      "Insight into secure, desaturated camera systems work during network drops"
    ],
    specs: [
      { name: "Document Version", value: "V4.2, updated annually by our compliance team" },
      { name: "Core Focus", value: "Hardware overrides, data security, and compliance guidelines" }
    ],
    compliance: ["NIST Security Management Controls", "NFPA Health and Safety Regulations", "CJIS Level 4 Rules"],
    links: [
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Security & Operations", href: "/security" },
      { label: "Glossary of Tech", href: "/resources/glossary" }
    ]
  },
  {
    slug: "glossary",
    title: "Glossary | Corrections Technology Terms | Jailsoft",
    description: "Read definitions for industry terms like Fail-Secure, Objective Classification, and PLC Control.",
    h1: "Technology Glossary",
    subtitle: "Definitions and technical explanations for common terms used in corrections GovTech.",
    image: "https://picsum.photos/seed/jailsoft-glossary/1200/800",
    paragraphs: [
      "The corrections technology field uses specialized terms from industrial engineering, high-security design, and federal compliance rules. This GovTech glossary defines common terms to help facility planners, IT coordinators, and agencies select and configure systems accurately.",
      "We explain foundational ideas like 'Fail-Secure' door behavior (which keeps locks secure when power is lost to prevent escapes) and contrast it with standard civilian 'Fail-Safe' designs. We also define key database terms like 'Objective Classification' and describe how PLC micro-controllers operate independently from primary computer networks.",
      "This document serves as a helpful reference for teams planning system upgrades, preparing for contract reviews, or designing high-security buildings. We update definitions regularly to keep pages aligned with changing federal guidelines and technological developments."
    ],
    features: [
      "Clear definitions of industrial security, database, and hardware terms",
      "Cross-references showing how specific terms connect with federal guidelines",
      "Explanations of how industrial PLC units run independently from standard Networks"
    ],
    specs: [
      { name: "Entry Count", value: "Over 45 detailed technical terms defined clearly" },
      { name: "Revision Cycle", value: "Reviewed and updated by our engineering group yearly" }
    ],
    compliance: ["CJIS Level 4 Data Guidelines", "NIST System Standards", "PREA Safety Definitions"],
    links: [
      { label: "Whitepapers Library", href: "/resources/whitepapers" },
      { label: "Compliance & Standards", href: "/resources/compliance-and-standards" },
      { label: "FAQ Library", href: "/resources/faq" }
    ]
  }
];

export const legalData: PageContent[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy | Audited Data Segregation & Security | Jailsoft",
    description: "Read how Jailsoft protects database records, keeps resident data isolated from marketing tracks, and complies with HIPAA.",
    h1: "Privacy Policy",
    subtitle: "Strict data privacy policies protecting resident files and communications histories.",
    image: "https://picsum.photos/seed/jailsoft-privacy-page/1200/800",
    paragraphs: [
      "Jailsoft is committed to protecting the privacy and security of all data processed within our platforms. Because our software and hardware systems handle sensitive personal records, legal files, and communications histories, we enforce strict data-protection rules at every level. We operate entirely as a technology vendor, ensuring data is used only to support secure facility operations.",
      "We do not sell, rent, or share personal data, communication records, or visitor files with third-party marketing companies. Data processed within our databases remains locked under strict user controls, ensuring only authorized personnel have access for legal and security reasons. Our systems use advanced security settings to protect databases from unauthorized access attempts.",
      "We also follow strict compliance guidelines, including HIPAA rules for health files and local archival guidelines for record preservation. We back up databases regularly using secure, off-site servers, keeping files protected from hardware failures and ensuring departments can audit historical records with complete confidence."
    ],
    features: [
      "Full data isolation keeping sensitive files locked under secure user accounts",
      "No data sharing or sales to third-party marketing organizations",
      "HIPAA-compliant security partitions protecting personal health histories"
    ],
    specs: [
      { name: "Data Controller", value: "Individual corrections agencies using Jailsoft local systems" },
      { name: "Data Storage", value: "Secure, local facility servers or private government clouds only" }
    ],
    compliance: ["HIPAA Security Rule", "CJIS Information Security policy", "Local Records Preservation Acts"],
    links: [
      { label: "Terms of Service", href: "/legal/terms-of-service" },
      { label: "Security & Operations", href: "/security" }
    ]
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service | GovTech Agreements & Service Levels | Jailsoft",
    description: "Review our standard terms of service, software license rules, and support agreements for corrections agencies.",
    h1: "Terms of Service",
    subtitle: "Standard software licensing terms, hosting agreements, and support rules for corrections clients.",
    image: "https://picsum.photos/seed/jailsoft-terms/1200/800",
    paragraphs: [
      "These Terms of Service govern the licensing, installation, and operation of Jailsoft software and hardware systems. By deploying our platforms, agencies and corrections clients agree to follow these rules, ensuring systems are used safely and in alignment with legal guidelines. We build every tool to provide reliable performance, backed by clear support agreements.",
      "Jailsoft grants licensed clients a restricted, non-transferable right to run our software on secure local servers or private government clouds. We retain all rights and ownership of our underlying software code, patents, and system designs. Clients are responsible for managing terminal access, assigning secure account passwords, and training staff on appropriate system use.",
      "We provide comprehensive maintenance and software updates under our service-level agreements, keeping systems aligned with changing security and compliance requirements. Our support teams resolve technical issues quickly to maintain high uptime, helping facilities operate safely and with complete administrative confidence."
    ],
    features: [
      "Clean software licensing terms designed for government and corrections agencies",
      "Detailed service-level agreements confirming support timelines for technical issues",
      "Solid software update paths that keep system features aligned with changing rules"
    ],
    specs: [
      { name: "License Model", value: "Annual enterprise site licenses configured to facility bed counts" },
      { name: "Uptime SLA", value: "99.9% availability target for all critical primary database systems" }
    ],
    compliance: ["Government Procurement Rules", "CJIS Level 4 Data Standards", "NIST System Standards"],
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Support & Integrations", href: "/integrations" }
    ]
  }
];

export const staticPagesData = {
  about: {
    title: "Corporate Identity | Jailsoft Labs & Research Group",
    description: "Learn about Jailsoft's long-established history as an enterprise corrections technology vendor and our clinical research approach.",
    h1: "Corporate Overview",
    subtitle: "Long-established technical leadership in justice and detention security hardware.",
    paragraphs: [
      "Founded with the goal of modernizing public safety infrastructure, Jailsoft has positioned itself as a primary, deeply technical systems developer for the corrections and justice sectors. We specialize in engineering software ledgers, high-uptime lock controllers, and advanced forensic communication systems. Our platforms serve municipal jails, juvenile facilities, and maximum-security prisons across the region, delivering enterprise-grade orchestration to complex custodial systems.",
      "Rather than prioritizing personal branding or executive public profiles, Jailsoft operates with a deliberate corporate structure. Our projects and technical milestones are driven by the collective expertise of Jailsoft Labs, our specialized systems engineering teams, and the Jailsoft Research Group. By focusing on collective technical delivery, we ensure our research, hardware designs, and code-bases remain aligned with the strict standards required by government agencies.",
      "Every product we build represents years of engineering, rigorous testing, and close compliance reviews. We do not design simple decorative consumer solutions; we craft ruggedized high-uptime infrastructures capable of operating continuously in steel and masonry environments. This focus on durability, safety, and compliance has made us a trusted technical vendor for corrections organizations nationwide."
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Established systems developer specializing in corrections GovTech environments",
      "Research-led design driven entirely by Jailsoft Labs and engineering teams",
      "Committed vendor of ruggedized hardware and CJIS-compliant database systems"
    ],
    specs: [
      { name: "Established Year", value: "2011" },
      { name: "Corporate Structure", value: "Independent operations centered on technical research labs" },
      { name: "Core Specialization", value: "Industrial PLC systems, secure ledgers, and audio monitoring" }
    ],
    compliance: ["ACA National Vendor Guidelines", "CJIS Level 4 Security Standards", "FIPS 140-2 Encryption Standards"],
    links: [
      { label: "Security & Operations", href: "/security" },
      { label: "Integrations Portal", href: "/integrations" },
      { label: "Contact Jailsoft", href: "/contact" }
    ]
  },
  security: {
    title: "System Security & Cryptography | Military-Grade Defense | Jailsoft",
    description: "Learn about Jailsoft's technical security protocols, air-gapped server networks, and AES-256 local database encryption.",
    h1: "Infrastructure Security",
    subtitle: "Enterprise-tier security audits and data isolation protocols for high-security environments.",
    paragraphs: [
      "Security within corrections GovTech demands a strict, zero-trust approach to data storage, system access, and network interfaces. Jailsoft builds every software ledger, hardware controller, and messaging node with robust corporate security controls. This ensures sensitive files and communications records remain secure from external threats.",
      "We deliver our software to operate on private, local servers or high-security government clouds, avoiding public networks and standard internet paths entirely. Database columns are encrypted using AES-256 keys, protecting resident records, medical files, and booking details. Terminals require physical multi-factor access keys, ensuring only verified staff can view system panels.",
      "Our engineering groups run continuous security audits, checking code and monitoring terminal interactions to find potential risks before they can affect operations. By maintaining strict control over updates, Jailsoft keeps system infrastructures locked down and operating with complete administrative confidence."
    ],
    image: "https://images.unsplash.com/photo-1601138421149-a2e4ac654e94?auto=format&fit=crop&w=1200&q=80",
    features: [
      "AES-256 database column encryption keeping sensitive files highly protected",
      "Private local server deployments that run independently from public networks",
      "Strict physical multi-factor access controls for terminal operations"
    ],
    specs: [
      { name: "Security Architecture", value: "Zero-Trust local mesh architecture with active firewalls" },
      { name: "Database Encryption", value: "Hardware-enforced AES-256 GCM on all system data tiers" },
      { name: "Security Auditing", value: "Keystroke-level logging with instant alerts for terminal overrides" }
    ],
    compliance: ["NIST Security Management Controls", "FIPS 140-2 System Standards", "CJIS Level 4 Data Compliance"],
    links: [
      { label: "Our Integrations", href: "/integrations" },
      { label: "Whitepapers Library", href: "/resources/whitepapers" },
      { label: "Privacy Policy", href: "/legal/privacy-policy" }
    ]
  },
  integrations: {
    title: "System Integrations | Multi-Agency API Hub | Jailsoft",
    description: "Connect Jailsoft ledgers with state court registries, county booking registries, and medical database APIs.",
    h1: "System Integrations",
    subtitle: "Flexible APIs and hardware adapters connecting with standard corrections tools.",
    paragraphs: [
      " detenion facilities require connecting multiple different systems, from legal records and county courts to video lines and local biometric gates. Jailsoft systems use flexible APIs and rugged hardware adapters to link diverse tools into a single, high-contrast command dashboard.",
      "The program integrates directly with state judicial registries to update arraignments and bond details automatically. It tracks court appearance schedules and custody updates, ensuring information matches across county booking and state registries while avoiding manual data entry errors.",
      "Our hardware adapters connect with standard industrial PLC controllers, camera networks, and duress radio arrays. By establishing reliable local connections, Jailsoft helps operators coordinate security teams, monitor facility walkways, and handle emergency events with complete operational confidence."
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dynamic legal APIs connecting databases directly with county court portals",
      "Industrial PLC hardware interfaces linking with standard locking systems",
      "Flexible data adapter tools that map legacy records to modern secure ledgers"
    ],
    specs: [
      { name: "API Architecture", value: "RESTful endpoints with secure, tokenized access keys" },
      { name: "Integration Latency", value: "< 450ms for statewide database coordination loops" },
      { name: "Hardware Connection", value: "Standard RJ45 and industrial serial links for PLC units" }
    ],
    compliance: ["CJIS Level 4 API Rules", "NIST System Standards", "SOC 2 Security Protocols"],
    links: [
      { label: "Smart Door Control Systems", href: "/products/smart-door-control-systems" },
      { label: "Inmate Records System", href: "/products/inmate-records-system" },
      { label: "Security & Operations", href: "/security" }
    ]
  },
  partners: {
    title: "Partner Network | Certified Integrators & Hardware Vendors | Jailsoft",
    description: "Learn about Jailsoft's certified systems integrators, hardware manufacturing partners, and GovTech contractors.",
    h1: "Partner Ecosystem",
    subtitle: "Certified systems integrators and hardware manufacturers delivering Jailsoft technology.",
    paragraphs: [
      "Delivering modern corrections technology across many regional sites requires coordination with experienced installers, hardware manufacturers, and specialized GovTech representatives. Jailsoft partners with certified organizations to ensure our software ledgers and sensory devices are set up safely and work reliably.",
      "Our hardware partners manufacture rugged steel enclosures, biometric wickets, and PLC units to our exact engineering designs. These certified suppliers use durable materials and safety-tested components, ensuring equipment holds up inside challenging masonry and steel corridors.",
      "We also coordinate with certified GovTech integrators who handle physical installations, run wiring configurations, and provide staff training. By partnering with experienced teams, Jailsoft ensures every installation meets national standards and operates with high uptime from day one."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Certified manufacturing partners supplying ruggedized physical security hardware",
      "Experienced systems integrators directing local facility wiring installations",
      "Authorized public-sector representatives managing statewide coordination contracts"
    ],
    specs: [
      { name: "Partner Count", value: "Over 24 certified integration organizations nationwide" },
      { name: "Certification Scope", value: "Covers PLC controls, database setup, and user training courses" }
    ],
    compliance: ["ACA National Partner Rules", "FIPS Certification Tiers", "NIST Security Standards"],
    links: [
      { label: "Our Integrations", href: "/integrations" },
      { label: "About Jailsoft", href: "/about" },
      { label: "Main Office Locations", href: "/contact" }
    ]
  },
  careers: {
    title: "Careers inside Jailsoft Labs | Systems Engineering Roles",
    description: "Explore careers inside Jailsoft Labs. We hire secure software developers, high-uptime QA researchers, and hardware architects.",
    h1: "Careers at Jailsoft Labs",
    subtitle: "Systems engineering and compliance research roles in a technology-first group.",
    paragraphs: [
      "Building security software and custom hardware controllers for maximum-security environments requires focused engineering teams, precise quality verification, and deep compliance research. Jailsoft Labs offers independent technical roles for developers and researchers who prioritize software durability and operational safety.",
      "We maintain a technical workplace focused entirely on code performance, systems architecture, and compliance standards. Our engineers design local databases, structure industrial PLC adapters, and model wireless layouts inside thick steel and concrete spaces. We avoid corporate trends, focusing purely on engineering complete solutions for our clients.",
      "Our QA and compliance researchers verify every update against strict national regulations, run continuous security tests, and author thorough technical document guides. If you are passionate about system stability, zero-trust security, and building rugged software configurations, explore our open engineering positions."
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Focused software roles coding secure, local relational database configurations",
      "Diagnostics QA positions testing industrial PLC door control interfaces",
      "Research team roles tracking changes in federal data compliance rules"
    ],
    specs: [
      { name: "Work Location", value: "Regional engineering laboratories with safe testing environments" },
      { name: "Technical Focus", value: "Industrial C, PostgreSQL databases, and encrypted mesh networks" }
    ],
    compliance: ["EEO Employer Standards", "Drug-Free Workplace Rules", "CJIS Background Cleared"],
    links: [
      { label: "About Jailsoft", href: "/about" },
      { label: "Our Security Standards", href: "/security" },
      { label: "Contact Careers Unit", href: "/contact" }
    ]
  },
  press: {
    title: "Press Releases & Announcements | Corporate News Archive | Jailsoft",
    description: "Read historic press statements from the Jailsoft Research Group, technical product announcements, and acquisition logs.",
    h1: "Press & Announcements",
    subtitle: "Historic announcements and technical release logs from Jailsoft Labs.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    paragraphs: [
      "Jailsoft shares research discoveries, systems updates, and legal announcements through our formal press office. We write our statements in clear, technical language, avoiding marketing claims to provide clear information on corrections technology developments.",
      "Our announcements detail important database rollouts, testing milestones for biometric wickets, and insights from our research whitepapers. We also share formal updates on corporate changes, ensuring agencies and public partners have clear info on company direction and support paths.",
      "Our archives include formal acquisition notices, system lifecycle updates, and compliance announcements. This ensures corrections leaders can track historical milestones, audit product timelines, and access official corporate statements cleanly."
    ],
    image_list: "https://picsum.photos/seed/jailsoft-press-archive/1200/800",
    features: [
      "Clear, desaturated press releases detailing security database updates",
      "Verified announcements of systems testing and compliance certifications",
      "Formal corporate announcements documenting company milestones and support paths"
    ],
    specs: [
      { name: "Press Archive", value: "Maintains formal company statements back to 2011" },
      { name: "Disclosure Policy", value: "Strict corporate transparency with zero promotional claims" }
    ],
    compliance: ["SEC Public Guidelines", "CJIS Public Disclosure Rules", "ACA National Vendor Guidelines"],
    links: [
      { label: "About Jailsoft", href: "/about" },
      { label: "Our Security Standards", href: "/security" },
      { label: "Contact Media Team", href: "/contact" }
    ]
  }
};

// Auto-upgrade any legacy/redirecting picsum.photos placeholder URLs to reliable, high-performance desaturated Unsplash URLs
const unsplashMapping: Record<string, string> = {
  // Products
  "facility-management-suite": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  "inmate-records-system": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "scheduling-and-staffing": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "visitation-management": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  "commissary-platform": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  "incident-reporting": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
  "classification-and-risk-assessment": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "data-analytics-dashboard": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "facility-security-overrides": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  "biometric-access-control": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "cctv-and-video-surveillance": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  "perimeter-intrusion-detection": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  "duress-and-panic-systems": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "facility-iot-network": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "inmate-calling-systems": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  "secure-messaging-and-mail": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
  "video-visitation-kiosks": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  "forensic-evidence-tracking": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
  "incident-alert-system": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",

  // Solutions
  "county-jails": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  "state-prisons": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
  "federal-facilities": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "juvenile-detention": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "private-corrections": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",

  // Resources
  "case-studies": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  "whitepapers": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "blog": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "compliance-and-standards": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
  "faq": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  "glossary": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
};

const defaultFallbackImage = "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80";

const upgradeImages = (arr: PageContent[]) => {
  if (!arr) return;
  for (const item of arr) {
    if (item.image && item.image.includes("picsum.photos")) {
      item.image = unsplashMapping[item.slug] || defaultFallbackImage;
    }
  }
};

// Apply upgrades to existing static arrays
upgradeImages(productsData);
upgradeImages(solutionsData);
upgradeImages(resourcesData);

// Apply upgrades to staticPagesData properties
if (typeof staticPagesData !== "undefined" && staticPagesData) {
  const pages = staticPagesData as any;
  for (const key of Object.keys(pages)) {
    const item = pages[key];
    if (item.image && item.image.includes("picsum.photos")) {
      item.image = unsplashMapping[key] || defaultFallbackImage;
    }
    if (item.image_list && item.image_list.includes("picsum.photos")) {
      item.image_list = defaultFallbackImage;
    }
  }
}
