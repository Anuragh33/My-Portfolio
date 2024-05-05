import {
  CardImg,
  CardInfo,
  CardHeading,
  ProjectDescription,
  ProjectSkills,
} from "./Projects.styled";
import { Icon } from "../App.styled";
import github from "../../assets/GitHub.svg";
import open from "../../assets/open.svg";

const ProjectCard = ({ img, title, skills, description, gitLink, link }) => {
  return (
    <>
      <CardImg src={img} />
      <CardInfo>
        <CardHeading>{title}</CardHeading>
        <ProjectSkills>{skills}</ProjectSkills>
        <ProjectDescription>{description}</ProjectDescription>
        <a href={gitLink} target="-_blank">
          <Icon margin="20px" scale="120%" src={github} />
        </a>
        <a href={link} target="-_blank">
          <Icon scale="120%" src={open} />
        </a>
      </CardInfo>
    </>
  );
};

export default ProjectCard;
