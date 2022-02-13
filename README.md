<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Pinewax Store (2022)
</h1>


## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the Pinewax repo.

    ```shell
    # create a new Gatsby site using the Shopify starter
    gatsby new pinewax https://github.com/brunosj/pinewax.git
    ```

2.  **Link to your store**

    Follow these instructions here to [link your Shopify store](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-shopify#readme). 

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd pinewax/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `pinewax` directory in your code editor of choice and edit `src/pages/index.jsx`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in this project.

    .
    ├── src
    ├── static
    ├── .env
    ├── gatsby-browser.js
    ├── gatsby-config.js
    └── gatsby-node.js

1. **`/example`**: This directory includes a CSV file containing sample data to import into a development store. There are also instructions on generating your own sample data, and a link to a dataset with 30,000 SKUs.

2. **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3. **`/static`**: Every file in this directory will be copied over to the `public` folder during the build. Learn more about [using the `static` folder](https://www.gatsbyjs.com/docs/how-to/images-and-media/static-folder/). In this project it holds the `og:image` and favicons.

4. **`/.env.example`**: Duplicate this file, rename it to `.env`, and fill out the keys. You'll need to define those environment variables to get the source plugin, cart and search working.

5. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser. In this project it wraps the whole application with the context provider of the store/shopping cart.

6. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process. In this project it adds a custom Babel plugin to Gatsby.

### Detailed look into `src`

The whole logic for how the site looks and behaves is inside `src`.

    .
    ├── components
    ├── context
    ├── icons
    ├── images
    ├── pages
    ├── styles
    └── utils

1.  **`/components`**: Contains the React components used for building out the pages.

2.  **`/context`**: Contains the store context (e.g. adding/deleting/updating items in shopping cart, accessing Shopify), and the urql context used for search using Shopify's Storefront API.

3.  **`/icons`**: Contains all custom SVG icons and the logo.

4.  **`/pages`**: Contains the homepage and all automatically generated pages for each product category and individual product pages. The [File System Route API](https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/) is used to create those pages from your Shopify data. Other pages (e.g. "Artists", "Videos") are generated using the [Gatsby Node API](https://www.gatsbyjs.com/docs/node-apis/).

5.  **`/styles`**: Contains globals styles. These are `variables.css`, used to define shared CSS custom properties, `reset.css`, which contains a CSS reset based on Chakra, and `global.css`, which includes a tiny set of global styles.

6.  **`/utils`**: Utility functions, e.g. formatting the price correctly, plus custom hooks used for handling search and pagination.

### 🎨 Styling

The site uses a combination of [CSS Modules](https://github.com/css-modules/css-modules) - which allows you to use regular CSS, scoped to the individual component - and [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework - for styling. Theme values such as fonts, colors and spacing are set in `src/styles/variables.css`.

