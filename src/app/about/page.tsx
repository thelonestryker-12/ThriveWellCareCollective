import type { Metadata } from "next";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ClosingCta } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "ThriveWell Care Collective™ is a wellness collective created with caregivers in mind, offering restorative massage and approachable wellness practices in the Lehigh Valley.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Who We Are"
            title="A wellness collective created with caregivers in mind."
            as="h1"
          />
          <div className="mt-8 space-y-5 text-base leading-8">
            <p>
              ThriveWell Care Collective™ was built around a simple belief: people
              who care for others should have meaningful opportunities to care for their
              own well-being, too.
            </p>
            <p>
              We bring together experience in education, wellness, caregiving, and
              licensed massage therapy to create restorative experiences that fit into
              real life.
            </p>
            <p>Our approach is welcoming, practical, and personal.</p>
            <p>We are not here to tell you what wellness should look like.</p>
            <p>
              We want to give you options and help you discover what restoration looks
              like for you. That may mean massage. It may mean quiet. It may mean
              learning a breathing, mindfulness, or grounding practice. Or it may
              simply mean having a place where you can slow down for a while.
            </p>
            <p className="font-serif text-2xl text-teal">
              ThriveWell is about making room for that.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-eucalyptus/50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Mission"
            title="To make restorative wellness a natural part of caring well."
          />
          <div className="mt-8 space-y-5 text-base leading-8">
            <p>
              Our mission is to create restorative, educational, and general wellness
              experiences that help caregivers, mothers, professionals, and members of
              our community make intentional space for their own well-being.
            </p>
            <p>
              We believe caring for yourself and caring for others are not competing
              priorities. They can support one another.
            </p>
            <p>
              Through licensed massage therapy, guided breathing and pranayama,
              guided relaxation, mindfulness, grounding, and wellness education,
              ThriveWell creates practical opportunities to pause, restore, reconnect,
              and build wellness practices that can become part of everyday life.
            </p>
            <p>You do not need an established wellness routine.</p>
            <p>You do not need prior experience.</p>
            <p className="font-serif text-2xl text-teal">You can simply begin where you are.</p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/schedule">Schedule Your Experience</ButtonLink>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
