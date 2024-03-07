import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, areaName } =
    resInfo?.cards[0]?.card?.card?.info;
  const { cards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);
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
                  {card?.card?.card?.itemCards?.map((item) => (
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
