"use client"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section, SectionHeading } from "@/components/ui/section"
import { MatLocationOn } from "@/components/icons/material-icons"

export default function Location() {
  return (
    <Container shorterWidth asChild>
      <Section
        className={
          "[&_+.section-root>h2]:mt-12.5" // INFO: heading(mt-10) + links(py-2.5) = mt-12.5
        }
      >
        <SectionHeading
          className={
            "mb-5" // INFO: heading(mb-2.5) + links(py-2.5) = mt-12.5
          }
        >
          Where
        </SectionHeading>
        <div
          className="bg-fill-quaternary relative h-75 overflow-hidden rounded-xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://brianlovin.com/_next/image?url=%2Fstatic%2Fimg%2Fsf.png&w=828&q=100')",
          }}
        >
          {/* TODO: Add component boundary */}
          <span
            className={cn(
              buttonVariants({ size: "sm" }),
              "text-label-secondary bg-background/80 absolute right-2 bottom-2 rounded-lg text-xs shadow-md backdrop-blur-lg"
            )}
          >
            <MatLocationOn />
            Location, Sublocate
          </span>
        </div>
      </Section>
    </Container>
  )
}
