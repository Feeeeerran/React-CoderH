import React from 'react'

import Main from './body/main'
import {CartProvider} from './contexts/cart-context'
import './assets/css/main.css'

import { BrowserRouter} from 'react-router-dom'



export default function App () {
    return (
        <BrowserRouter>
            <CartProvider initialValue={[]}>
                <Main/>
            </CartProvider>
        </BrowserRouter> 
    )
}
