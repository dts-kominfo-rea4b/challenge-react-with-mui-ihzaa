import './App.css';

// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Header from './components/Header';
import { Grid } from '@mui/material';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import { useState } from 'react';

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [contacts, setContacts] = useState(contactsJSON)
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
  const addNewButtonHandler = (newContact) => {
    setContacts([...contacts, newContact]);
  }
  return (
    <div className="App">
      <Header />
      <Grid container spacing={4}>
        <Grid item md={6}>
          <ContactForm submitHandler={addNewButtonHandler} />
        </Grid>
        <Grid item md={6}>
          {contacts.map((contact,i) => <Contact key={i} data={contact} />)}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
