import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Pre
 * -----------------------------------------------------------------------------------------------*/
type PreProps = ComponentPropsWithoutRef<"pre">
const Pre = forwardRef<HTMLPreElement, PreProps>(
  ({ className, ...rest }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn(
          "bg-fill-quaternary border-fill-tertiary relative flex max-h-(--max-height,80svh) flex-col overflow-hidden rounded-lg border",
          "focus-visible:ring-ios-blue/60 outline-none focus-visible:ring-4",
          className
        )}
        {...rest}
      />
    )
  }
)
Pre.displayName = "pre"
export { Pre, type PreProps }
