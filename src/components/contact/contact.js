import {} from './contact.styled'
import { SectionHeading, BasicText } from '../App.styled'
import { ContactFlexContainer, ContactLink } from './contact.styled'

const Contact = () => {
  return (
    <div id="contact">
      <SectionHeading padding="80px">Get in touch</SectionHeading>
      <ContactFlexContainer>
        <BasicText align="center">
          If there are any intriguin' opportunities or just feelin' like
          droppin' a "hey", my inbox is the place to be!
        </BasicText>
        <ContactLink href="mailto: anuraghragidimilli@icloud.com">
          Hola.
        </ContactLink>
      </ContactFlexContainer>
    </div>
  )
}

export default Contact
