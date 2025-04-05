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
    "focus:outline-none focus-visible:outline-none",
    "touch-none cursor-default select-none", // cursor and select
    "disabled:pointer-events-none disabled:opacity-50", // Disabled
  ],
  {
    variants: {
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
      size: "md",
      isIconOnly: false,
    },
  }
)

type ButtonProps = RacButtonProps & VariantProps<typeof buttonVariants>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, isIconOnly, ...rest }, ref) => {
    return (
      <RacButton
        ref={ref}
        className={cn(buttonVariants({ size, isIconOnly, className }))}
        {...rest}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, type ButtonProps }
