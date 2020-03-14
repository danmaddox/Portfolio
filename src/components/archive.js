import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';

const ARCHIVE_QUERY = graphql`
query BlogArchive {
    allMarkdownRemark(limit: 5, sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }  
`

const Archive = () => {
    const data = useStaticQuery(POST_ARCHIVE_QUERY)
    return(
        <>
        <div>test</div>

        </>
    )

}

export default Archive