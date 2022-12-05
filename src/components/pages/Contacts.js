import Header from "./../../components/header/Header";

const Contacts = () => {
    return ( 
        <>
            <Header/>
            <main className="contacts">
                <div className="wrapper contacts__wrapper">
                    <h1 className="title-1">Contacts</h1>
                    <ul className="contact-list">
                        <li className="contact-list__item">
                            <h2 className="title-2">Location</h2>
                            <p>Kazan, Russia</p>
                        </li>
                        <li className="contact-list__item">
                            <h2 className="title-2">Telegram / WhatsApp</h2>
                            <p><a href="tel:+79991627806">+7 (999) 162-78-06</a></p>
                        </li>
                        <li className="contact-list__item">
                            <h2 className="title-2">Email</h2>
                            <p><a href="mailto:">anastasiapv1004@gmail.com</a></p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
        
     );
}
 
export default Contacts;