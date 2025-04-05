import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
type RootProps = ComponentPropsWithoutRef<"ul"> & {
  noGap?: boolean
  asChild?: boolean
}
const Root = forwardRef<HTMLUListElement, RootProps>(
  ({ className, noGap, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "ul"

    return (
      <Comp
        ref={ref}
        className={cn("flex flex-col", !noGap && "gap-2", className)}
        {...rest}
      />
    )
  }
)
Root.displayName = "ul"

/* -------------------------------------------------------------------------------------------------
 * Item
 * -----------------------------------------------------------------------------------------------*/
type ItemProps = LinkProps & {
  children: ReactNode
  parentClassName?: string
}
const Item = forwardRef<HTMLLIElement, ItemProps>(
  ({ parentClassName, children, ...rest }, ref) => {
    return (
      <li ref={ref} className={cn("h-fit", parentClassName)}>
        <Link
          className="hover:bg-fill-secondary fill-secondary group flex cursor-default flex-col gap-2 truncate rounded-lg px-3 py-2.5 pl-0 leading-none transition-all duration-250 select-none hover:pl-3"
          {...rest}
        >
          {children}
        </Link>
      </li>
    )
  }
)
Item.displayName = "Item"

/* -------------------------------------------------------------------------------------------------
 * Title
 * -----------------------------------------------------------------------------------------------*/
type TitleProps = ComponentPropsWithoutRef<"span"> & {
  asChild?: boolean
}
const Title = forwardRef<HTMLSpanElement, TitleProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "span"

    return (
      <Comp
        ref={ref}
        className={cn(
          "list-title font-semibold -tracking-[0.015em]",
          className
        )}
        {...rest}
      />
    )
  }
)
Title.displayName = "Title"

/* -------------------------------------------------------------------------------------------------
 * Subtitle
 * -----------------------------------------------------------------------------------------------*/
type SubtitleProps = ComponentPropsWithoutRef<"small"> & {
  asChild?: boolean
}
const Subtitle = forwardRef<HTMLElement, SubtitleProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "small"

    return (
      <Comp
        ref={ref}
        className={cn(
          "list-subtitle text-label-secondary font-jetbrains-mono text-xs",
          className
        )}
        {...rest}
      />
    )
  }
)
Subtitle.displayName = "Subtitle"

const List = { Root, Item, Title, Subtitle }
export {
  List,
  type RootProps,
  type ItemProps,
  type TitleProps,
  type SubtitleProps,
}
