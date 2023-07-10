import home_data from "../../data/home.json"

import Divider from "../../components/Divider";
import Title from "../../components/Title";

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
        <Divider></Divider>
        <Divider></Divider>
    </>
    )
}

export default Homepage;