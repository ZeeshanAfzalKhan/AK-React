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
    <div
      className="w-[250px] h-[350px] border border-gray-300 pb-3 rounded-lg hover:shadow-lg cursor-pointer bg-gray-50"
      onClick={() => handleClick()}
    >
      <img
        className="w-full h-40 rounded-t-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="Restaurant-Image"
      />
      <div className="p-2">
        <h3 className="font-bold">{name}</h3>
        <p>{sla?.slaString}</p>
        <p>{costForTwo}</p>
        <p>{cuisines.join(", ")}</p>
        <p>Rating: {avgRatingString}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
          Open
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
