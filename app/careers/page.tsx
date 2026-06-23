import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import CareersPortal from "@/components/CareersPortal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers in High-Security Engineering & Corrections Software | Jailsoft",
  description: "Explore career opportunities in backend systems, zero-trust databases, low-level PLC physical integrations, and civilian communication platforms.",
  keywords: ["government database engineer jobs", "corrections software developer career", "jailsoft jobs", "prison safety technology vacancy"],
  alternates: {
    canonical: "https://jailsoft.com/careers",
  }
};

export default function CareersPage() {
  const content = staticPagesData.careers;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Careers in High-Security Engineering & Corrections Software | Jailsoft",
    "description": "Employment opportunities and infrastructure engineering positions at Jailsoft and its parent organization EVU.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="careers-page-wrapper" className="bg-black text-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <CareersPortal />
      </div>
    </div>
  );
}
