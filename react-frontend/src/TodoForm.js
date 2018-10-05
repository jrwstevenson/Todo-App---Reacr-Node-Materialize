import React, { Component } from "react";

export class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputValue === "") {
      console.log("Empty input");
      return;
    }
    this.props.addTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <React.Fragment>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col s10">
            <input
              id="text"
              type="text"
              className="validate"
              value={this.state.inputValue}
              onChange={this.handleChange}
              required
              ref={input => {
                this.nameInput = input;
              }}
            />
            <label htmlFor="text">Enter a new task here</label>
          </div>
          <a
            id="submit"
            onClick={this.handleSubmit}
            className="btn-floating btn-large waves-effect waves-light right-align"
            style={{ float: "right" }}
          >
            <i className="material-icons">add</i>
          </a>
        </form>
      </React.Fragment>
    );
  }
}

export default TodoForm;
