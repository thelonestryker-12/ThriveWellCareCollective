import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ClosingCta } from "@/components/page-sections";

export const metadata: Metadata = {
  title: "About",
  description:
    "ThriveWell Care Collective™ restores energy, empathy, and capacity for those who care, through personalized wellness and organizational well-being.",
  alternates: { canonical: "/about" },
};

const values = [
  ["Compassion", "We lead with empathy, kindness, and genuine concern for the well-being of others. We recognize that everyone carries unique responsibilities, challenges, and experiences, and we approach each person with care and understanding."],
  ["Inclusion & Belonging", "We create welcoming environments where everyone is treated with equal dignity, respect, and consideration. We celebrate individual differences and believe that meaningful wellness opportunities should be accessible to people of diverse backgrounds, identities, and life experiences."],
  ["Integrity & Professionalism", "We conduct our business with honesty, transparency, accountability, and respect. We maintain professional boundaries, practice within our qualifications, and uphold high standards of ethical care, safety, and confidentiality."],
  ["Empowerment & Self-Awareness", "We believe individuals are capable of making informed choices about their own well-being. Through education, reflection, and supportive experiences, we encourage people to recognize their needs, honor their boundaries, and develop practices that support personal growth."],
  ["Balance & Sustainability", "We recognize that caring for others should not require sacrificing one's own well-being. We promote realistic, sustainable approaches to self-care that can be integrated into everyday responsibilities, relationships, and professional lives."],
  ["Connection & Community", "We believe well-being is strengthened through meaningful relationships, shared experiences, and mutual support. We foster opportunities for individuals and organizations to connect, learn, reflect, and grow together."],
  ["Quality & Continuous Growth", "We are committed to delivering thoughtful, high-quality wellness experiences grounded in professional knowledge, evidence-informed practices, and ongoing learning. We welcome feedback, embrace improvement, and continually evaluate how we can better serve our community."],
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Who We Are"
            title="Caring for Those Who Care for Others"
            as="h1"
          />
          <div className="mt-8 space-y-5 text-base leading-8">
            <p>
              At ThriveWell Care Collective™, we believe that caring for others should not come at the expense of caring for ourselves.
            </p>
            <p>
              Every day, countless people dedicate their time, energy, and attention to supporting others. They are mothers, family caregivers, healthcare professionals, educators, public servants, community leaders, and people others naturally depend on.
            </p>
            <p>
              While caregiving and service can be deeply meaningful, physical, mental, and emotional demands can accumulate over time. Too often, those providing care find little opportunity to restore their own energy and capacity.
            </p>
            <p className="font-serif text-2xl text-teal">
              ThriveWell was created with a simple belief: Those who care for others deserve care, too.
            </p>
            <p>
              We are a Lehigh Valley–based wellness and organizational consulting business supporting individuals, caregivers, and the organizations that depend on them. Our services combine restorative experiences, education, and organizational change expertise to address well-being from both individual and workplace perspectives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-eucalyptus/40 py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-teal">Our Mission</h2>
            <p className="mt-4 text-base leading-8">
              At ThriveWell Care Collective™, our mission is to restore energy, empathy, and capacity for those who care.
            </p>
            <p className="mt-4 text-base leading-8">
              We provide accessible, personalized wellness services, educational experiences, and organizational well-being solutions that support physical, emotional, and mental well-being.
            </p>
            <p className="mt-4 text-base leading-8">
              Through compassionate care, meaningful education, and collaborative partnerships, we help individuals and organizations develop practical approaches to managing stress, strengthening resilience, and creating more sustainable ways of caring for themselves and others.
            </p>
            <p className="mt-4 text-base leading-8">
              We believe that those who dedicate their lives to supporting others deserve the same compassion, care, and attention they so freely give.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl text-teal">Our Vision</h2>
            <p className="mt-4 text-base leading-8">
              Our vision is to build a thriving, inclusive community where caring for oneself is valued as much as caring for others.
            </p>
            <p className="mt-4 text-base leading-8">
              We envision a future where individuals feel empowered to prioritize their well-being without guilt, caregivers have access to meaningful support, and organizations and employees work together to create healthier, more supportive, and sustainable workplaces.
            </p>
            <p className="mt-4 text-base leading-8">
              Through education, restorative experiences, and organizational partnerships, we aspire to help create communities and workplaces where people feel supported, respected, connected, and capable of thriving.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Our Seven Core Values</h2>
          <div className="mt-8 space-y-3">
            {values.map(([name, body]) => (
              <details key={name} className="rounded-3xl border border-sage/30 bg-white px-5 py-4">
                <summary className="cursor-pointer font-serif text-2xl text-teal">{name}</summary>
                <p className="mt-3 text-base leading-8">{body}</p>
              </details>
            ))}
          </div>
          <h2 className="mt-12 font-serif text-4xl text-teal">
            Our Guiding Philosophy: Arrive • Notice • Release • Return™
          </h2>
          <p className="mt-4 text-base leading-8">
            Our approach invites individuals to arrive in the present moment, notice what they are experiencing, release what they can, and return to everyday life with greater awareness and intention. This philosophy guides individual wellness experiences and educational programs and informs our compassionate approach to organizational partnerships.
          </p>
        </div>
      </section>

      <section className="bg-sand py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">How ThriveWell Began</h2>
          <div className="mt-6 space-y-5 text-base leading-8">
            <p>
              ThriveWell Care Collective™ was co-founded by Dr. Laura Camus and Amanda “Mandy” Koch, LMT, who share a commitment to helping people feel supported, valued, and empowered to care for themselves.
            </p>
            <p>
              Our backgrounds are different but complementary. Through experience in education, healthcare, organizational change, and direct wellness care, we have seen how easily people can become overwhelmed by the demands of caring for others.
            </p>
            <p>
              Lasting well-being requires more than an occasional opportunity to rest. It also benefits from awareness, education, practical strategies, supportive relationships, and environments where people can thrive. ThriveWell grew from our desire to bring these elements together in an accessible and compassionate way.
            </p>
            <p>
              What began with a focus on individual caregivers has expanded to include organizations seeking to understand and support their employees. Today, we offer in-person services in the Lehigh Valley and virtual offerings that can reach participants beyond the region.
            </p>
          </div>
          <h2 className="mt-12 font-serif text-4xl text-teal">Two Perspectives. One Shared Purpose.</h2>
          <p className="mt-4 text-base leading-8">
            We recognize that well-being is both an individual and organizational responsibility. Individuals benefit from opportunities to restore energy and develop self-awareness. Organizations play an important role in creating environments where employees feel supported and equipped to perform meaningful work.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-6">
              <h3 className="font-serif text-2xl text-teal">Individual Wellness & Restorative Care</h3>
              <p className="mt-3 text-base leading-8">
                Our personalized wellness services include professional massage therapy, guided relaxation, breath awareness, mindfulness, journaling, reflection, and educational experiences that help people reconnect with their needs and incorporate restorative practices into daily life.
              </p>
              <ButtonLink href="/services" className="mt-5">Explore Individual Wellness</ButtonLink>
            </article>
            <article className="rounded-3xl bg-white p-6">
              <h3 className="font-serif text-2xl text-teal">Organizational Consulting & Workforce Well-Being</h3>
              <p className="mt-3 text-base leading-8">
                We partner with employers, healthcare organizations, educational institutions, government agencies, and community organizations to understand workforce needs and develop thoughtful approaches to employee well-being. Our work can include workshops, structured programs, organizational assessments, strategic design, engagement, change support, and evaluation, building on initiatives already underway.
              </p>
              <ButtonLink href="/for-organizations" className="mt-5">Explore Organizational Services</ButtonLink>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <article>
            <Image src="/blog/making-space-for-myself-20261108.jpg" alt="Dr. Laura Camus" width={438} height={360} className="h-72 w-full rounded-3xl object-cover" />
            <h2 className="mt-4 font-serif text-3xl text-teal">Dr. Laura Camus, Ed.D., MA, MSW, CCMP</h2>
            <p className="mt-1 text-sm font-semibold text-sage">Co-Founder & Executive Director</p>
            <div className="mt-4 space-y-4 text-base leading-8">
              <p>Laura brings extensive experience in organizational change management, healthcare leadership, organizational consulting, and strategic workforce initiatives. Her work has centered on guiding organizational transformation, engaging stakeholders, developing leaders, designing learning solutions, and helping people and teams navigate change. She also brings expertise in adult education and social work, which informs her people-centered, evidence-informed approach.</p>
              <p>She holds a Doctor of Education in Healthcare Education and Leadership from Nebraska Methodist College, a Master of Arts in Educational Technology Leadership from George Washington University, and a Master of Social Work from the University of Pittsburgh. She is a Certified Change Management Professional (CCMP).</p>
              <p>Laura has taught in higher education and adult learning environments, helping learners apply knowledge in practical settings. At ThriveWell, she leads organizational consulting, organizational discovery and needs assessments, workforce well-being strategy, program design and evaluation, leadership and professional development, wellness education, and reflection programs.</p>
              <p>Her approach emphasizes listening, self-awareness, meaningful engagement, and understanding what people need. She believes sustainable personal and organizational well-being requires both individual tools and attention to the environments in which people work and live.</p>
            </div>
          </article>
          <article>
            <Image src="/blog/cetronia-chair-massage-20261117.jpg" alt="Amanda Koch giving a chair massage" width={1536} height={2048} className="h-72 w-full rounded-3xl object-cover" />
            <h2 className="mt-4 font-serif text-3xl text-teal">Amanda “Mandy” Koch, LMT</h2>
            <p className="mt-1 text-sm font-semibold text-sage">Co-Founder & Director of Wellness Services & Client Care</p>
            <div className="mt-4 space-y-4 text-base leading-8">
              <p>Mandy brings hands-on wellness expertise and an individualized care perspective to ThriveWell’s restorative services. As a licensed massage therapist, she creates welcoming, professional experiences responsive to each client’s needs, preferences, and goals.</p>
              <p>She leads massage therapy services, client care experiences, and body-based wellness offerings, including personalized massage and relaxation-focused care. Mandy believes each person deserves to feel listened to, respected, and comfortable throughout their wellness experience.</p>
              <p>In organizational partnerships, Mandy contributes practical wellness expertise, helping develop and deliver restorative experiences accessible to employees and caregivers. Together, Laura and Mandy connect education, organizational insight, compassionate care, and professional wellness services.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-eucalyptus/40 py-20">
        <div className="mx-auto max-w-4xl space-y-5 px-4 text-base leading-8 sm:px-6">
          <h2 className="font-serif text-4xl text-teal">Our Approach and Commitment</h2>
          <p>At ThriveWell, we recognize that no two people or organizations have exactly the same needs. We begin by listening. For individual clients, this means understanding preferences and wellness goals before recommending services. For organizations, it means understanding employee experiences, leadership priorities, existing resources, and workplace conditions.</p>
          <p>We favor individualized approaches over one-size-fits-all solutions. Arrive • Notice • Release • Return™ guides restorative moments of awareness and intention, whether during massage, a workshop, reflective learning, or an organizational collaboration.</p>
          <p>We especially support people whose lives involve caring for, teaching, leading, or serving others. Individual wellness practices can be valuable, but cannot alone resolve organizational challenges such as excessive workloads, limited resources, or unclear expectations. Our work recognizes the importance of caring for people and improving the conditions in which they work.</p>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}
