import React, { useContext } from "react";
import Button from "../../Component/Button";
import { TodoContext } from "../../Context/TodoProvider";

const Footer = () => {
  const {countPending, onDeleteMarkAll} = useContext(TodoContext)
  return (
    <div className="pending">
      <span className="pending-task">You have {countPending()} pending task</span>
      <Button onClick={onDeleteMarkAll}>Clear All</Button>
    </div>
  );
};

export default Footer;
