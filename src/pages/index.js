import React, { Component } from 'react';
import { navigateTo } from 'gatsby-link';

class Index extends Component {
  componentDidMount() {
    navigateTo(`/slide01`);
  }
  render() {
    return <div />;
  }
}
export default Index;
