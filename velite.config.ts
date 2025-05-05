import { defineCollection, defineConfig, s } from "velite"

// WARN: I don't like this here
export const baseWritingsURL = "w" as const

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: [baseWritingsURL, data.slug.split("/").slice(1).join("/")].join(
    "/"
  ),
})

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
      published: s.boolean().default(true),
      cover: s.image().optional(),
      body: s.mdx(),
    })
    .transform(computedFields),
})

export default defineConfig({ collections: { writings } })
