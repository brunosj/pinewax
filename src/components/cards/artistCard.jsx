import React from 'react'
import { 
    artistCard, 
    cardInner, 
    cardFront, 
    cardFrontChild, 
    cardBack,
    cardBackText
     } from "./artistCard.module.css"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArtistCard = ({ artists }) => {


//   I am using CSS Modules for this component as they are more straightforward than Tailwind for CSS animations

  return (

    <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
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
                              style={{ minWidth: 400, minHeight: 400 }}
                              >
                              
                          </GatsbyImage>
                          </div>
                      </div>
                      <div className={cardBack}>
                          <div className={cardBackText}>
                              {artist.name}
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