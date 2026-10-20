import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { PackageCard } from "@/components/service-cards";
import { caregiverWellIntro, caregiverWellPackages } from "@/lib/services";

export const metadata: Metadata = {
  title: "CaregiverWell™ Experiences",
  description: caregiverWellIntro.intro,
  alternates: { canonical: "/caregiverwell" },
};

export default function CaregiverWellPage() {
  return (
    <section className="bg-eucalyptus/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={caregiverWellIntro.eyebrow}
          title={caregiverWellIntro.title}
          intro={caregiverWellIntro.intro}
          as="h1"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caregiverWellPackages.map((item, index) => (
            <PackageCard key={item.slug} item={item} featured={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
