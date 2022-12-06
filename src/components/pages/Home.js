import promo from "./../../img/promo.png";
import "./../pages/style.css";

const Home = () => {
    return (  
        <div>          
                <div className="promo">
                <div className="wrapper promo__wrapper">
                    <div className="promo__content">
                        <h1 className="promo__title"><strong>Hi, my name is <em>Anastasia</em></strong><br/> a frontend developer, HTML-coder</h1>
                        <p className="promo__text">with passion for learning and creating.</p>
                        <div className="promo__buttons">
                            <a href="#!" className="btn">Download CV</a>
                            
                        </div>
                    </div>
                    <img src={promo} className="promo__image" alt="The Design Thinking superpowers"/>
                </div>
            </div>
        </div>
        );
}
 
export default Home;