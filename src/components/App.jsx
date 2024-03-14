import React, { useEffect } from 'react';
import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './main.css';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../store/thunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <div className="container">
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
