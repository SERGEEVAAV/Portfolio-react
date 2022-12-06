import { NavLink } from "react-router-dom";


import "./../project/style.css";

const Project = ({title, img, id}) => {
    return (
        <NavLink to={`/project/${id}`}>
            <li className="project project-details__cover">
                <img src={img} className="project__img" alt={title}/>
                {/* {id} */}
                <h3 className="project__title">{title}</h3>
            </li>
        </NavLink> 
        
     );
}
 
export default Project;