import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoList />
      </div>
    );
  }
}

export default App;
