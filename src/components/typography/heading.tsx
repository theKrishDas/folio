import { ComponentPropsWithoutRef, forwardRef } from "react"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headingVariants = cva(
  "text-label-primary/86 dark:text-label-primary/90",
  {
    variants: {
      level: {
        h1: "leading-tight -tracking-[0.015em] font-instrument-serif text-5xl font-normal",
        h2: "mt-12 mb-3 text-2xl leading-8 font-bold -tracking-[0.00625em] scroll-m-12",
        h3: "mt-10 mb-2 text-lg leading-6.5 font-semibold -tracking-[0.0025em] scroll-m-10",
        h4: "text-lg font-semibold -tracking-[0.015em] py-4 [&:has(+p)]:pb-3 text-ios-pink dark:text-ios-pink",
      },
      srOnly: {
        true: "hidden",
        false: "",
      },
    },
    defaultVariants: {
      level: "h1",
      srOnly: false,
    },
  }
)
type Levels = NonNullable<VariantProps<typeof headingVariants>["level"]>

type HeadingProps = ComponentPropsWithoutRef<Levels> &
  Omit<VariantProps<typeof headingVariants>, "level"> & {
    level?: Levels
    styleAs?: Levels
  }
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h1", styleAs, srOnly, ...rest }, ref) => {
    const Comp = level

    return (
      <Comp
        ref={ref}
        className={cn(
          headingVariants({ level: styleAs || level, srOnly, className })
        )}
        {...rest}
      />
    )
  }
)
Heading.displayName = "Heading"

export {
  Heading,
  headingVariants,
  type HeadingProps,
  type Levels as HeadingLevels,
}
