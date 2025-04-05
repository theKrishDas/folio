import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Li
 * -----------------------------------------------------------------------------------------------*/
type LiProps = ComponentPropsWithoutRef<"li"> & {
  asChild?: boolean
}
const Li = forwardRef<HTMLLIElement, LiProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "li"
    return <Comp ref={ref} className={cn("relative", className)} {...rest} />
  }
)
Li.displayName = "Li"
export { Li, type LiProps }
