import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classNames from 'classnames/bind';
import Tappable from 'react-tappable/lib/Tappable';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

class Header extends React.Component {
  state = {
    isActiveMenu: false,
    location: '',
  };

  static propTypes = {
    siteTitle: PropTypes.string.isRequired,
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && window.location.pathname) {
      this.updateLocation();
    }
  }

  componentWillReceiveProps() {
    this.updateLocation();
  }

  updateLocation = () => {
    const { pathname } = window.location;
    this.setState({ location: pathname });
  };

  handleMenuAction = () => {
    const { isActiveMenu } = this.state;
    this.setState({ isActiveMenu: !isActiveMenu });
  };

  render() {
    const { siteTitle } = this.props;
    const { isActiveMenu, location } = this.state;
    return (
      <div
        style={{
          marginBottom: location === '/' ? 'initial' : '1.45rem',
        }}
      >
        <nav className="navbar is-fixed-top is-dark">
          <div className="container is-size-4">
            <div className="navbar-brand">
              <Link
                to="/"
                className={classNames({ 'navbar-item': true, 'is-active': location === '/' })}
              >
                {siteTitle}
              </Link>
              <Tappable
                component="div"
                className={classNames({
                  'navbar-burger': true,
                  burger: true,
                  'is-active': isActiveMenu,
                })}
                aria-pressed="false"
                data-target="navbarFixedTop"
                onTap={this.handleMenuAction}
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </Tappable>
            </div>

            <div
              id="navbarFixedTop"
              className={classNames({
                'navbar-menu': true,
                'is-active': isActiveMenu,
              })}
            >
              <div className="navbar-start">
                <Link
                  className={classNames({
                    'navbar-item': true,
                    'is-active': location === '/projects/',
                  })}
                  to="/projects/"
                >
                  Projects
                </Link>
                <Link
                  className={classNames({
                    'navbar-item': true,
                    'is-active': location === '/tech/',
                  })}
                  to="/tech/"
                >
                  Technology
                </Link>
                <Link
                  className={classNames({
                    'navbar-item': true,
                    'is-active': location === '/contact/',
                  })}
                  to="/contact/"
                >
                  Contact
                </Link>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <OutboundLink
                        className="bd-tw-button button"
                        target="_blank"
                        rel="noopener noreferrence"
                        href="https://twitter.com/shadez95"
                      >
                        <span className="icon">
                          <i className="fab fa-twitter" />
                        </span>
                        <span>Twitter</span>
                      </OutboundLink>
                    </p>
                    <p className="control">
                      <OutboundLink
                        className="bd-tw-button button"
                        target="_blank"
                        rel="noopener noreferrence"
                        href="https://github.com/shadez95"
                      >
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                        <span>Github</span>
                      </OutboundLink>
                    </p>
                    <p className="control">
                      <a
                        className="bd-tw-button button"
                        target="_blank"
                        rel="noopener noreferrence"
                        href="mailto:contact@dixonbegay.com?body=%0D%0D%0D%0D%0DSent%20from%20dixonbegay.com"
                      >
                        <span className="icon">
                          <i className="fas fa-envelope" />
                        </span>
                        <span>Email</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
