import { projects } from "../../helpers/projectsList";
import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGinHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt={projects.gitHubLink} />
      GitHub repo
    </a>
  );
};

export default BtnGinHub;
