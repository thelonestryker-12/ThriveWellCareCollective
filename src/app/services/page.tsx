import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ServiceCard } from "@/components/service-cards";
import { HowToStart } from "@/components/page-sections";
import { massageServices, startingGuides, wellnessServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ThriveWell massage, guided breathing, relaxation, mindfulness, and grounding services. All massage is provided exclusively by licensed massage therapists.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: startingGuides.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Choose what feels restorative to you."
            intro="Everyone restores differently. Our core ThriveWell services give you the flexibility to choose hands-on massage, guided wellness practices, or a combination of experiences."
            as="h1"
          />
        </div>
      </section>

      <section id="massage" className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-teal">Massage Services</h2>
          <p className="mt-3 max-w-3xl text-base leading-8">
            All massage services are provided exclusively by licensed massage
            therapists.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {massageServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="wellness" className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-teal">Guided Wellness Practices</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {wellnessServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-eucalyptus/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Not Sure Where to Start?"
            title="Start with what sounds good to you today."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {startingGuides.map((item) => (
              <Link
                key={item.question}
                href={item.href}
                className="rounded-3xl bg-white p-6 hover:shadow-[0_12px_30px_rgba(31,45,42,0.06)]"
              >
                <h3 className="font-serif text-2xl text-teal">{item.question}</h3>
                <p className="mt-3 text-sm leading-7">{item.answer}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/membership" variant="secondary">
              Explore ThriveWell Monthly Reset™
            </ButtonLink>
          </div>
        </div>
      </section>
      <HowToStart />
    </>
  );
}
