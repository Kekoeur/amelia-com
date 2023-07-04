import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './home/Homepage';

const Main = props => (
    <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Homepage />}/>
        <Route path={process.env.PUBLIC_URL + "/mes-valeurs"} />
        <Route path={process.env.PUBLIC_URL + "/mes-services"} />
        <Route path={process.env.PUBLIC_URL + "/devis"} />
        <Route path={process.env.PUBLIC_URL + "/a-propos"} />
        <Route path={process.env.PUBLIC_URL + "/contact"} />
    </Routes>
)

export default Main;