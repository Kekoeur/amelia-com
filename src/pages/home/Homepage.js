import home_data from "../../data/home.json"

import Divider from "../../components/Divider";
import Title from "../../components/Title";
import ArticleOne from "../../components/Article/ArticleOne";
import ArticleTwo from "../../components/Article/ArticleTwo";
import FooterImg from "../../components/FooterImg";

import "./Homepage.scss"

const Homepage = () => {

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
        <Title></Title>
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