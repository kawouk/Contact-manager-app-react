import React, { useEffect, useState } from "react";
//import uuid
import { v4 as uuid } from "uuid";
//import components of app
import AddContact from "./components/AddContact";
import Header from "./components/Header";
import Contact from "./components/Contact";

//import whats needed from react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactInfo from "./components/ContactInfo";

function App() {
  //create a state to add/delete contacts
  const [contacts, setContacts] = useState([]);
  //to retrieve contacts from the local storage
  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
     setContacts(contacts);
     console.log(contacts)
    }
  }, []);
  //to store contacts in the local storage
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  //handler that adds a const
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  //handler that deletes a contact by id
  const removeContactHandler = (id) => {
    //create an array that has all contacts except contact with id to delet
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });
    //set new value of contact
    setContacts(newContacts);
  };


  return (
    <div className="ui container">
      {/*Add router */}
      {/**header doesn't need a route so it will always be available */}
      <Header />
      <Router>
        <Routes>
          {/**add routes with paths */}
          <Route
            path="/"
            element={
              /*pass handler that takes the id  */
              <Contact
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              /*add handler to use in addContact component */
              <AddContact addContactHandler={addContactHandler} />
            }
          />
          <Route path="/contact/:id" element={<ContactInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
