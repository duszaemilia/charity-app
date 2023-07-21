import React from "react";
import {Link} from "react-router-dom";
import LoginRegister from "./HomeHeader/LoginRegister";
import Navigation from "./HomeHeader/Navigation";
import separator from "../../assets/Decoration.svg"
import heroImage from "../../assets/Home-Hero-Image.jpg"
// import {useDispatch} from "react-redux";
// import {logged} from "../../redux/authSlice";

export default function HomeHeader() {
    //przykład użycia
    // const dispatch = useDispatch()
    // const handleLogin = () => {
    //     dispatch(logged())
    // }
    return (
        <header className="headerContainer">
            <div className="navBox">
                <LoginRegister/>
                <Navigation/>
            </div>
            <div className="heroContainer" style={{backgroundImage: `url(${heroImage})`}}>
                <div className="header__info">
                    <h2 className="welcome-text">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className="separator" src={separator} alt="separator"/>
                    <Link to="/logowanie">
                        <button className="btn btn-active btn-big">ODDAJ<br/>RZECZY</button>
                    </Link>
                    <Link to="/logowanie">
                        <button className="btn btn-active btn-big">ZORGANIZUJ<br/>ZBIÓRKĘ</button>
                    </Link>
                </div>
                {/*przykład użycia*/}
                {/*<button onClick={handleLogin}>Log</button>*/}
            </div>


        </header>
    )
}