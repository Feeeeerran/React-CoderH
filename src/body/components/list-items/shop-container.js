import React,{useState,useEffect} from 'react'
import ListItems from './list-items'
import Loader from '../loader'

import {firestore} from '../../../firebaseConfig'


export default function ShopContainer() {
    const [productos,setProductos] = useState(0);

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
                productos!==0
                ? <ListItems lista={productos}/>
                : <Loader/>
            }
        </>
    )
}
