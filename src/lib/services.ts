export type PriceOption = {
  duration: string;
  price: string;
};

export type Service = {
  slug: string;
  name: string;
  category: "massage" | "wellness";
  prices: PriceOption[];
  summary: string;
  description: string[];
  includes?: string[];
  cta: string;
};

export type ExperiencePackage = {
  slug: string;
  name: string;
  duration: string;
  price: string;
  summary: string;
  includes: string[];
  note?: string;
  cta: string;
};

export const massageServices: Service[] = [
  {
    slug: "thrivewell-signature-massage",
    name: "ThriveWell Signature Massage™",
    category: "massage",
    prices: [
      { duration: "60 minutes", price: "$100" },
      { duration: "90 minutes", price: "$130" },
    ],
    summary:
      "A full-body massage designed for people who spend their days caring for others, with special focus on the head, hands, hips, and feet.",
    description: [
      "Our signature massage is thoughtfully designed for those who spend their days caring for others. This full-body massage places special focus on the areas that often carry the demands of caregiving—the head, hands, hips, and feet.",
      "Created to restore both body and mind, this deeply relaxing experience helps ease tension, replenish your energy, and give intentional attention back to the parts of you that give so much to everyone else.",
    ],
    cta: "Book the ThriveWell Signature Massage™",
  },
  {
    slug: "swedish-massage",
    name: "Swedish Massage",
    category: "massage",
    prices: [
      { duration: "60 minutes", price: "$100" },
      { duration: "90 minutes", price: "$130" },
    ],
    summary:
      "Long, flowing strokes that encourage relaxation, support circulation, and ease everyday muscle tension.",
    description: [
      "A full-body massage using long, flowing strokes to encourage relaxation, support circulation, and ease everyday muscle tension. This classic massage is ideal for anyone seeking stress relief, overall wellness, and a soothing restorative experience.",
    ],
    cta: "Book Swedish Massage",
  },
  {
    slug: "integrative-massage",
    name: "Integrative Massage",
    category: "massage",
    prices: [
      { duration: "60 minutes", price: "$110" },
      { duration: "90 minutes", price: "$140" },
    ],
    summary:
      "A customized blend of Swedish massage and targeted techniques shaped around your preferences and areas of focus.",
    description: [
      "An integrative massage blends traditional Swedish massage with targeted massage techniques. Your licensed massage therapist will customize the session by drawing from a variety of approaches based on your preferences and areas of focus.",
      "This individualized approach is designed to ease muscle tension, support mobility and circulation, and create a massage experience that feels responsive to your body.",
    ],
    cta: "Book Integrative Massage",
  },
  {
    slug: "reflexology",
    name: "Reflexology",
    category: "massage",
    prices: [{ duration: "60 minutes", price: "$90" }],
    summary:
      "Gentle, intentional pressure on specific areas of the feet to promote deep relaxation and a sense of balance.",
    description: [
      "A focused foot-based experience that applies gentle, intentional pressure to specific areas of the feet. Reflexology is designed to promote deep relaxation, encourage a sense of balance, and provide restorative time centered on one of the areas that carries you through each day.",
    ],
    cta: "Book Reflexology",
  },
  {
    slug: "cupping-therapy",
    name: "Cupping Therapy",
    category: "massage",
    prices: [
      { duration: "60 minutes", price: "$110" },
      { duration: "90 minutes", price: "$140" },
    ],
    summary:
      "Massage with specialized cups that create gentle suction to support circulation, ease tension, and promote mobility.",
    description: [
      "A massage experience that incorporates specialized cups to create gentle suction on the skin. Cupping can be used alongside massage techniques to support circulation, ease muscle tension, and promote mobility, leaving you with a sense of relaxation and restoration.",
    ],
    cta: "Book Cupping Therapy",
  },
  {
    slug: "sports-massage",
    name: "Sports Massage (Assisted Stretching Focus)",
    category: "massage",
    prices: [
      { duration: "60 minutes", price: "$110" },
      { duration: "90 minutes", price: "$140" },
    ],
    summary:
      "Performance-focused massage with assisted stretching to support flexibility, mobility, and muscle recovery.",
    description: [
      "A performance-focused massage designed to support flexibility, mobility, and muscle recovery. This experience combines focused massage work with assisted stretching techniques to lengthen tight muscles, release restrictions, and support range of motion.",
      "Ideal for active individuals and athletes who want dedicated attention to movement, recovery, and overall physical readiness.",
    ],
    cta: "Book Sports Massage",
  },
];

