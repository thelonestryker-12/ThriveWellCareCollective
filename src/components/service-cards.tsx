import { ButtonLink } from "@/components/ui";
import type { ExperiencePackage, Service } from "@/lib/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      id={service.slug}
      className="flex h-full flex-col rounded-3xl border border-sage/30 bg-sand/70 p-6 shadow-[0_10px_30px_rgba(31,45,42,0.04)]"
    >
      <h3 className="font-serif text-2xl text-teal">{service.name}</h3>
      <ul className="mt-3 space-y-1 text-sm font-medium text-charcoal">
        {service.prices.map((price) => (
          <li key={`${service.slug}-${price.duration}`}>
            {price.duration} — {price.price}
          </li>
        ))}
      </ul>
      <div className="mt-4 space-y-3 text-sm leading-7 text-charcoal/90">
        {service.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {service.includes ? (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
            Includes
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-7">
            {service.includes.map((item, index) => (
              <li key={`${service.slug}-include-${index}`}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-auto pt-6">
        <ButtonLink href={`/schedule?service=${service.slug}`}>
          {service.cta}
        </ButtonLink>
      </div>
    </article>
  );
}

export function PackageCard({
  item,
  featured = false,
}: {
  item: ExperiencePackage;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-3xl p-6 ${
        featured
          ? "bg-teal text-white shadow-[0_16px_40px_rgba(21,92,85,0.18)]"
          : "border border-sage/30 bg-sand"
      }`}
    >
      <h3 className={`font-serif text-2xl ${featured ? "text-white" : "text-teal"}`}>
        {item.name}
      </h3>
      <p className={`mt-2 text-sm font-medium ${featured ? "text-eucalyptus" : "text-charcoal"}`}>
        {item.duration} — {item.price}
      </p>
      <p className={`mt-4 text-sm leading-7 ${featured ? "text-white/90" : "text-charcoal/90"}`}>
        {item.summary}
      </p>
      <ul className={`mt-4 list-disc space-y-1 pl-5 text-sm leading-7 ${featured ? "text-white/90" : "text-charcoal/90"}`}>
        {item.includes.map((entry, index) => (
          <li key={`${item.slug}-${index}`}>{entry}</li>
        ))}
      </ul>
      {item.note ? (
        <p className={`mt-4 text-sm leading-7 ${featured ? "text-eucalyptus" : "text-charcoal/80"}`}>
          {item.note}
        </p>
      ) : null}
      <div className="mt-auto pt-6">
        <ButtonLink
          href={`/schedule?service=${item.slug}`}
          variant={featured ? "primary" : "secondary"}
        >
          {item.cta}
        </ButtonLink>
      </div>
    </article>
  );
}
