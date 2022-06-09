import React from "react";
import { Routes , Route, BrowserRouter } from 'react-router-dom';
import Repositories from "./Repositories/index";
import Home from './Home/index';

export default function Router() {
    return(
       <BrowserRouter>
        <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/repositories' exact element={<Repositories/>} />
        </Routes>
        </BrowserRouter>
    )
};