export const wellnessServices: Service[] = [
  {
    slug: "signature-breathing-pranayama",
    name: "ThriveWell Signature Breathing & Pranayama™",
    category: "wellness",
    prices: [
      { duration: "30 minutes", price: "$35" },
      { duration: "45 minutes", price: "$45" },
    ],
    summary:
      "A guided breathing experience that creates an intentional pause and introduces approachable pranayama practices.",
    description: [
      "A guided breathing experience designed to create an intentional pause in your day.",
      "Your session begins with simple breath awareness and introduces approachable breathing and pranayama practices for relaxation, awareness, and general wellness.",
      "No previous experience is necessary.",
    ],
    includes: [
      "Guided breath awareness",
      "Gentle breathing practices",
      "Pranayama instruction",
      "Quiet integration time",
      "A simple practice to continue on your own",
    ],
    cta: "Book Signature Breathing & Pranayama™",
  },
  {
    slug: "guided-relaxation",
    name: "ThriveWell Guided Relaxation™",
    category: "wellness",
    prices: [
      { duration: "30 minutes", price: "$35" },
      { duration: "45 minutes", price: "$45" },
    ],
    summary:
      "Dedicated time to settle in and follow a guided sequence of breathing, body awareness, and relaxation.",
    description: [
      "Sometimes what you need most is time to stop doing and simply settle.",
      "ThriveWell Guided Relaxation™ gives you dedicated time to become comfortable and follow a guided sequence of breathing, body awareness, quiet reflection, and relaxation.",
      "There is nothing to accomplish or perfect. Simply get comfortable and allow yourself to follow the experience.",
    ],
    includes: [
      "Comfortable settling-in period",
      "Guided breathing",
      "Body awareness",
      "Guided relaxation",
      "Quiet closing period",
    ],
    cta: "Book Guided Relaxation™",
  },
  {
    slug: "mindfulness-grounding",
    name: "ThriveWell Mindfulness & Grounding™",
    category: "wellness",
    prices: [
      { duration: "30 minutes", price: "$35" },
      { duration: "45 minutes", price: "$45" },
    ],
    summary:
      "A practical guided experience that reconnects you with the present moment through simple, usable practices.",
    description: [
      "A practical guided experience focused on reconnecting with the present moment.",
      "ThriveWell Mindfulness & Grounding™ introduces simple practices that bring your attention back to what you can see, hear, feel, and notice around you.",
      "The experience is designed to feel approachable and gives you techniques you can continue using in everyday life.",
    ],
    includes: [
      "Guided sensory grounding",
      "Present-moment awareness",
      "Mindful breathing",
      "Simple mindfulness practice",
      "Take-away practices for personal use",
    ],
    cta: "Book Mindfulness & Grounding™",
  },
];

export const allServices = [...massageServices, ...wellnessServices];

export const membership = {
  slug: "monthly-reset",
  name: "ThriveWell Monthly Reset™",
  price: "$105/month",
  summary:
    "Members get one 60-minute ThriveWell Signature Massage™ every month, priority booking, and 10% off any additional ThriveWell services they book that month.",
  includes: [
    "One 60-minute ThriveWell Signature Massage™ each month",
    "Priority booking",
    "10% off additional ThriveWell services booked during the membership month",
  ],
  details: [
    "Membership renews monthly.",
    "One unused massage can roll over for one additional month.",
    "Membership is for the member only and cannot be shared.",
    "Additional discounts, including the 15% LVHN colleague discount, do not stack with membership pricing.",
    "Members can cancel with 30 days’ notice.",
    "ThriveWell’s normal cancellation/no-show policy still applies.",
    "Massage is provided only by a licensed massage therapist.",
  ],
  cta: "Join ThriveWell Monthly Reset™",
};

