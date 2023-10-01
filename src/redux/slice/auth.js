import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: {},
    allUsers: [
        {
            userId: 1,
            login: 'Roma',
            role: 'admin',
            password: '12345',
            photo: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
        },
        {
            userId: 2,
            login: 'Dima',
            role: 'user',
            password: '12345',
            photo: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
        },
        {
            userId: 3,
            login: 'Misha',
            role: 'manager',
            password: '12345',
            photo: 'https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
        },
    ]
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoginData: (state, action) =>{
            state.user = action.payload
        },
    }
})


export const {setLoginData} = authSlice.actions

export default authSlice.reducer