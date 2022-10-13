import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    const { contacts, name } = this.state;
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} name={name} />

        <h2>Contacts</h2>
        {/* <Filter />
        <ContactList /> */}
        <ContactList />
      </>
    );
  }
}
