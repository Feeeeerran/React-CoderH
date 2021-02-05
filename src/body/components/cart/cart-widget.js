import React,{useState} from 'react'

import CartDetail from './cart-detail'
import CartIcon from './cart-icon'

export default function CartWidet() {
    const[show,setShow]=useState(0);

    function Show () {
        if (show==1) {setShow(0)}
        else {setShow(1)}
    }

    return (
        <div id="cartWidget">
            <CartIcon show={Show}/>

            {
                show==0
                ?""
                :<CartDetail show={Show}/>
            }
        </div>
    )
}