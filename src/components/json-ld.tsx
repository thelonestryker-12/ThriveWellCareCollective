import { siteConfig } from "@/lib/site";
import {
  allServices,
  caregiverWellPackages,
  membership,
  motherWellPackages,
} from "@/lib/services";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": `${siteConfig.domain}/#business`,
        name: siteConfig.legalName,
        url: siteConfig.domain,
        email: siteConfig.email,
        description: siteConfig.description,
        image: `${siteConfig.domain}/logo.jpg`,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Lehigh Valley, Pennsylvania",
        },
        slogan: siteConfig.brandLine,
        knowsAbout: [
          "Massage therapy",
          "Guided breathing",
          "Pranayama",
          "Guided relaxation",
          "Mindfulness",
          "Caregiver wellness",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "ThriveWell Services",
          itemListElement: [
            ...allServices.map((service) => ({
              "@type": "Offer",
              name: service.name,
              description: service.summary,
              url: `${siteConfig.domain}/services#${service.slug}`,
            })),
            {
              "@type": "Offer",
              name: membership.name,
              description: membership.summary,
              url: `${siteConfig.domain}/membership`,
            },
            ...caregiverWellPackages.map((item) => ({
              "@type": "Offer",
              name: item.name,
              description: item.summary,
              url: `${siteConfig.domain}/caregiverwell`,
            })),
            ...motherWellPackages.map((item) => ({
              "@type": "Offer",
              name: item.name,
              description: item.summary,
              url: `${siteConfig.domain}/motherwell`,
            })),
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.domain}/#website`,
        url: siteConfig.domain,
        name: siteConfig.legalName,
        publisher: { "@id": `${siteConfig.domain}/#business` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
