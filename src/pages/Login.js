import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loginSuccess} from "../redux/authSlice";
import {Link} from "react-router-dom";
import Navigation from "../components/Home/HomeHeader/Navigation";
import LoginRegister from "../components/Home/HomeHeader/LoginRegister";
import separator from "../assets/Decoration.svg"


export default function Login() {

    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    const handleLogin = () => {
        const userData = {name: "xyz", email: "xyz@xyz.com"};
        dispatch(loginSuccess(userData));
    };

    return (
        <section className="login">
            <div className="loginRegister__navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <form className="loginRegister__form">
                <h2 className="form__title">Zaloguj się</h2>
                <img src={separator} alt="separator" className="separator"/>
                <div className="form__inputs">
                    <div className="inputs__email inputs">
                        <label htmlFor="email" className="email-label">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="inputs__password inputs">
                        <label htmlFor="password" className="password-label">Hasło</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                </div>
                <div className="form__buttons">
                    <Link to="/rejestracja">
                        <button className="btn">Załóż konto</button>
                    </Link>
                    <button className="btn btn-active" onClick={handleLogin}>
                        Zaloguj się
                    </button>
                </div>
            </form>
        </section>
    );
}




