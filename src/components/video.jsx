import React from "react"


const Video = ({ videoSrcURL, videoTitle, videoWidth }) => (
  <div className="top-0 left-0">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      className={videoWidth}
      allow="accelerometer; autoplay; encrypted-media; gyroscope"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      autoplay="1"
    />
  </div>
)
export default Video