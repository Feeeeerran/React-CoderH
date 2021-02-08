import React,{useContext,useState} from 'react'


export const CartContext=React.createContext();
export const useCartContext = () => useContext(CartContext);

export function CartProvider({initialValue=[],children}) {
    const [cart,setCart]=useState(initialValue);
    const [totalCart,setTotalCart]=useState(0);
    
    function addCart(nombre,mount,total,id) {
        if (cart.length===0) {
            const newCart=[...cart,{nombre,mount,total,id}];
            setCart(newCart);
            setTotalCart(total);
        } else {
            cart.forEach((e)=> {
                if (e.id == id) {
                    if (window.confirm(`Ya dispones de ${e.mount} de ${e.nombre}. Quieres agregar ${mount} más al carrito?`)) {
                        e.mount=e.mount+mount;
                        e.total=e.total+total;
                        setTotalCart(totalCart+total)
                    }
                } else {
                    const newCart=[...cart,{nombre,mount,total,id}];
                    setCart(newCart);
                    setTotalCart(totalCart+total)
                }
            })
        }
    }

    
    function deleteCartItem(id) {
        const newCart=cart.filter(e=>e.id!==id);
        var newTotal=0;
        newCart.forEach(e=>newTotal=newTotal+e.total);
        
        setCart(newCart);
        setTotalCart(newTotal)
    }
        

    return (
        <CartContext.Provider value={{cart,totalCart,addCart,deleteCartItem}}>
            {children}
        </CartContext.Provider>
    );
}