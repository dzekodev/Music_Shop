import {  createStore } from 'redux'
import reducer from './reducer'
import CartReduser from './CartReduser'
const store = createStore(reducer)
export const cartStore = createStore(CartReduser)
export default store