import React from 'react'

import {BuyItem,BuyForm} from '../components/buy'

import {useCartContext} from '../../contexts/cart-context'

export default function Buy() {
    const {cart,totalCart}=useCartContext();
    
    const buyItem=cart.map(e=> <BuyItem key={e.id} item={e}/>)


    return (
        <section id="buyDetail">
            <h4>{cart.length!==0?'Resumen de tu compra':'Aqui no hay nada . . . (ve a comprar, rata)'}</h4>
            {
                totalCart!==0
                ? <div className="buyContainer">
                    <div className="buyList">
                        <div className="headerList">
                            <p>Nombre</p>
                            <p>Cantidad</p>
                            <p>Total</p>
                        </div>
                        {
                            cart.length===0
                            ? ''
                            : buyItem
                        }
                        <div className="footerList">
                            <p>$ {totalCart}</p>
                        </div>
                    </div>
                    <BuyForm order={cart} total={totalCart}/>
                </div>
                :''
            }
        </section>
    )
}