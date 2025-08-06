import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4659992&lng=77.50392149999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRestaurants(
          data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
}

export default useFetchRestaurants;