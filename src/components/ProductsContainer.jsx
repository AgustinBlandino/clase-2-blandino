import React from 'react';
import { useState } from 'react';
import Products from './Products';
import strato1 from '../img/strato1.jpg';

export default function ProductsContainer(){
    const image =strato1;
    const [cart,setCart] = useState([])

    const getProdcut = (form,producto)=>{
        console.log(form);
        console.log(producto)
    }

    return(
        <div>
             <Products
             title='Fender Stratocaster 1960'
             image= {strato1}
             desc='Fender Stratocaster Original'
             addToCart={getProdcut}
             price={320000}
             />
        </div>
    )

}