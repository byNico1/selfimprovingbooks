// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      description: z.string(),
      image: z.object({
        src: image() || z.string(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Nicolas Forero"),
      category: z.string(),
      tags: z.array(z.string()),
      ogImage: z.string(),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
