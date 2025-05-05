import { defineCollection, defineConfig, s } from "velite"

import { computedFields, timestamp } from "@/lib/velite"

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
      lastModified: timestamp(),
      published: s.boolean().default(true),
      cover: s.image().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({ collections: { writings } })
