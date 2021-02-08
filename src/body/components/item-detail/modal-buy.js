import React from 'react'

import {useCartContext} from '../../../contexts/cart-context'
import {useParams} from 'react-router-dom'


export default function ModalBuy({item,mount,total,quitModal}) {
    const {addCart}=useCartContext();
    const {id}=useParams()

    function addBuy() {
        addCart(item.nombre,mount,total,id);
        quitModal();
    }

    return (
        <div className="modalBuy">
            <button onClick={quitModal}>X</button>
            <p>Estas seguro de que quieres añadir la compra al carrito?</p>
            <button onClick={addBuy}>Si, adelante!</button>
        </div>
    )
}