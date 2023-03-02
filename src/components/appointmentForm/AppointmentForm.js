import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input 
          type="text" 
          name="title" 
          value={title || ""}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <p>Date</p>
        <input 
          type="date" 
          name="date" 
          value={date || ""}
          onChange={(e) => setDate(e.target.value)}
          required
          min={getTodayString()}
        />
        <p>Time</p>
        <input 
          type="time"
          name="time"
          value={time || ""}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <p>Appointmentee</p>
        <ContactPicker 
        contacts={contacts}
        contact={contact}
        onChange={(e) => setContact(e.target.value)}
        />
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};
