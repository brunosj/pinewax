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
        >
          <source src={source} type="video/mp4" />
        </video>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={animationVariants}
          //   whileInView="visible"
        >
          <div className="absolute flex items-center left-5 top-5 right-5 bottom-5 text-white text-center">
            <div className="w-full text-sm md:text-base font-bold lg:font-normal lg:text-4xl md:bg-pwxBlue py-4 px-12 leading-none tracking-[2px]">
              {title}
            </div>
          </div>
        </motion.div>
      </div>
    </Link>
  )
}

export default VideoLanding
