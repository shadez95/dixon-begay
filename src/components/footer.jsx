import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Footer = () => {
  let pathname = '';
  if (typeof window !== 'undefined' && window.location.pathname) {
    ({ pathname } = window.location);
  }
  return (
    <footer className="footer has-text-white">
      <div className="content has-text-centered">
        <p>Dixon Begay &copy; 2018</p>
        <OutboundLink href="https://bulma.io">
          <img
            src="https://bulma.io/images/made-with-bulma--white.png"
            alt="Made with Bulma"
            width="163"
            height="31"
          />
        </OutboundLink>
        {pathname === '/' && (
          <div>
            Icon by
            {' '}
            <OutboundLink href="http://www.freepik.com" title="Freepik">
              Freepik
            </OutboundLink>
            {' '}
            from
            {' '}
            <OutboundLink href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </OutboundLink>
            {' '}
            is licensed by
            {' '}
            <OutboundLink
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="blank"
            >
              CC 3.0 BY
            </OutboundLink>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
