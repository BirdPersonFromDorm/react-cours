import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from '@reduxjs/toolkit';
import {get} from '../../api/request'

const initialState = {
    posts: [],
};

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    return get('posts')
        .then((response) => {
            return response
        })
        .catch((e) => {
            throw e;
        })
});

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
})


export const {} = postsSlice.actions

export default postsSlice.reducer