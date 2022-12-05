import Navbar from "../navbar/Navbar";
import "./style.css";

const Header = () => {
    return ( 
        <header className="header">
        <div className="wrapper header__wrapper">
            <div className="header__logo">
                <a href="./index.html"className="header__logo__title"><strong>Freelance</strong> portfolio</a>
            </div>           
           <Navbar/>                                             
        </div>
    </header>
     );
}
 
export default Header;