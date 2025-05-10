"use client"

import { VariantProps } from "class-variance-authority"

import { Button, buttonVariants } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { PagePadding } from "@/components/ui/page-padding"
import { Section } from "@/components/ui/section"
import { IonPlay } from "@/components/icons/ion-icons"
import { Code, Heading } from "@/components/typography"

const variants: VariantProps<typeof buttonVariants>["variant"][] = [
  "gray",
  "filled",
  "tinted",
  "ghost",
]
const colors: VariantProps<typeof buttonVariants>["color"][] = [
  "blue",
  "red",
  "yellow",
  "green",
  "mint",
  "teal",
  "cyan",
  "indigo",
  "purple",
  "pink",
  "brown",
  "gray",
]
const sizes: VariantProps<typeof buttonVariants>["size"][] = ["lg", "md", "sm"]

export default function Page() {
  return (
    <PagePadding>
      <Container shorterWidth asChild>
        <Section>
          <Heading level="h3" className="mt-0">
            Variants and Colors
          </Heading>

          {colors.map(color => (
            <div key={color} className="mb-3 flex flex-wrap items-center gap-2">
              {variants.map(variant => (
                <Button
                  key={`${color}-${variant}`}
                  color={color}
                  variant={variant}
                >
                  {`${color} ${variant}`}
                </Button>
              ))}
            </div>
          ))}
        </Section>
      </Container>

      <Container shorterWidth asChild>
        <Section>
          <Heading level="h3" className="mt-0">
            Sizes
          </Heading>
          {sizes.map(size => (
            <div key={size} className="mb-3 flex flex-wrap items-center gap-2">
              {variants.map(variant => (
                <Button
                  key={`${size}-${variant}`}
                  size={size}
                  variant={variant}
                >
                  {`${size} ${variant}`}
                </Button>
              ))}
            </div>
          ))}
        </Section>
      </Container>

      <Container shorterWidth asChild>
        <Section>
          <Heading level="h3" className="mt-0">
            <Code>{"isIconOnly"}</Code> prop:
          </Heading>
          {sizes.map(size => (
            <div key={size} className="mb-3 flex flex-wrap items-center gap-2">
              {variants.map(variant => (
                <Button
                  key={`${size}-${variant}`}
                  size={size}
                  variant={variant}
                  isIconOnly
                >
                  <IonPlay />
                </Button>
              ))}
            </div>
          ))}
        </Section>
      </Container>
    </PagePadding>
  )
}
