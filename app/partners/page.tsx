import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authorized Correctional Vendors & Integration Partners | Jailsoft",
  description: "Review authorized government procurement vendors, certified hardware suppliers, and accredited partner divisions aligning with Jailsoft compliance rules.",
  keywords: ["government prison vendors", "jail software suppliers", "jailsoft partners", "police hardware certified agencies"],
  alternates: {
    canonical: "https://jailsoft.com/partners",
  }
};

export default function PartnersPage() {
  const content = staticPagesData.partners;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Authorized Correctional Vendors & Integration Partners",
    "description": "Certified corrections device manufacturers, federal contractors, and software providers connected with the Jailsoft network.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="partners-page-wrapper" className="bg-black text-white">
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
