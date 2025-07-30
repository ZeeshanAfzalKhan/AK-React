import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantPage = () => {
  const { resId } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.465094&lng=77.5035701&restaurantId=${resId}`
    );
    const json = await data.json();
    setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);

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
        ?.card?.card?.itemCards || [])
    ];


    setRestaurantMenu(
      menuData ? menuData.filter(item => item.card?.info) : []
    );
  };

  const { name, cuisines, costForTwoMessage, avgRating, cloudinaryImageId } = restaurantDetails ?? {};

  return restaurantDetails === null ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          restaurantDetails?.cloudinaryImageId
        }
        alt="Restaurant-Image"
      />
      <h1 className="res-name">{name}</h1>
      <h2 className="res-cuisines">{cuisines.join(", ")}</h2>
      <h3 className="res-cost">{costForTwoMessage}</h3>
      <h4 className="res-rating">Rating: {avgRating}</h4>

      <h2 className="res-menu-title">Menu</h2>
      <ul className="res-menu">
        {restaurantMenu?.map((item) => (
          <li key={item.card.info.id} className="res-menu-item">
            <img
              className="menu-item-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                item.card.info.imageId
              }
              alt={item.card.info.name}
            />
            <div className="menu-item-details">
              <h3>{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <p>Price: ₹{item.card.info.price / 100}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
