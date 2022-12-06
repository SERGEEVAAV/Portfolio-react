
import "./../pages/style.css";

import Project from "../project/Project";

import { projects } from "../../helpers/projectList";

const Projects = () => {
    return (            
        <main className="project">
            <div className="wrapper project__wrapper">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((project, id)=> {
                        return (
                        <Project key={id} 
                                 title={project.title} 
                                 img={project.img}
                                 id={id}
                                />
                               
                        );

                        
                    })}
                    
                </ul>
            </div>

        </main>  
     
        
     );
}
 
export default Projects;