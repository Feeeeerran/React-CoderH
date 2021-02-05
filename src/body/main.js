import React,{useEffect} from 'react'
import {firestore} from '../firebaseConfig'

import {Header,Navbar,Footer,About,Contact} from './content/content'
import {ShopContainer,ItemDetailContainer,OrderContainer} from './components/shop'

import {Route,useParams} from 'react-router-dom'



export default function Main() {
    return (
        <>
            <Navbar/>
            <Route exact path="/"><Header/></Route>

            <Route exact path="/shop">
                <section className="shopContainer">
                    <OrderContainer/>
                    <ShopContainer/>
                </section>
            </Route>
            
            <Route exact path="/category/:id"><ItemDetailContainer/></Route>


            <Route exact path="/about"><About/></Route>
            <Route exact path="/contact"><Contact/></Route>
            
            <Footer/>
        </>
    )
}