import { useState } from "react";
import { nanoid } from "nanoid";
import TodoList from "./features/todos/TodoList";
import { useDispatch } from "react-redux";
import { createItem } from "./features/todos/todoSlice";

function App() {
  const dispacth = useDispatch();
  const [todo, setTodo] = useState({
    id: 0,
    description: "",
    done: false,
  });

  const handleInput = (event) => {
    setTodo(() => ({ id: nanoid(), description: event.target.value }));
  };

  const handleCreateTodo = (event) => {
    event.preventDefault()
    if(todo.description.trim() === '') return;
    dispacth(createItem(todo))
  }

  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-gray-500 text-opacity-30 font-bold text-9xl text-center">
          todos
        </h1>
        <form className="w-full pt-36 pb-11 relative">
          <div className="w-full relative overflow-x-hidden rounded-full text-lg font-semibold shadow-lg ">
            <input
              value={todo.description}
              className="w-full px-6 py-4 outline-none"
              placeholder="Add todo.."
              name="description"
              onChange={handleInput}
            />
            <button
              onClick={(e) => handleCreateTodo(e)}
              className="font-extrabold bg-green-600 text-white text-2xl absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
            >
              <span className="">+</span>
            </button>
          </div>
        </form>
        <div className="flex flex-col">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
