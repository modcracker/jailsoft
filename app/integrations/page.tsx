import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Connections & Jail Software Database Integrations | Jailsoft",
  description: "Connect your jail management systems (JMS), biometric terminals, county records databases, and partner tracking endpoints to Jailsoft API pipelines.",
  keywords: ["jail software database api", "jailsoft integrations", "court booking connectivity", "sheriff office records software api"],
  alternates: {
    canonical: "https://jailsoft.com/integrations",
  }
};

export default function IntegrationsPage() {
  const content = staticPagesData.integrations;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "API Connections & Jail Software Database Integrations",
    "description": "Integration points for county records, court databases, offender registries, and smart detention locks with the Jailsoft centralized platform.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="integrations-page-wrapper" className="bg-black text-white">
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
