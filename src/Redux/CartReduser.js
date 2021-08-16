import * as ActionsType from './ActionsType'
var lastId=0;
export default function CartReduser(state=[],action){
    switch(action.type){
        case ActionsType.CART_ADD :
            return[
                ...state,
                {
                    id:++lastId,
                    title:action.payload.title,
                    price : action.payload.price
                }
            ];
        case ActionsType.RETURN_CARTS:
            return state;
        default:
            return state
    }
}