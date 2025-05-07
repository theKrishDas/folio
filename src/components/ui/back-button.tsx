"use client"

import { useRouter } from "next/navigation"

import { MatArrowBack } from "../icons/material-icons"
import { Button } from "../ui/button"

export default function Back({
  label = "Back",
  url,
}: {
  label?: string
  url?: string
}) {
  const router = useRouter()

  return (
    <Button
      size="sm"
      variant="ghost"
      className="text-label-secondary data-[hovered]:bg-fill-secondary pl-0 transition-all duration-250 data-[hovered]:pl-2.5"
      onPress={() => (url ? router.push(url) : router.back())}
    >
      <MatArrowBack />
      {label}
    </Button>
  )
}
