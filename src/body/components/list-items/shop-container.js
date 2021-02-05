import React,{useState,useEffect} from 'react'
import ListItems from './list-items'

import {firestore} from '../../../firebaseConfig'


export default function ShopContainer() {
    const [productos,setProductos] = useState([]);

    useEffect(()=>{
        const data=firestore;
        const collection=data.collection("productos");
        const query =collection.get();
        
        query
        .then((res)=>{
            const productoLista=res.docs;
            var arr=[];
            productoLista.forEach(element => {
                arr.push({producto:element.data(),id:element.id})
            });
            setProductos(arr);
        })
    },[])




    return (
        <>
            {
                productos.lenght!==0
                ? <ListItems lista={productos}/>
                : <div>cargando</div>
            }
        </>
    )
}
