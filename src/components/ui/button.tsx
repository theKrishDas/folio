"use client"

import { forwardRef } from "react"
import { cva, VariantProps } from "class-variance-authority"
import {
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex h-fit w-fit items-center justify-center font-medium whitespace-nowrap",
    "ring-offset-background/0 ring-offset-2 focus:outline-none focus-visible:ring-2 focus-visible:outline-none",
    "touch-none cursor-default select-none", // cursor and select
    "disabled:pointer-events-none disabled:opacity-50 disabled:text-label-tertiary disabled:bg-fill-secondary", // Disabled
  ],
  {
    variants: {
      variant: {
        gray: "bg-fill-tertiary text-[var(--button-color)]",
        filled: "bg-[var(--button-color)] text-[var(--button-fg,_white)]",
        tinted:
          "bg-[var(--button-color)]/[var(--fill-tertiary-opacity)] text-[var(--button-color)]",
        ghost:
          "text-[var(--button-color)] hover:bg-[var(--button-color)]/[var(--fill-quaternary-opacity)]",
      },
      color: {
        blue: "[--button-color:var(--ios-blue)]",
        red: "[--button-color:var(--ios-red)]",
        orange: "[--button-color:var(--ios-orange)]",
        yellow: "[--button-color:var(--ios-yellow)]",
        green: "[--button-color:var(--ios-green)]",
        mint: "[--button-color:var(--ios-mint)]",
        teal: "[--button-color:var(--ios-teal)]",
        cyan: "[--button-color:var(--ios-cyan)]",
        indigo: "[--button-color:var(--ios-indigo)]",
        purple: "[--button-color:var(--ios-purple)]",
        pink: "[--button-color:var(--ios-pink)]",
        brown: "[--button-color:var(--ios-brown)]",
        gray: "[--button-color:var(--gray-1)]",
      },
      size: {
        lg: "gap-1 rounded-xl px-5 py-3.5 [&_svg]:text-lg leading-5.5",
        md: "gap-1 rounded-full px-3.5 py-1.75 text-sm [&_svg]:text-base leading-5",
        sm: "gap-0.75 rounded-full px-2.5 py-1 text-sm [&_svg]:text-base leading-5",
      },
      isIconOnly: {
        true: "rounded-full gap-0 p-0",
        false: "",
      },
    },
    compoundVariants: [
      {
        isIconOnly: true,
        size: "lg",
        class: "h-12.5 w-12.5",
      },
      {
        isIconOnly: true,
        size: "md",
        class: "h-8.5 w-8.5",
      },
      {
        isIconOnly: true,
        size: "sm",
        class: "h-7 w-7",
      },
    ],
    defaultVariants: {
      variant: "gray",
      color: "blue",
      size: "md",
      isIconOnly: false,
    },
  }
)

type ButtonProps = RacButtonProps & VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, isIconOnly, ...rest }, ref) => {
    return (
      <RacButton
        ref={ref}
        className={cn(
          buttonVariants({ variant, color, size, isIconOnly, className })
        )}
        {...rest}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
