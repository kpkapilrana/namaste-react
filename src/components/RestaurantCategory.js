import React, { useState } from "react";
import ItemCards from "./ItemCards";
const RestaurantCategory = ({
  title,
  itemCards,
  isOpen,
  setOpenIndex,
  reset,
}) => {
  //   const [isOpen, setIsOpen] = useState(false);

  const onExpand = () => {
    setOpenIndex();
    // isOpen ? reset() : setOpenIndex();
  };
  return (
    <div className="bg-gray-50 mb-2 shadow-lg rounded-lg border border-solid border-black">
      <div
        className="flex justify-between  mx-auto p-2"
        onClick={() => onExpand()}
      >
        <h1 className="px-4 font-bold text-lg">
          {title} ({itemCards.length})
        </h1>
        <span>{isOpen ? "🔼" : "🔽"}</span>
      </div>
      {isOpen && <ItemCards cards={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
