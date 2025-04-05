import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Heading, Paragraph } from "@/components/typography"

export default function About() {
  return (
    <Container shorterWidth asChild>
      <Section asChild>
        <article>
          <Heading styleAs="h3" className="mt-0 mb-4">
            Manish Paul
          </Heading>

          <Paragraph>{"This is something!"}</Paragraph>
        </article>
      </Section>
    </Container>
  )
}
