import React, { Component } from "react";
import { observer } from "mobx-react";

import authorStore from "../stores/authorStore";

class AuthorForm extends Component {
  state = {
    first_name: "",
    last_name: "",
    imageUrl: "",
    books: []
  };

  submitAuthor = async event => {
    event.preventDefault();
    await authorStore.addAuthor(this.state);
    if (!authorStore.errors) {
      this.props.closeModal();
    }
  };

  textChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitAuthor}>
          {authorStore.errors && (
            <div className="alert alert-danger" role="alert">
              {authorStore.errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="first_name"
              onChange={event => this.textChangeHandler(event)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="last_name"
              onChange={event => this.textChangeHandler(event)}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="imageUrl"
              onChange={event => this.textChangeHandler(event)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default observer(AuthorForm);
