import { ComponentPropsWithoutRef, forwardRef, isValidElement } from "react"

import { cn } from "@/lib/utils"

type ParagraphProps = ComponentPropsWithoutRef<"p"> & {}
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, ...rest }, ref) => {
    // NOTE: If valid reactChild, don't render inside p.
    const children = rest.children
    if (!Array.isArray(children) && isValidElement(children)) return children

    return (
      <p
        ref={ref}
        className={cn(
          "text-label-primary/86 mb-4 text-base leading-6 font-normal tracking-[0em]",
          className
        )}
        {...rest}
      />
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph, type ParagraphProps }
