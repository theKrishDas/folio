import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { baseURL } from "./constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

export function formatDate(
  date: string,
  includeRelative = false,
  onlyRelative = false
) {
  const currentDate = new Date()
  if (!date.includes("T")) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ""

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = "Today"
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })

  if (!includeRelative) return fullDate
  if (onlyRelative) return formattedDate

  return `${fullDate} (${formattedDate})`
}

export function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

export type BaseURLParts = {
  protocol: "http" | "https"
  hostname: string
  port: string | undefined
}
export function parseBaseURL(): BaseURLParts {
  const url = baseURL
  const match = url.match(/^(https?):\/\/([^:]+)(?::(\d+))?$/)

  if (!match) {
    throw new Error("Invalid baseURL format")
  }

  const protocol = match[1] as "http" | "https"
  const hostname = match[2]
  const port = match[3]

  return {
    protocol,
    hostname,
    port,
  }
}
