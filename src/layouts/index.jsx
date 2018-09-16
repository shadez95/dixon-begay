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
      <meta name="description" content="Dixon Begay website" />
      <meta
        name="keywords"
        content="dixon, begay, website, personal, software, dev, developer, web, engineer"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
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
