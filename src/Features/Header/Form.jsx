import React, { useContext, useState } from "react";
import Button from "../../Component/Button";
import { TodoContext } from "../../Context/TodoProvider";

const Form = () => {
  const { onAdd } = useContext(TodoContext);

  const [content, setContent] = useState("");

  const HandleClickAdd = (e) => {
    if (content.trim() !== "") {
      e.preventDefault();
      onAdd(content);
      setContent("");
    }
  };
  return (
    <form className="task-text">
      <input
        className="input-todo"
        type="text"
        placeholder="What do you want to do?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Button onClick={HandleClickAdd}>Create</Button>
    </form>
  );
};

export default Form;
