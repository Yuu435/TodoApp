export const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodos = {
                id: Date.now(),
                content: action.payload.content,
                status: false,
            }

            const newState = {
                ...state,
                todos: [...state.todos, newTodos]
            }

            return newState
        }

        case "SET_FILTER": {
            const newState = {
                ...state,
                filter: {
                    ...state.filter,
                    [action.payload.name]: action.payload.value,
                },
            };
            return newState;
        }

        case "MARK_ITEM": {
            const newState = {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, status: !todo.status } : todo
                ),

            }
            return newState
        }

        case "DELETE_MARK_ALL": {
            const newState = {
                ...state,
                todos: state.todos.filter((todo) => !todo.status),
            }
            return newState
        }

        case "DELETE_TODO_ITEM": {
            const newState = {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id)
            }
            return newState
        }

        default:
            throw new Error("Hành động không hợp lệ!");
    }
}