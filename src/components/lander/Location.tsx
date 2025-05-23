"use client"

import Image from "next/image"

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

        <Map />
      </Section>
    </Container>
  )
}

function Map() {
  const Pin = () => {
    return (
      <div
        className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 p-[0.3rem] shadow-xl/15 backdrop-blur-lg"
        aria-hidden="true"
      >
        <div className="bg-ios-blue h-full w-full rounded-full" />
      </div>
    )
  }

  return (
    <div
      className="bg-fill-quaternary relative h-75 overflow-hidden rounded-xl bg-cover bg-center"
      aria-label="Map of Siliguri, West Bengal"
      role="img"
    >
      <Image
        id="siliguri-map"
        src="/images/siliguri.png"
        alt="Map of Siliguri, West Bengal"
        style={{ objectFit: "cover" }}
        fill
      />

      <Pin />
      <FloatingLocation />
    </div>
  )
}

const FloatingLocation = () => {
  return (
    <span
      className={cn(
        buttonVariants({ size: "sm" }),
        "text-label-secondary bg-background/80 absolute right-2 bottom-2 rounded-lg pl-2 text-xs shadow-md backdrop-blur-lg"
      )}
      aria-hidden="true"
    >
      <MatLocationOn />
      Siliguri, West Bengal
    </span>
  )
}
