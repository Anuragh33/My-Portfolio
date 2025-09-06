import styled from 'styled-components'
import { device } from '../device'

export const CardImg = styled.img`
  width: 100%;
  border-radius: 5px 5px 0 0;
  z-index: 2;
  border-left: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
  border-top: 0.5px solid #ddd;
`

export const CardInfo = styled.div`
  width: 100%;
  border-left: 0.5px solid #ddd;
  border-right: 0.5px solid #ddd;
  border-bottom: 0.5px solid #ddd;
  background-color: green;
  padding: 20px 20px;
  border-radius: 0 0 5px 5px;
  margin-bottom: 50px;
  p {
    margin-bottom: 20px;
    line-height: 1.4em;
  }

  @media ${device.tablet} {
    padding: 25px 35px;

    p {
      margin-bottom: 30px;
    }
  }
`

export const CardHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 48px;
    // margin-bottom: 15px;
  }
`

export const ProjectSkills = styled.p`
  font-family: IBM Plex Mono;
  font-size: 14px;
  color: #868686;

  @media ${device.tablet} {
    font-size: 18px;
  }
`

export const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 300;

  @media ${device.tablet} {
    font-size: 20px;
  }
`
