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
      localStorage.setItem("todolist", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newList = state.filter((value) => value.id !== action.payload.id);
      localStorage.setItem("todolist", JSON.stringify(newList));
      return newList;
    },
    markTodo: (state, action) => {
      const targetTodo = [...state].find(
        (value) => value.id === action.payload.id
      );
      const tardgetIndex = state.indexOf(targetTodo);
      targetTodo.done = !targetTodo.done;
      const newTodolist = [...state];
      newTodolist[tardgetIndex] = targetTodo;
      state = newTodolist;
      localStorage.setItem("todolist", JSON.stringify(state));
    },
    editTodo: (state, action) => {
      const targetTodo = [...state].find(
        (value) => value.id === action.payload.id
      );
      const tardgetIndex = state.indexOf(targetTodo);
      targetTodo.description = action.payload.description;
      const newTodolist = [...state];
      newTodolist[tardgetIndex] = targetTodo;
      state = newTodolist;
      localStorage.setItem("todolist", JSON.stringify(state));
    },
  },
});

export const { createTodo, deleteTodo, markTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
