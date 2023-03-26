import updateLocalStorage from "../../utils/updateLocalstorage";

const { createSlice } = require("@reduxjs/toolkit");

let initialState = [];
const localStorageData = localStorage.getItem("todolist");
if (localStorageData) initialState = JSON.parse(localStorageData);

export const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    createTodo: (state, action) => {
      state.push(action.payload);
      updateLocalStorage(state)
    },
    deleteTodo: (state, action) => {
      const newList = state.filter((value) => value.id !== action.payload.id);
      updateLocalStorage(newList)
      return newList;
    },
    editTodo: (state, action) => {
      const { id } = action.payload;
      const newData = state.map((todo) =>  todo.id === id ? { ...todo, ...action.payload } : todo  )
      updateLocalStorage(newData)
      return newData
    },
  },
});

export const { createTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
