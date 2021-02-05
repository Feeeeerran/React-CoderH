import React from 'react'

import CartContent from './cart-content'

export default function CartDetail({show}) {
    return (
        <div className="cartDetailContainer">
            <button onClick={show}>X</button>
            <div className="cartDetail">
                <h2>My cart</h2>
                <CartContent/>
            </div>
        </div>
    )
}