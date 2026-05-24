import { ComponentPropsWithoutRef, forwardRef } from "react"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Code
 * -----------------------------------------------------------------------------------------------*/
type CodeProps = ComponentPropsWithoutRef<"code">
const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, ...rest }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "font-jetbrains-mono text-sm",
          "py-0.5 leading-loose tracking-normal break-words",
          "[pre_&]:", // target if inside pre
          "[&:not(pre_*)]:bg-fill-secondary [&:not(pre_*)]:border-fill-quaternary [&:not(pre_*)]:overflow-x-auto [&:not(pre_*)]:rounded-lg [&:not(pre_*)]:border [&:not(pre_*)]:px-1", // target not inside pre
          className
        )}
        {...rest}
      />
    )
  }
)
Code.displayName = "code"
export { Code, type CodeProps }
