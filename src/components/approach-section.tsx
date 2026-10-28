import {
  HeartIcon,
  LeafDivider,
  LeafSprig,
  SoftRing,
  SproutIcon,
  SunIcon,
  WavesIcon,
} from "@/components/botanicals";

const steps = [
  {
    title: "Arrive",
    body: "Settle into the moment.",
    icon: SproutIcon,
    circle: "bg-sage/20 text-sage",
  },
  {
    title: "Notice",
    body: "Recognize what you need.",
    icon: HeartIcon,
    circle: "bg-coral/20 text-coral",
  },
  {
    title: "Release",
    body: "Make space to let go and restore.",
    icon: WavesIcon,
    circle: "bg-sage/20 text-sage",
  },
  {
    title: "Return",
    body: "Reconnect and carry the experience forward.",
    icon: SunIcon,
    circle: "bg-coral/20 text-coral",
  },
];

export function ApproachSection() {
  return (
    <section className="relative overflow-x-hidden bg-ivory py-20">
      <SoftRing
        color="#829B71"
        className="pointer-events-none absolute right-2 top-8 h-56 w-56 sm:right-6 sm:h-72 sm:w-72"
      />
      <LeafSprig className="pointer-events-none absolute -right-2 top-0 h-56 w-40 text-sage/55 sm:h-72 sm:w-52" />
      <SoftRing
        color="#F98E77"
        className="pointer-events-none absolute bottom-8 left-4 hidden h-64 w-64 sm:block"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
          The ThriveWell Approach
        </p>
        <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight text-teal sm:text-5xl">
          Arrive. Notice. Release. Return.™
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-8 text-charcoal/90 sm:text-lg">
          Pausing, restoring, and reconnecting look different for every woman. That’s
          why we use a simple, four-step approach to guide our personalized wellness
          experiences.
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-charcoal/90">
          Whether you’re receiving an individual massage, participating in a group
          experience, or joining a workplace wellness session, our approach helps you
          become present, recognize what you need, experience restoration, and return
          to your day with greater awareness.
        </p>

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dotted border-sage/50 md:block"
            aria-hidden="true"
          />
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="relative rounded-[1.75rem] bg-white px-5 pb-7 pt-5 text-center shadow-[0_12px_32px_rgba(31,45,42,0.05)]"
                >
                  <div
                    className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full ${step.circle}`}
                  >
                    <Icon />
                  </div>
                  <h3 className="mt-4 font-serif text-3xl text-teal">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal/85">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="mt-12 text-center font-serif text-2xl italic text-teal sm:text-3xl">
          Four simple steps. One intentional approach to caring for yourself.
        </p>
        <LeafDivider className="mt-6" />
      </div>
    </section>
  );
}
