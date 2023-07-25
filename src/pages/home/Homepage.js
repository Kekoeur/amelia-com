import data from "../../data/data.json"

import Section from "../../components/Section/Section";
import Divider from "../../components/Divider";
import Title from "../../components/Title";
import ArticleOne from "../../components/Article/ArticleOne";
import ArticleTwo from "../../components/Article/ArticleTwo";
import FooterImg from "../../components/FooterImg";

import "./Homepage.scss"

const Homepage = () => {

    /*        {main && <Article data={main}></Article>}
        {Object.keys(sub).map((elt) => (
            <Article data={sub[elt]}></Article>
        ))}
    */
    return ( 
    <>
        <Title data={data.heading}></Title>
        <Section data={data["section-one"]}></Section>
        <Divider></Divider>
        <ArticleOne></ArticleOne>
        <ArticleTwo revert="true"></ArticleTwo>
        <Divider></Divider>
        <ArticleOne revert="true"></ArticleOne>
        <ArticleTwo></ArticleTwo>
        <Divider></Divider>
        <FooterImg></FooterImg>
    </>
    )
}

export default Homepage;