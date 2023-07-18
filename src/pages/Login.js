import React from "react";
import separator from "../assets/Decoration.svg"
import LoginRegister from "../components/Home/HomeHeader/LoginRegister";
import Navigation from "../components/Home/HomeHeader/Navigation";

export default function LoginView() {
    return (
    <section className="login">
        <div className="login__navBox">
            <LoginRegister/>
            <Navigation/>
        </div>
        <form className="login__form">
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
                <button className="btn">Załóż konto</button>
                <button className="btn btn-active">Zaloguj się</button>
            </div>
        </form>

    </section>
)
}