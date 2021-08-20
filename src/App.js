import { useState } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Form from './components/Form';
import PhoneBook from './components/PhoneBook';
import Filter from './components/Filter';
import Modal from './components/Modal';
import styles from './App.module.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
      <Container>
        {showModal && <Modal onClose={toggleModal}>
          <h1>Hello!</h1>
          <p>This name already in contacts. Rewrite number?</p>
          <button className={styles.modalButton} type="button" onClick={toggleModal}>Close</button>
        </Modal>}
        <Section title="Phonebook">
        <Form onShowModal={toggleModal}/>
        </Section>
        <Section title="Contacts">
          <Filter />
          <PhoneBook />
        </Section>
      </Container>
    );
}

