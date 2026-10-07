import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { PackageCard } from "@/components/service-cards";
import { caregiverWellPackages } from "@/lib/services";

export const metadata: Metadata = {
  title: "CaregiverWell™ Experiences",
  description:
    "CaregiverWell™ brings ThriveWell massage and guided wellness practices together into restorative experiences for family and professional caregivers.",
  alternates: { canonical: "/caregiverwell" },
};

export default function CaregiverWellPage() {
  return (
    <section className="bg-eucalyptus/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CaregiverWell™ Experiences"
          title="Created with caregivers in mind."
          intro="CaregiverWell™ brings ThriveWell services together into restorative experiences designed specifically for family and professional caregivers. Choose the amount of time and type of experience that feels right for you."
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
