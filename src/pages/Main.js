import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './home/Homepage';

const Main = props => (
    <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Homepage />}/>
    </Routes>
)

export default Main;