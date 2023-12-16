import css from './AddContactForm.module.css';
import React, { Component } from 'react';

export class AddContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;

    if (name.trim() === '') {
      alert('Please enter a valid name');
      return;
    }
    const formData = {
      name,
      number,
    };

    this.props.handleAddContact(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Number:
          <input type="number" name="number" required />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
