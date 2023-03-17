import { useState } from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

export default function TodoForm() {
  const initialData = {
    id: 0,
    description: "",
    done: false,
  }

  const [todo, setTodo] = useState(initialData);


  return (
    <>
      <form className="w-full pt-36 pb-11 relative">
        <TodoInput todo={todo} setTodo={setTodo} initialData={initialData} />
      </form>
      <div className="flex flex-col">
        <TodoList setTodo={setTodo} />
      </div>
    </>
  );
}
