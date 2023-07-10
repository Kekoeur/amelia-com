import { useEffect, useState, useRef } from "react";

import { IMG_PATH } from "../../App";

import TriangleLeft from "../svg/TriangleLeft";

const ArticleOne = ({revert}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [triangleStyle, setTriangleStyle] = useState(0);
  const sectionRef = useRef(null);

  const articleClasses = `article${revert ? ' revert' : ''}`;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      calculateTrianglePosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      calculateTrianglePosition(scrollPosition);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollPosition]);

  const calculateTrianglePosition = () => {
    const sectionElement = sectionRef.current;
    const sectionTop = sectionElement.offsetTop;
    const sectionHeight = sectionElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const windowScrollPosition = window.scrollY;
  
    //const sectionMiddle = sectionTop + sectionHeight / 2
    //const sectionBottom = sectionTop + sectionHeight;
    //const distanceFromVisibleCenter = Math.abs(windowScrollPosition + windowHeight / 2 - sectionMiddle);
    //const distanceFromVisible = Math.abs(windowScrollPosition + windowHeight - sectionBottom);
    const distance = sectionTop + sectionHeight - windowScrollPosition - windowHeight;
    //let percent = (distanceFromVisibleCenter / (windowHeight / 2)) * 100;
    let percent = distance / windowHeight * 100;
    if(percent > 100) percent = 100;
  
    let triangleStyle = 25 - percent/2;
    if(triangleStyle < 0) triangleStyle = 0;
    setTriangleStyle(triangleStyle);
    console.log(triangleStyle)
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        calculateTrianglePosition();
      });
    });

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <section className="section-article" ref={sectionRef}>
        <article className={articleClasses}>
          <div className="article__image">
              <img src={IMG_PATH + "photo.jpg"} alt="alt" title="title" />
              <TriangleLeft style={{x:-80, y:triangleStyle}} />
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
