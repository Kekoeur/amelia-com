import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './home/Homepage';
import Valeur from './valeur/Valeur';
import Services from './services/Services';
import Devis from './devis/Devis';
import About from './about/About';
import Contact from './contact/Contact';

const Main = props => (
    <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Homepage />}/>
        <Route path={process.env.PUBLIC_URL + "/mes-valeurs"} element={<Valeur />}/>
        <Route path={process.env.PUBLIC_URL + "/mes-services"} element={<Services />}/>
        <Route path={process.env.PUBLIC_URL + "/devis"} element={<Devis />}/>
        <Route path={process.env.PUBLIC_URL + "/a-propos"} element={<About />}/>
        <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />}/>
    </Routes>
)

export default Main;