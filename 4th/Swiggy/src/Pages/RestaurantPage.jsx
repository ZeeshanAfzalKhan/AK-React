import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useRestaurantDetails from "../../utils/useRestaurantDetails";

const RestaurantPage = () => {
  const { resId } = useParams();

  const { restaurantDetails, restaurantMenu, loading, error } =
    useRestaurantDetails(resId);

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } =
    restaurantDetails ?? {};

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="flex flex-col items-center mx-auto p-4">
      <div className="flex flex-col items-center mb-8">
        <img
          className="h-80 w-auto object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Restaurant-Image"
        />
        <h1 className="font-bold text-4xl">{name}</h1>
        <h2 className="text-2xl">{cuisines.join(", ")}</h2>
        <h3 className="text-2xl">{costForTwoMessage}</h3>
        <h4 className="text-2xl">Rating: {avgRating}</h4>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center"> 
        <h2 className="font-semibold text-3xl mb-8">Menu</h2>
        <ul className="flex flex-col items-center justify-center">
          {restaurantMenu?.map((item) => (
            <li key={item.card.info.id} className="flex justify-between mb-4 gap-12 items-center w-full max-w-3xl p-4 border-b">
              <img
                className="h-40 w-60 object-cover rounded-lg"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/" +
                  item.card.info.imageId
                }
                alt={item.card.info.name}
              />
              <div className="flex flex-col justify-center text-justify">
                <h3 className="text-2xl font-medium mb-2">{item.card.info.name}</h3>
                <p className="text-md">{item.card.info.description}</p>
                <p className="text-2xl mt-2">Price: ₹{item.card.info.price / 100}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
