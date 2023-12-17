import css from './AddContactForm.module.css';
import React, { Component } from 'react';

export class AddContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();

    const name = event.currentTarget.elements.name.value.toLowerCase();
    const number = event.currentTarget.elements.number.value;


    const formData = {
      name,
      number
    };

    this.props.handleAddContact(formData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label>
          <span className={css.formLabel}>Name:</span>
          <input type="text" name="name" placeholder='Alex' className={css.formInput} required />
        </label>
        <label>
        <span className={css.formLabel}>Number:</span>
          <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" max='7' name="number" placeholder='111-11-11' className={css.formInput} required />
        </label>
        <button type="submit" className={css.formButton}>Add Contact</button>
      </form>
    );
  }
}
