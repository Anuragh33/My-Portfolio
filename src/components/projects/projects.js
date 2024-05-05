import { SectionHeading } from '../App.styled'
import ProjectCard from './projectcard'
import forkify from '../../assets/forkify.png'
import bankofanra from '../../assets/bankofanra.png'
import seethroughworld from '../../assets/seethroughworld.png'
import pizzainseconds from '../../assets/pizzainseconds.png'
import portfolio from '../../assets/portfolio.png'
import sillyParadise from '../../assets/sillyParadise.png'

const Projects = () => {
  const projects = [
    {
      img: sillyParadise,
      title: 'Silly Paradise.',
      skills: 'ReactJS, JavaScript, Redux, Supabase, Styled Components',
      description: `Created a dynamic hospitality website using React to seamlessly blend stunning design with intuitive functionality.`,
      gitLink: 'https://github.com/Anuragh33/sillyparadise',
      link: 'https://sillyparadise.netlify.app',
    },
    {
      img: pizzainseconds,
      title: 'Pizza In Seconds.',
      skills:
        'ReactJS, JavaScript, GitHub Actions, Databases, TailwindCSS, Vite',
      description: `A Simple Ecommerce Pizza website where a user can buy his/her favourite pizza deliverd to their doorstep  :).`,
      gitLink: 'https://github.com/Anuragh33/pizzaInSeconds',
      link: 'https://pizzainseconds.netlify.app/',
    },
    {
      img: seethroughworld,
      title: 'SeeThroughWorld.',
      skills: 'JavaScript, ReactJS, Mock API',
      description:
        'See Through World is a website where you can keep notes about the city or, to keep track of all the places on the world map that you have visited. 🤓 This is a test application running on mock Api.',
      gitLink: 'https://github.com/Anuragh33/seethroughworld/tree/main',
      link: 'https://seethroughworld.netlify.app',
    },
    {
      img: forkify,
      title: 'breathe.',
      skills: 'ReactJS, Express, Vercel, TailwindCSS, Supabase',
      description:
        'An IoT dashboard designed to display sensor readings from an Arduino in an easy to understand way accompanied by a chart so that users can visualise trends.',
      gitLink: 'https://github.com/CO2Sesnsor/breathe.',
      link: 'https://breathe-front-end.vercel.app/',
    },
    {
      img: bankofanra,
      title: 'hasin.io',
      skills: 'ReactJS, Styled Components, Vercel, Figma',
      description:
        'Figured it was about time I made a portfolio to show my skills and stand out. ',
      gitLink: 'https://github.com/hasin202/personal-portfolio',
      link: '',
    },
    {
      img: portfolio,
      title: 'Anuragh.',
      skills: 'ReactJS, Styled Components, Netlify',
      description: 'Time to introduce myself. So,I made a portfolio. ',
      gitLink: 'https://github.com/Anuragh33/My-Portfolio',
      link: 'https://anuraghportfolio.netlify.app/',
    },
  ]
  return (
    <>
      <SectionHeading padding="140px">My Projects</SectionHeading>
      {projects.map((project, index) => {
        return <ProjectCard {...project} key={index} />
      })}
    </>
  )
}

export default Projects
