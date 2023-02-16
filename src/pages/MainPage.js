import TodosEmpty from "../components/TodosEmpty";
import { useTodosStatus } from "../hooks";
import TodoListPage from "./TodoListPage";

export default function MainPage() {
    const todosStatus = useTodosStatus();
    const TodosEmpty = todosStatus.todos.length == 0;

    if (TodosEmpty) {
        return <TodosEmpty />
    }
    return (
        <>
            <TodoListPage />
        </>
    );
}