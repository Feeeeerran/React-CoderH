import React from 'react'

import {useCartContext} from '../../../contexts/cart-context'


export default function CartItem({item}) {
    const {deleteCartItem}=useCartContext();

    function deleteItem() {
        deleteCartItem(item.id)
    }

    return(
        <div className="cartItem">
                <h3>{item.nombre}</h3>
                <p>X {item.mount}</p>
                <p>{item.total} $</p>
                <button onClick={deleteItem}>Eliminar del carrito</button>
        </div>
    )
}