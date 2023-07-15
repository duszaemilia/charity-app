import React from "react";
import separator from "../../assets/Decoration.svg"
import {Link, Route, Routes} from "react-router-dom";
import Foundations from "./Foundations";
import Organizations from "./Organizations";

export default function HomeWhoWeHelp() {
    return (
        <section>
            <h2>Komu pomagamy?</h2>
            <img src={separator} alt="separator" className="separator"/>
            <nav className="whoWeHelp__navigation">
                <Link to="/fundacje" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn btn-active">Fundacjom</button>
                </Link>
                <Link to="/organizacje" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn btn-active">Organizacjom<br/>pozarządowym</button>
                </Link>
                <Link to="/" className="whoWeHelp__link">
                    <button className="whoWeHelp__button btn btn-active">Lokalnym<br/>zbiórkom</button>
                </Link>
            </nav>
            <p className="whoWeHelp__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus adipisci amet deserunt fugit id, illo ipsam ipsum
                nam natus quam quisquam repellendus totam velit vero
                voluptate voluptatibus?
            </p>
            <Routes>
                <Route path="/fundacje" element={<Foundations/>}/>
                <Route path="/organizacje" element={<Organizations/>}/>
            </Routes>
        </section>
    )
}