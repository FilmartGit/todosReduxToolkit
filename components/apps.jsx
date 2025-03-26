import FormTodos from "@/components/form";
import TodosList from "@/components/todos";
import HeaderBox from './ui/header';

export default function Apps() {
  return (
    <main className=" w-[900px] border border-gray-200 mt-5 p-5 mx-auto box-border rounded-xl">
      <HeaderBox />      
      <FormTodos />
      <TodosList />
    </main>
  );
}
