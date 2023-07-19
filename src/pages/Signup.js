import React, {useState} from "react";
import separator from "../assets/Decoration.svg"
import Navigation from "../components/Home/HomeHeader/Navigation";
import LoginRegister from "../components/Home/HomeHeader/LoginRegister";
import {Link} from "react-router-dom";

export default function SignUp() {
    const [loader, setLoader] = useState("loading")

    return (
    <section className="Register">
        <div className="loginRegister__navBox">
            <LoginRegister/>
            <Navigation/>
        </div>
        <form className="loginRegister__form">
            <h2 className="form__title">Załóż konto</h2>
            <img src={separator} alt="separator" className="separator" onLoad={() => setLoader('loaded')}/>
            {loader === 'loaded' ? <>
                <div className="form__inputs">
                    <div className="inputs__email inputs">
                        <label htmlFor="email" className="email-label">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="inputs__password inputs">
                        <label htmlFor="password" className="password-label">Hasło</label>
                        <input type="text" id="password" name="password"/>
                    </div>
                    <div className="inputs__passwordRepeat inputs">
                        <label htmlFor="passwordRepeat" className="password-label">Powtórz hasło</label>
                        <input type="text" id="passwordRepeat" name="passwordRepeat"/>
                    </div>
                </div>
                <div className="form__buttons">
                    <Link to="/logowanie"><button className="btn">Zaloguj się</button></Link>
                    <button className="btn btn-active">Załóż konto</button>
                </div>
            </> : <></>}


        </form>

    </section>
    )
}