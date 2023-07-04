import home_data from "../../data/home.json"

import Article from "../../components/Article";

import "./Homepage.scss"

const Homepage = () => {
    const IMG_PATH = process.env.PUBLIC_URL + "/assets/";
    const main = home_data.main;
    const sub = home_data.sub;
    const last = home_data.last;

    /*        {main && <Article data={main}></Article>}
        {Object.keys(sub).map((elt) => (
            <Article data={sub[elt]}></Article>
        ))}
    */
    return ( 
    <>
        <section className="main">
            <div className="main__img">
                <img src={IMG_PATH+main.picture[0]} alt={main.picture[1]} title={main.picture[1]} />
                <div className="overlay">
                    <h1>{main.title.h1}</h1>
                    <h2>{main.title.p}</h2>
                </div>
            </div>
            <article className="main__content">
                {Object.keys(main.content).map((elt) => (
                    <p key={elt}>{main.content[elt]}</p>
                ))}
            </article>
        </section>
        <section className="sub">
            <div className="sub__img">
            <img src={IMG_PATH+sub.picture[0]} alt={sub.picture[1]} title={sub.picture[1]} />
                <div className="overlay">
                    <h2>{sub.title}</h2>
                </div>
            </div>
            <article className="sub__content">
                {Object.keys(sub.content).map((elt) => (
                    <p key={elt}>{sub.content[elt]}</p>
                ))}
            </article>
        </section>
        <section className="last">
            <div className="last__img">
            <img src={IMG_PATH+last.picture[0]} alt={last.picture[1]} title={last.picture[2]} />
                <div className="overlay">
                    <h2>{last.title}</h2>
                </div>
            </div>
            <article className="last__content">
                {Object.keys(last.content).map((elt) => (
                    <p key={elt}>{last.content[elt]}</p>
                ))}
            </article>
        </section>
    </>
    )
}

export default Homepage;