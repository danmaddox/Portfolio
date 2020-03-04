import React from "react"
import { Link } from "gatsby"
import { Container } from "../components/container"
import '../components/layout.css'
import styled from 'styled-components'
import Image from "../components/image"
import SEO from "../components/seo"

const Primary = styled.div`
position: fixed;
font-size: 1rem;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
// background-image: linear-gradient(to right top, #247ba0, #2789a6, #3196ab, #41a3ae, #54b0b1, #63b8b2, #72c0b3, #82c8b5, #8fcdb7, #9bd2b9, #a7d6bc, #b2dbbf);
color: black;  

position: absolute;
width: 100%;
height: 100%;

// animation: scale-in-center 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

// @keyframes scale-in-center {
//   0% {
//     transform: scale(0);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(1);
//     opacity: 1;
//   }
// }
`


const Right = styled.div`
  background-color: rgba(112,193,179,1);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif; 
`

const Info = styled.div`
  text-transform: uppercase;
  color: white;
  padding: 0;
  margin: 0;
  transform: translate(0px, -70px);
`

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  
`

const StyledLink = styled(Link)`
  font-size: 1rem;
  margin: 1rem;
  margin-right: 5rem;
  padding: 0.25em 1em;
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
  <>


    <SEO title="Home" />


    <Primary>
    <Container>
      <Image />
      <Info>Web Developer & Analyst</Info>
      <LinkContainer>
        <StyledLink to="/portfolio" >Portfolio</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>

      </LinkContainer>
    </Container>

    {/* <Right>
    <Info>
      <p> Web Developer, Analyst and tech enthusiast hailing from the UK. </p>
      <p>I provide modern technical solutions to everday problems</p>
      </Info>
    </Right> */}
    </Primary>

  </>

)

export default IndexPage
