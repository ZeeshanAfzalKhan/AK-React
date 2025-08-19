import { useState } from "react";
import MenuItem from "./MenuItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const ItemCategory = ({ category, level = 0, showItems, setShowItems }) => {
  const isRoot = level === 0;

  // const [showItems, setShowItems] = useState(false);

  // const handleAccordian = () => {
  //   setShowItems();
  // };

  return (
    <div className={`${isRoot ? "w-2/3 mx-auto py-2 " : ""}`}>
      <div
        className={`flex justify-between items-center pr-4 ${
          category?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            ? ""
            : "cursor-pointer"
        }`}
        onClick={
          category?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
            ? null
            : setShowItems
        }
      >
        <h2
          className={`${
            isRoot ? "text-xl font-extrabold" : "text-lg font-bold"
          }`}
        >
          {category?.title} (
          {category?.itemCards?.length ?? category?.categories?.length})
        </h2>
        {category?.itemCards &&
          (showItems ? (
            <IoIosArrowUp className="text-xl" />
          ) : (
            <IoIosArrowDown className="text-xl" />
          ))}
      </div>

      {category?.itemCards && showItems && (
        <div>
          {category.itemCards.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex flex-col items-center mb-8 border-gray-200 border-b-1 last:border-b-0"
            >
              <MenuItem item={item?.card?.info} />
              {category?.["@type"] !==
                "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" && (
                <div className="h-4 bg-gray-200 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      )}

      {category?.categories && (
        <div>
          {category.categories.map((subCat, idx) => (
            <div
              className="py-4 border-gray-300 border-b-1 last:border-b-0"
              key={subCat?.categoryId || idx}
            >
              <ItemCategory category={subCat} level={level + 1} />
              {idx === category.categories.length - 1 && (
                <div className="h-4 bg-gray-200 mt-4"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCategory;
