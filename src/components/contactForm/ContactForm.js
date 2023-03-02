import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input 
        type="text" 
        name="name" 
        value={name || ""}
        onChange={(e) => setName(e.target.value)}
        required
        />
        <p>Phone</p>
        <input 
        type="tel" 
        name="phone" 
        value={phone || ""}
        onChange={(e) => setPhone(e.target.value)}
        />
        <p>Email</p>
        <input 
        type="email"
        name="email"
        value={email || ""}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};
