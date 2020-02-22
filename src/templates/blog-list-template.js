import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SiteNav from '../components/sitenav';

const BlogListtContainer = styled.div`
  background-color: rgba(71,85,94,1);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%237b797e' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 1;
  font-family: 'Open Sans', sans-serif;
  height: 100vh;
` 

const MainBody = styled.main`
    background-color: rgba(35, 35, 42, 0.8);
    // position: absolute;
    // top: 5rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    // margin-left: 1rem;
    // margin-right: 1rem;
    border-radius: 15px;
    padding: 15px 0px 15px 0px;
    color: white;
    width: 98%;
    z-index: 1;
    display: flex;
    align-items: center
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 4px 4px 0px #111;
`

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const pages = this.props.data.allMarkdownRemark.pageInfo
    return (
      <>
      <BlogListtContainer>
      <SiteNav></SiteNav>
      <MainBody>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
          <div key={node.fields.slug}>{title}</div>
            )
        })}
          <div key={pages.currentPage}>{pages.currentPage}</div>
          {/* Use this to create logic of next and previous buttons */}
          </MainBody>
          </BlogListtContainer>
      </>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          } 
          frontmatter {
            title
          }
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasNextPage
      }
    }
  }
`