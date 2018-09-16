import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const paddedDiv = { paddingBottom: '30px' };

const IndexPage = ({ data }) => {
  const { dataJson, heroImage } = data;
  const { heroTitle, heroSubtitle, heroSubtitleAbout } = dataJson;
  return (
    <div style={paddedDiv}>
      <section className="hero has-text-centered">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                  {heroTitle}
                </h1>
                <h2 className="subtitle is-size-4-desktop">{heroSubtitle}</h2>
                <br />
                <br />
                <Img resolutions={heroImage.resolutions} alt="shadez avatar" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column">
              <h3 className="subtitle is-size-4-desktop">{heroSubtitleAbout}</h3>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section>
        <div className="container has-text-centered">
          <div className="columns is-centered">
            <div className="column">
              <p className="title is-spaced is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                Interested in hiring me?
              </p>
              <p className="subtitle is-size-4-desktop">
                My resume is available upon request. Shoot me an
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrence"
                  href="mailto:contact@dixonbegay.com?body=%0D%0D%0D%0D%0DSent%20from%20dixonbegay.com"
                >
                  email
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query HeroQuery {
    dataJson {
      heroTitle
      heroSubtitle
      heroTitleAbout
      heroSubtitleAbout
    }
    heroImage: imageSharp(id: { regex: "/shadez/" }) {
      resolutions(width: 215) {
        ...GatsbyImageSharpResolutions_withWebp_tracedSVG
      }
    }
  }
`;