export const caregiverWellPackages: ExperiencePackage[] = [
  {
    slug: "caregiver-pause",
    name: "Caregiver Pause™",
    duration: "45 minutes",
    price: "$65",
    summary:
      "A shorter restorative experience designed to fit into a full day while still giving you meaningful time to pause.",
    includes: [
      "20-minute licensed chair massage",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
    ],
    cta: "Choose Caregiver Pause™",
  },
  {
    slug: "caregiver-reset",
    name: "Caregiver Reset™",
    duration: "75 minutes",
    price: "$125",
    summary:
      "Our core CaregiverWell™ experience combines the ThriveWell Signature Massage™ with guided wellness practices.",
    includes: [
      "60-minute ThriveWell Signature Massage™",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
    ],
    note: "An uninterrupted experience designed to give you time to settle in, recharge, and reconnect.",
    cta: "Choose Caregiver Reset™",
  },
  {
    slug: "caregiver-restore",
    name: "Caregiver Restore™",
    duration: "105 minutes",
    price: "$165",
    summary:
      "Our most complete CaregiverWell™ experience gives you additional time for massage and guided restoration.",
    includes: [
      "90-minute ThriveWell Signature Massage™",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
      "Mindfulness practice",
    ],
    note: "A longer experience for the times when you want more space to settle in and restore.",
    cta: "Choose Caregiver Restore™",
  },
];

export const motherWellPackages: ExperiencePackage[] = [
  {
    slug: "motherwell-moment",
    name: "MotherWell™ Moment",
    duration: "45 minutes",
    price: "$65",
    summary:
      "A shorter restorative experience that creates dedicated time for you.",
    includes: [
      "20-minute licensed chair massage",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
    ],
    cta: "Choose MotherWell™ Moment",
  },
  {
    slug: "motherwell-reset",
    name: "MotherWell™ Reset",
    duration: "75 minutes",
    price: "$125",
    summary:
      "A restorative combination of the ThriveWell Signature Massage™ and guided wellness practices designed specifically for mothers.",
    includes: [
      "60-minute ThriveWell Signature Massage™",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
    ],
    note: "Dedicated time to slow down, recharge, and reconnect with yourself.",
    cta: "Choose MotherWell™ Reset",
  },
  {
    slug: "motherwell-restore",
    name: "MotherWell™ Restore",
    duration: "105 minutes",
    price: "$165",
    summary:
      "Our most immersive MotherWell™ experience provides additional time for massage, relaxation, and quiet restoration.",
    includes: [
      "90-minute ThriveWell Signature Massage™",
      "Guided breathing",
      "Grounding practice",
      "Guided relaxation",
      "Mindfulness practice",
    ],
    note: "A longer experience when you want to give yourself more time to settle in and restore.",
    cta: "Choose MotherWell™ Restore",
  },
];

export const startingGuides = [
  {
    question: "Want hands-on restoration?",
    answer:
      "Choose from our ThriveWell Signature, Swedish, Integrative, Reflexology, Cupping, or Sports Massage services.",
    href: "/services#massage",
  },
  {
    question: "Want to focus on your breathing?",
    answer: "Choose ThriveWell Signature Breathing & Pranayama™.",
    href: "/services#signature-breathing-pranayama",
  },
  {
    question: "Want to settle into stillness?",
    answer: "Choose ThriveWell Guided Relaxation™.",
    href: "/services#guided-relaxation",
  },
  {
    question: "Want practical ways to reconnect with the present moment?",
    answer: "Choose ThriveWell Mindfulness & Grounding™.",
    href: "/services#mindfulness-grounding",
  },
  {
    question: "Want massage and wellness practices combined into one experience?",
    answer: "Explore CaregiverWell™ or MotherWell™.",
    href: "/caregiverwell",
  },
  {
    question: "Want to make massage part of your monthly routine?",
    answer: "Choose ThriveWell Monthly Reset™.",
    href: "/membership",
  },
];

export const getStartedSteps = [
  {
    step: "1",
    title: "Explore",
    body: "Browse our massage, wellness, membership, CaregiverWell™, and MotherWell™ experiences.",
  },
  {
    step: "2",
    title: "Choose",
    body: "Select what feels right for you today. You do not need to choose the perfect experience. Start with what interests you.",
  },
  {
    step: "3",
    title: "Schedule",
    body: "Choose an available time that works for you.",
  },
  {
    step: "4",
    title: "Arrive",
    body: "Come as you are. You do not need to prepare or have previous experience with any of our wellness practices. We will guide you from there.",
  },
];

export const bookableOptions = [
  ...allServices.map((service) => ({
    value: service.slug,
    label: service.name,
  })),
  { value: membership.slug, label: membership.name },
  ...caregiverWellPackages.map((item) => ({
    value: item.slug,
    label: item.name,
  })),
  ...motherWellPackages.map((item) => ({
    value: item.slug,
    label: item.name,
  })),
];
