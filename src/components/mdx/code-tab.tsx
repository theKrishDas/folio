import { ReactNode } from "react"
import * as Tabs from "@radix-ui/react-tabs"

import { Button } from "@/components/ui/button"

const CodeTab = ({
  children,
  tabs: tabNames,
}: {
  children: ReactNode[]
  tabs: string[]
}) => {
  if (!children || !Array.isArray(children))
    throw new Error("Children must be a non-empty array")
  if (!tabNames || !Array.isArray(tabNames))
    throw new Error("tabs must be a non-empty array of strings")
  if (tabNames.length !== children.length)
    throw new Error("tabNames.length !== children.length")

  return (
    <>
      <Tabs.Root defaultValue="0" className="shiki-code-tab">
        <Tabs.List className="bg-gray-6 border-fill-tertiary inline-flex w-full overflow-x-auto rounded-t-lg border border-b-0 p-1">
          {children.map((_, idx) => (
            <Tabs.Trigger value={idx.toString()} key={idx} asChild>
              <Button
                size="sm"
                color="gray"
                className="touch-auto rounded-md data-[state=inactive]:bg-transparent"
              >
                {tabNames[idx]}
              </Button>
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {children.map((child, idx) => (
          <Tabs.Content
            value={idx.toString()}
            key={idx}
            asChild
            className="mt-0"
            style={{ marginTop: 0 }}
            tabIndex={-1}
          >
            {child}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </>
  )
}

export default CodeTab
