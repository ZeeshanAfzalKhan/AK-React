import { useParams } from "react-router-dom";
import ItemCategory from "../Components/ItemCategory";
import useRestaurantDetails from "../../utils/useRestaurantDetails";

const RestaurantPage = () => {
  const { resId } = useParams();

  const { restaurantDetails, restaurantMenu, loading, error } =
    useRestaurantDetails(resId);

  // console.log("RestaurantPage component rendered", restaurantMenu);

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
        {restaurantMenu?.map((category) => {
          return <ItemCategory key={category?.card?.card?.categoryId} category={category?.card?.card}/>;
        })}
      </div>
    </div>
  );
};

export default RestaurantPage;
