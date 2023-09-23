import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    someValue: []
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        editTodos: (state, action) =>{
            state.todos = state.todos.map(item => item.id === action.payload.id ? ({...action.payload}) : item)
        },
        deleteTodos: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        addTodos: (state, action) =>{
            state.todos = [...state.todos, action.payload]
        },
    }
})


export const {addTodos, editTodos, deleteTodos} = todosSlice.actions

export default todosSlice.reducer