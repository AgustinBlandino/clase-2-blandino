import React from 'react';

import { useState } from 'react';

export default function Products(props){

    const [qty,setQTY] = useState(1);
    const stock = "5"
    
    function controloStock(){
         if(qty<1){
            alert("No se puede elegir menos de un producto!")
         }
         else{
            setQTY(qty-1) 
         }
        }
        function controlStock(){
            if(qty>stock){
               alert("Limite de productos por falta de stock!")
            }
            else{
               setQTY(qty+1) 
            }
           }

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
                    <button type='button' className="btnproductos" onClick={controlStock}>+</button>
                    <input type="number" disabled value={qty}/>
                    <button type='button' className="btnproductos" onClick={controloStock}>-</button>
                    <button type="submit" className="carrito">CARRITO</button>
                </form>
            </div>
        </div>
    )

  
}