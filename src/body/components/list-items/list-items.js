import React,{useState,useEffect} from 'react'
import CardItem from './card-item'


export default function ListItems({lista}) {

    var items=lista.map((e)=> 
        <CardItem key={e.id} item={e.producto} id={e.id}/>
    );

    

    // Me onviene hacer un slo row con muchos items que se ordenen segun el espacio que ocupan

    return (
        <>
        {lista!==0
            ?<div className="shopItems">
            {items}
            </div>
            : <div className="shopItems" >Cargando</div>
            
        }
        </>
    )
}