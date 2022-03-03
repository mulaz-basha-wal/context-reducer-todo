const TodosReducer = (state, action) => {
    if (action.type === "remove") {
        let updatedTodos = [];
        state.forEach((todo) => {
            if (todo.key !== action.key) {
                updatedTodos.push(todo);
            }
        });
        return updatedTodos;
    }
    if (action.type === "add") {
        return [action.todo, ...state];
    }
    if (action.type === "clear") {
        return [];
    }
};
export default TodosReducer;
