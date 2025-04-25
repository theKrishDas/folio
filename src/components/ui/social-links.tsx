"use client"

import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button"

/* -------------------------------------------------------------------------------------------------
 * SocialLinks
 * -----------------------------------------------------------------------------------------------*/
type SocialLinksProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "children"
> & {
  href: string
  children: ReactNode
}
const SocialLinks = forwardRef<HTMLAnchorElement, SocialLinksProps>(
  ({ className, target, ...rest }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          buttonVariants({ color: "gray", isIconOnly: true, className })
        )}
        target={target || "_blank"}
        {...rest}
      />
    )
  }
)
SocialLinks.displayName = "SocialLinks"

export { SocialLinks, type SocialLinksProps }
