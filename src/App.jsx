// src/components/App/App.jsx
import React from 'react';
import ContactsForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  return (
    <div>
      <h1>Contacts Book</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
