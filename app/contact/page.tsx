import React from "react";
import EmailGate from "@/components/EmailGate";
import BarDivider from "@/components/BarDivider";
import { Metadata } from "next";
import { HelpCircle, Shield, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Communications Gateway | Jailsoft",
  description: "Request secure access credentials or consult with Jailsoft Labs. Complete our verification gate to reveal channels.",
};

export default function ContactPage() {
  return (
    <div id="contact-page-wrapper" className="bg-black text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header navigation aid */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
          <span>Home</span>
          <span className="text-neutral-800">/</span>
          <span className="text-white">Contact General Inquiries</span>
        </div>

        {/* Title & Introduction */}
        <div className="border-b border-neutral-900 pb-12 mb-12">
          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-[0.1em] text-white mb-6">
            Contact Team
          </h1>
          <p className="font-sans text-sm md:text-lg text-neutral-400 font-light max-w-3xl leading-relaxed">
            Please use our verification gateway below to prevent automated spam and secure direct communication lines with our operations and support divisions.
          </p>
        </div>

        {/* Dynamic vertical accent bar */}
        <BarDivider variant="minimal" className="py-2 opacity-50" />

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
          
          {/* Left Column: Easy instructions & the Interactive EmailGate element */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h2 className="font-sans font-extrabold text-lg uppercase tracking-wider text-white">
                Primary Contact Channel
              </h2>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed font-light">
                Complete the automated challenge below to display our general corporate email address. Once unlocked, you may click to copy the email address and get in touch.
              </p>
            </div>

            {/* Render the interactive EmailGate Client Component */}
            <div className="bg-neutral-950 p-1 border border-neutral-900 rounded-sm inline-block w-full">
              <EmailGate />
            </div>
          </div>

          {/* Right Column: Corporate Location / Standards / Routing guidelines */}
          <div className="lg:col-span-6 space-y-8 lg:border-l lg:border-neutral-900 lg:pl-12">
            
            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase flex items-center space-x-2">
                <Shield className="w-4 h-4 text-white" />
                <span>NDA & Confidentiality</span>
              </h3>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                All communications and transmitted documents are securely handled in strict compliance with non-disclosure standards, commercial service agreements, and partner privacy policies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase flex items-center space-x-2">
                <Globe className="w-4 h-4 text-white" />
                <span>EVU Corporate Standards</span>
              </h3>
              <p className="font-sans text-xs text-neutral-300 leading-relaxed font-light">
                As a subsidiary of EVU, Jailsoft adheres to state-of-the-art security practices, professional service levels, and audited customer compliance routines.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-white" />
                <span>Response Times</span>
              </h3>
              <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                Our support and administration groups generally respond to all legitimate, non-spam inquiries within 24 to 48 business hours. For corporate acquisition or partner platform inquiries, please include your official company details.
              </p>
            </div>

          </div>

        </div>

        {/* structural foot separator */}
        <BarDivider variant="structural" className="mt-16 opacity-30" />

      </div>
    </div>
  );
}
