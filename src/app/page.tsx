import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ClosingCta, HowToStart } from "@/components/page-sections";
import { PackageCard } from "@/components/service-cards";
import {
  caregiverWellPackages,
  massageServices,
  membership,
  motherWellPackages,
  wellnessServices,
} from "@/lib/services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.legalName} | Restorative Wellness in the Lehigh Valley`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full border-[18px] border-sage/40" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full border-[18px] border-coral/35" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
              {siteConfig.location}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.12] text-teal sm:text-5xl lg:text-6xl">
              You spend your days caring for others. Let this be your time.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-charcoal/90 sm:text-lg">
              Caregiving is meaningful. It can also ask a lot of your time,
              attention, and energy. ThriveWell Care Collective™ was created to give
              you a place to pause, recharge, and reconnect with yourself.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-charcoal/90">
              We offer restorative massage therapy, guided breathing and pranayama,
              guided relaxation, mindfulness, grounding, and wellness experiences
              designed to support your well-being in ways that feel practical,
              personal, and restorative.
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
            <Image
              src="/logo.jpg"
              alt={`${siteConfig.legalName} logo`}
              width={1024}
              height={341}
              className="mx-auto w-full rounded-3xl bg-white p-6"
              priority
            />
            <p className="mt-6 text-center font-serif text-xl text-teal">
              Whether you are a mother, family caregiver, professional caregiver, or
              someone who simply spends much of your life caring for others,
              ThriveWell offers space to step out of your routine and focus on what
              helps you feel restored.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="We create space for you to pause, restore, and reconnect."
            intro="Wellness does not have to be complicated."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "It can be a massage that gives you time to settle into stillness.",
              "It can be a guided breathing practice that helps you slow the pace of your day.",
              "It can be learning a simple mindfulness or grounding practice you can return to whenever you need it.",
            ].map((item) => (
              <p
                key={item}
                className="rounded-3xl bg-white p-6 text-base leading-8"
              >
                {item}
              </p>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8">
            At ThriveWell, we bring together licensed massage therapy and
            approachable wellness practices to create experiences centered on rest,
            renewal, and intentional time for yourself. Some days you may want a
            massage. Other days you may want quiet, guided breathing, relaxation, or
            a simple practice you can take with you into everyday life.
          </p>
          <p className="mt-4 font-serif text-2xl text-teal">
            There is no one right way to restore. You choose what feels right for you.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A wellness collective created with caregivers in mind."
            />
            <p className="mt-6 text-base leading-8">
              ThriveWell Care Collective™ was built around a simple belief: people
              who care for others should have meaningful opportunities to care for their
              own well-being, too.
            </p>
            <p className="mt-4 text-base leading-8">
              We bring together experience in education, wellness, caregiving, and
              licensed massage therapy to create restorative experiences that fit into
              real life. Our approach is welcoming, practical, and personal.
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
              priorities. They can support one another.
            </p>
            <p className="mt-4 text-base leading-8">
              You do not need an established wellness routine. You do not need prior
              experience. You can simply begin where you are.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            title="Choose what feels restorative to you."
            intro="Everyone restores differently. Our core ThriveWell services give you the flexibility to choose hands-on massage, guided wellness practices, or a combination of experiences."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-8">
              <h3 className="font-serif text-3xl text-teal">Massage Services</h3>
              <p className="mt-3 text-sm leading-7">
                All massage services are provided exclusively by licensed massage
                therapists.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {massageServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services#${service.slug}`} className="hover:text-teal">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8">
              <h3 className="font-serif text-3xl text-teal">Guided Wellness Practices</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {wellnessServices.map((service) => (
                  <li key={service.slug}>
                    <Link href={`/services#${service.slug}`} className="hover:text-teal">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

      <section className="bg-eucalyptus/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="CaregiverWell™ Experiences"
            title="Created with caregivers in mind."
            intro="CaregiverWell™ brings ThriveWell services together into restorative experiences designed specifically for family and professional caregivers."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caregiverWellPackages.map((item, index) => (
              <PackageCard key={item.slug} item={item} featured={index === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="MotherWell™ Experiences"
            title="A little space that is simply yours."
            intro="MotherWell™ experiences are created specifically for mothers who want intentional time for restoration, relaxation, and reconnection."
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
