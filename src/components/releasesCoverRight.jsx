import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesInfo from "./releasesInfo"
import { Link } from "gatsby"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const ReleasesRight = ({ release }) => {

  const releaseVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: 200 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.0 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section style={{
      backgroundColor: release.mainColour
    }} >
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={releaseVariants}>

        <div className="px-0 md:px-16 lg:px-24 xl:px-48 3xl:px-64 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">

          <div className="flex items-center justify-start order-last lg:order-first 2xl:col-span-2">
            <div className="p-5 lg:p-0">
              <ReleasesInfo release={release} />
            </div>
          </div>

          <div className="flex px-5 lg:px-0">
            <div className="flex ml-0 lg:ml-auto items-center">

              {release.vinylMockup && (
                <Link
                  to={`/products/music/${release.slug}`}
                >
                  <div className="py-0 lg:py-16">
                    <div className="w-60 h-60 lg:w-96 lg:h-96 ">
                      <GatsbyImage
                        loading="eager"
                        alt={release.cover.title}
                        image={release.vinylMockup.gatsbyImageData}
                      />
                    </div>
                  </div>
                </Link>
              )}
              {!release.vinylMockup && (
                <Link
                  to={`/releases#${release.slug}`}
                >
                  <div className="pb-8 lg:pb-24 pt-12 lg:pt-24">
                    <div className="w-60 h-60 lg:w-80 lg:h-80">
                      <GatsbyImage
                        loading="eager"
                        alt={release.cover.title}
                        image={release.cover.gatsbyImageData}
                      />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  )
}

export default ReleasesRight
