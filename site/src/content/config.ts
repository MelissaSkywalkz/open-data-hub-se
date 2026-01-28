import { defineCollection, z } from 'astro:content';

const guidesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    publishedAt: z.date().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  guides: guidesCollection,
};
