import React, { useState } from "react";
import AddProperty from "./AddProperty";
const App = () => {
  const [properties, setProperties] = useState([
    {
      owner: "Maha",
      price: "10,000",
      contact: "6380121932",
      status: "Sale",
      image:
        "https://media.istockphoto.com/id/856794670/photo/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard.jpg?s=612x612&w=0&k=20&c=Jaun3vYekdy6aBcqq5uDQp_neNp5jmdLZXZAqqhcjk8=",
    },
    {
      owner: "Jeyadina",
      price: "20,000",
      contact: "6789543201",
      status: "Rent",
      image:
        "https://t3.ftcdn.net/jpg/02/33/59/42/360_F_233594258_81s2Un5DEpmiHYxuOPAUfnrD0T9we5fd.jpg",
    },
    {
      owner: "Asma Fathima",
      price: "15,000",
      contact: "4521096539",
      status: "Rent",
      image:
        "https://media.istockphoto.com/id/1450159186/photo/a-white-modern-farmhouse.jpg?s=612x612&w=0&k=20&c=X_ZhjuMI0dWL2kj4ycvjRATivPPoHucaW8RBlXp2Pz8=",
    },
    {
      owner: "Mirsha",
      price: "9,000",
      contact: "5680913456",
      status: "Sold",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/608/930/small/beautiful-modern-house-exterior-with-carport-modern-residential-district-and-minimalist-building-concept-by-ai-generated-free-photo.jpg",
    },
    {
      owner: "Nivetha Kalyani",
      price: "6,000",
      contact: "7610938725",
      status: "Rent",
      image:
        "https://media.istockphoto.com/id/483773209/photo/new-cozy-cottage.jpg?s=612x612&w=0&k=20&c=y1rwmoHBg-ZoE7L5WkIWjrTmwXofzqIbozTJyftDu1E=",
    },
    {
      owner: "Kiruthika",
      price: "8,000",
      contact: "6723048120",
      status: "Sale",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_sxEP27ncADG1H0v4WDq2MRR9GpV5JoenQw&s",
    },
  ]);
  const addPropertyToList = (owner, price, contact, status, image) => {
    const newProperty = { owner, price, contact, status, image };
    setProperties([...properties, newProperty]);
  };

  return (
    <>
        <div>
      <div className="Cart">
        {properties.map((property, index) => (
          <div key={index} className="display-cart">
            <h4>Owner: {property.owner}</h4>
            <h4>Price: ${property.price}</h4>
            <h4>Contact: {property.contact}</h4>
            <h4>Status: {property.status}</h4>
            <img
              src={property.image}
              alt="Property"
              width="300"
              className="image"
            />
          </div>
        ))}
      </div>
    </div>
    <AddProperty addPropertyToList={addPropertyToList}/>
    </>

  );
};

export default App;
