import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import FunctionComponent from "./FunctionComponent";
import girasol from '../img/girasol.png'
export default function NavBar(){

    return(
        
            <div className="divprincipal">
                <ul className="ulNavbar">
                    <FunctionComponent/>
                    <li className="liNavbar">
                    <a href="#"><p></p></a>
                    </li>
                    <li className="liNavbar">
                        <a href="#"><p>ALBUMS</p></a>
                    </li>
                    <li className="liNavbar">
                    <a href="#"><p>FEATS</p></a>
                    </li>
                </ul>                
            </div>
      
    )
}