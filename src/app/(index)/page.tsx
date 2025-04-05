import { PagePadding } from "@/components/ui/page-padding"
import About from "@/components/lander/About"
import CTA from "@/components/lander/CTA"
import Location from "@/components/lander/Location"

export default function Home() {
  return (
    <PagePadding>
      <About />

      <Location />

      <CTA />
    </PagePadding>
  )
}
