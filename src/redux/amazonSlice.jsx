import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products : [],
    userInfo: []
}

 const amazoneSlice = createSlice({
    name: "amazon",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = state.products.find(item => item.id === action.payload.id)

            if(item){
                item.quantity++
            }else{
                state.products.push(action.payload)
            }
        },
        incrementQuantity(state, action){
            const existingItem = state.products.find(item => item.id === action.payload)

            existingItem.quantity++
        },
        decrementQuantity(state, action){
            const existingItem = state.products.find(item => item.id === action.payload)
            
            if(existingItem.quantity > 1){
                existingItem.quantity--
            }else{
                state.products =state.products.filter(item => item.id !== action.payload)
            }
            
        },
        deleteItem(state, action){
            state.products =state.products.filter(item => item.id !== action.payload)
        },
        resetCart(state){
            state.products= []
        }
    }
})

export const amazonActions = amazoneSlice.actions

export default amazoneSlice.reducer