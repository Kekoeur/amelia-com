import FormContact from "../../components/FormContact";
import contact_data from "../../data/contact.json"

import "./Contact.scss"

const Contact = () => {
    const IMG_PATH = process.env.PUBLIC_URL + "/assets/";
    const main = contact_data.main;
    const sub = contact_data.sub;

    /*        {main && <Article data={main}></Article>}
        {Object.keys(sub).map((elt) => (
            <Article data={sub[elt]}></Article>
        ))}
    */
    return ( 
    <>
        <section className="sub">
            <div className="sub__img">
            <img src={IMG_PATH+sub[0].picture[0]} alt={sub[0].picture[1]} title={sub[0].picture[2]} />
                <div className="overlay">
                    <h2>{sub[0].title}</h2>
                </div>
            </div>
            <article className="sub__content">
                {Object.keys(sub[0].content).map((elt) => (
                    <p key={elt}>{sub[0].content[elt]}</p>
                ))}
                <FormContact />
            </article>
        </section>
    </>
    )
}

export default Contact;