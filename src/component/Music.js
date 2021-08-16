import '../styles/Music.css'
import MusicItem from './MusicItem'
import { Button } from '@material-ui/core'
import * as ActionsType from '../Redux/ActionsType'
import store from '../Redux/store'
import { cartStore } from '../Redux/store';
import React from 'react'
function Music(){
    store.dispatch({
        type:ActionsType.RETURN_SONGS
    })
    const data = [...store.getState()];
    console.log(data)

    const addToCart=(id)=>{
        const itemToAdd = data.filter(item=> item.id===id)
        console.log("you clicked on", itemToAdd);
        console.log("before dispatch : ",cartStore.getState())
        cartStore.dispatch({
            type: ActionsType.CART_ADD,
            payload: {
                title : itemToAdd[0].title,
                price: itemToAdd[0].price
            }
        })
        console.log("after dispatch : ",cartStore.getState())
    }
    return(
        <div>
            <h1>Welcome To Music</h1> 
            <div className="MusicItemsContainer">
                <ul>
                    {
                        data.map(item => (
                            <div>
                                <MusicItem 
                                    img={item.img}
                                    title={item.title}
                                    description={item.description}
                                    price ={ item.price}
                                    sold={item.sold}
                                />
                                <Button id="btnAdd" onClick={()=>addToCart(item.id)}>Purchase</Button>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Music