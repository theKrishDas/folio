import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Blockquote
 * -----------------------------------------------------------------------------------------------*/
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote"> & {
  asChild?: boolean
}
const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "blockquote"

    return (
      <Comp
        ref={ref}
        className={cn(
          "relative my-10 pl-4.5 not-italic [&>:last-child]:mb-0",
          "[&_p]:font-instrument-serif [&_p]:tracking-[0.00625em] [&_p]:italic",
          "[&_p]:text-label-primary [&_p]:text-[1.5rem] [&_p]:leading-8.5",
          "before:bg-gray-5 before:absolute before:top-0 before:left-0 before:h-full before:w-0.75 before:content-['']",
          className
        )}
        {...rest}
      />
    )
  }
)
Blockquote.displayName = "Blockquote"

export { Blockquote, type BlockquoteProps }
