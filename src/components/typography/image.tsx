import { ComponentPropsWithoutRef, forwardRef } from "react"
import NextImage from "next/image"

import { cn } from "@/lib/utils"

/* -------------------------------------------------------------------------------------------------
 * Image
 * -----------------------------------------------------------------------------------------------*/
type ImageProps = ComponentPropsWithoutRef<"img"> & {
  asChild?: boolean
}
const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ className, ...rest }, ref) => {
    // WARN: Experimental
    // NOTE: If served from the server, then use the NextImage component
    // For now just using the html img tag to avoid type error
    // In future will use the Image from next/image
    const Comp = "img" // asChild ? Slot : "img"

    // Commented out to avoid type error
    // const { src: imageSrc, alt: imageAlt } = rest
    // if (imageSrc && imageSrc.startsWith(baseURL)) {
    //   if (!imageAlt) throw new Error("Image must have an alt-text")
    //   return <ExperimentalNextImage src={imageSrc} alt={imageAlt} />
    // }

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

export { Image, type ImageProps, ExperimentalNextImage }
