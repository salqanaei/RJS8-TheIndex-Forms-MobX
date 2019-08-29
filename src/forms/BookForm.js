import React, { Component } from "react";
import { observer } from "mobx-react";

import authorStore from "../stores/authorStore";
import bookStore from "../stores/bookStore";

class BookForm extends Component {
  state = {
    title: "",
    color: "white",
    authors: []
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitBook = async event => {
    event.preventDefault();
    await bookStore.addBook(this.state, this.props.author);
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {bookStore.errors && (
            <div className="alert alert-danger" role="alert">
              {bookStore.errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={event => this.textChangeHandler(event)}
            />
          </div>
          <div className="input-group mb-3">
            <select onChange={event => this.textChangeHandler(event)}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option selected value="white">
                White
              </option>
              <option value="black">Black</option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default observer(BookForm);
