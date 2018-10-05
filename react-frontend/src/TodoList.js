import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import * as apiCalls from "./api";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
  }

  componentWillMount() {
    this.loadTodos();
  }

  async loadTodos() {
    let todos = await apiCalls.getTodos();
    this.setState({ todos });
  }

  async addTodo(val) {
    let newTodo = await apiCalls.createTodos(val);
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  async deleteTodo(id) {
    await apiCalls.deleteTodo(id);
    const todos = this.state.todos.filter(todo => todo._id !== id);
    this.setState({ todos: todos });
  }

  async toggleTodo(todo) {
    let updatedTodo = await apiCalls.toggleTodo(todo);
    const todos = this.state.todos.map(
      t => (t._id === updatedTodo._id ? { ...t, completed: !t.completed } : t)
    );
    this.setState({ todos: todos });
  }

  render() {
    const todos = this.state.todos
      .filter(t => !t.completed)
      .map(t => (
        <TodoItem
          key={t._id}
          {...t}
          onDelete={this.deleteTodo.bind(this, t._id)}
          onToggle={this.toggleTodo.bind(this, t)}
        />
      ));

    const completedTodos = this.state.todos
      .filter(t => t.completed)
      .map(t => (
        <TodoItem
          key={t._id}
          {...t}
          onDelete={this.deleteTodo.bind(this, t._id)}
          onToggle={this.toggleTodo.bind(this, t)}
        />
      ));

    return (
      <div className="container z-depth-3">
        <div className="collection with-header">
          <div className="collection-header">
            <h3 className="teal-text">Simple todo list....</h3>
            <TodoForm addTodo={this.addTodo} />
          </div>
          <ul>
            <li className="collection-item grey lighten-4">
              <h6 className="teal-text">Item To Do: {todos.length}</h6>
            </li>
            {todos}
            <li className="collection-item grey lighten-4">
              <h6 className="teal-text">
                Items Completed: {completedTodos.length}
              </h6>
            </li>
            {completedTodos}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
