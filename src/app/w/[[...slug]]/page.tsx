import { notFound, redirect } from "next/navigation"
import { writings } from "#/writings"

import Back from "@/components/ui/back-button"
import { Container } from "@/components/ui/container"
import { PagePadding } from "@/components/ui/page-padding"
import { Section } from "@/components/ui/section"
import { MDXContent } from "@/components/mdx"
import { Heading } from "@/components/typography"

import "@/css/mdx.css"

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
  if (!slug) redirect("/")

  const writing = writings.find(w => {
    const constructedURL = slug.join("/")
    return w.slugAsParams === constructedURL
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
            <Section>
              <Heading id="writing-heading">{writing.title}</Heading>

              <div className="space-x-2 text-base">
                <small className="text-label-tertiary leading-11 font-semibold">
                  {new Date(writing.date).toLocaleString()}
                  <span className="tracking-wider"> · </span>
                  {/* TODO: calculate this based on word cound */}
                  34 min read
                </small>

                <small className="text-gray-1 bg-fill-quaternary pointer-events-none hidden touch-none rounded-md px-1.5 py-1 leading-none font-medium tracking-wide select-none md:inline-block">
                  Updated {new Date(writing.updated).toLocaleString()}
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
