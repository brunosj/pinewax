import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  videoCard,
  cardInner,
  cardFront,
  cardBack,
  cardBackText,
} from "./videoCard.module.css"

const VideoCard = ({ image, title, slug, textSize, videoWidth }) => {

  const animationVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, initialInView: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <div className={videoWidth}>
      <div className={videoCard}>
        <Link to={slug}>
          <div className={cardInner}>
            <div className={cardFront}>
              <GatsbyImage
                loading="eager"
                alt="Pinewax"
                image={image}
              />

              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={animationVariants}>
                <div className={cardBack}>
                  {/* <div className={cardBackImg}>
                              <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.pictureVariation.gatsbyImageData}
                              />
                              </div> */}
                  <div className={cardBackText}>
                    <span className={textSize}>{title}</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard

