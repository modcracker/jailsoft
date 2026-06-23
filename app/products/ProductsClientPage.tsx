"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Terminal, Cpu, PhoneCall, ArrowRight } from "lucide-react";
import GlobalSearchFilter, { SearchableItem } from "@/components/GlobalSearchFilter";

interface ProductsClientPageProps {
  initialProducts: any[];
}

export default function ProductsClientPage({ initialProducts }: ProductsClientPageProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [activeQuery, setActiveQuery] = useState("");

  const handleFilterChange = (items: SearchableItem[], query: string) => {
    // Sync keys in item types with raw products Data to display
    const matchedSlugs = new Set(items.map(it => it.slug));
    const nextFiltered = initialProducts.filter(prod => matchedSlugs.has(prod.slug));
    setFilteredProducts(nextFiltered);
    setActiveQuery(query);
  };

  // Group filtered products by original classifications
  const softwareProducts = filteredProducts.filter(prod => {
    const origIdx = initialProducts.findIndex(p => p.slug === prod.slug);
    return origIdx >= 0 && origIdx < 8;
  });

  const hardwareProducts = filteredProducts.filter(prod => {
    const origIdx = initialProducts.findIndex(p => p.slug === prod.slug);
    return origIdx >= 8 && origIdx < 14;
  });

  const communicationProducts = filteredProducts.filter(prod => {
    const origIdx = initialProducts.findIndex(p => p.slug === prod.slug);
    return origIdx >= 14;
  });

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

  const hasAnyResults = filteredProducts.length > 0;

  return (
    <div className="space-y-12">
      {/* Global Filter Toolbar */}
      <GlobalSearchFilter currentCategory="products" onFilterChange={handleFilterChange} />

      {/* Grid Display */}
      {hasAnyResults ? (
        <div className="space-y-24">
          {productCategories.map((category, catIdx) => {
            if (category.items.length === 0) return null;
            return (
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
                          <h3 className="font-sans font-bold text-base text-white tracking-wide group-hover:text-emerald-400 transition-colors">
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
                             <div className="flex flex-wrap gap-1.5 pt-1.5 align-center">
                               {prod.compliance.slice(0, 2).map((comp: string) => (
                                 <span
                                   key={comp}
                                   className="inline-flex items-center space-x-1 px-2 py-0.5 bg-emerald-950/20 border border-emerald-900/30 rounded-full font-mono text-[7px] text-emerald-400 font-semibold uppercase tracking-wider"
                                 >
                                   <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" />
                                   <span>{comp}</span>
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
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center border-t border-neutral-900 space-y-4">
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            0 Products Found
          </p>
          <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
            No Jailsoft system modules matched your active query. Try resetting your tags or typing alternate search terms like &quot;door&quot;, &quot;CJIS-compliant&quot;, or &quot;booking&quot;.
          </p>
        </div>
      )}
    </div>
  );
}
