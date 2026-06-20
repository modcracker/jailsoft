import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CJIS Compliance & Jail Security Infrastructure Standards | Jailsoft",
  description: "Review structural audit records, absolute server security practices, state compliance patterns, and FIPS-compliant cryptography standards on Jailsoft.",
  keywords: ["corrections level 4 cjis compliance", "jailsoft security guidelines", "prison database protection", "detention physical lock safety override"],
  alternates: {
    canonical: "https://jailsoft.com/security",
  }
};

export default function SecurityPage() {
  const content = staticPagesData.security;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "CJIS Compliance & Jail Security Infrastructure Standards",
    "description": "Details regarding FIPS-certified keys, CJIS Level 4 database controls, and software platform security on Jailsoft.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="security-page-wrapper" className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        image={content.image}
        paragraphs={content.paragraphs}
        features={content.features}
        specs={content.specs}
        compliance={content.compliance}
        links={content.links}
      />
    </div>
  );
}
