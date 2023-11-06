import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoProvider";

const Filter = () => {
  const { filter, onFilter } = useContext(TodoContext);

  const handleChange = (e) => {
    const name = e.target.name;
    const check = e.target.checked;

    let value;

    if (name == "status") {
      value = e.target.value;
    } else {
      if (check) {
        value = [...filter.colors, e.target.value];
      } else {
        value = filter.colors.filter((color) => color !== e.target.value);
      }
    }

    onFilter(name, value);
  };

  return (
    <form className="filter" onChange={handleChange}>
      <div className="filter-status">
        <div className="filter-item">
          <input
            type="radio"
            name="status"
            id="all"
            value="all"
            checked={filter.status === "all"}
          />
          <label htmlFor="">All</label>
        </div>

        <div className="filter-item">
          <input
            type="radio"
            name="status"
            id="completed"
            value="completed"
            checked={filter.status === "completed"}
          />
          <label htmlFor="">Completes</label>
        </div>

        <div className="filter-item">
          <input
            type="radio"
            name="status"
            id="active"
            value="active"
            checked={filter.status === "active"}
          />
          <label htmlFor="">Active</label>
        </div>
      </div>
    </form>
  );
};

export default Filter;
