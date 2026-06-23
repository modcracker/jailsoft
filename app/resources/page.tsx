import React, { Suspense } from "react";
import Link from "next/link";
import { resourcesData } from "@/lib/content";
import { Metadata } from "next";
import ResourcesClientPage from "./ResourcesClientPage";

export const metadata: Metadata = {
  title: "Compliance, Intelligence and Regulatory Documents | Jailsoft",
  description: "Read peer-reviewed case studies, operational compliance audits, technological whitepapers, general FAQs, and our comprehensive corrections industry glossary.",
  alternates: {
    canonical: "https://jailsoft.com/resources",
  },
  openGraph: {
    title: "Compliance, Intelligence and Regulatory Documents | Jailsoft",
    description: "Jailsoft repository of technical whitepapers, statutory guides, security audits, and glossary books.",
    url: "https://jailsoft.com/resources",
  }
};

export default function ResourcesIndexPage() {
  // Schema for Resources
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Jailsoft Knowledge and Compliance Resource Catalog",
    "description": "Technical compliance documentation, security guidelines, terminology lists, and studies curated for correction administration officers.",
    "numberOfItems": resourcesData.length,
    "itemListElement": resourcesData.map((res, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://jailsoft.com/resources/${res.slug}`,
      "name": res.h1 || res.title.split("|")[0].trim(),
      "description": res.description
    }))
  };

  return (
    <div id="resources-catalog-container" className="bg-black text-white min-h-screen py-16 md:py-24 font-sans animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6 select-none">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">Resources Directory</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-4 mb-16 select-none">
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            Knowledge Hub
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl">
            Deep dive into certified regulatory compliance guidelines, tactical case studies, security whitepapers, detailed general FAQs, and our multi-term corrections industry lexicon glossary.
          </p>
        </div>

        {/* Dynamic Interactive Filtered Resources */}
        <Suspense fallback={
          <div className="w-full h-32 bg-neutral-950 rounded-sm border border-neutral-900 animate-pulse flex items-center justify-center font-mono text-xs text-neutral-500">
            LOADING RESOURCES FILTER SYSTEM...
          </div>
        }>
          <ResourcesClientPage initialResources={resourcesData} />
        </Suspense>

      </div>
    </div>
  );
}
