import {
  HeaderContainer,
  Heading,
  SubHeading,
  RelativeContainer,
  Signature,
} from './Header.styled'

import { BasicText } from '../App.styled'
import Skills from './skills'

const Header = () => {
  return (
    <HeaderContainer>
      <SubHeading>Hi I'm</SubHeading>
      <RelativeContainer>
        <Heading>Anuragh.</Heading>
      </RelativeContainer>

      <BasicText>
        A MERN (MongoDB, Express.js, React.js, Node.js) stack developer: Let's
        build something remarkable together. Here's my current tech stack:
      </BasicText>
      <Skills />
    </HeaderContainer>
  )
}
export default Header
