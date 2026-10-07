import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { PackageCard } from "@/components/service-cards";
import { motherWellPackages } from "@/lib/services";

export const metadata: Metadata = {
  title: "MotherWell™ Experiences",
  description:
    "MotherWell™ experiences create dedicated time for mothers to restore, relax, and reconnect through massage and guided wellness practices.",
  alternates: { canonical: "/motherwell" },
};

export default function MotherWellPage() {
  return (
    <section className="bg-eucalyptus/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="MotherWell™ Experiences"
          title="A little space that is simply yours."
          intro="MotherWell™ experiences are created specifically for mothers who want intentional time for restoration, relaxation, and reconnection."
          as="h1"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {motherWellPackages.map((item, index) => (
            <PackageCard key={item.slug} item={item} featured={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
