import React from "react";
import { notFound } from "next/navigation";
import { solutionsData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import SolutionBlueprint from "@/components/SolutionBlueprint";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionsData.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Jailsoft",
    };
  }

  return {
    title: solution.title,
    description: solution.description,
    alternates: {
      canonical: `https://jailsoft.com/solutions/${slug}`,
    },
    openGraph: {
      title: solution.title,
      description: solution.description,
      images: [{ url: solution.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.description,
      images: [solution.image],
    },
  };
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corrections Enterprise Infrastructure Solution",
    "name": solution.h1 || solution.title.split("|")[0].trim(),
    "description": solution.subtitle || solution.description,
    "provider": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com",
      "parentOrganization": {
        "@type": "Organization",
        "name": "EVU",
        "url": "https://www.evu.com"
      }
    },
    "areaServed": "US",
    "audience": {
      "@type": "Audience",
      "audienceType": "Corrections Administrators, Sheriffs, and Facility Supervisors"
    },
    "brand": {
      "@type": "Brand",
      "name": "Jailsoft"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "32",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div id={`solution-${solution.slug}-wrapper`} className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <PageHero
        title={solution.title}
        subtitle={solution.subtitle}
        image={solution.image}
        paragraphs={solution.paragraphs}
        features={solution.features}
        specs={solution.specs}
        compliance={solution.compliance}
        links={solution.links}
      />
      <SolutionBlueprint
        slug={solution.slug}
        solutionName={solution.title.split("|")[0].trim()}
      />
    </div>
  );
}
