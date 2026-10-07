import { ButtonLink, SectionHeading } from "@/components/ui";
import { getStartedSteps } from "@/lib/services";

export function HowToStart() {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How to Get Started"
          title="Taking time for yourself can be simple."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {getStartedSteps.map((item) => (
            <li
              key={item.step}
              className="rounded-3xl border border-sage/30 bg-white p-6"
            >
              <p className="font-serif text-4xl text-coral">{item.step}</p>
              <h3 className="mt-3 font-serif text-2xl text-teal">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-charcoal/90">{item.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="/schedule">Schedule Your Experience</ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="bg-teal py-20 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-eucalyptus">
          Make space for what restores you
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
          A full life can include caring for others and making intentional room for
          your own well-being.
        </h2>
        <p className="mt-5 text-base leading-8 text-white/85">
          ThriveWell Care Collective™ gives you a place to pause, enjoy
          restorative care, explore approachable wellness practices, and reconnect
          with what helps you feel more like yourself.
        </p>
        <p className="mt-4 font-serif text-xl italic text-eucalyptus">
          Restoring energy, empathy, and capacity for those who care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/services">Explore Our Services</ButtonLink>
          <ButtonLink href="/schedule" variant="ghost" className="border-white/40 text-white hover:bg-white/10">
            Schedule Your Experience
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
