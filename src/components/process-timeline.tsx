import type { ComponentType } from "react";

type IconProps = { className?: string };

const stages: { name: string; body: string; icon: ComponentType<IconProps>; tone: "sage" | "coral" }[] = [
  {
    name: "Discover",
    body: "Understand priorities, resources, workforce characteristics, and desired outcomes.",
    icon: CompassIcon,
    tone: "sage",
  },
  {
    name: "Assess",
    body: "Gather and analyze relevant information through surveys, interviews, listening sessions, or organizational review.",
    icon: ClipboardIcon,
    tone: "coral",
  },
  {
    name: "Design",
    body: "Collaborate on priorities, objectives, programs, and improvements.",
    icon: PencilIcon,
    tone: "sage",
  },
  {
    name: "Implement",
    body: "Support education, wellness programming, stakeholder communication, and change activities.",
    icon: SproutStepIcon,
    tone: "coral",
  },
  {
    name: "Evaluate",
    body: "Review participation, feedback, learning, and agreed metrics to guide improvement.",
    icon: LoopIcon,
    tone: "sage",
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative mt-12">
      <div
        className="pointer-events-none absolute top-8 right-[10%] left-[10%] hidden h-px bg-sage/55 lg:block"
        aria-hidden="true"
      />
      <ol className="grid grid-cols-1 gap-8 md:grid-cols-6 md:gap-x-8 md:gap-y-12 lg:grid-cols-5 lg:gap-6">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          const tone = stage.tone === "sage" ? "border-sage text-sage" : "border-coral text-coral";
          return (
            <li
              key={stage.name}
              className={`process-step relative flex items-start gap-4 md:col-span-2 md:block md:text-center lg:col-span-1 lg:col-start-auto ${
                index === 3 ? "md:col-start-2" : ""
              }`}
            >
              {index < stages.length - 1 ? (
                <span
                  className="absolute top-8 bottom-[-4rem] left-8 w-px -translate-x-1/2 bg-sage/45 md:hidden"
                  aria-hidden="true"
                />
              ) : null}
              <div
                className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border bg-ivory md:mx-auto ${tone}`}
                aria-hidden="true"
              >
                <span className={`absolute inset-[5px] rounded-full border opacity-50 ${tone}`} />
                <span className="font-serif text-3xl leading-none text-teal">{index + 1}</span>
              </div>
              <div className="min-w-0 pt-1 md:pt-4">
                <Icon className={`mb-2 h-7 w-7 md:mx-auto ${stage.tone === "sage" ? "text-sage" : "text-coral"}`} />
                <h3 className="font-serif text-3xl leading-none text-teal">{stage.name}</h3>
                <p className="mt-2 text-sm leading-6 text-charcoal/90 md:text-[13px] lg:text-sm">{stage.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <svg
        viewBox="0 0 1000 56"
        className="mt-8 hidden h-12 w-full text-sage/70 lg:block"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M880 10C930 10 958 26 958 40C958 52 120 52 78 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M78 30l12-8M78 30l11 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <svg
        viewBox="0 0 64 68"
        className="mt-1 h-16 w-16 text-sage/70 md:hidden"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M32 1C32 36 10 44 10 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <path
          d="M10 20 3 30M10 20l8 9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function CompassIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="24" cy="24" r="11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 9v3M24 36v3M9 24h3M36 24h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 28.5 22.2 20l8.3-2.2L28.3 26.4 20 28.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ClipboardIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <rect x="13" y="12" width="22" height="26" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M19 12.5v-1.2A4 4 0 0 1 23 7.5h2a4 4 0 0 1 4 3.8v1.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M18 22h12M18 28h12M18 34h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PencilIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M30 11.5 36.5 18 19 35.5H12.5V29L30 11.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M27 14.5 33.5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12.5 35.5 16 31.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SproutStepIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M24 40V22" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M24 26c-2-8-8-12-16-12 1 8 7 13 16 14Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 22c2-8 9-11 16-10-1 8-8 12-16 13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function LoopIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M30 16a10 10 0 1 0 2.6 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M28 10h8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 24.5 22.2 28 29 20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
