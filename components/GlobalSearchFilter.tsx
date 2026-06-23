"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, X, ShieldCheck, Tag, Terminal, Cpu, PhoneCall, BookOpen, ArrowRight } from "lucide-react";
import { productsData, solutionsData, resourcesData } from "@/lib/content";

// Common interface for items across all directories
export interface SearchableItem {
  slug: string;
  h1?: string;
  title: string;
  description: string;
  compliance?: string[];
  features?: string[];
  paragraphs?: string[];
  type: "products" | "solutions" | "resources";
  iconType?: string;
}

interface GlobalSearchFilterProps {
  currentCategory: "products" | "solutions" | "resources";
  onFilterChange?: (filteredItems: SearchableItem[], query: string, selectedTags: string[]) => void;
}

// Convert data to shared search interface
const allItems: SearchableItem[] = [
  ...productsData.map(item => ({
    ...item,
    type: "products" as const,
  })),
  ...solutionsData.map(item => ({
    ...item,
    type: "solutions" as const,
  })),
  ...resourcesData.map(item => ({
    ...item,
    type: "resources" as const,
  })),
];

// Available quick search filter tags
const COMPLIANCE_TAGS = ["CJIS", "PREA", "NIST", "GSA", "HIPAA", "AES-256", "Audit"];

export default function GlobalSearchFilter({
  currentCategory,
  onFilterChange,
}: GlobalSearchFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // States - Real-time initialization from URL search parameters on mount
  const [searchQuery, setSearchQuery] = useState(() => {
    return searchParams ? (searchParams.get("q") || "") : "";
  });
  const [selectedTags, setSelectedTags] = useState<string[]>(() => {
    const tagsStr = searchParams ? searchParams.get("tags") : null;
    return tagsStr ? tagsStr.split(",") : [];
  });
  
  // Sync URL query state to keep it bookmarkable
  const updateUrl = (query: string, tags: string[]) => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (tags.length > 0) params.set("tags", tags.join(","));
    
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.replace(newUrl, { scroll: false });
  };

  // Match logic helper
  const matchesQueryAndTags = (item: SearchableItem, query: string, tags: string[]) => {
    const lowerQuery = query.toLowerCase().trim();
    
    // Check tags first
    if (tags.length > 0) {
      const itemTags = [
        ...(item.compliance || []),
        item.description,
        item.title,
        ...(item.features || []),
      ].join(" ").toLowerCase();
      
      const matchesAllTags = tags.every(t => itemTags.includes(t.toLowerCase()));
      if (!matchesAllTags) return false;
    }

    if (!lowerQuery) return true;

    // Direct string match across multiple properties
    const searchString = [
      item.title,
      item.h1,
      item.description,
      ...(item.compliance || []),
      ...(item.features || []),
      ...(item.paragraphs || [])
    ].filter(Boolean).join(" ").toLowerCase();

    return searchString.includes(lowerQuery);
  };

  // Perform search & calculations
  const searchStats = useMemo(() => {
    const filtered = allItems.filter(item => matchesQueryAndTags(item, searchQuery, selectedTags));
    
    const current = filtered.filter(item => item.type === currentCategory);
    const products = filtered.filter(item => item.type === "products");
    const solutions = filtered.filter(item => item.type === "solutions");
    const resources = filtered.filter(item => item.type === "resources");

    return {
      current,
      productsCount: products.length,
      solutionsCount: solutions.length,
      resourcesCount: resources.length,
      totalCount: filtered.length,
    };
  }, [searchQuery, selectedTags, currentCategory]);

  // Store of the dynamic callback inside a stable reference to prevent infinite loops from inline-declared handlers in parents
  const filterChangeRef = React.useRef(onFilterChange);
  useEffect(() => {
    filterChangeRef.current = onFilterChange;
  }, [onFilterChange]);

  const tagsKey = selectedTags.join(",");

  // Trigger callback strictly only when primitive-serialized parameters change
  useEffect(() => {
    if (filterChangeRef.current) {
      filterChangeRef.current(searchStats.current, searchQuery, selectedTags);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, tagsKey, currentCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateUrl(val, selectedTags);
  };

  const handleTagToggle = (tag: string) => {
    const nextTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(nextTags);
    updateUrl(searchQuery, nextTags);
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    updateUrl("", []);
  };

  const getCategoryThemeColor = (cat: string) => {
    switch (cat) {
      case "products": return "text-[#059669]";
      case "solutions": return "text-[#3b82f6]";
      case "resources": return "text-[#9333ea]";
      default: return "text-emerald-500";
    }
  };

  const getCategoryTitle = (cat: string) => {
    if (cat === "products") return "Products";
    if (cat === "solutions") return "Solutions";
    return "Resources";
  };

  return (
    <div id="global-search-filter-wrapper" className="w-full relative z-30 mb-8 font-sans">
      <div className="bg-neutral-950/80 backdrop-blur-md rounded-sm border border-neutral-900 p-5 md:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          
          {/* Main Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              id="global-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={`Search ${currentCategory} (e.g., locking, CJIS, databases)...`}
              className="w-full bg-neutral-900/60 text-white placeholder-neutral-500 pl-11 pr-10 py-3 rounded-sm border border-neutral-800 text-xs tracking-wide focus:outline-none focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/20 transition-all font-light"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); updateUrl("", selectedTags); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
                title="Clear query"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Catalog Selection Tabs / Live Stats */}
          <div className="flex items-center space-x-1 font-mono text-[9px] tracking-wider select-none">
            <Link
              href="/products"
              className={`px-3 py-2 rounded-sm border flex items-center space-x-1.5 transition-all duration-200 ${
                currentCategory === "products"
                  ? "bg-emerald-950/30 border-emerald-850 border-emerald-800 text-emerald-400"
                  : "bg-neutral-900/40 border-neutral-900 text-neutral-400 hover:border-neutral-800 hover:text-neutral-300"
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>PRODUCTS ({searchStats.productsCount})</span>
            </Link>

            <Link
              href="/solutions"
              className={`px-3 py-2 rounded-sm border flex items-center space-x-1.5 transition-all duration-200 ${
                currentCategory === "solutions"
                  ? "bg-blue-950/30 border-blue-800 border-blue-900 text-blue-400"
                  : "bg-neutral-900/40 border-neutral-900 text-neutral-400 hover:border-neutral-800 hover:text-neutral-300"
              }`}
            >
              <Cpu className="w-3 h-3" />
              <span>SOLUTIONS ({searchStats.solutionsCount})</span>
            </Link>

            <Link
              href="/resources"
              className={`px-3 py-2 rounded-sm border flex items-center space-x-1.5 transition-all duration-200 ${
                currentCategory === "resources"
                  ? "bg-purple-950/30 border-purple-800 border-purple-900 text-purple-400"
                  : "bg-neutral-900/40 border-neutral-900 text-neutral-400 hover:border-neutral-800 hover:text-neutral-300"
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>RESOURCES ({searchStats.resourcesCount})</span>
            </Link>
          </div>

        </div>

        {/* Quick Filter Tags & Reset */}
        <div className="mt-4 pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center space-x-1 text-neutral-500 font-mono text-[9px] uppercase tracking-wider mr-2">
              <Tag className="w-3 h-3 text-neutral-650 text-neutral-500" />
              <span>Compliance Matrix:</span>
            </div>
            
            {COMPLIANCE_TAGS.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagToggle(tag)}
                  className={`px-2.5 py-1 text-[9px] font-mono rounded-sm transition-all border ${
                    active
                      ? "bg-emerald-950/40 border-emerald-600 text-emerald-300"
                      : "bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:border-neutral-700 hover:text-neutral-300"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {(searchQuery || selectedTags.length > 0) && (
            <button
              onClick={clearAllFilters}
              className="text-neutral-400 hover:text-white font-mono text-[9px] uppercase tracking-wider underline transition-colors"
            >
              Reset Filters
            </button>
          )}

        </div>

        {/* Dynamic Global Matches Popup bar */}
        {(searchQuery || selectedTags.length > 0) && (
          <div className="mt-4 bg-emerald-950/10 border border-emerald-900/40 p-3 rounded-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center space-x-2 text-[11px] text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>
                Search found <strong className="text-white">{searchStats.totalCount}</strong> cross-referenced matches. Showing <strong className="text-white">{searchStats.current.length}</strong> in <span className="capitalize">{currentCategory}</span>.
              </span>
            </div>

            {/* Quick overview of matches in other categories */}
            <div className="flex items-center space-x-2">
              {currentCategory !== "products" && searchStats.productsCount > 0 && (
                <Link
                  href={`/products?q=${encodeURIComponent(searchQuery)}&tags=${encodeURIComponent(selectedTags.join(","))}`}
                  className="font-mono text-[9px] uppercase text-emerald-400 hover:underline flex items-center space-x-1"
                >
                  <span>View {searchStats.productsCount} Products</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              )}
              {currentCategory !== "solutions" && searchStats.solutionsCount > 0 && (
                <Link
                  href={`/solutions?q=${encodeURIComponent(searchQuery)}&tags=${encodeURIComponent(selectedTags.join(","))}`}
                  className="font-mono text-[9px] uppercase text-blue-400 hover:underline flex items-center space-x-1 margin-left-2"
                >
                  <span>View {searchStats.solutionsCount} Solutions</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              )}
              {currentCategory !== "resources" && searchStats.resourcesCount > 0 && (
                <Link
                  href={`/resources?q=${encodeURIComponent(searchQuery)}&tags=${encodeURIComponent(selectedTags.join(","))}`}
                  className="font-mono text-[9px] uppercase text-purple-400 hover:underline flex items-center space-x-1"
                >
                  <span>View {searchStats.resourcesCount} Resources</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
