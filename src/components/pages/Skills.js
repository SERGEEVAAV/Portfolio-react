import "./../pages/style.css";

const Skills = () => {
    return ( 
        <main className="skills">
                <div className="wrapper contacts__wrapper">
                    <h1 className="title-1">Skills</h1>
                    <ul className="contact-list">
                        <li className="contact-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p className="contact-list__text">JavaScript, ReactJS,  HTML, CSS, SASS/SCSS, Webpack</p>
                        </li>
                        {/* <li className="contact-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p className="contact-list__text"><a href="tel:+79991627806">+7 (999) 162-78-06</a></p>
                        </li> */}
                        
                    </ul>
                </div>
            </main>
     );
}
 
export default Skills;