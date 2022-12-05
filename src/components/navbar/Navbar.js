import "./../navbar/style.css";

const Navbar = () => {
    return ( 
        <nav className="header__navigation">
                    <ul className="nav-list">
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link--active">Home</a></li>
                        <li className="nav-list__item"><a href="./index.html" className="nav-list__link nav-list__link">Projects</a></li>
                        <li className="nav-list__item"><a href="./skills.html" className="nav-list__link">Skills</a></li>
                        <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                    </ul>
                </nav>
     );
}
 
export default Navbar;