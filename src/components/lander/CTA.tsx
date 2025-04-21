import { Container } from "@/components/ui/container"
import DownloadCV from "@/components/ui/download-cv"
import { Section } from "@/components/ui/section"
import { SocialLinks } from "@/components/ui/social-links"
import { BlueskySocialFill, GithubFace } from "@/components/icons/logos"
import { MatMailRounded } from "@/components/icons/material-icons"
import { Divider } from "@/components/typography"

const recieverName = "Upsher"
const email = "email@example.com"
const subject = "Inquiry"
const body = "Hello, I am interested in..."
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
            aria-label={`Send an email to ${recieverName} for an inquiry`}
            rel="noopener noreferrer"
            title={`Send an email to ${recieverName} for an inquiry`}
          >
            <MatMailRounded />
          </SocialLinks>
          <SocialLinks href="#">
            <BlueskySocialFill />
          </SocialLinks>
          <SocialLinks href="#">
            <GithubFace />
          </SocialLinks>
        </div>
      </Section>
    </Container>
  )
}
