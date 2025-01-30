const houseDetails = [
  {
    id: 1,
    owner: "Maha",
    description:
      "Located in a peaceful neighborhood of Chennai, this house offers a perfect blend of modern design and serene living. The property features a spacious living room, a modern kitchen, and a beautiful backyard with lush greenery, ideal for family gatherings. It is situated 10 km from the nearest hospital and close to reputable schools, supermarkets, and recreational parks. This house is perfect for those seeking a calm and comfortable lifestyle.",
    address: "No. 24, Green Meadows Avenue, Anna Nagar, Chennai, Tamil Nadu, 600040",
  },
  { 
    id: 2,
    owner: "Jeyadina",
    description:
      "Situated in Coimbatore, this luxurious home is ideal for families or professionals seeking a premium rental property. The house includes large bedrooms, a beautifully landscaped garden, and contemporary interiors. It is conveniently located just 5 km from a major hospital and within easy reach of shopping malls, top-rated restaurants, and schools. The vibrant neighborhood adds to the charm of this exquisite home.",
    address: "Plot No. 45, Orchid Garden Street, RS Puram, Coimbatore, Tamil Nadu, 641002",
  },
  {
    id: 3,
    owner: "Asma Fathima",
    description:
      "This farmhouse-style home in Madurai is perfect for those who enjoy a mix of rural tranquility and modern amenities. The house features a spacious patio, a well-equipped kitchen, and a garden that offers a serene escape from city life. Located just 7 km from the nearest hospital, the property is also close to local markets and educational institutions, making it a practical and peaceful rental choice.",
    address: "12, Jasmine Lane, Alagar Kovil Road, Madurai, Tamil Nadu, 625002",
  },
  {
    id: 4,
    owner: "Mirsha",
    description:
      "Nestled in a picturesque location, this cozy house is a great fit for small families or couples. The interiors are tastefully designed, offering a warm and welcoming atmosphere. With a hospital located just 6 km away and nearby amenities such as grocery stores and public transport, this property ensures convenience and comfort for its residents.",
    address: "17, Rosewood Street, Gandhi Nagar, Vellore, Tamil Nadu, 632006",
  },
  {
    id: 5,
    owner: "Nivetha Kalyani",
    description:
      "This affordable rental property in Salem is ideal for budget-conscious families or individuals. The house includes functional interiors, a compact kitchen, and a small garden. It is located just 8 km from the nearest hospital and close to schools, a park, and daily necessities. This is an excellent choice for those seeking a simple yet comfortable living space.",
    address: "Flat No. 3, Sunrise Apartments, Yercaud Main Road, Salem, Tamil Nadu, 636007",
  },
  {
    id: 6,
    owner: "Kiruthika",
    description:
      "A modern property located in Trichy, this house is perfect for buyers looking for a stylish home in a prime location. The property includes a contemporary living area, a sleek kitchen, and a small balcony. It is 4 km from the closest hospital and surrounded by shopping centers, entertainment hubs, and dining options, making it a fantastic deal for city dwellers.",
    address: "House No. 21, Lotus Enclave, Srirangam, Trichy, Tamil Nadu, 620006",
  },
];

const ViewDetails = () => {
  return (
    <div className="detail">
      {houseDetails.map((house) => (
        <div className="detail-cart" key={house.id}>
          <h3>{house.id}. {house.owner}'s House</h3>
          <p>{house.description}</p>
          <h4>Address: {house.address}</h4>
        </div>
      ))}
    </div>
  );
};

export default ViewDetails;