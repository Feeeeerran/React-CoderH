import React from 'react'
import ItemBuy from './item-buy'


export default function ItemDetail({detail}) {

    var ofertas=[]
    for (var i=6;i<=24;i=i*2) {
        ofertas=
        [...ofertas,
            <li>
                <p>{`X${i}:    $${(detail.price*i-((i/6)*0.1)*detail.price*i)}`}</p>
                <p>{`con ${(i/6)*10}% de descuento !`}</p>

            </li>
        ]
    }


    return (
        <div className="detail">
            <div className="detail_img">
                <img src={detail.img} alt={detail.nombre}></img>
            </div>
            <div className="detail_body">
                <h4>{detail.nombre}</h4>
                <span>
                    {detail.info}
                </span>
                <div className="detail_body-buy">
                    <ul>
                        <li><p>X1 ${detail.price} de {detail.cantidad}ml</p></li>
                        {ofertas}
                    </ul>
                    <ItemBuy priceUn={detail.price} stock={detail.stock}/>
                </div>
                
            </div>
        </div>
    )
}