import { useReducer } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodosContext from "./TodosContext";
import TodosReducer from "./TodosReducer";

export default function TodosApp() {
    const initialTodos = [
        {
            key: 1,
            title: "Welcome to Todos Application",
            desc: "This is a todo application which is based on useContext and useReducer. Enjoy using app :-)",
        },
        {
            key: 2,
            title: "How to use this Application",
            desc: "This application is easy to use. Just go with the flow. Enjoy using app :-)",
        },
    ];
    const [state, dispatch] = useReducer(TodosReducer, initialTodos);

    return (
        <div>
            <h1 className="title">Todos</h1>
            <TodosContext.Provider value={{ state, dispatch }}>
                <TodoForm />
                <TodoList />
            </TodosContext.Provider>
        </div>
    );
}
