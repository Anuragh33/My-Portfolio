import {
  HeaderContainer,
  Heading,
  SubHeading,
  RelativeContainer,
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
        I'm a skilled and versatile <strong> Full-Stack Developer </strong>
        with a <strong> 4 plus years </strong> experience in designing,
        developing, and maintaining web applications. Proficient in both
        <strong> Frontend and Backend Technologies</strong>, Deployed
        applications to multiple cloud-based production Env's, set up &
        maintained relational DB's, integrated third-party services. Here's my
        current tech stack:
      </BasicText>

      <Skills />
    </HeaderContainer>
  )
}
export default Header
