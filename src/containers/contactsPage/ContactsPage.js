import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

	const [name, setName] = useState('')
 	const [phone, setPhone] = useState('')
 	const [email, setEmail] = useState('')
  // const [duplicate, setDuplicate] = useState(false)

   const handleSubmit = (e) => {
    e.preventDefault();
    if ((contacts.find((contact)=>contact.email===email))!==undefined) {
      alert("duplicate emails");
      return;
    } else {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  // useEffect(() => {
  //   const emailIsDuplicate = () => {
  //     const look = contacts.find((contact) => contact.email === email);
  //     if (look !== undefined) {
  //       return true;
  //     }
  //     return false;
  //   };

  //   if (emailIsDuplicate()) {
  //     setDuplicate(true);
  //   } else {
  //     setDuplicate(false);
  //   }
  // }, [email, contacts, duplicate]);
  
  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email} 
          setName={setName} 
          setPhone={setPhone} 
          setEmail={setEmail} 
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          tiles={contacts} 
        />
      </section>
    </div>
  );
};
