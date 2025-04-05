import { ComponentPropsWithoutRef, forwardRef } from "react"
import NextImage from "next/image"
import { Slot } from "@radix-ui/react-slot"

import { baseURL } from "@/lib/constants"
import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Image
 * -----------------------------------------------------------------------------------------------*/
type ImageProps = ComponentPropsWithoutRef<"img"> & {
  asChild?: boolean
}
const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, asChild, ...rest }, ref) => {
    const Comp = asChild ? Slot : "img"

    // WARN: Experimental
    // NOTE: If served from the server, then use the NextImage component
    const { src: imageSrc, alt: imageAlt } = rest
    if (imageSrc && imageSrc.startsWith(baseURL)) {
      if (!imageAlt) throw new Error("Image must have an alt-text")
      return <ExperimentalNextImage src={imageSrc} alt={imageAlt} />
    }

    return (
      <Comp
        ref={ref}
        className={cn("mb-10 rounded-lg [&+img]:-mt-8", className)}
        {...rest}
      />
    )
  }
)
Image.displayName = "Image"

const ExperimentalNextImage = ({ src, alt }: { src: string; alt: string }) => {
  // eslint-disable-next-line no-console
  console.warn("Using experimental NextImage!")

  return (
    <NextImage
      className=""
      src={src}
      alt={alt}
      style={{ objectFit: "contain" }}
      fill
    />
  )
}

export { Image, type ImageProps }
