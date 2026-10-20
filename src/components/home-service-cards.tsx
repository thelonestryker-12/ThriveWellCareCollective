import Link from "next/link";
import { BreathIcon, CheckIcon, LotusIcon } from "@/components/botanicals";

const massageItems = [
  { slug: "thrivewell-signature-massage", name: "Signature Massage™" },
  { slug: "swedish-massage", name: "Swedish Massage" },
  { slug: "integrative-massage", name: "Integrative Massage" },
  { slug: "reflexology", name: "Reflexology" },
  { slug: "cupping-therapy", name: "Cupping Therapy" },
  { slug: "sports-massage", name: "Sports Massage (Assisted Stretching Focus)" },
];

const wellnessItems = [
  { slug: "signature-breathing-pranayama", name: "Guided Breathing & Pranayama" },
  { slug: "guided-relaxation", name: "Guided Relaxation" },
  { slug: "mindfulness-grounding", name: "Mindfulness & Grounding" },
];

function ServiceList({
  items,
}: {
  items: { slug: string; name: string }[];
}) {
  return (
    <ul className="space-y-3 text-sm leading-6">
      {items.map((item) => (
        <li key={item.slug}>
          <Link href={`/services#${item.slug}`} className="flex items-start gap-3 hover:text-teal">
            <CheckIcon />
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HomeServiceCards() {
  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-2">
      <article className="rounded-[1.75rem] bg-white p-7 shadow-[0_12px_36px_rgba(31,45,42,0.05)] sm:p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
            <LotusIcon />
          </span>
          <h3 className="font-serif text-3xl text-teal">Massage Services</h3>
        </div>
        <p className="mt-4 text-sm leading-7 text-charcoal/90">
          All massage services are provided exclusively by licensed massage therapists.
        </p>
        <hr className="my-5 border-sage/30" />
        <ServiceList items={massageItems} />
      </article>

      <article className="rounded-[1.75rem] bg-white p-7 shadow-[0_12px_36px_rgba(31,45,42,0.05)] sm:p-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage">
            <BreathIcon />
          </span>
          <h3 className="font-serif text-3xl text-teal">Guided Wellness Practices</h3>
        </div>
        <p className="mt-4 text-sm leading-7 text-charcoal/90">
          Simple, guided practices that support relaxation, present-moment awareness,
          and reconnection. Available individually or as part of a group or workplace
          experience.
        </p>
        <hr className="my-5 border-sage/30" />
        <ServiceList items={wellnessItems} />
      </article>
    </div>
  );
}
