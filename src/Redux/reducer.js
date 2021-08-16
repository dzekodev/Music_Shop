import * as ActionsType from './ActionsType'
import { InitialArray } from './InitialArray'
var lastId = 4;
function reducer(state=[...InitialArray],action){
    switch(action.type){
        case ActionsType.RETURN_SONGS:
            return state
        case ActionsType.ADD_SONGS:
            return [...state,
                {
                    id:++lastId,
                    img:action.payload.img,
                    title:action.payload.title,
                    description:action.payload.description,
                    price : action.payload.price,
                    sold:action.payload.sold 
                }
            ]
        default:
            return state;
    }
}
export default reducer