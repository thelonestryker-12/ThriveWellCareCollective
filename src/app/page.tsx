import Image from "next/image";
import type { Metadata } from "next";
import { LeafSprig } from "@/components/botanicals";
import { ApproachSection } from "@/components/approach-section";
import { HomeServiceCards } from "@/components/home-service-cards";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ClosingCta, HowToStart } from "@/components/page-sections";
import { PackageCard } from "@/components/service-cards";
import {
  caregiverWellIntro,
  caregiverWellPackages,
  membership,
  motherWellIntro,
  motherWellPackages,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.legalName} | Restorative Wellness in the Lehigh Valley`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const whatWeDo = [
  {
    title: "Individual Wellness",
    body: "Restorative massage therapy and guided wellness practices that give you time to slow down, recharge, and reconnect with yourself. Massage services are provided in person, while guided wellness experiences are available on-site or online.",
  },
  {
    title: "Group Wellness",
    body: "Shared experiences featuring guided breathing, pranayama, mindfulness, grounding, and relaxation practices that encourage connection and restoration. Experiences can be offered on-site or online, making it easy to bring people together wherever they are.",
  },
  {
    title: "Workplace & Organizational Wellness",
    body: "Personalized wellness experiences designed for teams and organizations, including on-site chair massage, guided practices, and interactive workshops. Our programs can be delivered at your workplace, event location, or online, depending on the services selected.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full border-[18px] border-sage/40" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full border-[18px] border-coral/35" />
        <LeafSprig className="pointer-events-none absolute -left-8 top-10 h-72 w-52 -rotate-6 text-sage/50" />
        <LeafSprig className="pointer-events-none absolute -right-6 bottom-8 h-64 w-44 rotate-[18deg] text-sage/45" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
              {siteConfig.location}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-teal sm:text-5xl lg:text-6xl">
              You spend your days caring for others. Let this be your time.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/90 sm:text-lg">
              Women carry many responsibilities. Whether you’re raising children,
              caring for family members, working in a helping profession, or leading
              teams, finding time for yourself isn’t always easy.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/90">
              ThriveWell Care Collective™ was created with women like you in mind. At
              ThriveWell Care Collective™, we offer personalized wellness experiences
              that include restorative massage therapy, guided breathing and pranayama,
              mindfulness, and grounding practices. Each experience is designed to help
              you pause, recharge, and reconnect with yourself.
            </p>
            <p className="mt-6 font-serif text-2xl italic text-teal">
              Rest is not separate from a full life. It is part of it.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/services">Explore Our Services</ButtonLink>
              <ButtonLink href="/schedule" variant="secondary">
                Schedule Your Experience
              </ButtonLink>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] bg-eucalyptus/70 p-6 sm:p-8">
            <div className="relative overflow-hidden rounded-3xl bg-white/50">
              <Image
                src="/hero.jpg"
                alt="Women relaxing during a ThriveWell chair massage in a calm, plant-filled room"
                width={1774}
                height={887}
                className="h-auto w-full object-cover object-[center_42%]"
                priority
              />
            </div>
            <p className="mt-6 text-center font-serif text-xl text-teal">
              Whether you&apos;re a mother, family caregiver, professional caregiver, or
              a woman who leads and supports others, ThriveWell offers a supportive
              approach to restoring your energy, empathy, and capacity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="We create space to pause, restore, and reconnect."
            intro="Wellness doesn't have to be complicated. Whether you're making time for yourself or bringing wellness to a group, team, or organization, ThriveWell offers personalized experiences designed around your needs, with flexible on-site and online options."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((item) => (
              <article key={item.title} className="rounded-3xl bg-white p-6">
                <h3 className="font-serif text-2xl text-teal">{item.title}</h3>
                <p className="mt-3 text-base leading-8">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8">
            At ThriveWell, we combine licensed massage therapy with approachable
            wellness practices to support individuals, groups, and organizations.
            Whether you&apos;re looking for personal restoration, planning an experience
            with friends, or creating opportunities for workplace wellness, we help you
            find an approach that fits your needs, schedule, and setting.
          </p>
          <p className="mt-4 font-serif text-2xl italic text-teal">
            There is no one right way to restore. Together, we&apos;ll find out what works
            for you.
          </p>
        </div>
      </section>

      <ApproachSection />

      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A wellness collective created for women who care for others."
            />
            <p className="mt-6 text-base leading-8">
              ThriveWell Care Collective™ was built around a simple belief: women who
              care for others should have meaningful opportunities to care for their own
              well-being, too.
            </p>
            <p className="mt-4 text-base leading-8">
              We bring together experience in education, wellness, caregiving, and
              licensed massage therapy to create personalized wellness experiences for
              individuals, groups, and organizations. With on-site and online options, we
              make restorative wellness easier to incorporate into everyday life. Our
              approach is welcoming, practical, and personal.
            </p>
            <ButtonLink href="/about" variant="ghost" className="mt-8">
              Learn more about ThriveWell
            </ButtonLink>
          </div>
          <div className="rounded-3xl bg-eucalyptus/60 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Our Mission
            </p>
            <h2 className="mt-3 font-serif text-3xl text-teal">
              To make restorative wellness a natural part of caring well.
            </h2>
            <p className="mt-4 text-base leading-8">
              We believe caring for yourself and caring for others are not competing
              priorities. Both deserve attention, and each can support the other.
            </p>
            <p className="mt-4 text-base leading-8">
              You don&apos;t need an established wellness routine or prior experience to
              begin. Wherever you are in your wellness journey, ThriveWell offers a place
              to start.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Choose what feels restorative to you."
            intro="Everyone restores differently. Whether you prefer therapeutic massage, guided wellness practices, or a combination of both, we offer personalized experiences that help you pause, reconnect, and care for yourself in ways that fit your life."
          />
          <HomeServiceCards />
          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              View all services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-teal py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-eucalyptus">
            Monthly Membership
          </p>
          <h2 className="mt-3 font-serif text-4xl text-white">{membership.name}</h2>
          <p className="mt-2 text-xl text-coral">{membership.price}</p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-white/90">
            {membership.summary}
          </p>
          <ButtonLink href="/membership" className="mt-8">
            {membership.cta}
          </ButtonLink>
        </div>
      </section>

      <section className="relative overflow-hidden bg-eucalyptus/45 py-20">
        <LeafSprig className="pointer-events-none absolute -right-8 -top-6 h-64 w-44 text-sage/40" />
        <LeafSprig className="pointer-events-none absolute -bottom-10 -left-10 h-56 w-40 rotate-180 text-sage/35" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={caregiverWellIntro.eyebrow}
            title={caregiverWellIntro.title}
            intro={caregiverWellIntro.intro}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caregiverWellPackages.map((item, index) => (
              <PackageCard key={item.slug} item={item} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-eucalyptus/30 py-20">
        <LeafSprig className="pointer-events-none absolute -left-6 top-0 h-60 w-40 -scale-x-100 text-sage/40" />
        <LeafSprig className="pointer-events-none absolute -bottom-8 -right-8 h-56 w-40 rotate-12 text-sage/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={motherWellIntro.eyebrow}
            title={motherWellIntro.title}
            intro={motherWellIntro.intro}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {motherWellPackages.map((item, index) => (
              <PackageCard key={item.slug} item={item} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <HowToStart />
      <ClosingCta />
    </>
  );
}
