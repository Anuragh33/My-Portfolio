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
        I am a skilled and versatile <strong>Full-Stack Developer</strong> with
        <strong>4 plus years</strong> of experience in designing, developing,
        and maintaining web applications. Proficient in both front-end and
        back-end technologies, I have a deep understanding of the full software
        development lifecycle, from initial planning and design to deployment
        and maintenance....Here's my current tech stack:
      </BasicText>
      <Skills />
    </HeaderContainer>
  )
}
export default Header
