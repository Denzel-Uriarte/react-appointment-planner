import React from "react";

export const ContactPicker = ({
  name,
  onChange,
  contacts
}) => {
  return (
    <div>
      <select name={name} onChange={onChange}>
        <option key={-1}>
          select a contact
        </option>
        {contacts.map((contact) => (
        <option value={contact.name} key={contact.name}>{contact.name}</option>
      ))}
      </select>
    </div>
    );
};
