import { ComponentPropsWithoutRef, CSSProperties, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * PagePadding
 * -----------------------------------------------------------------------------------------------*/
type PagePaddingProps = ComponentPropsWithoutRef<"div"> & {
  asChild?: boolean
}
const PagePadding = forwardRef<HTMLDivElement, PagePaddingProps>(
  ({ className, asChild = false, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn(
          "page-padding relative px-[var(--page-padding-x)] py-[var(--page-padding-y)]",
          className
        )}
        style={
          {
            "--page-padding-x": "1.5rem", // tailwind: px-6
            "--page-padding-y": "3.75rem", // tailwind: py-15
          } as CSSProperties
        }
        {...rest}
      />
    )
  }
)
PagePadding.displayName = "PagePadding"

export { PagePadding, type PagePaddingProps }
