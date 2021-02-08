import React from 'react'

export default function BuyItem({item}) {
    return (
        <div className="buyItem">
            <p>{item.nombre}</p>
            <p>{item.mount}</p>
            <p>$ {item.total}</p>
        </div>
    )
}