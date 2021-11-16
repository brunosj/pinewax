import React from 'react'
import { 
    artistCard, 
    cardInner, 
    cardFront, 
    cardFrontChild, 
    cardBack,
    cardBackChild,
    cardBackText
     } from "./artistCard.module.css"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArtistCard = ({ artists }) => {

//   I am using CSS Modules for this component as they are more straightforward than Tailwind for CSS animations

  return (

    <div className="overflow-hidden">
        <div className="flex flex-wrap">
            {artists.map(artist => {
                return (
              <div className={artistCard}>
                  <Link to={artist.slug} key={artist.id}>
                    <div className={cardInner}>
                      <div className={cardFront}>
                          <div className={cardFrontChild}>
                          <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.picture.localFile.childImageSharp.gatsbyImageData}
                              // style={{ minWidth: 275, minHeight: 275 }}
                              />
                              
                          </div>
                      </div>
                      <div className={cardBack}>
                          <div className={cardBackChild}>
                              {artist.name}
                              <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.picture.localFile.childImageSharp.gatsbyImageData}
                              // style={{ minWidth: 275, minHeight: 275 }}
                              />
                              
                              </div>    
                      </div>
                  </div>
                  </Link>
              </div>
          )
        } 
      )}
    </div>
  </div>
  )
}

export default ArtistCard