import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count: 10
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounterPlus: (state, action) =>{
            state.count += 1
        },
        setCounterMinus: (state, action) =>{
            state.count -= 1
        },
    }
})


export const {setCounterPlus, setCounterMinus} = counterSlice.actions

export default counterSlice.reducer