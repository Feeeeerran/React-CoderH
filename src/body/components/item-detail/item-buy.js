import React,{useState} from 'react'

import ModalBuy from './modal-buy'



export default function ItemBuy({item}) {
    const [mount,setMount]=useState(0);
    const [confirm,setConfirm]=useState(0);
    const [total,setTotal] = useState(0);


    function Sum() {
        if (mount<item.stock) {setMount(mount+1);}
    }

    function Res() {
        if (mount!=0) {setMount(mount-1);}
    }

    function Disct() {
        var total=item.price*mount;
        if (mount>=6 && mount<12) {
            return Math.floor(total*0.9);
        } else if (mount>=12 && mount<24) {
            return Math.floor(total*0.8);
        } else if(mount>=24) {
            return Math.floor(total*0.6);
        } else {
            return total;
        }
    }

    function Confirm() {
        if (mount!==0) {
            if (confirm==0) {
                setConfirm(1);
                setTotal(Disct());
            } else {
                setConfirm(0);
            }
        }
    }

    return(
        <div className="itemBuy">
            <div className="itemBuy_buttons">
                <button onClick={Res}>-</button>
                <p className={mount==0?"red":""}>
                    {mount}</p>
                <button onClick={Sum}>+</button>
            </div>
            <p>{Disct()} $</p>
            <button onClick={Confirm}> Añadir al carrito</button>
            {
                confirm!=0
                ? <ModalBuy quitModal={Confirm} item={item} mount={mount} total={total} />
                :""
            }
            
        </div>
    )
}