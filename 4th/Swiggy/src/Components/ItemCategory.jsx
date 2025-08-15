import MenuItem from "./MenuItem";

const ItemCategory = ({ category }) => {
  // console.log(category)
  if(category?.itemCards) {

    return (
      <div className="w-1/2 mx-auto">
        <h2 className="font-bold text-xl">
          {category?.title} {category?.itemCards.length}
        </h2>
        {category?.itemCards.map((item) => {
          return (
            <div
              key={item?.card?.info?.id}
              className="flex flex-col items-center mb-8"
            >
              <MenuItem item={item?.card?.info}/>
            </div>
          );
        })}
      </div>
    );
      
  
  }

  if(category?.categories) {
    return (
      <div className="w-1/2 mx-auto">
        <h2>
          {category?.title} {category?.categories.length}
        </h2>
        {category?.categories.map((item) => {
          return <ItemCategory key={item?.categoryId} category={item} />;
        })}
      </div>
    );
  }
}

export default ItemCategory;