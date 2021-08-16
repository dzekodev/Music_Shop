import '../styles/BuyCart.css'
import { Button } from '@material-ui/core';
import { useState } from 'react'
import { cartStore } from '../Redux/store';
import * as ActionsType from '../Redux/ActionsType'
var total = 1;
function BuyCart(){
    const [showCart,setShowCart] = useState(true);
    cartStore.dispatch({
        type : ActionsType.RETURN_CARTS
    })
    console.log("cart data" , [...cartStore.getState()]);
    return showCart===false ? (
        <Button onClick={()=>setShowCart(true)} id="open" variant="contained" color="secondary">Open Cart</Button>
    ) : total===0 ?(
        <div>
            <h1>the cart is empty</h1>
            <Button onClick={()=>setShowCart(false)} id="open" variant="contained" color="secondary">Close Cart</Button>
        </div>
    ):(
        <div>
            <ul className="ul">
                { 
                [...cartStore.getState()].map(item=>(
                    <div key={item.id} className="cartCon">
                        <li>{item.title}</li>
                        <h4>{item.price} $</h4>
                    </div>
                ))}
                {[...cartStore.getState()].length!==0?
                    (
                        <h2>Total : {[...cartStore.getState()].map((item)=>total = total+ item.price)} $</h2>
                    ):(
                        <h2>Total : 0 $</h2>
                    )
                }
            </ul>


            <Button onClick={()=>setShowCart(false)} id="open" variant="contained" color="secondary">Close Cart</Button>
        </div>
    )
}
export default BuyCart
