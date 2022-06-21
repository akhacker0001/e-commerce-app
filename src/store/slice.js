import { createSlice } from '@reduxjs/toolkit'

let initialState = { id: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state,action){
           if(!state.id.includes(action.payload.id)){

               state.id = [...state.id, action.payload.id]
           }
        },
        removeToCart(state,action){
            let clone = state.id;
            let filterdData = clone.filter(e=>e!==action.payload.id)
            state.id = [...filterdData]

        }
        
    },
})

export const { addToCart, removeToCart} = cartSlice.actions
export default cartSlice.reducer