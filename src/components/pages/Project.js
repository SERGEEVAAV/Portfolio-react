import { useParams } from "react-router-dom";

import BtnGitHub from "../btnGitHub/BtnGitHub";
import { projects } from "../../helpers/projectList";

import pets from "./../../img/project/pets.jpg";



const Project = () => {

   const {id} = useParams();
   const project = projects[id];

   console.log(project);

    return (
        <div>
           
            <main className="project">
                <div className="wrapper project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <img src={project.bigImg} className="project-details__cover" alt={project.title}/>
                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink && (<BtnGitHub link={project.gitHubLink}/>)}

                    
                </div>
            </main>  
        </div>         
     );
}
 
export default Project;