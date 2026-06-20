import React from "react";
import Link from "next/link";
import { solutionsData } from "@/lib/content";
import { Metadata } from "next";
import { Shield, ArrowRight } from "lucide-react";

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
    <div id="solutions-catalog-container" className="bg-black text-white min-h-screen py-16 md:py-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">Solutions Directory</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-4 mb-20">
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            Institutional Solutions
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl">
            Correctional environments enforce distinct statutory requirements, administrative standards, and scale thresholds. Jailsoft delivers targeted, battle-tested solutions customized specifically to your unique jurisdiction and regulatory guidelines.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-neutral-900">
          {solutionsData.map((sol) => (
            <div
              key={sol.slug}
              className="group bg-neutral-950 border border-neutral-900 p-8 rounded-sm hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Visual Accent */}
                <div className="flex items-center justify-between">
                  <Shield className="w-5 h-5 text-neutral-500" />
                  <span className="font-mono text-[8px] text-neutral-600 tracking-widest uppercase">
                    SECURE NODE
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-sans font-bold text-lg text-white group-hover:text-neutral-300 transition-colors">
                    <Link href={`/solutions/${sol.slug}`}>
                      {sol.h1 || sol.title.split("|")[0].trim()}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed line-clamp-4">
                    {sol.description}
                  </p>
                </div>

                {/* Tags */}
                {sol.compliance && sol.compliance.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {sol.compliance.map((comp) => (
                      <span
                        key={comp}
                        className="px-2 py-0.5 bg-black border border-neutral-800 rounded-sm font-mono text-[8px] text-neutral-500 uppercase tracking-widest"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-900/40 mt-8 flex justify-between items-center text-xs font-mono tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                <span>View Solution Architecture</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
