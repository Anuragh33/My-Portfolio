import {
  HamburgerButton,
  MenuContainer,
  NavBar,
  DesktopNav,
} from './Menu.styled'
import { Icon } from '../App.styled'
import { useState } from 'react'
import CV from '../../assets/Resume.pdf'
import linkedin from '../../assets/linkedin.svg'
import githubnav from '../../assets/githubnav.svg'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const log = () => {
    setMenuOpen((prev) => !prev)
    console.log(menuOpen)
  }

  const scroll = () => {
    let e = document.getElementById('contact')
    e.scrollIntoView({
      block: 'start',
      behavior: 'smooth',
      inline: 'start',
    })
  }

  return (
    <>
      <MenuContainer>
        <HamburgerButton onClick={log}>
          <div className={menuOpen ? 'change' : ''}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </HamburgerButton>
        {menuOpen ? (
          <NavBar>
            <a href={CV} target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/anur3/">LinkedIn</a>
            <a href="https://github.com/anuragh33">GitHub</a>
            <a href={CV} onClick={scroll}>
              Contact
            </a>
          </NavBar>
        ) : (
          <></>
        )}
        <DesktopNav>
          <div>
            <a href="https://www.linkedin.com/in/anur3/">
              <Icon margin="20px" src={linkedin} />
            </a>
            <a href="https://github.com/anuragh33">
              <Icon src={githubnav} />
            </a>
          </div>
          <div>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="margin-right"
            >
              Resume
            </a>
            <a href={CV} onClick={scroll}>
              Contact
            </a>
          </div>
        </DesktopNav>
      </MenuContainer>
    </>
  )
}
export default Menu
