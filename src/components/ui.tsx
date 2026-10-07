import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-coral text-charcoal hover:bg-[#f27d5d] shadow-[0_8px_24px_rgba(249,142,119,0.28)]",
  secondary:
    "bg-teal text-white hover:bg-[#104a44]",
  ghost:
    "border border-sage/70 bg-transparent text-teal hover:bg-eucalyptus/40",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-sage">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="font-serif text-3xl leading-tight text-teal sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      {intro ? (
        <p className="mt-4 text-base leading-8 text-charcoal/90 sm:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}
