import { notFound } from "next/navigation"
import { writings } from "#/writings"

import Back from "@/components/ui/back-button"
import { Container } from "@/components/ui/container"
import { PagePadding } from "@/components/ui/page-padding"
import { Section } from "@/components/ui/section"
import { MDXContent } from "@/components/mdx"
import { Heading } from "@/components/typography"

import "@/css/mdx.css"

import { baseURL } from "@/lib/constants"
import { formatDate } from "@/lib/utils"
import { findWritingByNextSlugs } from "@/lib/writings"

export async function generateStaticParams() {
  // NextJS hoola-hoops
  // Generate static route params by splitting nested slugs into path segments
  const pathSegments = writings.map(writing => writing.slugAsParams.split("/"))
  const params = pathSegments.map(segments => ({ slug: segments }))
  return params
}

export async function generateMetadata({
  params,
}: {
  params?: Promise<{
    slug?: string[]
  }>
}) {
  const res = await params
  if (!res) return null
  const { slug } = res
  if (!slug) return null

  // Get the writing from the slug
  const writing = findWritingByNextSlugs(slug)
  if (!writing) return null

  const {
    title,
    summary: description,
    date: publishedTime,
    slugAsParams: wSlug,
  } = writing

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseURL}/w/${wSlug}`,
      // images: [{ url: "" }],
    },
  }
}

export default async function WritingPage({
  params,
}: {
  params?: Promise<{
    slug?: string[]
  }>
}) {
  const res = await params
  if (!res) return
  const { slug } = res
  if (!slug) return

  // Get the writing from the slug
  const writing = findWritingByNextSlugs(slug)
  if (!writing) notFound()

  return (
    <PagePadding>
      <Container asChild>
        <Section asChild className="relative">
          <nav>
            <Back url="/w" />
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
