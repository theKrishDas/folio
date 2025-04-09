"use client"

import useDownloader from "react-use-downloader"

import { SvgSpinnersRing } from "../icons/animated"
import { MatDownloadingRounded } from "../icons/material-icons"
import { Button } from "./button"

export default function DownloadCV() {
  const { download, isInProgress } = useDownloader()

  // TODO: Ratelimit this functionality
  // WARN: Ratelimit this functionality
  const fileUrl =
    "https://www.pixground.com/mystical-purple-flower-in-stormy-night-sky/?download-img=4k" // Invalid for a reason!
  // "https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%93%D0%BE%D0%B2%D0%B5%D1%80%D0%BB%D0%B0_%D1%96_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D1%81_%D0%B2_%D0%BF%D1%80%D0%BE%D0%BC%D1%96%D0%BD%D1%8F%D1%85_%D0%B2%D1%80%D0%B0%D0%BD%D1%96%D1%88%D0%BD%D1%8C%D0%BE%D0%B3%D0%BE_%D1%81%D0%BE%D0%BD%D1%86%D1%8F.jpg"
  const filename = "krish-das-CV.jpg"

  const shouldDisableButton = isInProgress

  return (
    <Button
      variant="tinted"
      size="lg"
      isDisabled={true || shouldDisableButton}
      onPress={() => download(fileUrl, filename)}
    >
      {isInProgress ? <SvgSpinnersRing /> : <MatDownloadingRounded />}
      Download CV.
    </Button>
  )
}
