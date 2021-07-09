import React from 'react';

import { useState } from 'react';

export default function Products(props){

    const [qty,setQTY] = useState(1);

    return(
        <div className="productos">
            <div className="tituloprod">
                <h3 className="titulo">{props.title}</h3>
            </div>
            <div className="imagenproducto">
                <img src={props.image} alt="aaaaaaaaa"/>
            </div>
            <div className="precioproducto">
                <p className="precio">${props.price}</p>
            </div>
            <div className="btnmas">
                <form onSubmit={(data)=>{props.addToCart(data,props)}}>
                    <button type='button' className="btnproductos" onClick={()=>{setQTY(qty+1)}}>+</button>
                    <input type="number" disabled value={qty}/>
                    <button type='button' className="btnproductos" onClick={()=>{setQTY(qty-1)}}>-</button>
                    <button type="submit" className="carrito">CARRITO</button>
                </form>
            </div>
            
        </div>
    )
}