import React from "react"
import { Link } from "gatsby"
import { Container } from "../components/container"
import '../components/layout.css'
import styled from 'styled-components'
import Image from "../components/image"
import SEO from "../components/seo"

const Info = styled.div`
  text-transform: uppercase;
  color: white;
  padding: 0;
  margin: 0;
  transform: translate(0px, -70px);
  font-size: 1rem;
`

const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 5rem;
  transform: translate(0px, -30px);
`

const ImageContainer = styled.div`
  padding-top: 5rem;
`

const StyledLink = styled(Link)`
  font-size: 1rem;
  margin: 0 2rem 0 2rem;
  padding: 0.25rem 1rem;
  margin-bottom: 1rem;

  // border-left: 2px solid white;
  // border-right: 2px solid white;
  border: 2px solid white;
  border-radius: 3px;
  // background: red;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: 0.5s;
  &:hover{
    background: white;
    color: black;
    transform: scale(1.1);
  }
`


const IndexPage = () => (

    <Container>

    <SEO title="Home" />


      <ImageContainer>
      <Image />
      </ImageContainer>
      <Info>Web Developer & Analyst</Info>
      <LinkContainer>
        <StyledLink to="/portfolio" >Portfolio</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>

      </LinkContainer>


    </Container>

)

export default IndexPage
