import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddContactForm } from './AddContactForm/AddContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddContact = formData => {
    const { contacts } = this.state;
    const hasDuplicates = contacts.some(
      contact => contact.name === formData.name
    );
    if (hasDuplicates) {
      alert(`Profile with name ${formData.name} already exists!`);
      return;
    }
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };

    this.setState({
      contacts: [...contacts, finalContacts],
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(profile =>
      profile.name.toLowerCase().includes(filter.trim().toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <AddContactForm handleAddContact={this.handleAddContact} />
        <p>Find Profile:</p>
        <input
          value={this.state.filter}
          onChange={this.handleChange}
          type="text"
          name="filter"
          placeholder="Ivan..."
        />

        <h2>Contact List</h2>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
