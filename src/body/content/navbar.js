import React from 'react'

import {CartWidet, CartWidget} from '../components/shop'

import { Link } from 'react-router-dom'


export default function Navbar({widget}) {
    return (
        <nav>
            <CartWidget/>
            <ul>
                <Link to="/"><li>birraStore</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/contact"><li>Contact</li></Link>
            </ul>
        </nav>
    )
}
