import React from 'react';
import CategoriesList from './CategoriesList';

export default ({ data, pathContext, transition }) => (
  <div
    style={transition && transition.style}
  > 
    <CategoriesList categories={data.wordpressPost.categories}></CategoriesList>
    <h1 dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} />
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
  </div>
);

export const pageQuery = graphql`
  query SlideByPath($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date
      categories {
        name
      }
    }
  }
`