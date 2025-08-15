import React from "react";

const MenuItem = ({ item }) => {
  const { name, imageId, price, defaultPrice, finalPrice, description } = item;
  // console.log(name)
  return (
    <div className="flex border-black border-b-2 ">
      <div>
        <h3>{name}</h3>
        <h4>{price / 100 || defaultPrice / 100 || finalPrice}</h4>
        <p>{description}</p>
      </div>
      <div>
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default MenuItem;
