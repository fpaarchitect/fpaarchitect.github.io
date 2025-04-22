import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
	schema: z.object({
		title: z.string(),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
	})
});

export const collections = { projects };
