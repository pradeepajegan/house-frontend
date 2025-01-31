import React, { useState } from "react";

const AddProperty = ({addPropertyToList}) => {
  const [owner, setOwner] = useState("");
  const [price, setPrice] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState("Sale");
  const [image, setImage] = useState("");

  const handleAddProperty = async (e) => {
    e.preventDefault();

    if (!owner || !price || !contact || !status || !image) {
      alert("All fields are required!");
      return;
    }
    addPropertyToList(owner,price,contact,status,image)
    const propertyData = { owner, price, contact, status, image };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Unauthorized! Please log in first.");
        return;
      }

      const response = await fetch("https://house-backend-q8qp.onrender.com/api/properties", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(propertyData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Property added successfully!");
        setOwner("");
        setPrice("");
        setContact("");
        setStatus("Sale");
        setImage("");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Failed to connect to the server");
      console.error("Error:", error);
    }
  };

  return (
    <div className="AddForm">
      <h2>Add New Property</h2>
      <form onSubmit={handleAddProperty}>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
          <label htmlFor="status">Status</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
