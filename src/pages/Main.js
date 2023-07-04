import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './home/Homepage';

const Main = props => (
    <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/mes-valeurs" />
        <Route path="/mes-services" />
        <Route path="/devis" />
        <Route path="/a-propos" />
        <Route path="/contact" />
    </Routes>
)

export default Main;