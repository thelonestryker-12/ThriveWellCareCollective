import type { Metadata } from "next";
import { Suspense } from "react";
import { ScheduleForm } from "@/components/schedule-form";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule Your Experience",
  description:
    "Request a ThriveWell Care Collective™ appointment for massage, guided wellness, membership, CaregiverWell™, or MotherWell™ experiences in the Lehigh Valley.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Schedule"
            title="Choose an available time that works for you."
            as="h1"
          />
          <p className="mt-6 text-base leading-8">
            Come as you are. You do not need to prepare or have previous experience
            with any of our wellness practices. We will guide you from there.
          </p>
          <p className="mt-4 text-base leading-8">
            Share the experience you would like and a few preferred times. We will
            follow up to confirm your visit.
          </p>
          <p className="mt-6 text-sm">
            Prefer email?{" "}
            <a
              className="text-teal underline underline-offset-4"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <Suspense
          fallback={
            <div className="rounded-3xl bg-white p-8 text-sm text-charcoal/70">
              Loading the scheduling form...
            </div>
          }
        >
          <ScheduleForm />
        </Suspense>
      </div>
    </section>
  );
}
