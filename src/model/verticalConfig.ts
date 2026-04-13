import { z } from "zod";

export const verticalIdSchema = z.enum([
  "provider",
  "payer",
  "pharma",
  "medtech",
  "custom",
]);

export type VerticalId = z.infer<typeof verticalIdSchema>;

const hexColor = z
  .string()
  .regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, "Expected #RGB or #RRGGBB");

export const brandingSchema = z.object({
  logoUrl: z.string().url().optional(),
  primaryColor: hexColor.optional(),
  secondaryColor: hexColor.optional(),
  fontFamily: z.string().optional(),
});

export const heroSchema = z.object({
  headline: z.string().min(1),
  subhead: z.string(),
  ctaLabel: z.string(),
  ctaHref: z.string(),
  imageUrl: z.string().url().optional(),
});

export const exitIntentSchema = z.object({
  title: z.string(),
  body: z.string(),
  ctaLabel: z.string(),
  dismissLabel: z.string().default("Not now"),
});

export const blogItemSchema = z.object({
  title: z.string(),
  href: z.string(),
  excerpt: z.string(),
});

export const chatConfigSchema = z.object({
  welcomeMessage: z.string(),
  suggestedReplies: z.array(z.string()).default([]),
});

export const adaptiveSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  showWhen: z
    .object({
      segments: z.array(z.string()).optional(),
    })
    .optional(),
});

export const segmentLabelSchema = z.object({
  key: z.string(),
  label: z.string(),
});

export const verticalConfigSchema = z.object({
  id: verticalIdSchema,
  displayName: z.string(),
  summary: z.string(),
  branding: brandingSchema.default({}),
  hero: heroSchema,
  exitIntent: exitIntentSchema,
  blog: z.array(blogItemSchema).default([]),
  chat: chatConfigSchema,
  adaptiveSections: z.array(adaptiveSectionSchema).default([]),
  segmentLabels: z.array(segmentLabelSchema).default([]),
});

export type VerticalConfig = z.infer<typeof verticalConfigSchema>;

export function parseVerticalConfig(input: unknown): VerticalConfig {
  return verticalConfigSchema.parse(input);
}
