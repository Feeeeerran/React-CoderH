import React from 'react'

import CartItem from './cart-item'

import {useCartContext} from '../../../contexts/cart-context'


export default function CartContent() {
    const cartContent=useCartContext().cart;
    const {deleteCartItem}=useCartContext();


    const cartList = cartContent.map((e)=> 
        <CartItem item={e} key={e.id}/>
    )
    return (
        <div className="cartContent">
            {cartList}
        </div>
    )
}