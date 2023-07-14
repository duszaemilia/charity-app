import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Signup/>}/>
                <Route path="/wylogowano" element={<Logout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
