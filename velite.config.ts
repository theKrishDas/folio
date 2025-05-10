import rehypeShiki from "@shikijs/rehype"
import remarkCodeTitles from "remark-flexible-code-titles"
import { defineCollection, defineConfig, s } from "velite"

import { computedFields, shikiOptions, timestamp } from "@/lib/velite"

// NOTE: Visit the docs
// https://velite.js.org/guide/define-collections#collection-schema-options
const writings = defineCollection({
  name: "Writings",
  pattern: "writings/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.path(),
      summary: s.string(),
      date: s.isodate(),
      updated: timestamp(),
      published: s.boolean().default(true),
      cover: s.image().optional(),
      featured: s.boolean().default(false),
      categories: s.array(s.string()).optional(),
      tags: s.array(s.string()).default([]),
      meta: s.metadata(),
      toc: s.toc(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:8].[ext]",
    clean: true,
  },
  collections: { writings },
  mdx: {
    rehypePlugins: [[rehypeShiki, shikiOptions]],
    remarkPlugins: [[remarkCodeTitles]],
  },
})
