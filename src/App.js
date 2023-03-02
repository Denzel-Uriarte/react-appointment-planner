import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

const ROUTES = {
	CONTACTS: "/contacts",
	APPOINTMENTS: "/appointments",
};

function App() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);



 const addAppointment = (title, date, time, contact) => {
    setAppointments([
      ...appointments,
      {
        title: title,
        date: date,
        time: time,
        contact: contact
      },
    ]);
 }
 const addContact = (name, phone, email) => {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };    
 

  return (
    <div>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage 
            addContact={addContact} 
            contacts={contacts} 
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage 
            addAppointment={addAppointment} 
            appointments={appointments} 
            contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
