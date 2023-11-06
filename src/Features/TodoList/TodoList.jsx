import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../../Context/TodoProvider";


const TodoList = () => {
  const {todos} = useContext(TodoContext)
  
  return (
    <div className="todo-list">
      {todos.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
