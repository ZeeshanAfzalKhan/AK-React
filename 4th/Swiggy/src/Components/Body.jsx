import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchRestaurants from "../../utils/useFetchRestaurants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  const { restaurants, loading, error } = useFetchRestaurants();

  useEffect(() => {
    // fetchRestaurants();
  }, [])



  const fetchRestaurants = async () => {
    const restaurants = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4659992&lng=77.50392149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await restaurants.json();
        setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  if (useOnlineStatus() === false) return <h1>Looks like you are offline... Pls check your internet connection.</h1>;

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="body">
      <div>
        <h2>Restaurants in your area</h2>
      </div>

      <div className="res-container">
        {restaurants?.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
