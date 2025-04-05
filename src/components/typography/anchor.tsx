import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Anchor
 * -----------------------------------------------------------------------------------------------*/
type AnchorProps = ComponentPropsWithoutRef<"a"> & {
  asChild?: boolean
}
const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        ref={ref}
        className={cn(
          "text-ios-blue font-medium brightness-115 -hue-rotate-5 hover:underline underline-offset-2",
          className
        )}
        {...rest}
      />
    )
  }
)
Anchor.displayName = "Anchor"
export { Anchor, type AnchorProps }
