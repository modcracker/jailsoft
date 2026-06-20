import React from "react";
import { staticPagesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Communications & Public Bulletins | Jailsoft Press",
  description: "Read official public bulletins, corporate acquisitions, software announcements, and municipal agency partnerships issued by Jailsoft.",
  keywords: ["jailsoft press releases", "prison system announcements", "corrections software acquisitions", "jailsoft media news"],
  alternates: {
    canonical: "https://jailsoft.com/press",
  }
};

export default function PressPage() {
  const content = staticPagesData.press;
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Media Communications & Public Bulletins | Jailsoft Press Hub",
    "description": "Press coordinates, legal announcements, and administrative reviews regarding Jailsoft systems of record.",
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id="press-page-wrapper" className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <PageHero
        title={content.title}
        subtitle={content.subtitle}
        image={content.image || "https://picsum.photos/seed/jailsoft-press-alt/1200/800"}
        paragraphs={content.paragraphs}
        features={content.features}
        specs={content.specs}
        compliance={content.compliance}
        links={content.links}
      />
    </div>
  );
}
