import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-100">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-gray-500 text-opacity-30 font-bold text-9xl text-center">
          todos
        </h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
