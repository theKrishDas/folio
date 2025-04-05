import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Em
 * -----------------------------------------------------------------------------------------------*/
type EmProps = ComponentPropsWithoutRef<"em"> & {
  asChild?: boolean
}
const Em = forwardRef<HTMLElement, EmProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "em"
    return (
      <Comp
        ref={ref}
        className={cn(
          "font-instrument-serif text-label-primary text-[1.3em] tracking-[0.00625em] italic",
          className
        )}
        {...rest}
      />
    )
  }
)
Em.displayName = "Em"

export { Em, type EmProps }
