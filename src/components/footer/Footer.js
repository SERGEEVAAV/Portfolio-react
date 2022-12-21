import instagram from "./../../img/instagram.svg";
import twitter from "./../../img/twitter.svg";
import vk from "./../../img/vk.svg";
import gitHub from "./../../img/gitHub.svg";
import linkedIn from "./../../img/linkedIn.svg";


import "./../footer/style.css";

const Footer = () => {
    return ( 
        <footer className="footer">
          <div className="wrapper footer__wrapper">
            <ul className="social">
              <li className="social__item"><a href="#!"><img src={vk} className="icon-btn" alt="vk"/></a></li>
              <li className="social__item"><a href="#!"><img src={instagram} className="icon-btn" alt="instagram"/></a></li>
              <li className="social__item"><a href="#!"><img src={twitter} className="icon-btn" alt="twitter"/></a></li>
              <li className="social__item"><a href="https://github.com/SERGEEVAAV"><img src={gitHub} className="icon-btn" alt="gitHub"/></a></li>
              <li className="social__item"><a href="#!"><img src={linkedIn} className="icon-btn" alt="linkedIn"/></a></li>
            </ul>
            <div className="copyright">
              <p>© 2022 Sergeeva  Anastasia</p>
            </div>
          </div>
                                               
    </footer>
     );
}
 
export default Footer;