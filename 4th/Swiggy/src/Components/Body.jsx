import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, [])

  const fetchRestaurants = async () => {
    const restaurants = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4659992&lng=77.50392149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   


        const jsonData = await restaurants.json();
        setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  return (
    <div className="body">
      <div>
        <h2>Restaurants in your area</h2>
      </div>

      <div className="res-container">
        {restaurantList?.map((restaurant) => {
          return <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
