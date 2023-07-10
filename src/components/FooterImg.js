import { IMG_PATH } from "../App";

const FooterImg = () => {
  
  return (
    <section className="footer">
      <div className="footer__content container contained">
        <img src={IMG_PATH + "photo.jpg"} alt="alt" title="title" />
        <div className="overlay">
            <h1 className="title">
            Petit titre mi long
            </h1>
            <p className="sub_title">
            Texte du titre plus ou moins long. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ab!
            </p>
            <a className="button" href="/contact">Bouton</a>
        </div>
      </div>
    </section>
  );
};

export default FooterImg;
