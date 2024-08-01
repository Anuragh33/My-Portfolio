import styled, { createGlobalStyle } from 'styled-components'
import { device } from './device'

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 0 15vh 0;
  max-width: 280px;
  margin: auto;

  @media ${device.tablet} {
    max-width: 500px;
  }
  @media ${device.laptop} {
    max-width: 550px;
  }
  @media ${device.laptopL} {
    max-width: 800px;
  }
  @media ${device.desktop} {
    max-width: 1000px;
  }
`

export const Body = createGlobalStyle`
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding:0;
    margin:0 !important;
    background-color: #fffefe;

  }
  h1 {
    line-height: 0.8em
  }
  *{
    margin-block-start: 0px;
    margin-block-end: 0px;
    box-sizing: border-box;
  }
`

export const SectionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;
  padding-top: ${(props) => (props.padding ? props.padding : '30px')};
  margin-bottom: 30px;

  @media ${device.tablet} {
    font-size: 50px;
    margin-bottom: 40px;
  }
`

export const BasicText = styled.p`
  padding-top: 40px;
  font-size: 16px;
  text-align: ${(props) => (props.align ? props.align : 'left')};
  line-height: 1.4em;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.laptopL} {
    font-size: 22px;
  }
`

export const Icon = styled.img`
  margin-right: ${(props) => (props.margin ? props.margin : '10px')};
  scale: ${(props) => (props.scale ? props.scale : '100%')};
`
