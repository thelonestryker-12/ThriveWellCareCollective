export const siteConfig = {
  name: "ThriveWell Care Collective",
  legalName: "ThriveWell Care Collective™",
  domain: "https://thrivewellcarecollective.com",
  tagline: "You spend your days caring for others. Let this be your time.",
  brandLine: "Restoring energy, empathy, and capacity for those who care.",
  location: "Serving the Lehigh Valley, Pennsylvania",
  email: "hello@thrivewellcarecollective.com",
  phoneDisplay: "(835) 285-1304",
  phoneTel: "tel:+18352851304",
  phoneSms: "sms:+18352851304",
  formspreeEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "https://formspree.io/f/xzeegqnd",
  description:
    "ThriveWell Care Collective™ offers restorative massage therapy, guided breathing and pranayama, guided relaxation, mindfulness, and grounding experiences for caregivers, mothers, and anyone who spends their life caring for others in the Lehigh Valley, Pennsylvania.",
  disclaimer:
    "ThriveWell Care Collective™ provides educational, restorative, and general wellness services. Massage therapy services are provided exclusively by licensed massage therapists. ThriveWell services are intended for general wellness and are not intended to diagnose, treat, cure, or prevent medical or mental health conditions.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/membership", label: "Membership" },
  { href: "/caregiverwell", label: "CaregiverWell" },
  { href: "/motherwell", label: "MotherWell" },
  { href: "/blog", label: "Blog" },
] as const;
