import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jailsoft.com";

  const coreRoutes = [
    "",
    "/about",
    "/products",
    "/solutions",
    "/resources",
    "/contact",
    "/security",
    "/integrations",
    "/partners",
    "/careers",
    "/press",
  ];

  const productSlugs = [
    "facility-management-suite",
    "inmate-records-system",
    "scheduling-and-staffing",
    "visitation-management",
    "commissary-platform",
    "incident-reporting",
    "classification-and-risk-assessment",
    "data-analytics-dashboard",
    "smart-door-control-systems",
    "biometric-access-control",
    "surveillance-and-cctv-integration",
    "perimeter-security-sensors",
    "duress-and-panic-systems",
    "facility-iot-network",
    "inmate-calling-platform",
    "secure-messaging-system",
    "video-visitation",
    "call-monitoring-and-recording",
    "family-notification-services",
  ];

  const solutionSlugs = [
    "county-jails",
    "state-prisons",
    "federal-facilities",
    "juvenile-detention",
    "private-corrections",
  ];

  const resourceSlugs = [
    "case-studies",
    "whitepapers",
    "blog",
    "compliance-and-standards",
    "faq",
    "glossary",
  ];

  const legalSlugs = ["privacy-policy", "terms-of-service"];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Add Core entries
  coreRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: route === "" ? 1.0 : 0.8,
    });
  });

  // 2. Add Products entries
  productSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/products/${slug}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // 3. Add Solutions entries
  solutionSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  // 4. Add Resources entries
  resourceSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/resources/${slug}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "weekly",
      priority: 0.5,
    });
  });

  // 5. Add Legal entries
  legalSlugs.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/legal/${slug}`,
      lastModified: new Date("2026-06-20"),
      changeFrequency: "monthly",
      priority: 0.3,
    });
  });

  return sitemapEntries;
}
