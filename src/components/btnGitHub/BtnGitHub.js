import "./style.css";
import gitHub2 from "./../btnGitHub/gitHub2.svg";

const BtnGitHub = ({link}) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={gitHub2} alt="gitHub2"/>
                GitHub repo
        </a>
     );
}
 
export default BtnGitHub;