import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Strong
 * -----------------------------------------------------------------------------------------------*/
type StrongProps = ComponentPropsWithoutRef<"strong"> & {
  asChild?: boolean
}
const Strong = forwardRef<HTMLElement, StrongProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "strong"

    return (
      <Comp
        ref={ref}
        className={cn(
          "text-label-primary/86 dark:text-label-primary font-bold",
          className
        )}
        {...rest}
      />
    )
  }
)
Strong.displayName = "Strong"

export { Strong, type StrongProps }
