import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, contacts, number } = this.state;

    if (name.trim() === '') {
      alert('Please enter a valid name');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number
    };

    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: ''
    });
  };

  
  render() {
    const { name, contacts, number, filter } = this.state;

    const filteredContacts = contacts.filter(profile =>
      profile.name
        .toLowerCase()
        .includes(filter.trim().toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={this.handleChange} required />
          </label>
          <label>
            Number:
            <input type="number" name="number" value={number} onChange={this.handleChange} required />
          </label>
          <button type="submit">Add Contact</button>
        </form>

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
            <li key={contact.id}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
      </div>
    );
  }
}