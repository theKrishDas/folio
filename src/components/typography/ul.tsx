import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Ul
 * -----------------------------------------------------------------------------------------------*/
type UlProps = ComponentPropsWithoutRef<"ul"> & {
  asChild?: boolean
}
const Ul = forwardRef<HTMLUListElement, UlProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "ul"
    return (
      <Comp
        ref={ref}
        className={cn(
          "mb-4 flex flex-col gap-1 pl-4",
          "[&>li]:before:absolute [&>li]:before:-translate-x-3.5 [&>li]:before:content-['•']",
          className
        )}
        {...rest}
      />
    )
  }
)
Ul.displayName = "Ul"
export { Ul, type UlProps }
