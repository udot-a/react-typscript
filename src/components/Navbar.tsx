import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className="nav-wrapper #00897b teal darken-1">
                    <span className="brand-logo">{"React + Typescript"}</span>

                    <a
                        href="#!"
                        data-target="mobile-demo"
                        className={`sidenav-trigger`}
                    >
                        <i className="material-icons">menu</i>
                    </a>

                    <ul
                        id="nav-mobile"
                        className="right hide-on-med-and-down"
                    >
                        <li>
                            <NavLink to={"/"}>
                                {"Список дел"}
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/about"}>
                                {"Информация"}
                            </NavLink>
                        </li>
                    </ul>

                </div>
            </nav>

            <ul
                className={"sidenav #00897b teal darken-1"}
                id={"mobile-demo"}
            >
                <li>
                    <NavLink
                        to={"/"}
                        className={"sidenav-close"}
                    >
                        {"Список дел"}
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to={"/about"}
                        className={"sidenav-close"}
                    >
                        {"Информация"}
                    </NavLink>
                </li>
            </ul>
        </>


    )
}