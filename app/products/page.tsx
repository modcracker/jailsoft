import React from "react";
import Link from "next/link";
import { productsData } from "@/lib/content";
import { Metadata } from "next";
import { Cpu, Terminal, PhoneCall, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Corrections Software & Hardware Suite | Jailsoft",
  description: "Browse the complete directory of Jailsoft corrections solutions: enterprise facility software, smart-door physical access override systems, and CJIS-compliant resident communications networks.",
  alternates: {
    canonical: "https://jailsoft.com/products",
  },
  openGraph: {
    title: "Professional Corrections Software & Hardware Suite | Jailsoft",
    description: "Explore Jailsoft's directory of 17 corrections software of record, smart access controls, and communication systems.",
    url: "https://jailsoft.com/products",
  }
};

export default function ProductsIndexPage() {
  // Categorize products based on indices or structural tags
  const softwareProducts = productsData.filter((_, idx) => idx < 8);
  const hardwareProducts = productsData.filter((_, idx) => idx >= 8 && idx < 14);
  const communicationProducts = productsData.filter((_, idx) => idx >= 14);

  // Grouped array for easy rendering
  const productCategories = [
    {
      title: "Enterprise Software & Databases",
      description: "Secure, CJIS-compliant record engines, shift scheduling solvers, and administrative ledger suites designed to eliminate paperwork and lower legal liability risks.",
      icon: <Terminal className="w-6 h-6 text-neutral-400" />,
      items: softwareProducts,
    },
    {
      title: "Hardware Systems & Physical Controls",
      description: "Low-latency smart locks, unified biometric portals, perimeter sensors, and robust IoT mesh networks optimized for severe architectural boundaries.",
      icon: <Cpu className="w-6 h-6 text-neutral-400" />,
      items: hardwareProducts,
    },
    {
      title: "Secure Communications & Monitoring",
      description: "Monitored calling services, family video visitation portals, trust ledgers, and secure messaging portals matching federal security standards.",
      icon: <PhoneCall className="w-6 h-6 text-neutral-400" />,
      items: communicationProducts,
    },
  ];

  // Schema for Google Search Console to read product lists
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Jailsoft Professional Corrections Technology Catalog",
    "description": "A comprehensive directory of 17 software, hardware, and communication systems developed for high-pressure corrections and detention environments.",
    "numberOfItems": productsData.length,
    "itemListElement": productsData.map((prod, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://jailsoft.com/products/${prod.slug}`,
      "name": prod.h1 || prod.title.split("|")[0].trim(),
      "description": prod.description
    }))
  };

  return (
    <div id="products-catalog-container" className="bg-black text-white min-h-screen py-16 md:py-24 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">Products Directory</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-4 mb-20">
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            Technology Catalog
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl">
            Jailsoft designs robust, reliable digital architectures for modern detention systems. Explore our comprehensive directory of 17 professional-grade modules engineered to reduce operational friction, maintain state-level compliance, and ensure structural security.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-24">
          {productCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-8 border-t border-neutral-900 pt-12">
              
              {/* Category Header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-white">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Subproducts Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((prod) => (
                    <div
                      key={prod.slug}
                      className="group bg-neutral-950 border border-neutral-900 p-6 rounded-sm hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        {/* Title */}
                        <h3 className="font-sans font-bold text-base text-white tracking-wide group-hover:text-neutral-300 transition-colors">
                          <Link href={`/products/${prod.slug}`}>
                            {prod.h1 || prod.title.split("|")[0].trim()}
                          </Link>
                        </h3>
                        
                        {/* Summary description */}
                        <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                          {prod.description}
                        </p>

                        {/* Compliance Micro tags */}
                        {prod.compliance && prod.compliance.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {prod.compliance.slice(0, 2).map((comp) => (
                              <span
                                key={comp}
                                className="px-1.5 py-0.5 bg-black border border-neutral-800 rounded-sm font-mono text-[8px] text-neutral-500 uppercase tracking-widest"
                              >
                                {comp}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* CTA arrow */}
                      <div className="pt-6 border-t border-neutral-900/40 mt-6 flex justify-between items-center text-[11px] font-mono tracking-wider uppercase text-neutral-400 group-hover:text-white transition-colors">
                        <span>Details & Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
