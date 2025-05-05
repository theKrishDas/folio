// WARN: I don't like this here
export const baseWritingsURL = "w" as const

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: [baseWritingsURL, data.slug.split("/").slice(1).join("/")].join(
    "/"
  ),
})

export { computedFields }
