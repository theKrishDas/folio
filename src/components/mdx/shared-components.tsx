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
import CodeTab from "./code-tab"

const SharedComponents = {
  h2: (props: HeadingProps) => <Heading level="h2" addAnchor {...props} />,
  h3: (props: HeadingProps) => <Heading level="h3" addAnchor {...props} />,
  h4: (props: HeadingProps) => <Heading level="h4" addAnchor {...props} />,
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
  CodeTab,
}
export default SharedComponents
