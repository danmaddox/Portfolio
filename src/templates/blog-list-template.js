import React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components'
import SiteNav from '../components/sitenav';
import { Link } from "gatsby";
import Img from "gatsby-image"

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
  min-height: 100vh;
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

const BlogPostContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    // text-align: center;
`

const BlogPost = styled.div`
  
  width: 60%;
  height: 60%;
  display: flex;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  padding: 2rem;
  // margin: 1rem;
  border-radius: 15px;
  justify-content: center;


`

const BlogPostText = styled.div`
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    padding-right: 25px;

`

const BlogPostTextHeader = styled.div`
  height: 50%;
`

const BlogPostTextBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: 50%;
`

const BlogTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  // text-transform: uppercase;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;
`

const BlogDate = styled.h2`
  font-size: 1rem;
  padding: 0;
  margin-top: 0;
  margin-bottom: 8px;
`

const BlogTags = styled.p`
  font-size: 0.7rem;
  padding: 0;
  margin: 0;
`

const BlogExcerpt = styled.p`
  font-size: 1rem;
  margin: 0;
`

const ReadMore = styled.div`
  font-size: 1rem;
  align-self: end;


`

const StyledLink = styled(Link)`
  font-size: 1rem;
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  color: rgba(69, 179, 157, 1);
  font-weight: bold;

  &:hover{
    color: rgba(46, 134, 193, 1);
  }
`

const StyledImg = styled(Img)`
    border-radius: 15px;
    margin: 10px;
`

const BlogPostImage = styled.div`
    width: inherit; 

`

const PaginationContainer = styled.div`
    margin: 2rem;
`

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const pages = this.props.data.allMarkdownRemark.pageInfo
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const currentPage = pages.currentPage

    const previous = currentPage === 2 ? <StyledLink to={`/blog`}>Previous</StyledLink>  : currentPage !== 1 ? <StyledLink to={`/blog/${currentPage - 1}`}>Previous</StyledLink>  : null;
    const next = currentPage === 1 && (pages.itemCount < totalCount)  ? <StyledLink to={`/blog/${currentPage + 1}`}>Next</StyledLink>  : (((currentPage - 1) * 6) + pages.totalCount) < totalCount ? <StyledLink to={`/blog/${currentPage + 1}`}>Next</StyledLink> : null

    return (
      <>
      <BlogListtContainer>
      <SiteNav></SiteNav>
      <MainBody>
        <BlogPostContainer>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const tags = node.frontmatter.tags
          return (
            <BlogPost>
              <BlogPostText>
                <BlogPostTextHeader>
                  <BlogTitle key={node.fields.slug}>
                    {title}
                  </BlogTitle>
                  <BlogDate key={node.frontmatter.date}>
                    {node.frontmatter.date}
                  </BlogDate>
                    <BlogTags>
                      {tags.map(tag => (

                        <StyledLink to={`/tags/${tag.toLowerCase()}`}>{` [${tag}] `}</StyledLink>
                      ))}
                    </BlogTags>
                  </BlogPostTextHeader>
                    {/* <div key={node.frontmatter.tags}>{node.frontmatter.tags}</div> */}
                  {/* <div key={node.frontmatter.path}>{node.frontmatter.path}</div> */}
                  <BlogPostTextBody>
                  <BlogExcerpt key={node.excerpt}>
                   {node.excerpt}
                  </BlogExcerpt>
                  <ReadMore>
                    <StyledLink to={node.frontmatter.path}>Read More...</StyledLink>
                  </ReadMore>
                  </BlogPostTextBody>
              </BlogPostText>
              <BlogPostImage>
                <StyledImg fluid={node.frontmatter.featuredImage.childImageSharp.fluid} />
              </BlogPostImage>
            </BlogPost>
            )
        })}
          {/* <div key={pages.currentPage}>{pages.currentPage}</div>
          <div key={pages.itemCount}>{pages.itemCount}</div>
          <div key={totalCount}>{totalCount}</div> */}
          <PaginationContainer>
            {previous}
            {next}
          </PaginationContainer>
          {/* Use this to create logic of next and previous buttons */}
          </BlogPostContainer>
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
          excerpt(format: PLAIN)
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            tags
            path
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        itemCount
        currentPage
      }
      totalCount
    }
  }
  
`