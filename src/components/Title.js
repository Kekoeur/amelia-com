import { IMG_PATH } from "../App";

import Pattern from "./svg/Pattern";

const Title = ({data}) => {
  
  return (
    <section className="title">
      <div className="title__content container contained">
        <img src={IMG_PATH + data.img} alt="alt" title="title" />
        <div className="overlay">
            <h1 className="title">
              {data.title}
            </h1>
            <h2 className="sub_title">
              {data.sub_title}
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
