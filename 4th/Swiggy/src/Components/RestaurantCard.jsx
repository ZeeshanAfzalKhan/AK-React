import { useState } from "react";
import { useNavigate } from "react-router";

const RestaurantCard = (props) => {
  const navigate = useNavigate();

  const {
    id,
    name,
    cloudinaryImageId,
    sla,
    costForTwo,
    cuisines,
    avgRatingString,
  } = props?.resData.info;

  const handleClick = () => {
    navigate(`/restaurants/${id}`);
  };


  return (
    <div className="restaurant-card" onClick={() => handleClick()}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Restaurant-Image"
      />
      <h3>{name}</h3>
      <p>{sla?.slaString}</p>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
      <p>Rating: {avgRatingString}</p>
    </div>
  );
};

export default RestaurantCard;
