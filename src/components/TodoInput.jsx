import { faAdd, faCheck, faClose } from "@fortawesome/free-solid-svg-icons";
import { createTodo, editTodo } from "../features/todo/todoSlice";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";

export default function TodoInput({ initialData, todo, setTodo }) {
  const dispatch = useDispatch();
  const handSubmit = (event) => {
    event.preventDefault();
    if (todo.description === "") return;
    dispatch(createTodo({ ...todo, id: nanoid() }));
    setTodo(initialData);
  };

  const handleEdit = (event) => {
    event.preventDefault();
    if (todo.description === "") return;
    dispatch(editTodo({ ...todo }));
    setTodo(initialData);
  };

  const handleInput = (e) => {
    if (e.target.value.trim() === "") return;
    setTodo(() => ({ ...todo, description: e.target.value }));
  };

  return (
    <div className="w-full relative overflow-x-hidden rounded-full text-lg font-semibold shadow-lg ">
      <input
        value={todo.description}
        className="w-full px-6 py-4 outline-none"
        placeholder="Add todo.."
        name="description"
        onChange={handleInput}
      />

      {!todo.id ? (
        <button
          onClick={handSubmit}
          className="font-extrabold bg-green-600 text-white text-2xl absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
        >
          <FontAwesomeIcon icon={faAdd} className="text-base font-semibold" />
        </button>
      ) : (
        <div className="flex gap-4 absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span
            onClick={() => setTodo({ ...initialData })}
            className="font-extrabold border border-spacing-2 border-green-600 text-green-600 text-2xl rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-base font-semibold"
            />
          </span>
          <button
            onClick={(e) => handleEdit(e)}
            className="font-extrabold bg-green-600 text-white text-2xl rounded-full h-[30px] w-[30px] flex items-center justify-center cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faCheck}
              className="text-base font-semibold"
            />
          </button>
        </div>
      )}
    </div>
  );
}
