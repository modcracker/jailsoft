import React from "react";
import { notFound } from "next/navigation";
import { productsData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Jailsoft",
    };
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `https://jailsoft.com/products/${slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.description,
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.h1 || product.title.split("|")[0].trim(),
    "description": product.subtitle || product.description,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "category": "Enterprise B2B Software",
      "availability": "https://schema.org/LimitedAvailability"
    },
    "featureList": product.features,
    "provider": {
      "@type": "Organization",
      "name": "Jailsoft",
      "url": "https://jailsoft.com"
    }
  };

  return (
    <div id={`product-${product.slug}-wrapper`} className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <PageHero
        title={product.title}
        subtitle={product.subtitle}
        image={product.image}
        paragraphs={product.paragraphs}
        features={product.features}
        specs={product.specs}
        compliance={product.compliance}
        links={product.links}
      />
    </div>
  );
}
