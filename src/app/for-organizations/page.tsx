import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Organizational Consulting & Workforce Well-Being",
  description:
    "ThriveWell partners with organizations to listen first, then design practical workforce well-being experiences, programs, and consulting support.",
  alternates: { canonical: "/for-organizations" },
};

const levels = [
  {
    title: "Level 1: Employee Wellness Experiences",
    intro:
      "Creating opportunities to pause, restore, and reconnect. Targeted offerings introduce accessible practices for recognizing stress, restoring energy, and building awareness.",
    items: [
      "Interactive stress awareness and self-care workshops",
      "Guided relaxation, breath awareness, and grounding",
      "Mindfulness and reflective journaling experiences",
      "Workplace chair massage and relaxation sessions",
      "Caregiver wellness and resilience education",
      "Leadership and team wellness experiences",
    ],
    note: "Available in person, virtually, or in a blended format as appropriate. Best suited for employee appreciation, development days, conferences, and introductory wellness initiatives.",
  },
  {
    title: "Level 2: Structured Workforce Wellness Programs",
    intro:
      "Moving from individual experiences to sustained learning and support. ThriveWell develops coordinated programs connecting employee needs with organizational priorities.",
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
    note: "These offerings complement existing employee assistance, HR, occupational health, and professional development initiatives. Best suited for teams, departments, or organizations seeking coordinated wellness programming.",
  },
];

const stages = [
  ["Discover", "Understand priorities, resources, workforce characteristics, and desired outcomes."],
  ["Assess", "Gather and analyze relevant information through surveys, interviews, listening sessions, or organizational review."],
  ["Design", "Collaborate on priorities, objectives, programs, and improvements."],
  ["Implement", "Support education, wellness programming, stakeholder communication, and change activities."],
  ["Evaluate", "Review participation, feedback, learning, and agreed metrics to guide improvement."],
];

const audiences = [
  "County and municipal government agencies",
  "Healthcare and human services organizations",
  "Emergency services and public safety organizations",
  "Educational institutions and school systems",
  "Nonprofit and community service organizations",
  "Employers and professional service organizations",
  "Organizations supporting caregivers and frontline workers",
];

