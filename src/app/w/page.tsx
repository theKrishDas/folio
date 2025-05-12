import Image from "next/image"
import { writings } from "#/writings"

import { formatDate } from "@/lib/utils"
import Back from "@/components/ui/back-button"
import { Container } from "@/components/ui/container"
import { List } from "@/components/ui/item-list"
import { PagePadding } from "@/components/ui/page-padding"
import { Section, SectionHeading } from "@/components/ui/section"

export default function Page() {
  return (
    <PagePadding>
      <Container asChild>
        <Section asChild className="relative">
          <nav>
            <Back url="/" />
          </nav>
        </Section>
      </Container>

      <Container asChild>
        <Section className="space-y-6">
          <SectionHeading
            styleAs="h3"
            className="sr-only mt-0 mb-4"
            id="about-heading"
          >
            All Writings of Upsher
            <span aria-hidden className="touch-none select-none">
              {"_"}
            </span>
          </SectionHeading>

          <div className="relative aspect-3/1 w-full overflow-hidden rounded-lg">
            <Image
              src="/images/writings-banner.png"
              alt="liquid gradient banner"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>

          {/* TODO: Handle the no-writings state */}
          <List.Root noGap>
            {writings.map(({ slugAsParams, title, date }) => (
              <List.Item key={slugAsParams} href={`/w/${slugAsParams}`}>
                <List.Title>{title}</List.Title>
                <List.Subtitle>{formatDate(date)}</List.Subtitle>
              </List.Item>
            ))}
          </List.Root>
        </Section>
      </Container>
    </PagePadding>
  )
}
