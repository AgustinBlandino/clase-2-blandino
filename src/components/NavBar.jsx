import React from "react";

export default function NavBar(){

    return(
        <div className="container">
            <div className="divprincipal">
                <ul className="nb_routes flex flow-r">
                    <li className="nb_route">
                    <a href=""><p>Sobre Mi</p></a>
                    </li>
                    <li className="nb_route">
                        <a href=""><p>Proyectos</p></a>
                    </li>
                    <li className="nb_route">
                    <a href=""><p>Trayectoria</p></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}