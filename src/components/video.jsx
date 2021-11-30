import React from "react"
import {
  videoStyle,
} from "./video.module.css"

const Video = ({ videoSrcURL, videoTitle, className, ...props }) => (
  <div className="top-0 left-0">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      className={className}
      allow="accelerometer; autoplay; encrypted-media; gyroscope"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      allow="autoplay"
      autoplay="1"
    />
  </div>
)
export default Video