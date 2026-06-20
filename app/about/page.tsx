import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jailsoft | Global Corrections Technology Research & Development",
  description: "Learn about Jailsoft's background, standard systems of record, and corporate-governed prison and jail management software development processes.",
  keywords: ["about jailsoft", "jailsoft history", "corrections technological systems", "detention software team", "prison systems company"],
  alternates: {
    canonical: "https://jailsoft.com/about",
  }
};

export default function AboutPage() {
  const content = staticPagesData.about;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Jailsoft",
    "description": "Information regarding standard corrections research laboratories and digital system infrastructure developers at Jailsoft.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="about-page-wrapper" className="bg-black text-white">
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
