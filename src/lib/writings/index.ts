import { writings } from "#/writings"

export const findWritingByNextSlugs = (slug: string[]) => {
  // converts ["one", "two"] -> ["one/two"]
  const joinedSlug = slug.join("/")

  // Return the writing where the slug matches
  const writing = writings.find(w => {
    return w.slugAsParams === joinedSlug
  })
  return writing
}
