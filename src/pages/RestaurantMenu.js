import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [openIndex, setOpenIndex] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  const categories =
    resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="flex content-center justify-center  mt-4 my-auto mb-0">
      <div className="max-w-[800] w-full font-semibold text-lg">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p> {areaName}</p>
        <h2>Menu</h2>

        {categories.map((card, i) => (
          <RestaurantCategory
            key={i}
            title={card?.card?.card?.title}
            itemCards={card?.card?.card?.itemCards}
            isOpen={i === openIndex ? true : false}
            setOpenIndex={() => setOpenIndex(i)}
            // reset={() => setOpenIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
