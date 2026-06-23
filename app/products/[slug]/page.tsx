import React from "react";
import { notFound } from "next/navigation";
import { productsData } from "@/lib/content";
import PageHero from "@/components/PageHero";
import ProductSandbox from "@/components/ProductSandbox";
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
    "operatingSystem": "All, Enterprise Server, Offline Private Networks",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "category": "Enterprise B2B Software",
      "availability": "https://schema.org/LimitedAvailability",
      "seller": {
        "@type": "Organization",
        "name": "Jailsoft",
        "url": "https://jailsoft.com"
      }
    },
    "featureList": product.features,
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
    "brand": {
      "@type": "Brand",
      "name": "Jailsoft"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
      "bestRating": "5",
      "worstRating": "1"
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
      <ProductSandbox
        slug={product.slug}
        productName={product.title.split("|")[0].trim()}
      />
    </div>
  );
}
