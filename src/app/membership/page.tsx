import type { Metadata } from "next";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { membership } from "@/lib/services";

export const metadata: Metadata = {
  title: "ThriveWell Monthly Reset™",
  description:
    "Join ThriveWell Monthly Reset™ for one 60-minute ThriveWell Signature Massage™ each month, priority booking, and 10% off additional services.",
  alternates: { canonical: "/membership" },
};

export default function MembershipPage() {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Monthly Membership"
          title="A simple way to make restoration part of your routine."
          as="h1"
        />
        <div className="mt-10 overflow-hidden rounded-[2rem] border border-coral/40 bg-white">
          <div className="bg-teal px-8 py-10 text-white">
            <h2 className="font-serif text-4xl text-white">{membership.name}</h2>
            <p className="mt-3 text-3xl text-coral">{membership.price}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90">
              {membership.summary}
            </p>
          </div>
          <div className="grid gap-10 p-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
                Membership includes
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8">
                {membership.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">
                Membership details
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-8">
                {membership.details.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="px-8 pb-10">
            <ButtonLink href={`/schedule?service=${membership.slug}`}>
              {membership.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
