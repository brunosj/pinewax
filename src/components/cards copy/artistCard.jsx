import React from 'react'
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

  return (

    <div className="overflow-hidden">
        <div className={artistGrid}>
            {artists.map(artist => {
                return (
              <div className={artistCard}>
                  <Link to={artist.slug} key={artist.id}>
                    <div className={cardInner}>
                      <div className={cardFront}>
                          <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.picture.localFile.childImageSharp.gatsbyImageData}
                              />
                
                      <div className={cardBack}>
                        {/* <div className={cardBackImg}>
                              <GatsbyImage 
                              loading="eager"
                              alt="Pinewax"
                              image={artist.pictureVariation.localFile.childImageSharp.gatsbyImageData}
                              />
                              </div> */}
                              <div className={cardBackText}>
                              {artist.name}          
                              </div>    
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