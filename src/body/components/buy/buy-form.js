import React,{useState} from 'react'

import {firestore} from '../../../firebaseConfig'
import { CartWidget } from '../shop';


export default function BuyForm({order,total}) {
    console.log("render")
    const[nombre,setNombre]=useState();
    const[apellido,setApellido]=useState();
    const[tel,setTel]=useState();
    const[mail,setMail]=useState();

    const db=firestore;
    const orders=db.collection("orders");
    

    function getNombre(e) {
        setNombre(e.target.value)
    }
    function getApellido(e) {
        setApellido(e.target.value)
    }
    function getTel(e) {
        setTel(e.target.value)
    }
    function getMail(e) {
        setMail(e.target.value)
    }



    function addOrder() {
        var date=getDate();

        const newOrder= {
            buyer:{
                name:nombre,
                Sname:apellido,
                tel:tel,
                mail:mail,
            },
            items:order,
            total:total,
            date:date,
        }
        
        orders.add(newOrder)
        .then(({id}) => {
            console.log(id)
        })
        .catch((err)=> alert("ups, algo salió mal"))
    }

    function getDate() {
        var time = new Date();
        var dd = String(time.getDate()).padStart(2, '0');
        var mm = String(time.getMonth() + 1).padStart(2, '0');
        var yyyy = time.getFullYear();
        var hh = String(time.getHours());
        var mmm = String(time.getMinutes());
        return `${dd}/${mm}/${yyyy}  ${hh}:${mmm}`
    }

    return (
        <div className="buyFormContainer">
            <h5>Datos del comprador</h5>
            <form>
                <label>
                    Tu nombre
                    <input type="text" onBlur={getNombre}></input>
                </label>
                <label>
                    Apellido
                    <input type="text" onBlur={getApellido}></input>
                </label>
                <label>
                    Telefono
                    <input type="text" onBlur={getTel}></input>
                </label>
                <label>
                    Email
                    <input type="text" onBlur={getMail}></input>
                </label>
            </form>
            <button onClick={addOrder}>COMPRAR</button>
        </div>
    )
}