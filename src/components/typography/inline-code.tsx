import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * InlineCode
 * -----------------------------------------------------------------------------------------------*/
type InlineCodeProps = ComponentPropsWithoutRef<"code">
const InlineCode = forwardRef<HTMLElement, InlineCodeProps>(
  ({ className, ...rest }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "font-jetbrains-mono bg-fill-quaternary border-fill-tertiary rounded-lg border px-1.5 py-0.5 text-[0.85em] leading-none tracking-normal break-words",
          className
        )}
        {...rest}
      />
    )
  }
)
InlineCode.displayName = "InlineCode"
export { InlineCode, type InlineCodeProps }
