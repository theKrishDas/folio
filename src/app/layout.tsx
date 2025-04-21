import type { Metadata } from "next"
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google"

import "./globals.css"

import { siteMetadata } from "@/lib/metadata"
import Provider from "@/components/provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
