import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantDetails  from "../../utils/useRestaurantDetails";

const RestaurantPage = () => {
  const { resId } = useParams();

  const {restaurantDetails, restaurantMenu} = useRestaurantDetails(resId);

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = restaurantDetails ?? {};

  return restaurantDetails === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Restaurant-Image"
      />
      <h1 className="res-name">{name}</h1>
      <h2 className="res-cuisines">{cuisines.join(", ")}</h2>
      <h3 className="res-cost">{costForTwoMessage}</h3>
      <h4 className="res-rating">Rating: {avgRating}</h4>

      <h2 className="res-menu-title">Menu</h2>
      <ul className="res-menu">
        {restaurantMenu?.map((item) => (
          <li key={item.card.info.id} className="res-menu-item">
            <img
              className="menu-item-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
            />
            <div className="menu-item-details">
              <h3>{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <p>Price: ₹{item.card.info.price / 100}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
