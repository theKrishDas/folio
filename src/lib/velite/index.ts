import { stat } from "fs/promises"
import { defineSchema, s } from "velite"

const timestamp = defineSchema(() =>
  s
    .custom<string | undefined>(i => i === undefined || typeof i === "string")
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: "custom",
          message:
            "`s.timestamp()` schema will resolve the file modified timestamp",
        })
      }

      const stats = await stat(meta.path)
      return stats.mtime.toISOString()
    })
)

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
})

export { computedFields, timestamp }
