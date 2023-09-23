import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    route: 1
}

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        setRoute: (state, action) =>{
            state.route = action.payload
        },
    }
})


export const {setRoute} = routesSlice.actions

export default routesSlice.reducer