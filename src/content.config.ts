import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().optional(),
    description: z.string(),
    quickAnswer: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['china-travel', 'canton-fair', 'china-sourcing', 'tools']),
    canonical: z.url().optional(),
    ogImage: z.string().default('/og/default.svg'),
    coverImage: z.string().optional(),
    coverAlt: z.string().optional(),
    coverMotif: z.enum(['map', 'checklist', 'badge', 'hotel', 'supplier']).optional(),
    faqs: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string()
        })
      )
      .optional()
  })
});

export const collections = { blog };
