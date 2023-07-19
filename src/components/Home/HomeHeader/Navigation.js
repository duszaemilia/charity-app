import React from "react";
import {Link} from "react-scroll";
import {useSelector} from "react-redux";

export default function Navigation() {
    const auth = useSelector(store => store.auth);

    console.log(auth)
    return (
        <nav className="mainNav">
            <Link
                to="#"
                duration={500}
                smooth={true}
            >
                <button className="btn btn-active">Start</button>
            </Link>
            <Link
                to="simpleSteps"
                duration={500}
                smooth={true}
            >
                <button className="btn">O co chodzi?</button>
            </Link>
            <Link to="aboutUs"
                  duration={500}
                  smooth={true}
            >
                <button className="btn">O nas</button>
            </Link>
            <Link to="whoWeHelp"
                  duration={500}
                  smooth={true}
            >
                <button className="btn">Fundacja i organizacje</button>
            </Link>
            <Link to="contact"
                  duration={500}
                  smooth={true}
            >
                <button className="btn">Kontakt</button>
            </Link>
        </nav>
    )
}