import React from "react";

const TodoItem = ({ name, completed, onDelete, onToggle }) => (
  <React.Fragment>
    <li className="collection-item">
      <span
        onClick={onToggle}
        style={{
          textDecoration: completed ? "line-through" : "none",
          color: completed ? "teal" : ""
        }}
      >
        {name}
      </span>

      <a href="#!" className="secondary-content">
        <i
          onClick={() => {
            if (window.confirm("Are you sure?")) {
              onDelete();
            }
          }}
          className="material-icons"
        >
          delete_forever
        </i>
      </a>
    </li>
  </React.Fragment>
);

export default TodoItem;
