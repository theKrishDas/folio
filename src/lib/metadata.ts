import { Metadata } from "next"

import { baseURL } from "./constants"

export const siteMetadata: Metadata = {
  title: {
    default: "Upsher - Web App developer",
    template: "%s - Upsher's folio",
  },
  description: "Web App developer, optimist, living in India",
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
    title: "Upsher - Web App developer",
    description: "Web App developer, optimist, living in India",
    url: baseURL,
    siteName: "Upsher's Portfolio",
    images: [
      {
        url: `${baseURL}/og-image.png`,
        width: 1500, // 1200
        height: 500, // 630
        alt: "Banner of Upsher's Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upsher - Web App developer",
    description: "Web App developer, optimist, living in India",
    creator: "@upsher",
    images: [`${baseURL}/og-image.png`],
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
}
