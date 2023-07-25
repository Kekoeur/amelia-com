import { useEffect, useState, useRef } from "react";

import { IMG_PATH } from "../../App";

import TriangleTop from "../svg/TriangleTop";

import anime from 'animejs/lib/anime.es.js';

const Section = ({data}) => {
    console.log(data)
    return (
    <section className="section">
        <article className="article">
            <div className="article__image">
            <div className="img" style={{backgroundImage: `url(${IMG_PATH}${data.img[0]})`}} aria-label="image description" data-parallax='{
                "background-position-x": ["-300px","-100px"]
            }'></div>
            <div className="box" data-parallax='{
                "top": ["-105%","-100%"]
            }'>
                <TriangleTop style={{fill:"none", stroke:"#000", classname:"top-tri-wire"}}/>
            </div>
            </div>
            <div className="article__content container contained">
            <h1 className="title">
            </h1>
            <p className="sub_title">
                {data.content[0]}
            </p>

            </div>
        </article>
        <div className="corner-tri">
        <div className="box" data-parallax='{
                "right": ["10%","0%"]
            }'>
                <TriangleTop style={{fill:"#0073b6b3", stroke:"none", classname:"tri-moved"}}/>
            </div>
            <TriangleTop style={{fill:"#89D4ED", stroke:"none", classname:"tri-fixed"}}/>
        </div>
        <article className="article">
            <div className="mid__image">
                <div className="img" style={{backgroundImage: `url(${IMG_PATH}${data.img[1]})`}} aria-label="image description" data-parallax='{
                "background-position-x": ["-300px","-100px"]
                }'></div>
            </div>
            <div className="article__content container contained">
            <h1 className="title">
            </h1>
            <p className="sub_title">
                {data.content[1]}
            </p>
            </div>
        </article>
        <div className="last__image">
            <div className="back__img" style={{backgroundImage: `url(${IMG_PATH}${data.img[2]})`}} aria-label="image description" data-parallax='{
            }'></div>
            <div className="front__img" style={{backgroundImage: `url(${IMG_PATH}${data.img[3]})`}} aria-label="image description" data-parallax='{
            }'></div>
        </div>
    </section>
    )
}

export default Section;