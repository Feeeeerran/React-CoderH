import React from 'react'

import Main from './body/main'
import './assets/css/main.css'

import { BrowserRouter} from 'react-router-dom'




export default function App () {
    return (
        <BrowserRouter>
            <Main/>
        </BrowserRouter> 
    )
}
