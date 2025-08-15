import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import useOnlineStatus from "../../utils/useOnlineStatus";
import useFetchRestaurants from "../../utils/useFetchRestaurants";

const Body = () => {
  const { restaurants, loading, error } = useFetchRestaurants();

  const RestaurantCardWithIsOpenLabel = withPromotedLabel(RestaurantCard);

  if (useOnlineStatus() === false)
    return (
      <h1>Looks like you are offline... Pls check your internet connection.</h1>
    );

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="body">
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h2 className="font-bold text-lg">Restaurants in your area</h2>
      </div>

      <div className="flex flex-wrap gap-4 justify-around">
        {restaurants?.map((restaurant) => {
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
