import girasol from '../img/girasol.png';
import React from 'react';
import { render } from 'react-dom';
export default function FunctionComponent() {
    const imagen = girasol;
    return (
      
        <img src={girasol} className="logogirasol"/>
      
    )

}
