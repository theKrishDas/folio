"use client"

import useDownloader from "react-use-downloader"

import { SvgSpinnersRing } from "../icons/animated"
import { MatDownloadingRounded } from "../icons/material-icons"
import { Button } from "./button"

export default function DownloadCV() {
  const { download, isInProgress } = useDownloader()

  // TODO: Rate-limit this functionality
  // WARN: Rate-limit this functionality
  const fileUrl = "/assets/cv.pdf"
  const filename = "krish-das-CV.pdf"

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
