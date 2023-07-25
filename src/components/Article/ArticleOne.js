import { useEffect, useState, useRef } from "react";

import { IMG_PATH } from "../../App";

import TriangleLeft from "../svg/TriangleLeft";

import anime from 'animejs/lib/anime.es.js';

const ArticleOne = ({ revert }) => {
  const articleClasses = `article article-one${revert ? ' revert' : ''}`;

  useEffect(() => {
    const parallaxElements = document.querySelectorAll("[data-parallax]");
    
    const parallaxSetup = (element, animetl) => {
      const bound = element.getBoundingClientRect();
      const wHeight = window.innerHeight;
      if (bound.top < wHeight && bound.bottom > 0) {
        animetl.seek(animetl.duration * ((wHeight - bound.top) / (wHeight + bound.height)).toFixed(3));
      } else {
        if (bound.top >= wHeight) {
          animetl.seek(0);
        } else if (bound.bottom <= 0) {
          animetl.seek(animetl.duration);
        }
      }
    };

    parallaxElements.forEach(element => {
      const animetl = anime.timeline({ autoplay: false });
      const properties = {
        targets: element,
        easing: "linear",
      };

      const parallaxData = element.getAttribute("data-parallax");
      const parallaxOptions = JSON.parse(parallaxData.replace(/'/g, "\""));

      Object.assign(properties, parallaxOptions);
      animetl.add(properties);

      const parallaxScrollTarget = element.getAttribute("parallax-scroll") || window;
      parallaxScrollTarget.addEventListener("resize", () => parallaxSetup(element, animetl));
      parallaxScrollTarget.addEventListener("scroll", () => parallaxSetup(element, animetl));

      setTimeout(() => parallaxSetup(element, animetl), 50);
    });
  }, [revert]);

  return (
    <section className="section-article">
      <article className={articleClasses}>
        <div className="article__image">
          <div className="img" style={{backgroundImage: `url(${IMG_PATH}TCA03849.jpeg)`}} aria-label="image description" data-parallax='{
            "background-position-y": ["-80px","20px"]
          }'></div>
          <div className="box" data-parallax='{
            "top": ["-70%","-120%"]
          }'>
            <TriangleLeft />
          </div>
        </div>
        <div className="article__content container contained">
          <h1 className="title">
            Petit titre de n'importe quel taille on s'en fou donc on peut tester avec du long
          </h1>
          <p className="sub_title">
            Texte de l'article donc tres long si beosin. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem a pariatur vitae, quasi cumque quam omnis enim earum? Accusamus quam sapiente tempore ratione ducimus distinctio dolor rerum architecto ipsa earum! Sint dolorum consequatur, rerum vel possimus consectetur officia. Quo, quis! Numquam nihil facere iste ipsam vel aliquam, commodi tempora neque? Sunt distinctio saepe autem voluptate non delectus dolorem maiores provident quos nihil exercitationem quibusdam assumenda fuga quis quas voluptatum illum consectetur error, reiciendis laboriosam enim. Nisi obcaecati sit atque accusantium veritatis sed voluptas ullam, maiores accusamus a explicabo iure beatae esse saepe corrupti expedita modi provident illo repudiandae. Quaerat.
          </p>
        </div>
      </article>
    </section>
  );
};

export default ArticleOne;
