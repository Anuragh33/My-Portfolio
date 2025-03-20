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
      <SubHeading>Hi, I'm</SubHeading>
      <RelativeContainer>
        <Heading>Anuragh.</Heading>
      </RelativeContainer>
      <BasicText>
        {' '}
        Experienced Full Stack Developer passionate about building scalable and
        reusable user interfaces using Next, React, and Typescript. Focused on
        developing secure, high-performance web applications, optimizing
        functionality, and integrating new features while working with modern
        architecture patterns, in an Agile environment. Beyond frontend
        development, I have strong backend expertise in Node JS, Django, Drizzle
        ORM, GraphQL and RESTful APIs, along with proficiency in SDLC and
        Git.Here's my current tech stack:
      </BasicText>

      <Skills />
    </HeaderContainer>
  )
}
export default Header
