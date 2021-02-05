import React from 'react'

export default function ModalBuy({quitModal}) {
    return (
        <div className="modalBuy">
            <button onClick={quitModal}>X</button>
            <p>Estas seguro de que quieres añadir la compra al carrito?</p>
            <button>Si, adelante!</button>
        </div>
    )
}