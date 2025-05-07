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
          "bg-fill-quaternary border-fill-tertiary overflow-x-hidden rounded-[0.4rem] border",
          className
        )}
        {...rest}
      />
    )
  }
)
Pre.displayName = "pre"
export { Pre, type PreProps }
