import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

class Index extends Component {
  componentDidMount() {
    navigateTo(`/slide1`);
  }
  render() {
    return <div />;
  }
}
export default Index;
