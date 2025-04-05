import { forwardRef, HTMLAttributes } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  asChild?: boolean
  shorterWidth?: boolean
}
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, asChild, shorterWidth, ...rest }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn(
          "relative container mx-auto w-full",
          shorterWidth ? "max-w-130" : "max-w-145",
          className
        )}
        {...rest}
      />
    )
  }
)
Container.displayName = "Container"

export { Container, type ContainerProps }
