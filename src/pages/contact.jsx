import React from 'react';

const paddedDiv = { paddingBottom: '30px' };

const Contact = () => (
  <div style={paddedDiv}>
    <div className="container">
      <div className="content is-large">
        <h1 className="title is-spaced is-size-4-mobile">Want to connect?</h1>
        <div className="tile is-ancestor">
          <div className="tile is-12 is-vertical is-parent">
            <div className="tile is-child box">
              <h3 className="title-3 is-size-5-mobile">Just want to say hi...</h3>
              <h3 className="title-3 is-size-5-mobile">Interested in working with me...</h3>
              <p className="is-size-6-mobile">
                Email me at
                {' '}
                <a
                  target="_blank"
                  rel="noopener noreferrence"
                  href="mailto:contact@dixonbegay.com?body=%0D%0D%0D%0D%0DSent%20from%20dixonbegay.com"
                >
                  contact@dixonbegay.com
                </a>
              </p>
              <p className="is-size-6-mobile">or</p>
              <p className="is-size-6-mobile">
                DM or tweet me on twitter
                {' '}
                <a target="_blank" rel="noopener noreferrence" href="https://twitter.com/shadez95">
                  @shadez95
                </a>
              </p>
            </div>
            <br />
            <div className="is-child">
              <p className="title-6 is-size-6-mobile">
                <b>*Resume is available upon request</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
