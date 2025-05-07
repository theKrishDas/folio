import {
  Anchor,
  Blockquote as blockquote,
  Cite,
  Code as code,
  Divider,
  Em as em,
  Image as img,
  Li as li,
  Paragraph as p,
  Pre as pre,
  Strong as strong,
  Ul as ul,
} from "../typography"
import { Heading, HeadingProps } from "../typography/heading"

const SharedComponents = {
  h2: (props: HeadingProps) => <Heading level="h2" {...props} />,
  h3: (props: HeadingProps) => <Heading level="h3" {...props} />,
  h4: (props: HeadingProps) => <Heading level="h4" {...props} />,
  p,
  strong,
  em,
  ul,
  li,
  blockquote,
  Cite,
  a: Anchor,
  code,
  pre,
  hr: Divider,
  img,
}
export default SharedComponents
