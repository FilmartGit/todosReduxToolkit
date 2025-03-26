import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";

export default function FormTodos() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();
  const createTodo = () => {
    dispatch(addTodo({ text: title }));
    setTitle("");
  }

  return (
    <div className="border border-gray-200 p-5 rounded-lg shadow-2xl shadow-gray-300 mt-10">
      <input
        placeholder="Название задачи"
        className="w-full p-2 border border-gray-200 rounded-lg"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={createTodo}
        className="bg-blue-600 text-slate-50 mt-4  px-2 text-base py-1 w-fit rounded-md cursor-pointer"
      >
        Создать
      </button>
    </div>
  );
}
