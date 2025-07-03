import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div id="logo">LOGO</div>
      <div id="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src="/public/Logo.png" alt="Restaurant-Image" />
      <h3>Half Fried</h3>
      <p>Some description about the restaurant.</p>
      <p>Delivery Time: 30 mins</p>
      <p>Cost for Two: ₹500</p>
      <p>Cuisines: Indian, Chinese</p>
      <p>Rating: 4.5</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
        <input type="text" placeholder="Search for food, groceries, electronics etc." />
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div id="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
