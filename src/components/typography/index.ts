import { Anchor } from "./anchor"
import { Blockquote } from "./blockquote"
import { Cite } from "./cite"
import { Code } from "./code"
import { Divider } from "./divider"
import { Em } from "./em"
import { Heading } from "./heading"
import { Image } from "./image"
import { Li } from "./li"
import { Paragraph } from "./paragraph"
import { Pre } from "./pre"
import { Strong } from "./strong"
import { Ul } from "./ul"

export {
  Heading,
  Paragraph,
  Strong,
  Em,
  Ul,
  Li,
  Blockquote,
  Cite,
  Anchor,
  Divider,
  Image,
  Code,
  Pre,
}

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = ComponentPropsWithoutRef<"XXX">
// const Rename = forwardRef<XXX, RenameProps>(
//   ({ className, ...rest }, ref) => {
//     return <XXX ref={ref} className={cn("", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = ComponentPropsWithoutRef<"XXX"> & {
//   asChild?: boolean
// }
// const Rename = forwardRef<XX, RenameProps>(
//   ({ className, asChild, ...rest }, ref) => {
//     const Comp = asChild ? Slot : "XXX"
//
//     return <Comp ref={ref} className={cn("", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"
//
// export { Rename, type RenameProps }
