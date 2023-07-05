import about_data from "../../data/about.json"

import "./About.scss"

const About = () => {
    const IMG_PATH = process.env.PUBLIC_URL + "/assets/";
    const main = about_data.main;
    const sub = about_data.sub;

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
            </article>
        </section>
        <section className="sub">
            <div className="sub__img">
            <img src={IMG_PATH+sub[1].picture[0]} alt={sub[1].picture[1]} title={sub[1].picture[2]} />
                <div className="overlay">
                    <h2>{sub[1].title}</h2>
                </div>
            </div>
            <article className="sub__content">
                {Object.keys(sub[1].content).map((elt) => (
                    <p key={elt}>{sub[1].content[elt]}</p>
                ))}
            </article>
        </section>
        <section className="sub">
            <div className="sub__img">
            <img src={IMG_PATH+sub[2].picture[0]} alt={sub[2].picture[1]} title={sub[2].picture[2]} />
                <div className="overlay">
                    <h2>{sub[2].title}</h2>
                </div>
            </div>
            <article className="sub__content">
                {Object.keys(sub[2].content).map((elt) => (
                    <p key={elt}>{sub[2].content[elt]}</p>
                ))}
            </article>
        </section>
    </>
    )
}

export default About;