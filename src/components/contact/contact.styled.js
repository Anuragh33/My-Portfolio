import styled from 'styled-components'
import { device } from '../device'

export const ContactFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const ContactLink = styled.a`
  margin-top: 30px;
  width: fit-content;
  border: 3px solid #41b06e;
  border-radius: 10px;
  background-color: white;
  padding: 7px 20px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 600;
  color: #41b06e;

  @media ${device.tablet} {
    font-size: 30px;
    margin-top: 40px;
  }
`
