import * as React from "react"
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import ReleasesLeft from "../components/releasesLeft"
import ReleasesRight from "../components/releasesRight"
import VideoCard from "../components/cards/videoCard"

const Homepage = ({ data }) => {  
  const releaseOne = data.releases.nodes[0]
  const releaseTwo = data.releases.nodes[1]
  const releaseThree = data.releases.nodes[2]
  
  const indexVariants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView( { rootMargin: '0px 0px', } );

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);


  return (
    <Layout>
   {/* <GatsbyImage
      loading="eager"
      alt="Pinewax"
      image={data.banner.localFile.childImageSharp.gatsbyImageData}
        />    */}
    <ReleasesLeft release={releaseOne}/>
      <ReleasesRight release={releaseTwo}/>
    <VideoCard
        image={data.live.imageBanner.localFile.childImageSharp.gatsbyImageData}
        title={data.live.title}
        textSize="text-lg lg:text-3xl"
        slug={`/videos/${data.live.slug}`}
        />   

       <ReleasesLeft release={releaseThree} />


    </Layout>
  )
}

export default Homepage

export const query = graphql`
query Banner {
  banner:contentfulAsset(title: {eq: "pwx-banner"}) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: AUTO
            quality: 85
            placeholder: BLURRED
            transformOptions: {grayscale: false}
          )
        }
      }
    }
    live:contentfulVideo(slug: {eq: "livesession-yasminumay"}) {
      id
      title
      url
      image {
        localFile {
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              formats: AUTO
              quality: 85
              placeholder: BLURRED
              transformOptions: {grayscale: false}
            )
          }
        }
      }
      imageBanner {
        localFile {
          childImageSharp {
            gatsbyImageData (
              layout: FULL_WIDTH
              formats: AUTO
              quality: 85
              placeholder: BLURRED
              transformOptions: {grayscale: false}
            )
          }
        }
      }
      slug
    }
  releases: allContentfulRelease(
          limit: 3, 
          sort: {fields: releaseDate, order: DESC}) {
        nodes {
          id
          title
          format
          catalogNumber
          releaseDate
          releaseArtist
          urlBandcamp
          urlListen
          urlAppleMusic
          shopifyProduct
          mainColour
          slug
          cover {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                )
              }
            }
            title
          }
          vinylMockup {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                )
              }
            }
            title
          }
          description {
            raw
          }
        }
      }
    }
`
