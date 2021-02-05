import React from 'react'
import { Link } from 'react-router-dom'


export default function CardItem({item,id}) {

    return (
        
        <div className="cardItem">
            <img alt={item.nombre} src={item.img}></img>

            <div className="cardItem-hover">
                <h4>{item.nombre}</h4>
                <p>{item.grad} Alc.</p>
                <p>{item.price} $</p>
                <button>
                    <Link to={`/category/${id}`}>Comprar</Link>
                </button>

            </div>
        </div>
    )
}
