import { useEffect, useState, useRef } from "react";

import { IMG_PATH } from "../App";

import TriangleBottom from "./svg/TriangleBottom";
import TriangleTop from "./svg/TriangleTop";

const Divider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [triangleStyle, setTriangleStyle] = useState(0);
  const sectionRef = useRef(null);

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
  
    const triangleStyle = -60 + percent/2;
    setTriangleStyle(triangleStyle);
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
    <section className="divider" ref={sectionRef}>
      <div className="divider__container">
        <img src={IMG_PATH + "photo.jpg"} alt="alt" title="title" />
        <p className="overlay">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda tempore qui molestiae voluptates! Molestias
          delectus quis, veniam molestiae veritatis nostrum ab.
        </p>
        <TriangleTop style={{style: triangleStyle, fill:"#89D4ED", stroke:"none", classname:"top-tri"}}/>
        <TriangleBottom style={-100 -triangleStyle} />
      </div>
    </section>
  );
};

export default Divider;
