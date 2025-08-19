
const MenuItem = ({ item }) => {
  const { name, imageId, price, defaultPrice, finalPrice, description } = item;
  // console.log(name)
  return (
    <div className="flex justify-between w-full min-h-40 pb-2 pt-2">
      <div className="w-2/3">
        <h3 className="font-semibold text-lg">{name}</h3>
        <h4 className="font-mono text-gray-500">{`Rs ` + price / 100 || defaultPrice / 100 || finalPrice / 100}</h4>
        <p>{description}</p>
      </div>
      <div className="w-1/3 flex flex-col gap-2 items-center">
        <img
          className="h-28 w-auto rounded-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            imageId
          }
          alt=""
        />
        <button className="border border-gray-300 text-green-600 px-8 py-2 rounded-md font-bold font-sans text-lg hover:cursor-pointer hover:bg-gray-100">ADD</button>
      </div>
    </div>
  );
};

export default MenuItem;
