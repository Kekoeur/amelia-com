import { IMG_PATH } from "../App";

import Pattern from "./svg/Pattern";

const Title = () => {
  
  return (
    <section className="title">
      <div className="title__content container contained">
        <img src={IMG_PATH + "photo.jpg"} alt="alt" title="title" />
        <div className="overlay">
            <h1 className="title">
            Catégorie.
            </h1>
            <h2 className="sub_title">
            Texte du titre un peu plus long.
            </h2>
        </div>
        <div className="pattern">
            <Pattern></Pattern>
        </div>
      </div>
    </section>
  );
};

export default Title;
