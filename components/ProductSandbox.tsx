"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Cpu, Play, Check, ShieldCheck, Sparkles, RefreshCw, Layers } from "lucide-react";

interface ProductSandboxProps {
  slug: string;
  productName: string;
}

interface CommandOption {
  id: string;
  name: string;
  icon: string;
  payload: object;
  simulate: (input: any) => { logs: string[]; result: object };
}

export default function ProductSandbox({ slug, productName }: ProductSandboxProps) {
  const [selectedCmd, setSelectedCmd] = useState<string>("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [responsePayload, setResponsePayload] = useState<object | null>(null);

  // Define tailored commands for products depending on the slug
  const getCommandsForProduct = (): CommandOption[] => {
    switch (slug) {
      case "facility-management-suite":
        return [
          {
            id: "query_fms_census",
            name: "Inspect Dayroom Cell Feed & Census",
            icon: "Layers",
            payload: { block: "WEST-CELL-3", include_guards: true, check_headcount: "ROLL_CALL" },
            simulate: () => ({
              logs: [
                "FMS_LEDGER_INIT // Synchronizing database cells in sector 3",
                "STATE_QUERY // Checking physical wrist transmitter telemetry...",
                "CELL_CHECK // Block 3 Census: 42 of 42 residents present & locked",
                "OFFICER_ALIGN // Dispatching scheduled shift roster variables: OK",
                "AUDIT_SUCCESS // Local census ledger reconciled safely at millisecond level"
              ],
              result: {
                active_block: "WEST-CELL-3",
                headcount_status: "100%_SECURED",
                total_residents_loaded: 42,
                assigned_guards: ["Officer_Kovacs", "Officer_Soto"],
                tamper_proof_checksum: "AES-B3-88af7c"
              }
            })
          },
          {
            id: "fms_dispatch_squad",
            name: "Dispatch Response Team",
            icon: "ShieldAlert",
            payload: { level: "RED_ALPHA", reason: "MISSED_CHECKPOINT_ALERT", target_zone: "INFIRMARY-A" },
            simulate: () => ({
              logs: [
                "OVR_INIT // Core protocol override detected: alarm code 0x82",
                "ROUTING // Bypassing regional administrative approval trees for urgent tactical safety",
                "BROADCASTER // Blasting priority alert signals to active guard terminal tablets",
                "HARDWARE_PLC // Unlocking local high-voltage sliding barrier B-1",
                "LEDGER_WRITE // Documenting critical shift intervention logs for compliance audits"
              ],
              result: {
                dispatch_id: "DISP-RED-8827a",
                timestamp_local: new Date().toISOString(),
                response_speed_predicted: "42_seconds",
                sirens_engaged: true,
                compliance_class_satisfied: "PREA_SEC_115"
              }
            })
          }
        ];

      case "inmate-records-system":
        return [
          {
            id: "query_booking_ledger",
            name: "Query National Booking Registry",
            icon: "Database",
            payload: { state_id: "TX-CA-0091", filter_aliases: true, search_fingerprint_file: "F_F821_9A" },
            simulate: () => ({
              logs: [
                "DB_CONNECT // Accessing secure regional Booking ledger database",
                "DECRYPT // Decrypting field columns using symmetry keys #414",
                "NCIC_SYNC // Checking federal active warrant registry databases...",
                "RECORD_MATCH // Verified Profile ID #B-2026-X821",
                "AUDIT_LOG_DAEMON // Registering administrative search request credentials safely"
              ],
              result: {
                dataset_origin: "FEDERAL_NCIC_MIRROR",
                resident: {
                  legal_name: "GARCIA, ALEJANDRO J.",
                  booking_number: "TX-B19-09228",
                  offense_class: "CLASS_A_MISDEMEANOR",
                  warrant_flags: "ZERO_ACTIVE_OUTSTANDING"
                },
                response_time: "5.2_ms"
              }
            })
          },
          {
            id: "calculate_release_credits",
            name: "Calculate Statutory Release Date",
            icon: "Calculator",
            payload: { sentence_days: 730, institutional_credits: 45, infraction_deductions: 12 },
            simulate: () => ({
              logs: [
                "CALC_INIT // Triggering statutory legal calculator rulesets",
                "PARSING // Reviewing credit models against local Title 15 state corrections guidelines",
                "DEDUCTING // Processing disciplinary write-offs: 12 credit loss for dayroom dispute history",
                "RECALCULATING // Setting legal release calendar parameters",
                "INTEGRITY_CHECK // Ledger balance locked and verified by judicial notary script"
              ],
              result: {
                original_discharge_date: "2027-06-20",
                adjusted_discharge_date: "2027-05-07",
                days_saved_recreation: 33,
                sentence_completed_percent: "12.8%",
                audit_trace: "CALC-IRS-8827b"
              }
            })
          }
        ];

      case "scheduling-and-staffing":
        return [
          {
            id: "staff_post_resolver",
            name: "Assign Shift Post Distributions",
            icon: "Workflow",
            payload: { shift_type: "NIGHT_WATCH", fill_vacant_posts: true, enforce_union_breaks: true },
            simulate: () => ({
              logs: [
                "STAFF_ALLOC // Initiating dynamic workforce grid optimizer rules",
                "POST_MAP_LOOKUP // Verifying 24 core posts demanding mandatory armed guard presence",
                "CREDENTIALS_VERIFY // Screening active roster for valid CQB qualifications...",
                "AUTO_ROTATOR // Swapping Officer_Chen with Officer_Vance for rest period compliance",
                "LOG_SCHED // Saving optimal staffing pattern to active duty database"
              ],
              result: {
                total_posts_resolved: 24,
                remaining_unfilled_posts: 0,
                union_compliance_score: "100%",
                notified_backup_total: 4,
                active_schedule_uuid: "SCHED-8201-99"
              }
            })
          },
          {
            id: "staff_ot_analysis",
            name: "Analyze Overtime Budget Liability",
            icon: "Activity",
            payload: { current_pay_cycle: "CYCLE_24", warning_threshold_percent: 85 },
            simulate: () => ({
              logs: [
                "OT_DAEMON_INIT // Summing shift hour tallies from local punch card networks",
                "BUDGET_LOOKUP // Pulling weekly county overtime limits ($18,500 total caps)",
                "WARN_CHECK // Scanning for guard units tracking close to double-time rates over 48h limit",
                "FLAG_SYS // Red-flagged 3 staff members on excessive shift schedules",
                "BUDGET_CALC // Projecting potential fiscal impacts on quarterly budget models"
              ],
              result: {
                weekly_spent_so_far: "$14,200",
                overtime_burn_rate_status: "WARNING_STATE",
                fatigued_units_flagged: ["Officer_Hardy", "Officer_Kim"],
                remedial_suggestions: "Limit Solitary Block overtime shifts immediately",
                fips_audited: true
              }
            })
          }
        ];

      case "visitation-management":
        return [
          {
            id: "screen_visitor_warrants",
            name: "NCIC Background Warrant Screen",
            icon: "ShieldAlert",
            payload: { visitor_id_hash: "DL-TX-8827-09A", target_resident_id: "B-2026-X821" },
            simulate: () => ({
              logs: [
                "VISIT_LOCK // Intercepting appointment scheduler reservation",
                "NCIC_PING // Binding to secure statewide judicial warrant databases",
                "CROSS_REF_WARRANT // Checking active search folders for DL-TX-8827-09A...",
                "RESTRAINING_ORDER // Checking restraining orders against Resident B-2026-X821",
                "CLEARANCE // Checked background and approved visitor clearance"
              ],
              result: {
                screening_status: "VISITOR_APPROVED",
                active_warrants_found: 0,
                no_contact_inhibitors_found: true,
                temp_badge_issued: "ID-VIS-40121",
                search_tier_level: "STANDARD_METAL_DETECTOR"
              }
            })
          },
          {
            id: "allocate_visitation_booth",
            name: "Reserve Secure Physical Booth Slot",
            icon: "Layers",
            payload: { reservation_type: "ATTORNEY_PRIVILEGED", preferred_booth: "BOOTH-SECURE-B" },
            simulate: () => ({
              logs: [
                "BOOTH_ALLOC // Querying live occupancy metrics of visitation walkways",
                "SECURE_GATE // Verifying structural isolation barrier #4 status: OPERATIONAL",
                "TIMING // Booking slot at block day hour A-14 (Privileged Non-Recorded line)",
                "TELECOM_LOCK // Disabling standard digital monitoring recordings on channel Attorney-B",
                "LEDGER_WRITE // Locking visitation booth time log for judicial audit"
              ],
              result: {
                allocated_booth: "ATTORNEY-BOOTH-B",
                duration_allocated_minutes: 60,
                voip_monitored: false,
                physical_wicket_access_auth: "STAFF_MANUAL_BYPASS_ONLY",
                booking_reference: "RES-ATT-1922"
              }
            })
          }
        ];

      case "commissary-platform":
        return [
          {
            id: "checkout_resident_cart",
            name: "Process Ledger Checkout Cart",
            icon: "Database",
            payload: { resident_id: "B-1022-P011", cart_items: ["Hygiene_Kit_A", "Thermal_Socks"], total_cost: 14.85 },
            simulate: () => ({
              logs: [
                "COM_BAL_CHECK // Checking balance on Resident trust pocket ledger",
                "HEALTH_RULE_CHECK // Fetching medical tags - verifying high sugar/sodium restrictions...",
                "EXEMPTION_PASS // Hygiene and clothing products cleared against health files",
                "TRUST_DEBIT // Charging resident ledger account ($14.85)",
                "BARCODE_SYNC // Updating regional warehouse stock quantities for items"
              ],
              result: {
                transaction_approved: true,
                resident_initial_balance: 45.12,
                resident_remaining_balance: 30.27,
                stock_deduction_notified: true,
                receipt_checksum: "COMM-MD5-a8f817"
              }
            })
          },
          {
            id: "deposit_family_funds",
            name: "Accept Family Trust Ledger Funds",
            icon: "Activity",
            payload: { payor_name: "SOPHIA_GARCIA", correlation_bank_id: "CHASE-TX-99a2", deposit_amount: 50.00 },
            simulate: () => ({
              logs: [
                "DEPOSIT_DAEMON // Intercepting web deposit transaction",
                "COMPLIANCE_SCREEN // Searching correlation lists for legal court restricts",
                "POLICING_COMPLY // Checking weekly deposit caps ($150 limit) - current total: $50",
                "LEDGER_CREDIT // Adjusting Trust Ledger values +$50.00",
                "NOTIFICATION_OUTBOUND // Sending receipt SMS to SOPHIA_GARCIA"
              ],
              result: {
                deposit_success: true,
                deposit_id: "DEP-CHASE-992211",
                credited_amount: 50.00,
                regulatory_compliance_cleared: true,
                notification_status: "SMS_DELIVERED"
              }
            })
          }
        ];

      case "incident-reporting":
        return [
          {
            id: "generate_force_report",
            name: "Compile Incident Force Form 401A",
            icon: "FileText",
            payload: { level_of_force: "CONTROL_HOLD_ALPHA", supervisor_signoff_id: "LT-WOODS-2" },
            simulate: () => ({
              logs: [
                "INC_INIT // Spawning incident record file",
                "METRICS_FETCH // Pulling telemetry logs and CCTV recordings matching event window...",
                "TAGGING // Attaching physical intervention classifications",
                "STAFF_OVERSIGHT // Triggering priority supervisor signoff alert to LT-WOODS-2",
                "LEDGER_PUBLISH // Saving immutable document copy to CJIS compliance write-once tables"
              ],
              result: {
                incident_id: "INC-2026-99221",
                form_class: "FORM-401A-REV-3",
                supervisor_status: "AWAITING_VERIFICATION",
                cctv_logs_attached: ["CAM-B8-1422-1427"],
                compliance_valid: true
              }
            })
          },
          {
            id: "secure_evidence_locker",
            name: "Search Secure Evidence Logs Database",
            icon: "Database",
            payload: { case_reference: "CASE-9927A", query_hash: "SHA256_F92B" },
            simulate: () => ({
              logs: [
                "EVID_LOOKUP // Querying forensic evidence inventory ledgers",
                "FIP_SAFE // Opening read-only index partition for SEC-CASE-9927A",
                "METADATA_VERIFY // Inspecting digital hashes matching surveillance clip #222",
                "SIGN_CORRECT // Audit hash check matched perfectly - zero video tamper detected",
                "STATUS // Rendering access credentials log list"
              ],
              result: {
                case_id: "CASE-9927A",
                items_indexed: 4,
                digital_evidence: [
                  { item: "Surveillance_West_Passage.mp4", hash_ok: true, size: "128MB" },
                  { item: "Mugshot_B-2026-H827.jpg", hash_ok: true, size: "12MB" }
                ],
                fips_verified: true
              }
            })
          }
        ];

      case "classification-and-risk-assessment":
        return [
          {
            id: "objective_classification",
            name: "Execute Objective Placement Survey",
            icon: "Calculator",
            payload: { severity_points: 12, escape_risk_points: 0, disciplinary_infraction_points: 4 },
            simulate: () => ({
              logs: [
                "PLACEMENT_INIT // Accessing Resident behavior history matrices",
                "COMPLEX_SUM // Summing historical risk values dynamically",
                "LEVEL_RECOMMENDER // Scoring against local Title 15 placement regulations...",
                "COMPLY_TEST // Executing PREA dynamic segregation limits",
                "LEDGER_WRITE // Registering calculated risk status level to inmate file"
              ],
              result: {
                calculated_risk_score: 16,
                suggested_security_level: "MEDIUM_SECURITY_B_WARD",
                infraction_override_applied: false,
                re_evaluation_date: "2026-12-20",
                lockdown_protocols_required: false
              }
            })
          },
          {
            id: "protective_custody_override",
            name: "Enforce Administrative Isolation Order",
            icon: "ShieldAlert",
            payload: { resident_id: "B-2026-X821", safety_reason: "PREA_VULNERABILITY", housing_target: "PROTECTIVE_CELL_4" },
            simulate: () => ({
              logs: [
                "ISO_INIT // Initializing protective isolation routine",
                "CONFL_CHECK // Scanning B-ward housing registries for known alert conflicts with active profiles",
                "PLC_SCHED // Re-sequencing automated lock doors for private corridor walks",
                "ALERT_STAFF // Distributing protective custody isolation flag to shift roster",
                "SECURE_LEDGER // Confirming legal isolation mandate recorded securely"
              ],
              result: {
                isolation_authorized: true,
                assigned_protective_cell: "SHU-PROT-4",
                active_profile_flags: ["PROTECT_FROM_GEN_POP", "COMPANION_ASSIST_CHECKED"],
                audit_key: "ISO-REG-4019"
              }
            })
          }
        ];

      case "data-analytics-dashboard":
        return [
          {
            id: "query_recidivism_metrics",
            name: "Pull Recidivism Performance Statistics",
            icon: "Activity",
            payload: { target_years: [2024, 2025, 2026], dataset: "REGIONAL_POST_RELEASE" },
            simulate: () => ({
              logs: [
                "ANALYTICS_INIT // Building multidimensional query caches",
                "INDEX_SCAN // Sifting 14,000 post-release historical case file records",
                "COMPUTE_PERCENT // Scoring success indices for work-release program graduates",
                "SORTING // Bundling data over 12-month timeline brackets",
                "RENDER // Rendering custom data matrix visualization models"
              ],
              result: {
                total_cases_analyzed: 14200,
                general_recidivism_rate_percent: 34.2,
                work_release_program_success_rate: "88.4%",
                average_re_booking_lag_days: 412,
                cjis_cleared: true
              }
            })
          },
          {
            id: "warden_active_score",
            name: "Query Warden Core Shift Metrics",
            icon: "Layers",
            payload: { fiscal_quarter: "Q1_2026", facility_code: "CENTRAL-MAIN" },
            simulate: () => ({
              logs: [
                "WARDEN_SYS // Checking operations performance indicators",
                "COMPLIANCE_AVERAGE // Summing average delay durations on mandatory shift logs",
                "BUDGET_COMPARE // Matching staffing expenditures against allocated county funds",
                "SAFETY_RATING // Factoring total cell incidents and injury occurrences",
                "STATUS_RETURN // Packaging performance values"
              ],
              result: {
                facility_operating_score: "96.4%",
                average_incident_response_seconds: 14.8,
                regulatory_audit_alerts_discovered: 0,
                monthly_payroll_variant_percent: "-2.4% (Under Budget)",
                certification_state: "APPROVED_EXCELLENT"
              }
            })
          }
        ];

      case "smart-door-control-systems":
        return [
          {
            id: "unlatch_magnetic_solenoid",
            name: "Trigger Hydraulic Bypass Override",
            icon: "Cpu",
            payload: { bypass_duration_seconds: 5, wicket_target_latch: "SOLENOID-SEC-B2" },
            simulate: () => ({
              logs: [
                "PLC_BRIDGE_START // Handshaking with industrial PLC lock gateway",
                "POWER_AUDIT // Verifying active 24VDC backup solenoid power values",
                "SIGNAL_SEND // Unlatching magnetic coil relay (SOLENOID-SEC-B2)",
                "SENSOR_READ // Magnets state reports: UNLATCHED_OPEN",
                "TIMER_EXEC // Counting down 5 seconds transient duration...",
                "SAFETY_REARM // Energizing coil magnets. State back to: LOCKED_ACTIVE"
              ],
              result: {
                latch_id: "SOL-B2-CORRIDOR-WEST",
                voltage_load_millivolts: 24050,
                solenoid_temperature_c: 32.4,
                transient_allowed_pass: true,
                tamper_sensor_active: false
              }
            })
          },
          {
            id: "magnetic_wicket_volts",
            name: "Audit Latch Millivolt Relays",
            icon: "Activity",
            payload: { controller_id: "PLC-GATE-MAIN", run_diagnostic_cycles: 3 },
            simulate: () => ({
              logs: [
                "DIAG_INIT // Initializing coil diagnostic parameters on controller PLC-GATE-MAIN",
                "VOLTAGE_LOAD // Cycling relay #1: peak volt read 24.1v, low read 23.9v (SATISFACTORY)",
                "VOLTAGE_LOAD // Cycling relay #2: peak volt read 24200mv (SATISFACTORY)",
                "GROUND_CHECK // Inspecting earth leakage indices - impedance: 0.12 ohms (PASS)",
                "LEDGER_OK // Locking solenoid health diagnostics certificate safely"
              ],
              result: {
                controller_state: "HEALTHY",
                relays_tested_total: 4,
                average_solenoid_impedance_ohms: 42.1,
                earth_faults_discovered: 0,
                next_hardware_calibration_scheduled: "2026-10-15"
              }
            })
          }
        ];

      case "biometric-access-control":
        return [
          {
            id: "simulate_iris_register",
            name: "Enroll Geometric Iris Vectors",
            icon: "Layers",
            payload: { camera_sensor_node: "IRIS-TER-4", resident_profile_id: "B-2026-H827" },
            simulate: () => ({
              logs: [
                "IRIS_CAPTURE // Triggering safe infrared scanner flash cycle",
                "LANDMARKS // Capturing concentric pattern landmarks matching iris boundaries",
                "HASH_PROJECT // Converting 2D picture patterns to irreversible cryptographic hash arrays",
                "REMOVE_RAW // Erasing raw bitmap picture files to satisfy county privacy limits",
                "DB_LEDGER_ADD // Appending biometric hash to secure profile registries"
              ],
              result: {
                biometric_id: "BIO-IRIS-8812a",
                landmark_vectors_extracted: 256,
                irreversible_hash_projected: "SHA512-BIO882A7C...",
                raw_image_scrubbed: true,
                cjis_compliant: true
              }
            })
          },
          {
            id: "minutiae_fingerprint_check",
            name: "Verify Fingerprint Ridge Hashes",
            icon: "Activity",
            payload: { scanner_id: "FINGER-WICKET-1", security_threshold_percent: 98 },
            simulate: () => ({
              logs: [
                "SCAN_START // Initializing thermal finger ridge scanning pad",
                "MINUTIAE_EXTRACT // Mapping 42 biometric ridge ending and bifurcation endpoints",
                "HASH_CHECK // Querying local booking biometric mirrors...",
                "IDENTITY_FOUND // Authenticated fingerprint match: Resident Garcia, Alejandro",
                "DOOR_OPEN // Sending 3.5s release command to wicket controller lock relay #1"
              ],
              result: {
                scanner_id: "FINGER-WICKET-1",
                minutiae_match_score: 99.4,
                resident_id: "B-1022-P011",
                authorized: true,
                door_trigger_status: "RELAY_TRIGGER_SUCCESS"
              }
            })
          }
        ];

      case "surveillance-and-cctv-integration":
        return [
          {
            id: "cctv_motion_tracking",
            name: "Live CCTV Motion Analytics Feed",
            icon: "Layers",
            payload: { camera_channel: "CAM-CORRIDOR-E", track_behavior_anomaly: true },
            simulate: () => ({
              logs: [
                "FEED_CONN // Intercepting stream path from Corridor-E",
                "OPENCV_AI // Initializing dynamic pixels displacement tracking algorithms",
                "BOUND_TRACK // Tracking move vectors of 3 physical targets",
                "ANOMALY_PASS // Scanning for rapid acceleration or crowd signatures (OK)",
                "STREAM_FORWARD // Relaying clean analytics telemetry grid over watch room console"
              ],
              result: {
                camera_id: "CAM-CORRIDOR-E",
                resolution: "1080p_60FPS",
                active_moving_targets_count: 3,
                anomaly_alerts_triggered: 0,
                feed_link_state: "SECURE"
              }
            })
          },
          {
            id: "dvr_integrity_verification",
            name: "Audit Network DVR Video Integrity",
            icon: "Database",
            payload: { dvr_index: "DVR-N-BLOCK", verify_tamper_seals: true },
            simulate: () => ({
              logs: [
                "DVR_AUDIT // Fetching metadata logs from DVR-N-BLOCK storage servers",
                "HASH_TRACE // Recalculating checksum sequence signatures over past 12 record blocks",
                "DROP_SCAN // Scanning for frame-rate anomalies or black-out gaps",
                "SEAL_TEST // Checking physical chassis tamper sensors: SEAL_INTACT",
                "LOG_FIPS // Saving DVR compliance state certification"
              ],
              result: {
                dvr_unit_id: "DVR-N-BLOCK",
                total_recorded_hours_intact: 168,
                frame_drops_discovered: 0,
                cryptographic_verification: "SUCCESS_SHA256_MATCH",
                compliance_class_satisfied: "CJIS-LEVEL-4"
              }
            })
          }
        ];

      case "perimeter-security-sensors":
        return [
          {
            id: "microwave_beam_override",
            name: "Query Microwave Barrier Sensors",
            icon: "Cpu",
            payload: { zone_id: "ZONE-PERIMETER-SOUTH", sensitivity_gain_db: 4.2 },
            simulate: () => ({
              logs: [
                "PERIM_SENS_INIT // Connecting to microwave sensor arrays on perimeter fence line",
                "BEAM_ALIGN // Checking transmitter-receiver frequency matching metrics",
                "GAIN_ADJUST // Elevating gain +4.2dB to compensate for high wind and heavy rain distortions",
                "INTERFERENCE_DEDUCT // Filtering transient noise patterns from passing birds",
                "PERIM_OK // Southwest sensor states verified: SECURED (No barrier disruptions)"
              ],
              result: {
                sensor_zone: "ZONE-PERIMETER-SOUTH",
                alignment_index: "99.8%",
                active_signal_loss_db: -0.12,
                perimeter_breach_detected: false,
                tamper_circuit_loop_closed: true
              }
            })
          },
          {
            id: "laser_coordinate_mapping",
            name: "Map Active Laser Fence Breach",
            icon: "Activity",
            payload: { array_id: "LASER-FENCE-A", locate_refraction_coordinate: true },
            simulate: () => ({
              logs: [
                "LASER_READ_START // Querying laser barrier photo-sensor registers",
                "GRID_MATRIX_TRACE // Scanning laser grid coordinates along the east brick corridor wall",
                "REFRACT_CAL // Zero beam refraction found; all light beams hitting target nodes",
                "GROUND_STABILIZE // Compensating for fence line movement with baseline laser grid calibration",
                "LEDGER_LOG // Recording perimeter barrier status logs: PASS"
              ],
              result: {
                laser_array: "LASER-FENCE-A",
                active_beams_count: 12,
                breach_coordinates: "NONE",
                average_latency_microseconds: 4,
                calibrated_status: "SYSTEM_ALIGNED"
              }
            })
          }
        ];

      case "duress-and-panic-systems":
        return [
          {
            id: "track_beacon",
            name: "Triangulate Staff Duress Beacon",
            icon: "Layers",
            payload: { query_frequency_mhz: 915.2, simulate_trigger: false },
            simulate: () => ({
              logs: [
                "DURESS_SENS_START // Initiating RF signal locator arrays",
                "ANTENNA_SCAN // Checking signal strengths of room wireless lock boxes",
                "HEALTH_POLL // Pinging 24 active staff duress beacons inside housing quadrants...",
                "BEACON_STATE // Checked beacon matrices; all devices report status OK",
                "LEDGER_WRITE // Logging successful tracking loop checklist"
              ],
              result: {
                total_active_beacons_tracked: 24,
                low_battery_warnings_issued: 0,
                emergency_system_state: "STANDBY_READY",
                last_verification_hash: "RF-DUR-88aef"
              }
            })
          },
          {
            id: "receiver_power_checks",
            name: "Query Radio Receptor Battery",
            icon: "Activity",
            payload: { transceiver_group: "ROOF-ANTENNAS", threshold_percent: 15 },
            simulate: () => ({
              logs: [
                "RF_MONITOR // Querying backup power supplies of receptor poles",
                "VOLTAGE_CHECK // Scanning receptor block poles A-4, B-9, and C-12",
                "BATTERY_LOGS // Primary cell battery charge: 100% (Grid operation active)",
                "BATTERY_FALLBACK // Backup UPS cells status: 94.2% operational capacity",
                "AUDIT_PASS // Battery diagnostic log signed off"
              ],
              result: {
                transceiver_status: "ONLINE_NOMINAL",
                ups_backup_run_time_hours: 48,
                ground_impedance_milliohms: 22,
                maintenance_alert: false
              }
            })
          }
        ];

      case "facility-iot-network":
        return [
          {
            id: "hvac_flooding_override",
            name: "HVAC Flood Sensor Metrics",
            icon: "Cpu",
            payload: { block: "SOLITARY-BASEMENT", shut_water_valves: "IF_HIGH" },
            simulate: () => ({
              logs: [
                "IOT_MQTT // Establishing link with basement plumbing sensor grid",
                "DRAIN_READ // Current water level index: 0.12 inches (NORMAL CONDITIONS)",
                "VALVE_CHECK // Checking hydraulic control solenoid status: OPEN",
                "HVAC_EXCHANGE // Inspecting air circulation metrics: 12 volume cycles per hour",
                "FIRE_SENSOR_A12 // Checking optical particulate smoke detectors: INTACT"
              ],
              result: {
                sensor_id: "IOT-SMART-PLUMB-12",
                basement_dry_state: true,
                smart_valves_override_active: false,
                hvac_circulator_fan_rpm: 1200,
                mesh_hop_latency: "4.5_ms"
              }
            })
          },
          {
            id: "node_mqtt_mesh",
            name: "Trace MQTT Secure localized Node Mesh",
            icon: "Layers",
            payload: { broker_address: "MQTT://LOCAL-IOT-BROKER", trace_route: true },
            simulate: () => ({
              logs: [
                "MQTT_TRACE // Spawning route tracker packet to broker",
                "NODE_HOP_1 // Node IOT-LOCK-01 (Solitary block): Response delay 1.2ms",
                "NODE_HOP_2 // Node IOT-TEMP-04 (Dayroom block): Response delay 2.4ms",
                "NODE_HOP_3 // Node IOT-VALVE-09 (Basement block): Response delay 3.1ms",
                "ROUTING_SUCCESS // Core mesh network loops discovered: 3 healthy hops"
              ],
              result: {
                connected_nodes_total: 14,
                packet_delivery_success_rate: "100%",
                mesh_topology_format: "AD-HOC-MESH-ENCRYPTED",
                broker_load_percent: 2.1,
                crypto_key_rotation: "ACTIVE_FIPS-140"
              }
            })
          }
        ];

      case "inmate-calling-platform":
        return [
          {
            id: "live_audio_wiretap",
            name: "Speech-to-Text Wiretap Filter",
            icon: "Signal",
            payload: { terminal_id: "VOIP-KIOSK-A3", filter_keywords: ["escape", "contraband", "weapons"] },
            simulate: () => ({
              logs: [
                "COMM_MON_INIT // Spawning voice wiretap buffer to VOIP-KIOSK-A3",
                "VOIP_TAP // Hooking active audio telephone signal line",
                "OCR_SPEECH // Streaming acoustic patterns to NLP keyword analyzers",
                "RED_SCAN // Analyzing calling voice matrix - verifying signature matches Resident Garcia",
                "SEC_RECV // Secure voice track approved and running. Contraband indicators: ZERO"
              ],
              result: {
                active_tap_id: "TAP-A3-88219",
                voice_biometric_match_confidence: "99.8%",
                flagged_word_occurrences: 0,
                legal_banner_notified_outgoing: true,
                sip_trunk_stream_state: "HEALTHY_ACTIVE"
              }
            })
          },
          {
            id: "billing_trust_rates",
            name: "Process Calling Account rates lookup",
            icon: "Database",
            payload: { resident_id: "B-2026-X821", dest_number: "+15550212399" },
            simulate: () => ({
              logs: [
                "BILL_CALC // Auditing phone billing profile for B-2026-X821",
                "RATE_TABLE // Checking county interstate calling tables: $0.12 per minute rate cap",
                "TRUST_VERIFY // Querying trust ledge ledger balance: $14.22 available funds",
                "MAX_TALK_CALC // Restricting max call duration to 15-minute standard statutory limit",
                "ALLOW_DIAL // Sending approval packet to SIP VoIP router"
              ],
              result: {
                billing_class: "INTERSTATE_VOIP_SECURE",
                rate_per_minute_usd: 0.12,
                max_call_limits_minutes: 15,
                trust_has_sufficient_balance: true,
                transaction_authorization_key: "VOIP-AUTH-412"
              }
            })
          }
        ];

      case "secure-messaging-system":
        return [
          {
            id: "letter_ocr_redact",
            name: "Letter OCR Privacy Redaction",
            icon: "FileText",
            payload: { message_id: "MSG-TEXT-9912", target_envelope: "ENV-N-BLOCK-40" },
            simulate: () => ({
              logs: [
                "OCR_CAPT // Intercepting outgoing secure email package",
                "IMAGE_OCR // Scanning uploaded photo attachment 'envelope_slip.png' with OCR",
                "NLP_CENSOR // Scanning for secret tactical codes or gang indicators",
                "PIXEL_REDACT // Swapping 2 risk phrases with desaturated fallback blocks [REDACTED]",
                "AUDIT_LEDGER // Logging successful letter censorship for legal record"
              ],
              result: {
                message_processed_id: "MSG-TEXT-9912",
                original_text_length_words: 112,
                redacted_terms: ["gate_pin", "south_wall_guard_hours"],
                delivered_envelope_id: "ENV-N-BLOCK-40-REDACTED",
                security_classification: "CLEARED_WITH_REDACTION"
              }
            })
          },
          {
            id: "slang_contraband_scan",
            name: "Filter Letter keywords for slang",
            icon: "Database",
            payload: { text_corpus_raw: "Send the bundle behind the recreation gate after night shifts" },
            simulate: () => ({
              logs: [
                "SLANG_INDEX // Loading regional slang dictionary matrices (FENT, BUNDLE, LOCKS)",
                "NLP_MATCH // Scoring text corpus raw line against security index rules...",
                "SCORE_DANGER // Dangrous contraband transaction threat score high: 92% DANGER",
                "FLAG_MESSAGE // Automatically dropping message and routing to Warden active review board",
                "LEDGER_LOCK // Saving evidence ledger artifact"
              ],
              result: {
                corpus_flagged: true,
                detected_threat_keywords: ["bundle", "behind the recreation gate"],
                assigned_threat_level: "HIGH_CONTRABAND_RISK",
                escalate_to_investigator: true,
                audit_log_reference: "SLANG-INC-9912"
              }
            })
          }
        ];

      case "video-visitation":
        return [
          {
            id: "consultation_video_stream",
            name: "Secure Low-Latency Video Stream",
            icon: "Signal",
            payload: { endpoint_terminal: "VIS-KIOSK-04", encryption_mode: "AES-GCM-256" },
            simulate: () => ({
              logs: [
                "VIDEO_INIT // Allocating dedicated VoIP bandwidth arrays",
                "ENCRYPT_SECURE // Binding with FIPS-140 dynamic key rotation matrix",
                "AI_CAMS_FRAME // Enabling frame-by-frame image analyze tool to check for contraband or extra users",
                "BAND_TEST // Connection bandwidth status: 4.5 Mbps stable loop",
                "STREAM_OK // Active video visitation consultation securely routed"
              ],
              result: {
                stream_channel_id: "VIDEO-VIS-041",
                resolution: "720p_30FPS",
                active_frame_contraband_alerts: 0,
                session_latency_ms: 18,
                legal_privacy_non_recorded_line: false
              }
            })
          },
          {
            id: "kiosk_latency_analysis",
            name: "Measure Active Kiosk Video Latency",
            icon: "Activity",
            payload: { kiosk_group: "VIS-ROOM-EAST", duration_seconds: 5 },
            simulate: () => ({
              logs: [
                "PING_START // Dispatching latency metric vectors to 8 active East Kiosks",
                "KIOSK_1_PING // Latency: 12ms, packet drop: 0.0% (EXCELLENT)",
                "KIOSK_2_PING // Latency: 14ms, packet drop: 0.1% (EXCELLENT)",
                "FIBER_BACK // Core fiber line loops showing zero network bottlenecks",
                "DIAG_PASS // Network diagnostic logs synchronized with local server logs"
              ],
              result: {
                average_latency_ms: 13.2,
                total_packet_loss_percent: 0.02,
                network_route_status: "NOMINAL",
                hardware_test_cert: "NET-VIS-A82b"
              }
            })
          }
        ];

      case "call-monitoring-and-recording":
        return [
          {
            id: "voice_pattern_scans",
            name: "Verify Voice Biometric Ledger",
            icon: "Signal",
            payload: { resident_id: "B-2026-X821", audio_clip_ref: "CALL-REC-1122a" },
            simulate: () => ({
              logs: [
                "VOICE_SCAN // Loading resident voice prints file catalog",
                "ANALYSIS_CH // Extracting pitch, timber, and cadence biometric waveforms",
                "COMPARE // Testing sample waves against Resident Garcia's biometric template...",
                "MATCH_VERIFIED // Acoustic voice biometric validated as 99.82% identity MATCH",
                "LEDGER_UPDATE // Saving positive identification ledger tag"
              ],
              result: {
                biometric_match_found: true,
                resident_identified: "B-2026-X821 (GARCIA, ALEJANDRO)",
                pitch_deviation_percent: 0.12,
                auth_security_class: "VOICE_RECOGNIZED_OK"
              }
            })
          },
          {
            id: "decrypt_forensic_audio",
            name: "Decode Telephone Recording Hashes",
            icon: "Database",
            payload: { secure_call_hash: "AES256_CALL_142A", authorized_operator_id: "INVEST_CHUN" },
            simulate: () => ({
              logs: [
                "DECRYPT_INIT // Operator INVEST_CHUN logged into forensic gateway",
                "KEY_RETRIEVE // Pulling call symmetric cryptography key from secure county hardware loop",
                "AUDIO_RENDER // Decrypting recorded VOIP file B-2026-CALL-121.ogg",
                "AUDIO_WAV // Wave render complete - audio codec G.711 loaded successfully",
                "AUDIT_PASS // Logging access activity to CJIS non-unwritable table"
              ],
              result: {
                playback_duration_seconds: 480,
                operator_access_approved: true,
                file_signature_matches_original: true,
                decrypt_reference_id: "DEC-FOR-1192"
              }
            })
          }
        ];

      case "family-notification-services":
        return [
          {
            id: "incident_sms_sender",
            name: "Dispatch Emergency SMS Pipeline",
            icon: "Signal",
            payload: { emergency_tier: "HOUSING_TRANSFER_ALERT", target_family_phone: "+15550212399" },
            simulate: () => ({
              logs: [
                "SMS_GATE_START // Spawning notification message template",
                "AUTH_CHECK // Verifying resident's approved family notify ledger registers",
                "PARSE_ALB // Crafting official message text: 'Scheduled custody transfer complete'...",
                "SMS_ROUTE // Dispatching SMS to regional Twilio GovCloud SMS network",
                "STATE_RECEIPT // SMS delivered to carrier cell tower"
              ],
              result: {
                carrier_handshake: "DELIVERED_HTTP_201",
                delivered_number: "+15550212399",
                charged_balance_usd: 0.02,
                notification_reference: "NOTIFY-SMS-9921",
                family_opt_out_state: "ACTIVE_RECEIVE"
              }
            })
          },
          {
            id: "notification_log_audit",
            name: "Audit SMS System Receipt Codes",
            icon: "FileText",
            payload: { query_days: 1, limit_results: 10 },
            simulate: () => ({
              logs: [
                "AUDIT_SMS // Sifting out previous 24 hours of notification ledger activity",
                "METRICS // 142 messages dispatched from automated roster trigger engines",
                "MEMBER_DIF // Receipt logs state: 140 DELIVERED, 2 UNDELIVERED (Invalid family cell number)",
                "CLEAN_LOGS // Automatically flagging invalid numbers for resident update notices",
                "COMPLY_SATIFIED // ACA compliance verification logged successfully"
              ],
              result: {
                total_audited_messages: 142,
                undelivered_numbers: ["+15550119231", "+15550212191"],
                system_reliability_rating: "98.59%",
                audit_compliant: true,
                regulatory_cert: "ACA-NOTIFY-2026"
              }
            })
          }
        ];

      default:
        // Core software ledger defaults (FMS / IRS fallback etc)
        return [
          {
            id: "get_roster_general",
            name: "Query CJIS Resident Ledger API",
            icon: "Database",
            payload: { query: "STATUS:ACTIVE", limit: 3, order: "booking_date_desc" },
            simulate: () => ({
              logs: [
                "SEC_AUTH // Validating GSA G-Cloud credentials...",
                "DB_CONN // Connecting to CJIS Level 4 high-availability replica database",
                "SQL_EXEC // SELECT booking_id, name, risk_score, cell FROM resident WHERE active = 1 ORDER BY date DESC LIMIT 3",
                "INTEGRATION // Pulling municipal warrants mapping ledger updates",
                "DECRYPT // Decrypting records in memory with AES key index #12"
              ],
              result: {
                api_version: "2026.3.1_JMS",
                response_time_ms: 12,
                dataset_length: 234,
                records: [
                  { bookingId: "B-2026-H827", name: "VALENCIA, CHRISTIAN G.", status: "Inpatient Ward", risk: "HIGH (Level 4)" },
                  { bookingId: "B-2026-A109", name: "O'DONNELL, MARCUS R.", status: "Scheduled Court Trans.", risk: "MEDIUM (Level 3)" },
                  { bookingId: "B-2026-E441", name: "KOWALSKI, BENJAMIN L.", status: "Work Release Program", risk: "MINIMUM (Level 1)" }
                ]
              }
            })
          },
          {
            id: "compute_risk_general",
            name: "Calculate Inmate Placement Classification",
            icon: "Calculator",
            payload: { resident_id: "B-2026-P093", infraction_count: 2, current_charges_severity: "CLASS_A_FELONY" },
            simulate: () => ({
              logs: [
                "AI_CORE // Fetching historical detention points from provincial system indexes",
                "COMPUTE // Assessing internal disciplinary writeups: 2 major writeups in past 6 months",
                "ALGORITHM // Applying PREA vulnerability and risk assessment scoring rulesets",
                "SAFEGUARD_CHECK // Executing segregation recommendation engine calculations",
                "STATUS // High-risk status flagged with required level 4 housing allocation"
              ],
              result: {
                target_resident: "HOUSTON, GREGORY S.",
                risk_points: 44,
                classification_output: "HIGH_SECURITY_SEGREGATION",
                re_evaluation_due: "2026-09-18",
                housing_lockdown_required: true
              }
            })
          }
        ];
    }
  };

  const commands = getCommandsForProduct();
  const activeCmdId = selectedCmd || (commands[0]?.id || "");

  const handleRunCommand = () => {
    const cmd = commands.find(c => c.id === activeCmdId);
    if (!cmd) return;

    setIsExecuting(true);
    setConsoleLogs([`[EXEC] Initializing ${cmd.name}...`]);
    setResponsePayload(null);

    let loggedSteps: string[] = [];
    let itemIndex = 0;
    const simResult = cmd.simulate(cmd.payload);

    const interval = setInterval(() => {
      if (itemIndex < simResult.logs.length) {
        loggedSteps.push(`[LOG] ${simResult.logs[itemIndex]}`);
        setConsoleLogs([...loggedSteps]);
        itemIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setConsoleLogs(prev => [...prev, `[SUCCESS] Transaction audit signature recorded. HTTP 200 OK.`]);
          setResponsePayload(simResult.result);
          setIsExecuting(false);
        }, 300);
      }
    }, 400);
  };

  const activeCmd = commands.find(c => c.id === activeCmdId) || commands[0];


  if (!activeCmd) return null;

  return (
    <div id="product-sandbox-container" className="pt-16 border-t border-neutral-900 bg-neutral-950/40 pb-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-neutral-900">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-2.5 py-1 bg-emerald-950/20 border border-emerald-900/30 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[8px] text-emerald-400 uppercase tracking-widest font-bold">DIGITAL PLAYGROUND</span>
            </div>
            <h2 className="font-display text-2xl lg:text-3xl font-black uppercase tracking-wider text-white">
              COMMAND INTERFACE SANDBOX
            </h2>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-2xl leading-normal">
              Test active system transactions, query state variables, or command simulated PLC relay controllers. Secure cryptographic handshakes process directly inside sandboxed hardware simulators.
            </p>
          </div>
          <div className="flex items-center space-x-3 font-mono text-[9px] text-neutral-500 bg-black/40 border border-neutral-900 px-3 py-2 rounded-sm">
            <Cpu className="w-3.5 h-3.5 text-neutral-400" />
            <span className="uppercase tracking-widest text-[8px]">SANDBOX_ENGINE v4.0_REV_19</span>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Command Selection & Input Payload */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-black border border-neutral-900 p-6 rounded-md">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#777] uppercase tracking-wider block">
                01 / SELECT API OPERATIONS
              </span>
              
              <div className="space-y-2.5">
                {commands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      if (!isExecuting) {
                        setSelectedCmd(cmd.id);
                        setConsoleLogs([]);
                        setResponsePayload(null);
                      }
                    }}
                    disabled={isExecuting}
                    className={`w-full text-left p-3.5 rounded-sm border transition-all flex items-center justify-between ${
                      selectedCmd === cmd.id
                        ? "bg-neutral-900/40 border-neutral-700 text-white"
                        : "bg-neutral-950 border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                    }`}
                  >
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">
                      {cmd.name}
                    </span>
                    <span className="font-mono text-[8.5px] px-2 py-0.5 rounded-sm bg-neutral-900 text-[#777]">
                      {cmd.id}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arguments Payload box */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[8.5px] text-[#777] uppercase tracking-wider block">
                  Simulated Arguments (JSON Schema)
                </span>
                <div className="bg-neutral-950 border border-neutral-900 p-4 rounded-sm">
                  <pre className="font-mono text-[10px] text-neutral-400 overflow-x-auto leading-relaxed">
                    {JSON.stringify(activeCmd.payload, null, 2)}
                  </pre>
                </div>
              </div>
            </div>

            {/* Execute trigger */}
            <div className="pt-4 border-t border-neutral-900">
              <button
                onClick={handleRunCommand}
                disabled={isExecuting}
                className="w-full py-3 bg-white hover:bg-neutral-200 disabled:bg-neutral-900 disabled:text-neutral-600 text-black font-sans text-xs font-black uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2.5"
              >
                {isExecuting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-neutral-600" />
                    <span>Executing Secured Handshake...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Simulate Secure Operation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Panel: Code Console Terminal & Dynamic Response Payload */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-black border border-neutral-900 rounded-md overflow-hidden min-h-[460px]">
            
            {/* Terminal Header */}
            <div className="bg-neutral-950 border-b border-neutral-900 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#888]" />
                <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase font-bold">
                  LOCAL SECURE LOG RECODER TERMINAL
                </span>
              </div>
              <div className="flex items-center space-x-1.5 font-mono text-[8px]">
                <span className="w-1.5 h-1.5 bg-[#16a34a] rounded-full animate-pulse" />
                <span className="text-[#16a34a] uppercase">CONNECTED</span>
              </div>
            </div>

            {/* Terminal Screen log window */}
            <div className="p-6 flex-1 font-mono text-[10.5px] leading-relaxed overflow-y-auto space-y-1.5 min-h-[140px] text-neutral-400 bg-black/40">
              {consoleLogs.length === 0 ? (
                <div className="text-neutral-600 italic text-center py-8">
                  {"// Awaiting local signal. Choose an action and click 'Simulate Secure Operation'."}
                </div>
              ) : (
                consoleLogs.map((log, idx) => {
                  let style = "text-neutral-500";
                  if (log.startsWith("[EXEC]")) style = "text-cyan-400 font-semibold";
                  if (log.startsWith("[SUCCESS]")) style = "text-emerald-400 font-bold";
                  if (log.includes("SEC_RECV") || log.includes("AUTH_OK")) style = "text-emerald-300";
                  return (
                    <div key={idx} className={style}>
                      <span className="opacity-35 select-none text-[#777]">&gt;</span> {log}
                    </div>
                  );
                })
              )}
            </div>

            {/* Response Payload JSON Board */}
            <div className="border-t border-neutral-900 bg-neutral-950 p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8.5px] text-[#777] uppercase tracking-wider">
                  02 / SYSTEM RESPONSE PAYLOAD
                </span>
                {responsePayload && (
                  <div className="flex items-center space-x-1 bg-emerald-950/20 px-2 py-0.5 rounded-full border border-emerald-900/30 font-mono text-[7px] text-emerald-400 uppercase font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>FIPS Validated</span>
                  </div>
                )}
              </div>
              
              <div className="bg-[#050505] p-4 border border-neutral-950 rounded-sm font-mono text-[10px] text-neutral-300 overflow-x-auto min-h-[120px] max-h-[180px]">
                {responsePayload ? (
                  <pre className="text-emerald-400">{JSON.stringify(responsePayload, null, 2)}</pre>
                ) : isExecuting ? (
                  <div className="flex flex-col items-center justify-center h-full text-neutral-600 gap-2 py-6">
                    <RefreshCw className="w-5 h-5 animate-spin text-neutral-700" />
                    <span className="text-[9px] uppercase tracking-wider">Awaiting dynamic handshake variables...</span>
                  </div>
                ) : (
                  <span className="text-neutral-600 italic">{"// Null envelope. Transaction response payload details will render here."}</span>
                )}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
