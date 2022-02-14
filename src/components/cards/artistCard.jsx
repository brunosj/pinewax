import React from 'react'
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  artistGrid,
  artistCard,
  cardInner,
  cardFront,
  cardBack,
  cardBackText,
} from "./artistCard.module.css"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArtistCard = ({ artists }) => {

  const artistVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, initialInView: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (

    <div className="overflow-hidden">
      <div className={artistGrid}>
        {artists.map(artist => {
          return (
            <div className={artistCard}>
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={artistVariants}>
                <Link to={artist.slug} key={artist.id}>
                  <div className={cardInner}>
                    <div className={cardFront}>
                      <GatsbyImage
                        loading="eager"
                        alt="Pinewax"
                        image={artist.picture.gatsbyImageData}
                      />

                      <div className={cardBack}>
                        <div className={cardBackText}>
                          {artist.name}
                        </div>
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          )
        }
        )}
      </div>
    </div>
  )
}

export default ArtistCard
