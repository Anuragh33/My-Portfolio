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
        I am a skilled and versatile <strong> Full-Stack Developer </strong>
        with a <br />
        <strong> 4 plus years </strong> experience in designing, developing, and
        maintaining web applications. <br />
        Proficient in both <strong>Frontend and Backend Technologies</strong>,
        Deployed applications to multiple cloud-based production environments,
        set up and maintained a relational database system, integrated
        third-party services. Here's my current tech stack:
      </BasicText>

      <Skills />
    </HeaderContainer>
  )
}
export default Header
