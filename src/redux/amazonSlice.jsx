import { createSlice } from "@reduxjs/toolkit"


const intialState = {
    products : [],
    userInfo: []
}

 const amazoneSlice = createSlice({
    name: "amazon",
    intialState,
    reducers: {
        addToCart(state, action) {
            state.products = action.payload
        }
    }
})

export const amazonActions = amazoneSlice.actions

export default amazoneSlice.reducer