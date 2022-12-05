import "./../project/style.css";
import pets from "./../../img/project/pets.jpg";

const Project = ({title, img}) => {
    return ( 
        <li className="project">
            <a href="./project-page.html"><img src={img} className="project__img" alt={title} width="570" height="700"/><h3 className="project__title">{title}</h3></a>
        </li>
     );
}
 
export default Project;