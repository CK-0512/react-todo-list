import TodosEmpty from "../components/TodosEmpty";

export default function MainPage() {

    if (TodosEmpty) {
        const todosEmpty = true;
        return <TodosEmpty />
    }
    return (
        <>
            <div className="flex-1 flex justify-center items-center">
                <div>
                    <span>메인 페이지</span>
                </div>
            </div>
        </>
    );
}