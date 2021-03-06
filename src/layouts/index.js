import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import Helmet from 'react-helmet';
import WebFont from 'webfontloader';

import './index.css';
import logo from './logo.svg';

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1">
      {title}
    </Link>
    <time>{date}</time>
  </header>
);

class TemplateWrapper extends Component {

  navigate = ({ keyCode }) => {
    const thispage = location.pathname.substr(1)
    const now = parseInt(thispage.slice(-2));
    const NEXT = 39;
    const PREV = 37;

    const slides = this.props.data.allWordpressPost.edges.filter(
      ({ node }) => {
        const id = node.slug.replace(/^.*[\\\/]/, '').split('.')[0];

        if (id && id !== 404) {
          return true;
        }
      }
    );

    if (now) {

      if (keyCode === PREV && now === 1) {
        return false;
      } else if (keyCode === NEXT && now === slides.length) {
        return false;
      } else if (keyCode === NEXT) {
        navigateTo(`/${now + 1}`)
      } else if (keyCode === PREV) {
        navigateTo(`/${now - 1}`)
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
      WebFont.load({
        typekit: {
          id: 'iwo2mai'
        },
        google: {
          families: ['Lato']
        }
      });
    
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  handleButtonClick(event, keyCode) {
    event.preventDefault();
    this.navigate({ keyCode });
  }

  render() {
    const { children, data } = this.props;
    return (
      <div>
        <Helmet
          title={`${data.site.siteMetadata.title} — ${
            data.site.siteMetadata.name
          }`}
        />
        <Header
          name={data.site.siteMetadata.name}
          title={data.site.siteMetadata.title}
          date={data.site.siteMetadata.date}
        />
        <img id="logo" src={logo}/> 
        <div id="slide">{children()}</div>
        <footer>
          <a className="link next" href="#" onClick={ event => this.handleButtonClick(event, 39) }>&#8250;<span className="sr-only">Next</span></a>
          <a className="link previous" href="#" onClick={ event => this.handleButtonClick(event, 37) }>&#8249;<span className="sr-only">Previous</span></a>
        </footer>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        name
        title
        date
      }
    }
    allWordpressPost {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`;
