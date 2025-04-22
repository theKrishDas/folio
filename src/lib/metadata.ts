import { Metadata } from "next"

import { baseURL } from "./constants"

const title = "Upsher - Web App developer" as const
const description = "Web App developer, optimist, living in India" as const

export const siteMetadata: Metadata = {
  title: {
    default: title,
    template: "%s - Upsher's folio",
  },
  description,
  keywords: [
    "Krish Das",
    "Upsher",
    "Web App developer",
    "Web Application developer",
    "Web developer",
    "Next.js",
    "React",
    "Next.js Developer",
    "React Developer",
    "Tailwind Developer",
    "Frontend Developer",
    "Frontend Engineer",
    "JavaScript",
    "Web Developer Portfolio",
    "portfolio",
  ],
  authors: [{ name: "Upsher", url: baseURL }],
  creator: "Upsher",
  openGraph: {
    title,
    description,
    url: baseURL,
    siteName: "Upsher's Portfolio",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banner of Upsher's Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@upsher",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL(baseURL),
  alternates: {
    canonical: "/",
  },
}
