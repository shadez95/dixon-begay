import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import './index.scss';

const Layout = ({ children, data }) => (
  <React.Fragment>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content="I am a software developer in Chandler, Arizona, with experience in React, Go, Python, Node, GraphQL, RESTful API, and many other web technologies."
      />
      <meta
        name="keywords"
        content="dixon begay website personal software dev developer web engineer react go node graphql rest restful api full stack fullstack javascript python python3"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
      <meta name="Language" content="United States" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://www.dixonbegay.com/assets/favicon-96x96.png" />
      <meta name="twitter:creator" content="@shadez95" />
      <meta property="og:title" content="Dixon Begay | Software Developer" />
      <meta
        property="og:description"
        content="A software developer that's improving people's lives one line of code at a time."
      />
      <meta property="og:image" content="/assets/favicon-96x96.png" />

      <meta name="Title" content="Dixon Begay Software Developer" />

      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png" />

      <link rel="icon" type="image/png" sizes="192x192" href="/assets/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png" />
    </Helmet>
    <div className="container" id="wrapper">
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </div>
    <Footer path={data.sitePage.path} />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

Layout.defaultProps = () => ({
  children: null,
});

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    sitePage {
      path
    }
  }
`;
