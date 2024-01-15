![alt text](https://pinewaxrecords.com/default-og-image.jpg)

## Description

This repo contains the website of [Pinewax](https://pinewaxrecords.com), a platform and online store containing the catalog and the information related to the label.

## Technologies

The site is a [Gatsby](https://www.gatsbyjs.com/) project deployed on [Netlify](https://netlify.com/). Data is sourced from [Contentful](https://www.contentful.com/) and [Shopify](https://www.shopify.com/), using the "Light" plan to have access to the API and the inventory/payment features. Styling is done with [Tailwind CSS](https://tailwindcss.com) and [CSS Modules](https://github.com/css-modules/css-modules).

Update 15.01.2024: Shopify store has been disabled.

## Installation

1. Use the git CLI to close the repo

```
gh repo clone brunosj/pinewax
```

2. Install dependencies

```bash
npm install
```

Don't forget to add the Contentful and Shopify environment variables in an .env file to fetch the data and run the site.

3. Navigate into the site's directory and start the development server

```bash
gatsby develop
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## Structure

```
.
├── node_modules
├── public
    ├── locales
└── src
    ├── assets
    ├── components
    ├── context
    ├── icons
    ├── pages
    ├── styles
    ├── utils
├── static
    ├── icons
├── .env
├── .eslintrc.json
├── .gitignore
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Further development

This repository is maintained by [brunosj](https://github.com/brunosj).
