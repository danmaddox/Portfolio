import React from "react"
import PropTypes from "prop-types"
import SiteNav from '../components/sitenav';
import styled from 'styled-components';

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const TagsContainer = styled.div`
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
    padding: 25px;
    color: white;
    width: 98%;
    z-index: 1;
    display: flex;
    align-items: center
    justify-content: center;
    flex-direction: column;
    box-shadow: 0px 4px 4px 0px #111;
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

  @media (max-width: 768px)
  {
    font-size: 0.75rem;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const TagHeader = styled.div`
  font-size: 1.5rem;
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <TagsContainer>
  <SiteNav></SiteNav>
  <MainBody>
  <div>
    <Helmet title={title} />
    <div>
      <TagHeader>Tags</TagHeader>
      <List>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <StyledLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </StyledLink>
          </li>
        ))}
      </List>
    </div>
  </div>
  </MainBody>
  </TagsContainer>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`