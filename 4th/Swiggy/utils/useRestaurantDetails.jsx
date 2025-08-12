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
      throw new Error('Network response was not ok');
    }

    const json = await data.json();

    setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);

    console.log(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const menuData = [
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.categories?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
        ?.card?.card?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]
        ?.card?.card?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]
        ?.card?.card?.itemCards || []),
      ...(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]
        ?.card?.card?.itemCards || []),
    ];

    setRestaurantMenu(
      menuData ? menuData.filter((item) => item.card?.info) : []
    );
    }
    catch (error) {
      setError(error.message);
    }
    finally {
      setLoading(false);
    }
  }

  return {restaurantDetails, restaurantMenu, loading, error};
}

export default useRestaurantDetails;