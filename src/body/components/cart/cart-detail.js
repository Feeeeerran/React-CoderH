import React from 'react'
import { Link } from 'react-router-dom'


import CartContent from './cart-content'

import {useCartContext} from '../../../contexts/cart-context'



export default function CartDetail({show}) {
    const total=useCartContext().totalCart;


    return (
        <div className="cartDetailContainer">
            <button onClick={show}>X</button>
            <div className="cartDetail">
                <h2>My cart {total==0?`is empty`:''}</h2>
                <CartContent/>
                <div className="finalBuy">
                    <p>{`TOTAL  $${total}`}</p>
                    <button onClick={show}><Link to="/buy">Finalizar compra</Link></button>
                </div>
            </div>
        </div>
    )
}