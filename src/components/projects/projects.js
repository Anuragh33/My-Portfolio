import { SectionHeading } from '../App.styled'
import ProjectCard from './projectcard'
import forkify from '../../assets/forkify.png'
import bankofanra from '../../assets/bankofanra.png'
import seethroughworld from '../../assets/seethroughworld.png'
import pizzainseconds from '../../assets/pizzainseconds.png'
import portfolio from '../../assets/portfolio.png'
import sillyParadise from '../../assets/sillyParadise.png'
import sillyParadise_customerPortal from '../../assets/sillyParadise_customerPortal.png'

const Projects = () => {
  const projects = [
    {
      img: sillyParadise_customerPortal,
      title: 'Silly Paradise Customer Portal.',
      skills: 'NextJS, ReactJS, Supabase, Tailwind CSS',
      description: `Welcome to Silly Paradise’s Customer Portal, your gateway to a delightful hospitality experience. Our portal offers an easy and seamless way for guests to explore a curated list of cozy cabins, each uniquely designed to ensure a memorable stay. `,
      gitLink: 'https://github.com/Anuragh33/sillyParadise_CustomerPortal',
      link: 'https://sillyparadisecustomerportal.vercel.app/',
    },
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
      description: `A simple ecommerce pizza website where a user can buy his/her favourite pizza deliverd to their doorstep  :).`,
      gitLink: 'https://github.com/Anuragh33/pizzaInSeconds',
      link: 'https://pizzainseconds.netlify.app/',
    },
    {
      img: seethroughworld,
      title: 'See Through World.',
      skills: 'JavaScript, ReactJS, Mock API',
      description:
        'See Through World is a website where you can keep notes about the city or, to keep track of all the places on the world map that you have visited. This is a app running on mock Api.',
      gitLink: 'https://github.com/Anuragh33/seethroughworld/tree/main',
      link: 'https://seethroughworld.netlify.app',
    },
    {
      img: forkify,
      title: 'Forkify.',
      skills: 'JavaScript, HTML, CSS, SASS, Forkify API',
      description:
        'Forkify is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.',
      gitLink: 'https://github.com/Anuragh33/Forkify-Project',
      link: 'https://spoonandforkk.netlify.app/',
    },
    {
      img: bankofanra,
      title: 'Bank of AnRa.',
      skills: 'JavaScript, CSS, Vercel, Figma',
      description:
        'A Virtual banking experience. It  has the option to log in to the account and use different functionalities, almost like in an actual bank. Credentials: ar;1111',
      gitLink: 'https://github.com/Anuragh33/Bank_of_Anuragh-Project',
      link: 'https://bankofanra.netlify.app',
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
