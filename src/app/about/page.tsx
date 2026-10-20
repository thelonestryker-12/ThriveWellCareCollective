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
              ThriveWell Care Collective™ was founded on a simple belief: women who
              spend so much of their lives caring for others deserve opportunities to
              care for themselves, too.
            </p>
            <p>
              We bring together experience in education, wellness, caregiving, and
              licensed massage therapy to create restorative experiences that fit into
              everyday life. Our approach is welcoming, practical, and personal.
            </p>
            <p>
              We believe wellness looks different for everyone. For some, it means the
              restorative benefits of massage. For others, it may be a moment of quiet,
              a guided breathing or mindfulness practice, or an opportunity to slow down
              and reconnect with themselves.
            </p>
            <p>
              Through personalized experiences, we offer women meaningful ways to pause,
              restore, and reconnect in ways that feel right for them.
            </p>
            <p className="font-serif text-2xl text-teal">
              Because caring for others shouldn&apos;t mean losing sight of yourself.
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
