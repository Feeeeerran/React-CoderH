import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from './item-detail'
import {firestore} from '../../../firebaseConfig'



export default function ItemDetailContainer() {
    const [detail,setDetail] = useState(0)
    const id=useParams().id;

    useEffect(()=>{
        const data=firestore;
        const collection=data.collection("productos");
        const query =collection.get();
        
        query
        .then((res)=>{
            const productoLista=res.docs;
            productoLista.forEach(e => {
                if (e.id===id) {
                    setDetail(e.data())
                }
                
            });
        })
    },[])

    return(
        <section className="detailContainer">
            {
                detail!==0
                ? <ItemDetail detail={detail}/>
                : <div>Cargando</div>
            }
        </section>
    )
}