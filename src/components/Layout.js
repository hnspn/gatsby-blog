import React from 'react';
import { Nav } from '../components/Nav';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import '../../node_modules/skeleton-css/css/skeleton.css';
import '../styles/global.css';

export const Layout = props => (
  <React.Fragment>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
    <Header />
    <Nav />
    {props.children}
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
