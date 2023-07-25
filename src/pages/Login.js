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

// Lokalny stan do przechowywania email i password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validation, setValidation] = useState([])
    const handleLogin = (e) => {
        e.preventDefault();
        // Wykonanie walidacji
        const sendOrNot = [];

        if (email.length === 0 || email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) === null) {
            sendOrNot.push("invalidEmail")
        }

        if (password.length < 6) {
            sendOrNot.push("invalidPassword")
        }

        setValidation([...sendOrNot])
    }


    // Przygotowanie obiektu z danymi usera
    const userData = {email, password};
    // Wywołanie akcji loginSuccess i przekazanie danych userra
    dispatch(loginSuccess(userData));


return (
    <section className="login">
        <div className="loginRegister__navBox">
            <LoginRegister/>
            <Navigation/>
        </div>
        <form className="loginRegister__form" onSubmit={handleLogin}>
            <h2 className="form__title">Zaloguj się</h2>
            <img src={separator} alt="separator" className="separator"/>
            <div className="form__inputs">
                <div className="inputs__email inputs">
                    <label htmlFor="email" className="email-label">Email</label>
                    <input type="text" id="email" name="email"
                           className={`${validation.includes('invalidEmail') ? 'invalid' : 'valid'}`}
                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <p className={`${validation.includes('invalidEmail') ? 'visible' : ''} error-message`}>Podany email
                        jest nieprawidłowy!</p>
                </div>
                <div className="inputs__password inputs">
                    <label htmlFor="password" className="password-label">Hasło</label>
                    <input type="password" id="password" name="password"
                           className={`${validation.includes('invalidPassword') ? 'invalid' : 'valid'}`}
                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <p className={`${validation.includes('invalidPassword') ? 'visible' : ''} error-message`}>Podane
                        hasło jest za krótkie!</p>
                </div>
            </div>
            <div className="form__buttons">
                <Link to="/rejestracja">
                    <button className="btn">Załóż konto</button>
                </Link>
                <button className="btn btn-active" type="submit">Zaloguj się</button>
            </div>
        </form>
    </section>
);
}




