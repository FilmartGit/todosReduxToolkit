import FormTodos from "@/components/form";
import TodosList from "@/components/todos";

export default function Apps() {

  return (
    <main className=" w-[900px] border border-gray-200 mt-5 p-5 mx-auto box-border rounded-xl">
      <h1 className="text-2xl font-bold">Записная книжка</h1>
      <span className="w-full mb-5 border-t-2 border-gray-200"></span>
      <FormTodos />
      <TodosList />
    </main>
  );
}
