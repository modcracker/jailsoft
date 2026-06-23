import React from "react";
import { notFound } from "next/navigation";
import { resourcesData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import ResourceReader from "@/components/ResourceReader";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcesData.map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found | Jailsoft",
    };
  }

  return {
    title: resource.title,
    description: resource.description,
    alternates: {
      canonical: `https://jailsoft.com/resources/${slug}`,
    },
    openGraph: {
      title: resource.title,
      description: resource.description,
      images: [{ url: resource.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.description,
      images: [resource.image],
    },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": resource.h1 || resource.title.split("|")[0].trim(),
    "headline": resource.h1 || resource.title.split("|")[0].trim(),
    "description": resource.subtitle || resource.description,
    "image": resource.image,
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
    "inLanguage": "en-US",
    "audience": "Corrections Operators, Compliance Officers, and Security Technologists",
    "author": {
      "@type": "Organization",
      "name": "Jailsoft Compliance Group"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jailsoft.com/logo.png"
      }
    },
    "datePublished": "2026-06-22T12:00:00Z",
    "dateModified": "2026-06-22T12:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jailsoft.com/resources/${slug}`
    }
  };

  return (
    <div id={`resource-${resource.slug}-wrapper`} className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <PageHero
        title={resource.title}
        subtitle={resource.subtitle}
        image={resource.image}
        paragraphs={resource.paragraphs}
        features={resource.features}
        specs={resource.specs}
        compliance={resource.compliance}
        links={resource.links}
      />
      <ResourceReader
        slug={resource.slug}
        resourceName={resource.title.split("|")[0].trim()}
      />
    </div>
  );
}
