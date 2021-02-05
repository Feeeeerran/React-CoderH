import React,{useContext,useState} from 'react'


export const CartContext=React.createContext();
export const useCartContext = () => useContext(CartContext)

export function CartProvider({initialValue=[],children}) {
    const [cart,setCart]=useState(initialValue);
    
    function addCart(item) {
        const newCart=[...cart,item];
        setCart(newCart);
    }

    // function clearCart() {
    //     setCart([]);
    // }

    // function deleteCart(pos) {
    //     const newCart=cart.splice(pos,1);
    //     setCart(newCart);
    // }


    return (
        <CartContext.Provider value={{cart,addCart,clearCart,deleteCart}}>
            {children}
        </CartContext.Provider>
    );
}