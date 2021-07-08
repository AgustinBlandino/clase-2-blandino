import React from "react";
import FunctionComponent from "./FunctionComponent";
import girasol from '../img/girasol.png'
export default function NavBar(){

    return(
        <nav className="container">
            <div className="divprincipal">
                <ul>
                <FunctionComponent/>
                    <li>
                    <a href="#"><p>Sobre Mi</p></a>
                    </li>
                    <li>
                        <a href="#"><p>Proyectos</p></a>
                    </li>
                    <li>
                    <a href="#"><p>Trayectoria</p></a>
                    </li>
                    
                </ul>
                
            </div>
        </nav>
    )
}