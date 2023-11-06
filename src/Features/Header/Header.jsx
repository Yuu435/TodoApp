import React from "react";
import Form from "./Form";
import Filter from "./Filter";

const Header = () => {
  return (
    <div className="todo-top">
      <h1 className="todo-header"> Simple TodoApp </h1>

      <Form/>

      <Filter/>
    </div>
  );
};

export default Header;
