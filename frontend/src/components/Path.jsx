import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import {Session} from 'react-session-api';
import '../assets/css/index.css';
import SignUp from "./Registration/signUp";
import reportWebVitals from "../reportWebVitals";

const Path = () => {
    return (
        <Router>
            <Routes>
                <Route path="/signUp" element={<SignUp />} />
            </Routes>
        </Router>
    );
}

reportWebVitals();

export default Path;