import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Cite
 * -----------------------------------------------------------------------------------------------*/
type CiteProps = ComponentPropsWithoutRef<"cite"> & {
  asChild?: boolean
}
const Cite = forwardRef<HTMLQuoteElement, CiteProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "cite"

    return (
      <Comp
        ref={ref}
        className={cn(
          "text-label-primary/86 text-base not-italic",
          "before:content-['⸻']",
          "before:text-label-primary/80 before:mr-[1ch]",
          className
        )}
        {...rest}
      />
    )
  }
)
Cite.displayName = "Cite"

export { Cite, type CiteProps }
