import { LotusIcon } from "@/components/botanicals";

type IconProps = { className?: string };

const levels = [
  {
    eyebrow: "Level 1",
    title: "Employee Wellness Experiences",
    scale: "Introductory",
    intro:
      "Creating opportunities to pause, restore, and reconnect. Targeted offerings introduce accessible practices for recognizing stress, restoring energy, and building awareness.",
    preface: "Available in person, virtually, or in a blended format as appropriate.",
    suited:
      "Best suited for employee appreciation, development days, conferences, and introductory wellness initiatives.",
    after: "",
    icon: LotusIcon,
    ring: "border border-sage text-sage",
    inner: "border-sage/45",
    card: "border border-sage/25 bg-white",
    accent: "bg-sage/45",
    items: [
      "Interactive stress awareness and self-care workshops",
      "Guided relaxation, breath awareness, and grounding",
      "Mindfulness and reflective journaling experiences",
      "Workplace chair massage and relaxation sessions",
      "Caregiver wellness and resilience education",
      "Leadership and team wellness experiences",
    ],
    groups: [] as { title: string; items: string[] }[],
  },
  {
    eyebrow: "Level 2",
    title: "Structured Workforce Wellness Programs",
    scale: "Structured",
    intro:
      "Moving from individual experiences to sustained learning and support. ThriveWell develops coordinated programs connecting employee needs with organizational priorities.",
    preface:
      "These offerings complement existing employee assistance, HR, occupational health, and professional development initiatives.",
    suited:
      "Best suited for teams, departments, or organizations seeking coordinated wellness programming.",
    after: "",
    icon: StepsIcon,
    ring: "border-2 border-coral text-coral",
    inner: "border-coral/55",
    card: "border border-coral/30 bg-white",
    accent: "bg-coral/75",
    items: [
      "Employee wellness discovery and feedback",
      "Multi-session educational workshops",
      "Caregiver stress and burnout prevention education",
      "Leadership awareness and supportive workplace practices",
      "Stress management and self-regulation strategies",
      "Reflection, boundaries, and sustainable self-care",
      "Participation and learning evaluations",
      "Recommendations for continued support",
    ],
    groups: [] as { title: string; items: string[] }[],
  },
  {
    eyebrow: "Level 3",
    title: "Strategic Workforce Well-Being Partnerships",
    scale: "Strategic",
    intro:
      "Understanding organizational needs. Designing informed solutions. Supporting sustainable change. These engagements consider workforce experiences alongside communication, workload, expectations, resources, leadership practices, and culture.",
    preface: "",
    suited:
      "Best suited for public-sector agencies, healthcare systems, educational institutions, community organizations, and employers seeking comprehensive, data-informed support.",
    after:
      "Scope is determined after discovery. Formal needs assessments and consulting projects are separately scoped.",
    icon: HandshakeIcon,
    ring: "border-[3px] border-teal text-teal",
    inner: "border-coral/70",
    card: "border border-teal/25 bg-eucalyptus/25",
    accent: "bg-teal",
    items: [] as string[],
    groups: [
      {
        title: "Organizational Discovery & Needs Assessment",
        items: [
          "Leadership and stakeholder interviews",
          "Confidential employee surveys and listening sessions",
          "Review of existing wellness resources",
          "Identification of workforce needs and access barriers",
          "Organizational readiness and priority assessment",
          "Analysis of themes, gaps, and opportunities",
        ],
      },
      {
        title: "Strategic Planning & Program Design",
        items: [
          "Workforce well-being objectives and priorities",
          "Customized educational and wellness program design",
          "Leadership and employee engagement recommendations",
          "Implementation plans and resource considerations",
          "Alignment with organizational priorities",
        ],
      },
      {
        title: "Implementation & Change Support",
        items: [
          "Stakeholder engagement and communication plans",
          "Workshops, learning opportunities, and facilitated experiences",
          "Support for introducing and adopting new initiatives",
          "Ongoing feedback and program refinement",
        ],
      },
      {
        title: "Evaluation & Continuous Improvement",
        items: [
          "Participation and engagement measures",
          "Employee feedback and aggregate reporting",
          "Effectiveness evaluation and recommendations for what to continue",
        ],
      },
    ],
  },
];

export function PartnershipLevels() {
  return (
    <div className="mt-8">
      <ul className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <li key={level.eyebrow} className={`level-card flex flex-col overflow-hidden rounded-[1.75rem] shadow-[0_12px_32px_rgba(31,45,42,0.05)] ${level.card}`}>
              <div className={`h-1.5 ${level.accent}`} aria-hidden="true" />
              <div className="flex flex-1 flex-col px-5 py-6 sm:px-6 lg:min-h-[43rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage">{level.eyebrow}</p>
                <div
                  className={`relative mt-4 flex h-16 w-16 items-center justify-center rounded-full bg-ivory ${level.ring}`}
                  aria-hidden="true"
                >
                  <span className={`absolute inset-[6px] rounded-full border ${level.inner}`} />
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-teal">{level.title}</h3>
                <p className="mt-3 text-sm leading-6 text-charcoal/90">{level.intro}</p>
                {level.preface ? <p className="mt-3 text-sm leading-6 text-charcoal/90">{level.preface}</p> : null}
                <p className="mt-3 text-sm leading-6 font-semibold text-teal">{level.suited}</p>
                {level.after ? <p className="mt-3 text-sm leading-6 text-charcoal/90">{level.after}</p> : null}
                <details className="group mt-auto pt-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-full border border-sage/40 bg-ivory/80 px-4 py-2.5 text-sm font-semibold text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal [&::-webkit-details-marker]:hidden">
                    <span>
                      See what's included
                      <span className="sr-only"> in {level.title}</span>
                    </span>
                    <span aria-hidden="true" className="text-xs motion-safe:transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <div className="pt-4 text-sm leading-6 text-charcoal/90">
                    {level.items.length > 0 ? (
                      <ul className="list-disc space-y-1 pl-5">
                        {level.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                    {level.groups.length > 0 ? (
                      <div className="space-y-4">
                        {level.groups.map((group) => (
                          <div key={group.title}>
                            <h4 className="font-serif text-2xl text-teal">{group.title}</h4>
                            <ul className="mt-2 list-disc space-y-1 pl-5">
                              {group.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </details>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-8" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-sage/50 via-coral/70 to-teal" />
        <div className="mt-3 grid grid-cols-3 text-center text-[11px] font-semibold uppercase tracking-[0.18em]">
          <p className="text-sage">Introductory</p>
          <p className="text-coral">Structured</p>
          <p className="text-teal">Strategic</p>
        </div>
      </div>
    </div>
  );
}

function StepsIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <circle cx="12" cy="34" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="24" cy="24" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="36" cy="14" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M15 32.2 21 26.2M27 22.2 33 16.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HandshakeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" fill="none">
      <path d="M7 27c3.2-2.4 7-2.2 10.2.2L21 30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41 27c-3.2-2.4-7-2.2-10.2.2L27 30" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 29.5 22.2 34l4.2-4.2 3.6 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 24.5c2.4 2.6 4.2 4 6.4 4 2 0 3.4-1.2 5.2-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 31.5 7 36M38 31.5 41 36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
