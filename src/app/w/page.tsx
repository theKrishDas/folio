import { writings } from "#/writings"

import { cn, formatDate } from "@/lib/utils"
import Back from "@/components/ui/back-button"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { PagePadding } from "@/components/ui/page-padding"
import { Section, SectionHeading } from "@/components/ui/section"
import { Heading } from "@/components/typography"

export default function Page() {
  const allCategories = ["All Categories"]

  return (
    <PagePadding>
      <Container asChild shorterWidth>
        <Section asChild className="relative">
          <nav>
            <Back url="/" />
          </nav>
        </Section>
      </Container>

      <Container shorterWidth asChild>
        <Section className="space-y-6">
          <Heading className="max-w-[16ch]">
            Unacceptable behaviour of writings.
          </Heading>

          <div className="h-2 w-10" aria-hidden />

          {/* Categories */}
          <div className="w-full overflow-x-auto">
            <ul className="flex w-fit flex-nowrap gap-1.5">
              {allCategories.map((item, idx) => (
                <li
                  className={cn(
                    "bg-fill-quaternary text-label-secondary rounded-lg px-2 py-1.5 text-xs leading-none font-medium tracking-wide whitespace-nowrap select-none md:inline-block",
                    idx === 0 && "bg-ios-blue text-white"
                  )}
                  key={idx}
                >
                  <label className="inline-flex">{item}</label>
                </li>
              ))}
            </ul>
          </div>

          {/* Lists */}
          <ul className="flex touch-none flex-col gap-1.5 select-none">
            {writings.map(w => (
              <li
                key={w.slug}
                className="hover:bg-fill-secondary flex flex-col gap-2 rounded-xl px-0 py-2.5 transition-all duration-250 hover:px-3"
              >
                <div className="align-start flex gap-4">
                  <h2 className="flex-1 truncate text-[0.9rem] leading-none font-medium">
                    {w.title}
                  </h2>
                  <p className="text-label-secondary font-jetbrains-mono text-xs leading-none">
                    {formatDate(w.date).split(",")[0]}
                  </p>
                </div>

                <div className="max-w-[calc(100%-6rem)]">
                  <p className="text-label-secondary truncate text-xs font-medium">
                    {w.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="h-2 w-10" aria-hidden />

          {/* CTA: Subscribe to the writings */}
          <div className="hidden">
            <SectionHeading className="mt-0 pl-1">
              <span>Subscribe to new writings </span>
              <span className="text-gray-1 bg-fill-quaternary pointer-events-none ml-1 touch-none rounded-md px-1 py-0.5 text-xs leading-none tracking-wide select-none">
                Soon
              </span>
            </SectionHeading>

            <div className="inline-flex w-full gap-2">
              <div
                className={cn(
                  "bg-fill-tertiary text-label-secondary w-full max-w-70 rounded-lg text-sm select-none",
                  "px-3.5 py-1.75 leading-5",
                  "rounded-xl px-5 py-3.5 leading-5.5",
                  "text-label-tertiary bg-fill-secondary pointer-events-none opacity-50" // Disabled
                )}
              >
                Email adress...
              </div>
              <Button size="lg" isDisabled>
                Subscribe
              </Button>
            </div>
          </div>
        </Section>
      </Container>
    </PagePadding>
  )
}
