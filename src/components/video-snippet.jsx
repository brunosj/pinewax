import React from "react"
import { Link } from "gatsby"
import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const VideoLanding = ({ source, slug, title }) => {
  const animationVariants = {
    visible: { opacity: 1, transition: { duration: 0.7 } },
    hidden: { opacity: 0 },
  }

  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.5,
    initialInView: false,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Link to={slug} className="" animate="rest">
      <div className="w-full relative">
        <video
          autoplay="true"
          muted="true"
          disablePictureInPicture
          className="w-full"
          loop="true"
          playsInline="true"
        >
          <source src={source} type="video/mp4" />
        </video>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationVariants}
          whileInView="visible"
        >
          <div className="absolute flex lg:items-center left-0 lg:left-5 lg:top-5 right-0 lg:right-5 bottom-2 lg:bottom-5 text-white text-left lg:text-center">
            <span className="w-full text-sm md:text-base font-bold lg:font-normal lg:text-4xl bg-pwxBlue py-2 lg:py-4 px-5 lg:px-12 leading-none tracking-[2px]">
              {title}
            </span>
          </div>
        </motion.div>
      </div>
    </Link>
  )
}

export default VideoLanding
