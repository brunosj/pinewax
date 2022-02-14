import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SiteMetadata({ description, image, lang, meta, title }) {
    const { site } = useStaticQuery(
        graphql`
      query {
        site {
            siteMetadata {
                siteTitle
                siteTitleDefault
                siteUrl
                hrefLang
                siteDescription
                siteImage
                twitter
            }
        }
      }
    `
    )

    const metaDescription = description || site.siteMetadata.siteDescription
    const defaultTitle = site.siteMetadata?.siteTitle
    const metaImage = image || site.siteMetadata.siteImage

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: metaImage,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: `@tmg_think`,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    property: `twitter:image`,
                    content: metaImage,
                },
            ].concat(meta)}
        />
    )
}

SiteMetadata.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SiteMetadata.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SiteMetadata