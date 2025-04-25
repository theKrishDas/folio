import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Em, Heading, Paragraph, Strong } from "@/components/typography"

export default function About() {
  return (
    <Container shorterWidth asChild>
      <Section asChild>
        <article aria-labelledby="about-heading">
          <Heading styleAs="h3" className="mt-0 mb-4" id="about-heading">
            Upsher
            <span aria-hidden className="touch-none select-none">
              {"_"}
            </span>
          </Heading>

          <Paragraph>
            Hello, I am <Em>Krish Das</Em> – though on the internet I go by
            Upsher.
          </Paragraph>

          <Paragraph>
            I build functional web apps with the right tools—not just the trendy
            ones.
          </Paragraph>

          <Paragraph>
            My current focus is on the
            <Strong>{" React & NextJS ecoSystem"}</Strong>, which began with
            React 16 (including Hono, Tailwind, and all those fancy frameworks).
          </Paragraph>

          <Paragraph>
            I live in my terminal (Neovim and Arch BTW). When I’m not coding,
            I’m probably thinking about it. Most of my time goes into building
            and refining — <Em>touching grass</Em> isn’t exactly part of the
            routine.
          </Paragraph>

          <Paragraph>
            In my spare time, I’m diving into WebGL shaders to keep learning and
            pushing boundaries.
          </Paragraph>
        </article>
      </Section>
    </Container>
  )
}
