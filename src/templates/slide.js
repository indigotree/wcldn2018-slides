import React from 'react';

export default ({ data, pathContext, transition }) => (
  <div
    style={transition && transition.style}
    dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
  />
);

export const pageQuery = graphql`
  query SlideByPath($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date
    }
  }
`