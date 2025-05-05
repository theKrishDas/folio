import * as runtime from "react/jsx-runtime"

import SharedComponents from "./shared-components"

// parse the Velite generated MDX code into a React component function
const useMDXComponent = (body: string) => {
  const fn = new Function(body)
  return fn({ ...runtime }).default
}

type MDXProps = {
  body: string
  components?: Record<string, React.ComponentType>
}

// MDXContent component
export const MDXContent = ({ body, components }: MDXProps) => {
  const Component = useMDXComponent(body)
  return <Component components={{ ...SharedComponents, ...components }} />
}
