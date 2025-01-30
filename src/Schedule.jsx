import React, { useState } from "react";

const Schedule = () => {
  const [name, setName] = useState("");
  const [houseName, setHouseName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleScheduleVisit = async (e) => {
    e.preventDefault();

    if (!name || !houseName || !contact || !date || !time || !location) {
      alert("All fields are required!");
      return;
    }

    const scheduleData = { name, houseName, contact, date, time, location };

    try {
      const response = await fetch("https://house-backend-q8qp.onrender.com/api/schedules", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scheduleData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Visit scheduled successfully!");
        setName("");
        setHouseName("");
        setContact("");
        setDate("");
        setTime("");
        setLocation("");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Failed to connect to the server");
      console.error("Error:", error);
    }
  };

  return (
    <div className="ScheduleForm">
      <h2>Schedule a Visit</h2>
      <form onSubmit={handleScheduleVisit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="houseName">House Name</label>
          <input
            type="text"
            id="houseName"
            value={houseName}
            onChange={(e) => setHouseName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          Schedule Visit
        </button>
      </form>
    </div>
  );
};

export default Schedule;
