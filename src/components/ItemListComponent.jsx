import girasol from '../img/girasol.png';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { render } from 'react-dom';
export default function ItemListComponent() {
    const props =["YouTube","SoundCloud","Apple Music"]
    return (
    <div className="itemlist">
        <ul className="list-group list-group-flush">
        <li className="list-group-item"><a href="#" className="links">{props[0]}</a></li>
        <li className="list-group-item"><a href="#" className="links">{props[1]}</a></li>
        <li className="list-group-item"><a href="#" className="links">{props[2]}</a></li>
        
        </ul>
    </div> 
    )

}