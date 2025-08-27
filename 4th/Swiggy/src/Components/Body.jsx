import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchRestaurants from "../../utils/useFetchRestaurants";

const Body = () => {
  const { restaurants, loading, error } = useFetchRestaurants();
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = React.useState(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]); 

  const RestaurantCardWithIsOpenLabel = withPromotedLabel(RestaurantCard);

  const handleSearch = () => {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  if (useOnlineStatus() === false)
    return (
      <h1>Looks like you are offline...  Pls check your internet connection.</h1>
    );

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="mb-8">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h2 className="font-bold text-lg">Restaurants in your area</h2>
      </div>

      <div className="flex justify-center items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="border border-gray-300 rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-1 focus:ring-blue-300 transition duration-300"
          value={searchText}
          onChange={(e) => { setSearchText(e.target.value); }}
        />
        <button 
        className="text-xl hover:scale-110 transition duration-300 hover:cursor-pointer" aria-label="Search Button"
        onClick={handleSearch}
        >
          🔍
        </button>
      </div>

      <div className="flex flex-wrap gap-4 justify-around">
        {filteredRestaurants?.map((restaurant) => {
          return restaurant?.info?.isOpen ? (
            <RestaurantCardWithIsOpenLabel
              key={restaurant?.info?.id}
              resData={restaurant}
            />
          ) : (
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
