import { ComponentPropsWithoutRef, forwardRef } from "react"
import Link from "next/link"
import { cva, VariantProps } from "class-variance-authority"

import { cn, slugify } from "@/lib/utils"
import { MatLink } from "@/components/icons/material-icons"

const headingVariants = cva(
  "text-label-primary/86 dark:text-label-primary/90",
  {
    variants: {
      level: {
        h1: "font-instrument-serif text-5xl text-[2.7rem] leading-[1.15] font-normal -tracking-[0.01em]",
        h2: "mt-12 mb-3 text-2xl leading-8 font-bold -tracking-[0.00625em] scroll-m-12",
        h3: "mt-10 mb-2 text-lg leading-6.5 font-semibold -tracking-[0.0025em] scroll-m-10",
        h4: "text-lg font-semibold -tracking-[0.015em] py-4 [&:has(+p)]:pb-3 text-ios-pink dark:text-ios-pink",
      },
      srOnly: {
        true: "hidden",
        false: "",
      },
      addAnchor: {
        true: "relative",
        false: "",
      },
    },
    defaultVariants: {
      level: "h1",
      srOnly: false,
      addAnchor: false,
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
  ({ className, level = "h1", styleAs, srOnly, addAnchor, ...rest }, ref) => {
    const Comp = level
    const baseClassNames = headingVariants({
      level: styleAs || level,
      srOnly,
      addAnchor,
      className,
    })

    if (!addAnchor)
      return <Comp ref={ref} className={cn(baseClassNames)} {...rest} />

    const { children, ...props } = rest
    if (!children)
      throw new Error("Children must be defined inside the heading")

    const childrenString = children.toString()
    const slug = slugify(childrenString)

    return (
      <Comp ref={ref} className={cn(baseClassNames)} id={slug} {...props}>
        {childrenString}
        <Link
          href={`#${slug}`}
          key={`link-${slug}`}
          className="group absolute inset-0 select-none"
          aria-hidden
        >
          <MatLink className="text-label-secondary/0 group-hover:text-ios-blue absolute top-0 right-full mt-px mr-0 text-xl transition-all duration-250 group-hover:mr-1" />
        </Link>
      </Comp>
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
