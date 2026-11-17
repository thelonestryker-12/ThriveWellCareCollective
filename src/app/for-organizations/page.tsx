import type { Metadata } from "next";
import { SoftRing } from "@/components/botanicals";
import { PartnershipLevels } from "@/components/partnership-levels";
import { ProcessTimeline } from "@/components/process-timeline";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Organizational Consulting & Workforce Well-Being",
  description:
    "ThriveWell partners with organizations to listen first, then design practical workforce well-being experiences, programs, and consulting support.",
  alternates: { canonical: "/for-organizations" },
};

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

      <section id="levels" className="relative overflow-hidden bg-sand py-20">
        <SoftRing
          color="#F98E77"
          className="pointer-events-none absolute -left-16 top-8 h-56 w-56 opacity-50"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-teal">Three ways to work together</h2>
          <PartnershipLevels />
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

      <section id="process" className="relative overflow-hidden bg-eucalyptus/40 py-20">
        <SoftRing
          color="#829B71"
          className="pointer-events-none absolute -right-10 top-8 h-56 w-56 opacity-70 sm:h-72 sm:w-72"
        />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Listen Before We Design</h2>
          <p className="mt-4 text-base leading-8">
            We begin by exploring employee challenges, existing supports, employees’ stated needs, workplace conditions, differences across shifts and locations, and the outcomes that would make an initiative useful. We use these insights to recommend support, establish objectives, and design a practical approach. Employee input is voluntary, treated confidentially as appropriate, and reported in aggregate when suitable.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProcessTimeline />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
          <p className="mt-2 text-base leading-8 lg:mt-4">
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
