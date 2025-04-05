import { ComponentPropsWithoutRef, forwardRef } from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

import { Heading, HeadingProps } from "../typography/heading"

/* -------------------------------------------------------------------------------------------------
 * Section
 * -----------------------------------------------------------------------------------------------*/
type SectionProps = ComponentPropsWithoutRef<"section"> & {
  asChild?: boolean
  noGap?: boolean
}
const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, asChild = false, noGap, ...rest }, ref) => {
    const Comp = asChild ? Slot : "section"

    return (
      <Comp
        ref={ref}
        className={cn(
          "section-root relative mx-auto w-full",
          !noGap && "[&:has(+.section-root)]:mb-6",
          className
        )}
        {...rest}
      />
    )
  }
)
Section.displayName = "Section"

const SectionHeading = ({ className, ...rest }: HeadingProps) => {
  return (
    <Heading
      {...rest}
      level="h2"
      styleAs="h3"
      className={cn(
        "section-title text-label-secondary dark:text-label-secondary mb-2.5 text-sm font-medium tracking-normal",
        className
      )}
    />
  )
}

export { Section, SectionHeading, type SectionProps }
