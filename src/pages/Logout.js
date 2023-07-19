import React, {useState} from "react";
import separator from "../assets/Decoration.svg";
import LoginRegister from "../components/Home/HomeHeader/LoginRegister";
import Navigation from "../components/Home/HomeHeader/Navigation";
import {Link} from "react-router-dom";

export default function Logout() {
    const [loader, setLoader] = useState("loading")

    return (
        <section className="logout">
            <div className="loginRegister__navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <form className="loginRegister__form">
                <h2 className="form__title">Wylogowanie nastąpiło pomyślnie!</h2>
                <img src={separator} alt="separator" className="separator" onLoad={() => setLoader('loaded')}/>
                {loader === 'loaded' ? <>
                    <div className="logout-button">
                        <Link to="/"><button className="btn btn-active">Strona główna</button></Link>
                    </div>
                </> : <></>}
            </form>
        </section>
    )
}