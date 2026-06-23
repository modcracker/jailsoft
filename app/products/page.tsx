import React, { Suspense } from "react";
import Link from "next/link";
import { productsData } from "@/lib/content";
import { Metadata } from "next";
import ProductsClientPage from "./ProductsClientPage";

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
    <div id="products-catalog-container" className="bg-black text-white min-h-screen py-16 md:py-24 font-sans animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6 select-none">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-neutral-800">/</span>
          <span className="text-white font-medium">Products Directory</span>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl space-y-4 mb-16 select-none">
          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-[0.05em] text-white leading-tight">
            Technology Catalog
          </h1>
          <p className="text-sm sm:text-lg text-neutral-400 font-light leading-relaxed max-w-3xl">
            Jailsoft designs robust, reliable digital architectures for modern detention systems. Explore our comprehensive directory of 17 professional-grade modules engineered to reduce operational friction, maintain state-level compliance, and ensure structural security.
          </p>
        </div>

        {/* Dynamic Interactive Panel with Search and Filters */}
        <Suspense fallback={
          <div className="w-full h-32 bg-neutral-950 rounded-sm border border-neutral-900 animate-pulse flex items-center justify-center font-mono text-xs text-neutral-500">
            LOADING CATALOG FILTER SYSTEM...
          </div>
        }>
          <ProductsClientPage initialProducts={productsData} />
        </Suspense>

      </div>
    </div>
  );
}
