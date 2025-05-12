import { notFound, redirect } from "next/navigation"
import { writings } from "#/writings"

import Back from "@/components/ui/back-button"
import { Container } from "@/components/ui/container"
import { PagePadding } from "@/components/ui/page-padding"
import { Section } from "@/components/ui/section"
import { MDXContent } from "@/components/mdx"
import { Heading } from "@/components/typography"

import "@/css/mdx.css"

import { formatDate } from "@/lib/utils"

export default async function WritingPage({
  params,
}: {
  params?: Promise<{
    slug?: string[]
  }>
}) {
  // TODO: Genarate static params for the /w/[...slug] pages

  const res = await params
  if (!res) return
  const { slug } = res
  if (!slug) redirect("/") // TODO: redirect to latest writings here

  // TODO: Extract this to a separate function
  const writing = writings.find(w => {
    const constructedSlug = slug.join("/")
    return w.slugAsParams === constructedSlug
  })
  if (!writing) notFound()

  return (
    <PagePadding>
      <Container asChild>
        <Section asChild className="relative">
          <nav>
            <Back label="Home" url="/" />
          </nav>
        </Section>
      </Container>

      <Container asChild>
        <Section asChild>
          <article aria-labelledby="writing-heading">
            <Section className="mb-12 [&:has(+.section-root)]:mb-12">
              <Heading id="writing-heading">{writing.title}</Heading>

              <div className="mt-2 space-x-2 text-base">
                <small className="text-label-tertiary leading-11 font-medium">
                  {formatDate(writing.date)}
                  <span className="tracking-wider"> · </span>
                  {writing.meta.readingTime} min read
                </small>

                <small className="text-gray-1 bg-fill-quaternary pointer-events-none hidden touch-none rounded-md px-1.5 py-1 leading-none tracking-wide select-none md:inline-block">
                  Updated {formatDate(writing.updated, true, true)}
                </small>
              </div>
            </Section>

            <Section>
              <MDXContent body={writing.body} />
            </Section>
          </article>
        </Section>
      </Container>
    </PagePadding>
  )
}
