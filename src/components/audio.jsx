import React from "react"

const Audio = ({ audioSrcURL, audioTitle }) => (
  <div className="w-full pt-6">
    <iframe
      width="100%"
      height="42px"
      loading="lazy"
      scrolling="no"
      frameborder="no"
      allow="autoplay"
      title={audioTitle}
      src={audioSrcURL}
    ></iframe>
  </div>
)
export default Audio
