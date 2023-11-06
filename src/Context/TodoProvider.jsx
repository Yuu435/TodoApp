import { createContext, useReducer } from "react";
import { todoReducer } from "../Reducer/TodoReducer";

export const TodoContext = createContext();

export const initialState = {
  todos: [],
  filter: {
    status: "all",
  },
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (content) => {
    dispatch({ type: "ADD_TODO", payload: { content } });
  };

  const setFilter = (name, value) => {
    dispatch({ type: "SET_FILTER", payload: { name, value } });
  };

  const markItem = (id) => {
    dispatch({ type: "MARK_ITEM", payload: { id } });
  };

  const deleteMarkAll = () => {
    dispatch({ type: "DELETE_MARK_ALL" });
  };

  const deleteTodoItem = (id) => {
    dispatch({ type: "DELETE_TODO_ITEM", payload: { id } });
  };

  const countPending = () => {
    return state.todos.filter((todo) => !todo.status).length;
  };

  //   Loc theo status
  let filteredTodos =
    state.filter.status === "all"
      ? state.todos
      : state.filter.status === "completed"
      ? state.todos.filter((todo) => todo.status)
      : state.todos.filter((todo) => !todo.status);

  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        onAdd: addTodo,
        filter: state.filter,
        onFilter: setFilter,
        onMark: markItem,
        onDeleteMarkAll: deleteMarkAll,
        onDeleteTodoItem: deleteTodoItem,
        countPending,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
