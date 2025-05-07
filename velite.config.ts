import rehypeShiki from "@shikijs/rehype"
import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
} from "@shikijs/transformers"
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
      updated: timestamp(),
      published: s.boolean().default(true),
      cover: s.image().optional(),
      featured: s.boolean().default(false),
      // categories: s.array(s.string()).default(["NONE"]),
      tags: s.array(s.string()).default([]),
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
    rehypePlugins: [
      [
        rehypeShiki as any, // eslint-disable-line @typescript-eslint/no-explicit-any
        {
          theme: "one-dark-pro",
          transformers: [
            transformerNotationDiff({ matchAlgorithm: "v3" }),
            transformerNotationHighlight({ matchAlgorithm: "v3" }),
            transformerNotationFocus({ matchAlgorithm: "v3" }),
            transformerNotationErrorLevel({ matchAlgorithm: "v3" }),
          ],
        },
      ],
    ],
    remarkPlugins: [],
  },
})
