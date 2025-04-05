import { forwardRef, HTMLProps } from "react"

import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <>
      <main className="flex flex-col gap-12 p-6">
        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Color</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-ios-red" />
            <Swatch className="bg-ios-orange" />
            <Swatch className="bg-ios-yellow" />
            <Swatch className="bg-ios-green" />
            <Swatch className="bg-ios-mint" />
            <Swatch className="bg-ios-teal" />
          </section>
          <section className="primary-2 flex gap-6">
            <Swatch className="bg-ios-cyan" />
            <Swatch className="bg-ios-blue" />
            <Swatch className="bg-ios-indigo" />
            <Swatch className="bg-ios-purple" />
            <Swatch className="bg-ios-pink" />
            <Swatch className="bg-ios-brown" />
          </section>
        </div>

        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Gray</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-gray-1" />
            <Swatch className="bg-gray-2" />
            <Swatch className="bg-gray-3" />
            <Swatch className="bg-gray-4" />
            <Swatch className="bg-gray-5" />
            <Swatch className="bg-gray-6" />
          </section>
        </div>

        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Label</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-label-primary" />
            <Swatch className="bg-label-secondary" />
            <Swatch className="bg-label-tertiary" />
            <Swatch className="bg-label-quaternary" />
          </section>
        </div>

        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Backgrounds</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-background-primary outline" />
            <Swatch className="bg-background-secondary" />
            <Swatch className="bg-background-tertiary" />
          </section>
        </div>

        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Fill</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-fill-primary" />
            <Swatch className="bg-fill-secondary" />
            <Swatch className="bg-fill-tertiary" />
            <Swatch className="bg-fill-quaternary" />
          </section>
        </div>

        <div className="flex w-fit flex-col gap-6 rounded-lg">
          <h2>Separator</h2>
          <section className="primary-1 flex gap-6">
            <Swatch className="bg-separator-opaque" />
            <Swatch className="bg-separator-non-opaque" />
          </section>
        </div>
      </main>
    </>
  )
}

const Swatch = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className={cn("h-12 w-12 rounded-full bg-pink-500", className)}
      />
    )
  }
)
Swatch.displayName = "swatch"
