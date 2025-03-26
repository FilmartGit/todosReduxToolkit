import clsx from 'clsx';
import Icons from "../ui/icons";
import Title from "../ui/title";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, doneTodo } from '@/store/todoSlice';

export default function TodosList() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  const handleDone = (id) => {
    dispatch(doneTodo({ id }));
  };
  
  return (
    <div className="mt-5">
      <Title>Текущие задачи</Title>
      <div className="flex flex-col gap-1 mt-5">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center justify-between border-b border-gray-200 p-1"
            >
              <p className={clsx(todo.completed ? "text-gray-400 line-through" : "")}>{todo.title}</p>
              <div className="flex items-center gap-5">
                <button 
                  onClick={() => handleDone(todo.id)}
                  className="bg-green-600 text-slate-50 px-2 text-base py-1 w-fit rounded-md cursor-pointer">
                  <Icons.done />
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="bg-red-600 text-slate-50 px-2 text-base py-1 w-fit rounded-md cursor-pointer"
                >
                  <Icons.delete />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-60 flex flex-col items-center gap-5">
            <Icons.notFound />
            <p>Текущих задач не обнаружено!</p>
          </div>
        )}
      </div>
    </div>
  );
}