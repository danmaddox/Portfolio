import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_transparent.png" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div>

      <Img
        fixed={data.file.childImageSharp.fixed}
      />
    </div>
  )
}