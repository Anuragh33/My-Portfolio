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
      title: 'Mock Banking App',
      skills: 'NextJS, TypeScript, Redux, Starling Bank API',
      description: ``,
      gitLink: 'https://github.com/hasin202/hasin-starling-test',
      link: 'https://youtu.be/I28c47rK5iA',
    },
    {
      img: pizzainseconds,
      title: 'Mates Royale.',
      skills:
        'NextJS, TypeScript, Prisma, GitHub Actions, Databases, TailwindCSS',
      description: `I saw a missing feature for a game I love playing so I made it :).
        
        If you just want to check out the site but don't play clash royale feel free to use my player tag: LGP89JU`,
      gitLink: 'https://github.com/hasin202/royale-mates',
      link: 'https://youtu.be/qiut9_YPQVg',
    },
    {
      img: seethroughworld,
      title: 'Object Alchemy.',
      skills: 'TypeScript, ReactJS, Formik, Express, Vercel, TailwindCSS',
      description:
        "A dummy data generator which leverages the openAI API to produce relevant content for you. Simply enter an example schema, some context information and you're done. Your dummy data will be with you in less than a minute",
      gitLink: 'https://github.com/hasin202/ObjectAlchemyFrontEnd',
      link: 'https://drive.google.com/file/d/1ag4tCa_ECGcDj-hUwQ9DXrHEmEfhqAIL/view?usp=sharing',
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
      skills: 'ReactJS, Styled Components, Vercel, Figma',
      description:
        'Figured it was about time I made a portfolio to show my skills and stand out. ',
      gitLink: 'https://github.com/hasin202/personal-portfolio',
      link: '',
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
