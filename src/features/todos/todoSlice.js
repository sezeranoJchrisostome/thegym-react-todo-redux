import { createSlice } from "@reduxjs/toolkit";

const localStorageData = localStorage.getItem("todolist") || [];
const initialState = JSON.parse(localStorageData);

export const todoReducer = createSlice({
  initialState: { value : initialState },
  name:"todos",
  reducers: {
    createItem: (state, action) => {
      const draftState = [...state.value];
      draftState.push(action.payload);
      state.value = draftState;
      localStorage.setItem("todolist",JSON.stringify(draftState))
    },
    deleteItem: (state, action) => {
      const draftState = [...state.value];
      const newList = draftState.filter(value =>  value.id !== action.payload);
      state.value = newList;
      localStorage.setItem("todolist",JSON.stringify(newList))
    },
    checkItem: (state, action) => {
      const draftState = [...state.value];
      const newList = draftState.map(value => {
        if(value.id === action.payload) value.done = !value.done;
        return value;
      });
      state.value = newList;
      localStorage.setItem("todolist",JSON.stringify(newList))
    },
  },
});

export const { createItem, deleteItem, checkItem } = todoReducer.actions;
export default todoReducer.reducer;
