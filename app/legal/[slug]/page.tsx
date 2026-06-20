import React from "react";
import { notFound } from "next/navigation";
import { legalData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return legalData.map((leg) => ({
    slug: leg.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const legal = legalData.find((l) => l.slug === slug);

  if (!legal) {
    return {
      title: "Legal Policy Not Found | Jailsoft",
    };
  }

  return {
    title: legal.title,
    description: legal.description,
    openGraph: {
      title: legal.title,
      description: legal.description,
      images: [{ url: legal.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: legal.title,
      description: legal.description,
      images: [legal.image],
    },
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const legal = legalData.find((l) => l.slug === slug);

  if (!legal) {
    notFound();
  }

  return (
    <div id={`legal-${legal.slug}-wrapper`} className="bg-black text-white">
      <PageHero
        title={legal.title}
        subtitle={legal.subtitle}
        image={legal.image}
        paragraphs={legal.paragraphs}
        features={legal.features}
        specs={legal.specs}
        compliance={legal.compliance}
        links={legal.links}
      />
    </div>
  );
}
