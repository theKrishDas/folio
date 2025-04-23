import { Container } from "@/components/ui/container"
import DownloadCV from "@/components/ui/download-cv"
import { Section } from "@/components/ui/section"
import { SocialLinks } from "@/components/ui/social-links"
import { BlueskySocialFill, GithubFace } from "@/components/icons/logos"
import { MatMailRounded } from "@/components/icons/material-icons"
import { Divider } from "@/components/typography"

const receiverName = "Upsher"
const email = "thekrishdas@gmail.com"
const subject = `Let's build something cool, ${receiverName} 😎`
const body = `Hey ${receiverName}, `
const mailtoLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

export default function CTA() {
  return (
    <Container shorterWidth asChild>
      <Section className="flex items-center justify-start gap-4 pt-3 md:gap-6">
        <DownloadCV />

        <Divider className="h-4 w-1" />

        <div className="flex items-center gap-2">
          <SocialLinks
            href={mailtoLink}
            aria-label={`Contact ${receiverName} (email)`}
            title={`Write an email to ${receiverName}`}
            rel="noopener noreferrer"
            target="_blank"
            data-type="contact"
          >
            <MatMailRounded />
          </SocialLinks>
          <SocialLinks href="https://x.com/theupsher">
            <BlueskySocialFill />
          </SocialLinks>
          <SocialLinks href="https://github.com/Krish-Das/">
            <GithubFace />
          </SocialLinks>
        </div>
      </Section>
    </Container>
  )
}
