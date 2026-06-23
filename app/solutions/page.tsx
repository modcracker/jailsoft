import React, { Suspense } from "react";
import Link from "next/link";
import { solutionsData } from "@/lib/content";
import { Metadata } from "next";
import SolutionsClientPage from "./SolutionsClientPage";

export const metadata: Metadata = {
  title: "Facility Operational Solutions Directory | Jailsoft",
  description: "Browse the operational systems tailored specifically to county jails, state prisons, federal facilities, juvenile detentions, and private corrections platforms.",
  alternates: {
    canonical: "https://jailsoft.com/solutions",
  },
  openGraph: {
    title: "Facility Operational Solutions Directory | Jailsoft",
    description: "Jailsoft provides distinct technical solutions designed explicitly for local, state, federal, and private custody organizations.",
    url: "https://jailsoft.com/solutions",
  }
};

export default function SolutionsIndexPage() {
  // Schema for Solutions
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Jailsoft Correctional Facility Solutions Catalog",
    "description": "Specific infrastructure, softwarized ledgers, and communication modules optimized for discrete jurisdictional custody environments.",
    "numberOfItems": solutionsData.length,
    "itemListElement": solutionsData.map((sol, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://jailsoft.com/solutions/${sol.slug}`,
      "name": sol.h1 || sol.title.split("|")[0].trim(),
      "description": sol.description
    }))
  };

  return (
    <div id="solutions-catalog-container" className="bg-black text-white min-h-screen py-16 md:py-24 font-sans animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6 select-none">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">Solutions Directory</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-4 mb-16 select-none">
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            Institutional Solutions
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl">
            Correctional environments enforce distinct statutory requirements, administrative standards, and scale thresholds. Jailsoft delivers targeted, battle-tested solutions customized specifically to your unique jurisdiction and regulatory guidelines.
          </p>
        </div>

        {/* Dynamic Interactive Filtered Solutions */}
        <Suspense fallback={
          <div className="w-full h-32 bg-neutral-950 rounded-sm border border-neutral-900 animate-pulse flex items-center justify-center font-mono text-xs text-neutral-500">
            LOADING SOLUTIONS FILTER SYSTEM...
          </div>
        }>
          <SolutionsClientPage initialSolutions={solutionsData} />
        </Suspense>

      </div>
    </div>
  );
}
