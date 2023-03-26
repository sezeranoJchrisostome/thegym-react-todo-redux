import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo } from "../features/todo/todoSlice";

export default function TodoList({ setTodo }) {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <>
      {todoList.map((value, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-500 border-opacity-40 py-4"
          >
            <div className="flex items-center justify-between gap-4">
              <input
                type="checkbox"
                checked={value.done}
                onClick={() => dispatch(editTodo({ ...value, done: !value.done }))}
              />
              <div
                className={`text-base font-medium text-gray-600 ${
                  value.done ? "line-through" : ""
                }`}
              >
                {value.description}
              </div>
            </div>
            <div>
              <button
                onClick={() => setTodo({ ...value })}
                className="cursor-pointer bg-gray-500 bg-opacity-40 rounded-full w-[40px] h-[40px]"
              >
                <FontAwesomeIcon icon={faPen} className="text-green-500" />
              </button>

              <button
                onClick={() => dispatch(deleteTodo({ id: value.id }))}
                className="cursor-pointer bg-gray-500 bg-opacity-40 rounded-full w-[40px] h-[40px]"
              >
                <FontAwesomeIcon icon={faTrash} className="text-red-500" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
