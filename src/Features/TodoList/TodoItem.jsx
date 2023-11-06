import React, { useContext } from "react";
import Button from "../../Component/Button";
import { TodoContext } from "../../Context/TodoProvider";

const TodoItem = ({ todo }) => {
  // const { onDeleteTodoItem, onMark } = useContext(TodoContext);
  const { onDeleteTodoItem, onMark } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.status}
          onChange={() => {
            onMark(todo.id);
          }}
        />
        <span className="content">{todo.content}</span>
      </div>
      <Button
        onClick={() => {
          onDeleteTodoItem(todo.id);
        }}
      >
        X
      </Button>
    </div>
  );
};

export default TodoItem;
