import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/*" element={<Home/>}/>
                <Route path="/logowanie" element={<Login/>}/>
                <Route path="/rejestracja" element={<Signup/>}/>
                <Route path="/wylogowano" element={<Logout/>}/>
            </Routes>
        </Router>
        </Provider>
    );
}

export default App;
