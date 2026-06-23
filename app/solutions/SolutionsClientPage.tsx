"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";
import GlobalSearchFilter, { SearchableItem } from "@/components/GlobalSearchFilter";

interface SolutionsClientPageProps {
  initialSolutions: any[];
}

export default function SolutionsClientPage({ initialSolutions }: SolutionsClientPageProps) {
  const [filteredSolutions, setFilteredSolutions] = useState(initialSolutions);
  const [activeQuery, setActiveQuery] = useState("");

  const handleFilterChange = (items: SearchableItem[], query: string) => {
    const matchedSlugs = new Set(items.map(it => it.slug));
    const nextFiltered = initialSolutions.filter(sol => matchedSlugs.has(sol.slug));
    setFilteredSolutions(nextFiltered);
    setActiveQuery(query);
  };

  const hasAnyResults = filteredSolutions.length > 0;

  return (
    <div className="space-y-12">
      {/* Global Filter Toolbar */}
      <GlobalSearchFilter currentCategory="solutions" onFilterChange={handleFilterChange} />

      {/* Solutions Grid */}
      {hasAnyResults ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 border-t border-neutral-900">
          {filteredSolutions.map((sol) => (
            <div
              key={sol.slug}
              className="group bg-neutral-950 border border-neutral-900 p-8 rounded-sm hover:border-neutral-700 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Visual Accent */}
                <div className="flex items-center justify-between">
                  <Shield className="w-5 h-5 text-neutral-500 group-hover:text-emerald-500 transition-colors" />
                  <span className="font-mono text-[8px] text-neutral-600 tracking-widest uppercase">
                    SECURE ARCHITECTURE
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className="font-sans font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">
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
                    {sol.compliance.map((comp: string) => (
                      <span
                        key={comp}
                        className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-cyan-950/20 border border-cyan-900/30 rounded-full font-mono text-[7px] text-cyan-400 font-semibold uppercase tracking-wider"
                      >
                        <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0 animate-pulse" />
                        <span>{comp}</span>
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
      ) : (
        <div className="py-20 text-center border-t border-neutral-900 space-y-4">
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
            0 Solutions Found
          </p>
          <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
            No institutional configurations matched your active terms. Try filtering by simple compliance frameworks like &quot;PREA&quot; or &quot;CJIS&quot; to see relevant results.
          </p>
        </div>
      )}
    </div>
  );
}
