import { useEffect, useState } from "react";

const useRestaurantDetails = (restaurantId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRestaurantData();
  }, [restaurantId]);

  const fetchRestaurantData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.465094&lng=77.5035701&restaurantId=${restaurantId}`
      );

      if (!data.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await data.json();

      setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);

      const categories =
        json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
          (c) =>
            c.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            c.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );

      setRestaurantMenu(categories);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { restaurantDetails, restaurantMenu, loading, error };
};

export default useRestaurantDetails;
