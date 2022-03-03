import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodosContext from "./TodosContext";

export default function TodoList() {
    const { state, dispatch } = useContext(TodosContext);
    return (
        <div>
            <div className="availTodos">
                <h3 className="avail">Available Todos</h3>
                <h3 className="avail count">{state.length}</h3>
            </div>

            {state.length !== 0 ? (
                state.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.key}
                            data={todo}
                            dispatcher={dispatch}
                        />
                    );
                })
            ) : (
                <h3 className="title">
                    No ToDos Available. <br /> Try adding new ToDo :)
                </h3>
            )}
        </div>
    );
}