export default function ForOrganizationsPage() {
  return (
    <article className="bg-ivory">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage">
            For Organizations
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-teal sm:text-5xl">
            Organizational Consulting & Workforce Well-Being
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-teal">
            Supporting People. Strengthening Organizations. Creating Sustainable Change.
          </p>
          <div className="mt-6 space-y-5 text-base leading-8">
            <p>
              At ThriveWell Care Collective™, organizational well-being begins with the people who make the work possible. Whether employees care for patients, support families, serve communities, educate students, or lead teams, their experiences are shaped by personal well-being and workplace conditions.
            </p>
            <p>
              Many organizations already invest in employee wellness, professional development, engagement, and supportive workplaces. ThriveWell aims to complement and strengthen these efforts through collaborative, evidence-informed approaches suited to each organization’s priorities.
            </p>
            <p>
              Drawing on organizational change management, adult education, healthcare leadership, and professional wellness services, we help connect workforce initiatives with organizational objectives. Our approach begins with listening, understanding, and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-4xl space-y-4 px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Three ways to work together</h2>
          {levels.map((level) => (
            <details key={level.title} className="rounded-3xl bg-white px-5 py-4" open>
              <summary className="cursor-pointer font-serif text-2xl text-teal">{level.title}</summary>
              <p className="mt-3 text-base leading-8">{level.intro}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-base leading-8">
                {level.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 text-base leading-8">{level.note}</p>
            </details>
          ))}
          <details className="rounded-3xl bg-white px-5 py-4">
            <summary className="cursor-pointer font-serif text-2xl text-teal">
              Level 3: Strategic Workforce Well-Being Partnerships
            </summary>
            <p className="mt-3 text-base leading-8">
              Understanding organizational needs. Designing informed solutions. Supporting sustainable change. These engagements consider workforce experiences alongside communication, workload, expectations, resources, leadership practices, and culture.
            </p>
            <h3 className="mt-4 font-serif text-2xl text-teal">Organizational Discovery & Needs Assessment</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-8">
              <li>Leadership and stakeholder interviews</li>
              <li>Confidential employee surveys and listening sessions</li>
              <li>Review of existing wellness resources</li>
              <li>Identification of workforce needs and access barriers</li>
              <li>Organizational readiness and priority assessment</li>
              <li>Analysis of themes, gaps, and opportunities</li>
            </ul>
            <h3 className="mt-4 font-serif text-2xl text-teal">Strategic Planning & Program Design</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-8">
              <li>Workforce well-being objectives and priorities</li>
              <li>Customized educational and wellness program design</li>
              <li>Leadership and employee engagement recommendations</li>
              <li>Implementation plans and resource considerations</li>
              <li>Alignment with organizational priorities</li>
            </ul>
            <h3 className="mt-4 font-serif text-2xl text-teal">Implementation & Change Support</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-8">
              <li>Stakeholder engagement and communication plans</li>
              <li>Workshops, learning opportunities, and facilitated experiences</li>
              <li>Support for introducing and adopting new initiatives</li>
              <li>Ongoing feedback and program refinement</li>
            </ul>
            <h3 className="mt-4 font-serif text-2xl text-teal">Evaluation & Continuous Improvement</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-8">
              <li>Participation and engagement measures</li>
              <li>Employee feedback and aggregate reporting</li>
              <li>Effectiveness evaluation and recommendations for what to continue</li>
            </ul>
            <p className="mt-3 text-base leading-8">
              Best suited for public-sector agencies, healthcare systems, educational institutions, community organizations, and employers seeking comprehensive, data-informed support. Scope is determined after discovery. Formal needs assessments and consulting projects are separately scoped.
            </p>
          </details>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-8 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Why Partner With ThriveWell?</h2>
          <p>
            ThriveWell Care Collective™ brings together expertise in organizational change management, healthcare leadership, adult education, social work, and licensed professional wellness services.
          </p>
          <p>
            We understand that supporting workforce well-being requires more than individual wellness activities. It also requires listening to employees, understanding organizational priorities, and developing practical solutions that reflect workplace realities.
          </p>
          <p>
            Our approach combines organizational insight, thoughtful program design, employee engagement, and restorative wellness experiences. We collaborate with organizations to build on existing strengths, identify opportunities for meaningful support, and establish clear objectives to guide program development and evaluation.
          </p>
          <p className="font-semibold">
            Our goal is not to offer a predetermined solution, but to help each organization determine what will be most valuable for its people.
          </p>
          <h2 className="pt-4 font-serif text-4xl text-teal">What Is an Organizational Needs Assessment?</h2>
          <p>
            An organizational needs assessment is a structured process for understanding employee experiences, existing resources, organizational priorities, and opportunities for improvement.
          </p>
          <p>
            Depending on the agreed scope, ThriveWell may use employee surveys, stakeholder interviews, listening sessions, and reviews of existing programs to develop a clearer understanding of workforce needs.
          </p>
          <p>
            Findings can help organizations prioritize initiatives and make informed decisions about resources. Potential deliverables may include a findings report, prioritized recommendations, a proposed implementation roadmap, and an evaluation framework. Deliverables are defined for each engagement rather than guaranteed in advance.
          </p>
        </div>
      </section>

      <section className="bg-eucalyptus/40 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Listen Before We Design</h2>
          <p className="mt-4 text-base leading-8">
            We begin by exploring employee challenges, existing supports, employees’ stated needs, workplace conditions, differences across shifts and locations, and the outcomes that would make an initiative useful. We use these insights to recommend support, establish objectives, and design a practical approach. Employee input is voluntary, treated confidentially as appropriate, and reported in aggregate when suitable.
          </p>
          <ol className="mt-8 space-y-3">
            {stages.map(([name, body], index) => (
              <li key={name} className="rounded-3xl bg-white px-5 py-4">
                <p className="font-serif text-2xl text-teal">{index + 1}. {name}</p>
                <p className="mt-2 text-base leading-8">{body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-base leading-8">
            Stress management and relaxation education can be valuable; they cannot independently correct excessive workloads, inadequate resources, or unclear expectations. We support individuals in developing practical skills while helping organizations identify broader opportunities to improve the employee experience.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Who We Serve</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-base leading-8">
            {audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-base leading-8">
            We have particular interest in organizations whose people care for, educate, protect, and serve others.
          </p>
          <h2 className="mt-10 font-serif text-4xl text-teal">Service scope</h2>
          <p className="mt-4 text-base leading-8">
            ThriveWell Care Collective™ provides educational, restorative, and organizational well-being services. Our wellness education, guided relaxation, mindfulness, and organizational consulting services are non-clinical and are not intended to diagnose, treat, or replace medical or mental health care. Licensed massage therapy is delivered within the therapist’s professional scope of practice.
          </p>
          <h2 className="mt-10 font-serif text-4xl text-teal">Availability and Delivery</h2>
          <p className="mt-4 text-base leading-8">
            ThriveWell offers mobile wellness services in the Lehigh Valley, Pennsylvania. Virtual education and organizational consulting may be available to organizations beyond the Lehigh Valley, subject to the needs, scope, and delivery requirements of each engagement.
          </p>
          <ButtonLink href="/schedule?inquiry=organization" className="mt-8">
            Request an Organizational Discovery Conversation
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}
