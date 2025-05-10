import { ComponentPropsWithoutRef, forwardRef } from "react"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

import { cn } from "@/lib/utils"
import { MatArrowOutward } from "@/components/icons/material-icons"

/* -------------------------------------------------------------------------------------------------
 * Anchor
 * -----------------------------------------------------------------------------------------------*/
type LinkProps = NextLinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof NextLinkProps>

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, className, ...rest }, ref) => {
    if (!href)
      throw new Error(
        "The prop `href` expects a `string` or `object` in `<Anchor>`, but got `undefined` instead."
      )
    const hasInternalLink =
      typeof href === "object" || href.startsWith("/") || href.startsWith("#")
    const baseClassNames =
      "text-ios-blue cursor-pointer font-medium underline-offset-2 brightness-115 -hue-rotate-5 hover:underline"

    if (hasInternalLink)
      return (
        <NextLink
          className={cn(baseClassNames, className)}
          href={href}
          ref={ref}
          {...rest}
        />
      )

    const { children, ...props } = rest
    return (
      <a
        {...props}
        ref={ref}
        href={href}
        className={cn(baseClassNames, className)}
        target="_blank"
      >
        {children}

        {!hasInternalLink && (
          <span className="relative inline-block h-fit w-fit pb-1">
            <MatArrowOutward className="text-xs" />
          </span>
        )}
      </a>
    )
  }
)
Link.displayName = "Link"
export { Link as Anchor, type LinkProps as AnchorProps }
