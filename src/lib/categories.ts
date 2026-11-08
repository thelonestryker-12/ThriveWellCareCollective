export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "thrivewell-journaling-reflection-series",
    name: "ThriveWell Journaling & Reflection Series",
    description:
      "The ThriveWell Journaling & Reflection Series is a weekly invitation for women who care for others—at home, at work, and in their communities—to pause and reconnect with themselves. Through personal reflections, thoughtful journaling prompts, and everyday experiences, we explore the responsibilities we carry, the boundaries we navigate, and the small ways we can make more room for our own well-being.",
    image: "/blog/journaling-series-cover-20261108.jpg",
    imageAlt:
      "Hands writing in an open journal beside coffee, eucalyptus, and a candle",
  },
  {
    slug: "caregiving-and-capacity",
    name: "Caregiving & Capacity",
    description:
      "Caregiver fatigue, emotional demands, invisible responsibilities, boundaries, motherhood, and finding time for yourself.",
  },
  {
    slug: "mindfulness-and-everyday-wellness",
    name: "Mindfulness & Everyday Wellness",
    description:
      "Breathing exercises, grounding techniques, relaxation, journaling, stress management, and practical wellness activities.",
  },
  {
    slug: "womens-health-and-well-being",
    name: "Women's Health & Well-Being",
    description:
      "Heart health, sleep, physical wellness, preventive health, massage, and restorative self-care.",
  },
  {
    slug: "workplace-and-leadership-wellness",
    name: "Workplace & Leadership Wellness",
    description:
      "Organizational change, leadership, workplace stress, employee well-being, professional caregivers, and creating supportive workplaces.",
  },
  {
    slug: "community-and-connection",
    name: "Community & Connection",
    description:
      "Personal experiences, community perspectives, contributor articles, ThriveWell stories, and meaningful connections.",
  },
];

export function getCategoryByName(name: string) {
  return blogCategories.find((category) => category.name === name) ?? null;
}

export function getCategoryBySlug(slug: string) {
  return blogCategories.find((category) => category.slug === slug) ?? null;
}
