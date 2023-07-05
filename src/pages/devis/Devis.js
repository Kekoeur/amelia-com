import FormDevis from "../../components/FormDevis";
import devis_data from "../../data/devis.json"

import "./Devis.scss"

const Devis = () => {
    const IMG_PATH = process.env.PUBLIC_URL + "/assets/";
    const main = devis_data.main;
    const last = devis_data.sub;

    /*        {main && <Article data={main}></Article>}
        {Object.keys(sub).map((elt) => (
            <Article data={sub[elt]}></Article>
        ))}
    */
    return ( 
    <>
        <section className="last">
            <div className="last__img">
            <img src={IMG_PATH+last[0].picture[0]} alt={last[0].picture[1]} title={last[0].picture[2]} />
                <div className="overlay">
                    <h2>{last[0].title}</h2>
                </div>
            </div>
            <article className="last__content">
                {Object.keys(last[0].content).map((elt) => (
                    <p key={elt}>{last[0].content[elt]}</p>
                ))}
            </article>
        </section>
        <section className="last revert">
            <div className="last__img">
            <img src={IMG_PATH+last[1].picture[0]} alt={last[1].picture[1]} title={last[1].picture[2]} />
                <div className="overlay">
                    <h2>{last[1].title}</h2>
                </div>
            </div>
            <article className="last__content">
                {Object.keys(last[1].content).map((elt) => (
                    <p key={elt}>{last[1].content[elt]}</p>
                ))}
                <FormDevis />
            </article>
        </section>
    </>
    )
}

export default Devis;