"use client"

import { PostHogProvider } from "./posthog-provider"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PostHogProvider>{children}</PostHogProvider>
    </>
  )
}
