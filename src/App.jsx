import React, { useState } from "react";
import "./App.css";
import Header from "./Features/Header/Header";
import TodoList from "./Features/TodoList/TodoList";
import Footer from "./Features/Footer/Footer";
import { TodoProvider } from "./Context/TodoProvider";

const TodoApp = () => {
  return (
    <div className="container">
      <TodoProvider>
        <Header />
        <TodoList />
        <Footer />
      </TodoProvider>
    </div>
  );
};

export default TodoApp;
