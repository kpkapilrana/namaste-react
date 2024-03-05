import React, { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.8676658&lng=75.3827335&restaurantId=" +
        id
    );
    const json = await response.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
  // const { itemCards } =
  //   resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log(itemCards);
  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <p> {areaName}</p>
        <h2>Menu</h2>

        {cards.slice(1).map((card, i) => (
          <div key={i}>
            {card.card.card.title ? (
              <div>
                <div>{card.card.card.title}</div>
                <ul>
                  {card.card.card.itemCards.map((item) => (
                    <li key={item?.card?.info?.id}>
                      {item?.card?.info?.name} - {"Rs."}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
