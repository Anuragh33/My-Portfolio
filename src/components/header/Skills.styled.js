import styled from 'styled-components'
import { device } from '../device'

export const SkillsFlexContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
  margin-top: 26px;

  @media ${device.tablet} {
    margin-top: 50px;
  }
  @media ${device.laptopL} {
    margin-top: 55px;
  }
  @media ${device.desktop} {
    margin-top: 60px;
  }
`
export const SkillBox = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: white;
  padding: 5px 23px 5px 23px;
  background-color: #41b06e;
  width: min-content;
  border-radius: 5px;

  @media ${device.tablet} {
    font-size: 24px;
  }

  @media ${device.laptopL} {
    font-size: 26px;
    font-weight: 700;
  }

  @media ${device.desktop} {
    font-size: 27px;
    font-weight: 700;
  }
`
