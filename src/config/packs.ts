import type { VerticalConfig } from "@/model/verticalConfig";

const sharedBlog = (prefix: string) => [
  {
    title: `${prefix}: operational efficiency in 2026`,
    href: "#blog-1",
    excerpt: "How teams are aligning clinical and business outcomes.",
  },
  {
    title: `${prefix}: data stewardship checklist`,
    href: "#blog-2",
    excerpt: "Practical steps for responsible use of engagement data.",
  },
];

export const providerPack: VerticalConfig = {
  id: "provider",
  displayName: "Provider",
  summary: "Health systems and clinics — clinical operations and patient access.",
  branding: {
    primaryColor: "#0d9488",
    secondaryColor: "#0369a1",
  },
  hero: {
    headline: "Coordinate care with confidence",
    subhead:
      "Streamline access, reduce administrative load, and keep teams aligned across sites.",
    ctaLabel: "See operational playbook",
    ctaHref: "#playbook",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  exitIntent: {
    title: "Before you go — provider briefing",
    body: "Get a one-page summary on reducing leakage between intake and follow-up.",
    ctaLabel: "Email me the briefing",
    dismissLabel: "Dismiss",
  },
  blog: sharedBlog("Provider"),
  chat: {
    welcomeMessage:
      "Hi — I can suggest resources based on whether you focus on ambulatory, inpatient, or specialty.",
    suggestedReplies: ["Ambulatory", "Inpatient", "Specialty networks"],
  },
  adaptiveSections: [
    {
      id: "ops",
      title: "Operations leaders",
      body: "Benchmarks for throughput, staffing, and referral management.",
      showWhen: { segments: ["known"] },
    },
    {
      id: "anonymous-tip",
      title: "Start with access",
      body: "Anonymous visitors often explore scheduling and referral workflows first.",
    },
  ],
  segmentLabels: [
    { key: "anonymous", label: "Unidentified site visitor" },
    { key: "known", label: "Engaged member — provider operations" },
  ],
};

export const payerPack: VerticalConfig = {
  id: "payer",
  displayName: "Payer",
  summary: "Plans and benefits — member experience and network performance.",
  branding: {
    primaryColor: "#7c3aed",
    secondaryColor: "#0d9488",
  },
  hero: {
    headline: "Member experience that scales",
    subhead:
      "Personalize outreach, close care gaps, and give advocates a single view of the member.",
    ctaLabel: "Explore member journeys",
    ctaHref: "#journeys",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  exitIntent: {
    title: "Stay — payer roadmap",
    body: "See how peers prioritize HEDIS, CAHPS, and digital front door programs.",
    ctaLabel: "Send the roadmap",
    dismissLabel: "No thanks",
  },
  blog: sharedBlog("Payer"),
  chat: {
    welcomeMessage:
      "Hello — tell me if you care most about stars, risk adjustment, or member service.",
    suggestedReplies: ["Stars & quality", "Risk adjustment", "Member service"],
  },
  adaptiveSections: [
    {
      id: "quality",
      title: "Quality program office",
      body: "Measure impact across digital and telephonic outreach.",
      showWhen: { segments: ["known"] },
    },
    {
      id: "anon",
      title: "Explore benefits engagement",
      body: "Anonymous visitors often compare gap closure and onboarding journeys.",
    },
  ],
  segmentLabels: [
    { key: "anonymous", label: "Anonymous browser — benefits interest" },
    { key: "known", label: "Known visitor — health plan ops" },
  ],
};

export const pharmaPack: VerticalConfig = {
  id: "pharma",
  displayName: "Pharma",
  summary: "Education and access programs — illustrative demo content only.",
  branding: {
    primaryColor: "#0369a1",
    secondaryColor: "#64748b",
  },
  hero: {
    headline: "Support appropriate therapy awareness",
    subhead:
      "Illustrative demo: coordinate compliant journeys and handoffs to HCP offices. Not medical advice.",
    ctaLabel: "View program overview (demo)",
    ctaHref: "#overview",
    imageUrl: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80",
  },
  exitIntent: {
    title: "Demo resource — leave-behind",
    body: "Placeholder: summary deck for enablement teams (no product claims).",
    ctaLabel: "Request demo asset",
    dismissLabel: "Close",
  },
  blog: sharedBlog("Pharma"),
  chat: {
    welcomeMessage:
      "Demo assistant — I can point to illustrative HCP office or patient support scenarios.",
    suggestedReplies: ["HCP office", "Patient support (demo)", "Omnichannel"],
  },
  adaptiveSections: [
    {
      id: "hcp",
      title: "Field & HCP engagement",
      body: "Placeholder modules for congress follow-up and education.",
      showWhen: { segments: ["known"] },
    },
    {
      id: "anon-ph",
      title: "Explore education paths",
      body: "Anonymous visitors: use only fictional therapies in this demo environment.",
    },
  ],
  segmentLabels: [
    { key: "anonymous", label: "Anonymous — education content" },
    { key: "known", label: "Known — field / access (demo)" },
  ],
};

export const medtechPack: VerticalConfig = {
  id: "medtech",
  displayName: "Medtech",
  summary: "Devices and diagnostics — commercial and service workflows.",
  branding: {
    primaryColor: "#ea580c",
    secondaryColor: "#0f172a",
  },
  hero: {
    headline: "Connect commercial and service",
    subhead:
      "Give reps and technicians a shared view of accounts, assets, and outcomes.",
    ctaLabel: "See account lifecycle",
    ctaHref: "#lifecycle",
    imageUrl: "https://images.unsplash.com/photo-1516549655169-df83a0774518?w=800&q=80",
  },
  exitIntent: {
    title: "Wait — asset lifecycle PDF",
    body: "Placeholder one-pager on depot, install base, and renewal signals.",
    ctaLabel: "Get the PDF",
    dismissLabel: "Dismiss",
  },
  blog: sharedBlog("Medtech"),
  chat: {
    welcomeMessage:
      "Hi — are you focused on capital equipment, disposables, or remote monitoring?",
    suggestedReplies: ["Capital", "Disposables", "Remote monitoring"],
  },
  adaptiveSections: [
    {
      id: "service",
      title: "Service & uptime",
      body: "Prioritize contracts, SLAs, and field inventory.",
      showWhen: { segments: ["known"] },
    },
    {
      id: "anon-mt",
      title: "Discovery",
      body: "Anonymous visitors often explore install base and compliance topics.",
    },
  ],
  segmentLabels: [
    { key: "anonymous", label: "Anonymous — product research" },
    { key: "known", label: "Known — commercial / service" },
  ],
};

export const customPack: VerticalConfig = {
  id: "custom",
  displayName: "Custom",
  summary: "SE-configured vertical — edit in the customizer (coming soon).",
  branding: {
    primaryColor: "#0d9488",
    secondaryColor: "#0369a1",
  },
  hero: {
    headline: "Your organization’s story",
    subhead: "Replace copy and imagery in the custom vertical editor (MAK-11).",
    ctaLabel: "Contact sales",
    ctaHref: "#contact",
  },
  exitIntent: {
    title: "Don’t leave empty-handed",
    body: "Add your leave-behind message in the custom config.",
    ctaLabel: "Request follow-up",
    dismissLabel: "Dismiss",
  },
  blog: [
    {
      title: "Custom article one",
      href: "#c1",
      excerpt: "Replace with your storyline.",
    },
  ],
  chat: {
    welcomeMessage: "Configure this assistant for your scenario.",
    suggestedReplies: ["Option A", "Option B"],
  },
  adaptiveSections: [
    {
      id: "custom-1",
      title: "Adaptive block",
      body: "Shown based on segment rules in config.",
    },
  ],
  segmentLabels: [
    { key: "anonymous", label: "Anonymous" },
    { key: "known", label: "Known visitor" },
  ],
};

export const defaultPacks: Record<
  import("@/model/verticalConfig").VerticalId,
  VerticalConfig
> = {
  provider: providerPack,
  payer: payerPack,
  pharma: pharmaPack,
  medtech: medtechPack,
  custom: customPack,
};
