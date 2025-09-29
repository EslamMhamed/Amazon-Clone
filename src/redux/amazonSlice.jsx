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
    }
})

export const amazonActions = amazoneSlice.actions

export default amazoneSlice.reducer