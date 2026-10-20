import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";
import { membership } from "@/lib/services";

export const metadata: Metadata = {
  title: "ThriveWell Monthly Reset™",
  description:
    "ThriveWell Monthly Reset™ is $105 a month and includes one 60-minute Signature Massage™, priority booking, and 10% off additional services.",
  alternates: { canonical: "/membership" },
};

const includes = [
  {
    title: "One 60-minute Signature Massage™ each month",
    body: "Dedicated time to relax, restore, and care for yourself.",
  },
  {
    title: "Priority booking",
    body: "Preferred access to available appointment times, subject to availability.",
  },
  {
    title: "10% off additional services",
    body: "Savings on eligible ThriveWell services booked during your membership month. Excludes memberships, packages, and special events.",
  },
];

const details = [
  {
    title: "Monthly renewal",
    body: "Your membership automatically renews at $105 each month.",
  },
  {
    title: "Rollover flexibility",
    body: "One unused monthly massage may be carried forward for one additional month before it expires.",
  },
  {
    title: "Personal membership",
    body: "Membership benefits are reserved for you and cannot be transferred or shared.",
  },
  {
    title: "Discounts",
    body: "Membership pricing and benefits cannot be combined with other offers, including the 15% LVHN colleague discount.",
  },
  {
    title: "Cancellation",
    body: "You may cancel your membership with 30 days' notice.",
  },
  {
    title: "Appointments",
    body: "Our standard appointment cancellation and no-show policies apply.",
  },
  {
    title: "Licensed care",
    body: "All massage services are provided by a licensed massage therapist.",
  },
];

export default function MembershipPage() {
  return (
    <section className="bg-ivory py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
          Monthly Membership
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-teal sm:text-5xl">
          Make time for yourself every month.
        </h1>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-coral/40 bg-white">
          <div className="bg-teal px-8 py-10 text-white">
            <h2 className="font-serif text-4xl text-white">{membership.name}</h2>
            <p className="mt-3 text-3xl text-coral">{membership.price}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90">
              Caring for yourself shouldn&apos;t always be the last thing on your list.
              ThriveWell Monthly Reset™ makes it easier to set aside time each month to
              pause, restore, and reconnect.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/90">
              With a monthly massage, priority booking, and savings on additional
              services, your membership offers a simple way to make restoration part of
              your routine.
            </p>
          </div>

          <div className="grid gap-10 p-8 lg:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl text-teal">Your Membership Includes</h3>
              <ul className="mt-4 space-y-4 text-base leading-7">
                {includes.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-charcoal">{item.title}</span>
                    <span className="text-charcoal/85"> — {item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-teal">Membership Details</h3>
              <p className="mt-4 text-base leading-8">
                We&apos;ve designed our membership to be simple and flexible.
              </p>
              <ul className="mt-4 space-y-4 text-base leading-7">
                {details.map((item) => (
                  <li key={item.title}>
                    <span className="font-semibold text-charcoal">{item.title}:</span>{" "}
                    <span className="text-charcoal/85">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-sage/20 px-8 py-8">
            <h3 className="font-serif text-3xl text-teal">Getting Started</h3>
            <p className="mt-4 max-w-3xl text-base leading-8">
              Before your first massage, we&apos;ll meet for a brief virtual intake
              appointment via Microsoft Teams. This gives us an opportunity to learn
              about your needs, discuss your preferences, answer questions, and
              personalize your experience.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8">
              After your intake, we&apos;ll help you schedule your first massage.
            </p>
            <p className="mt-6 font-serif text-2xl text-teal">
              Make restoration part of your routine.
            </p>
            <ButtonLink href={`/schedule?service=${membership.slug}`} className="mt-6">
              {membership.cta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
