import React from "react";

export default () => {
  return (
    <div>
      <nav className="teal">
        <div className="nav-wrapper container">
          <a className="brand-logo">React Todo List</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/jrwstevenson/Todo-App---React-Node-Materialize"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
            <li>
              <a href="https://james-stevenson.com">Author</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
