import { useParams } from "react-router-dom";
import ItemCategory from "../Components/ItemCategory";
import useRestaurantDetails from "../../utils/useRestaurantDetails";
import { useState } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(false);

  const { restaurantDetails, restaurantMenu, loading, error } =
    useRestaurantDetails(resId);

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    restaurantDetails ?? {};

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <div className="flex flex-col items-center p-4">
      <h1 className="font-bold text-3xl text-start my-4 font-sans">{name}</h1>
      <div className="bg-gradient-to-t from-gray-300 to-wh p-4 rounded-3xl">
        <div className="flex flex-col items-start p-6 border border-gray-200 shadow-gray-300 rounded-3xl bg-white">
          <div className="flex gap-2">
            <h4 className="text-lg font-bold">
              {avgRating}
              {" ("}
              {totalRatingsString}
              {")"}{" "}
            </h4>
            <h3 className="text-2xl font-bold text-gray-500">{" · "}</h3>
            <h3 className="text-lg font-bold">{costForTwoMessage}</h3>
          </div>
          <h2 className="text-md font-bold text-orange-600 underline">
            {cuisines.join(", ")}
          </h2>
        </div>
      </div>

      <div className="w-full max-w-4xl flex flex-col items-center">
        <h2 className="font-semibold text-md my-8 font-stretch-extra-expanded text-gray-500">
          MENU
        </h2>
        {restaurantMenu?.map((category, index) => {
          return (
            <ItemCategory
              key={category?.card?.card?.categoryId}
              category={category?.card?.card}
              showItems={index === showIndex}
              setShowItems={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantPage;
