import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(listOfRestaurants);
  const [searchValue, setSearchValue] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const { logedInUser, setUserName } = useContext(UserContext);

  // whenever state variables update , react triggers a reconciliation cycle(re-renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8676658&lng=75.3827335&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  onClick = () => {
    // e, preventDefault();
    const filterList = listOfRestaurants.filter(
      (el) => el.info.avgRating > 4.2
    );
    setFilteredRestaurants(filterList);
  };

  //Conditional Rendering
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks lie your Offline!! Please check your Internet Connection;</h1>
    );
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search p-1 m-1">
          <input
            type="text"
            className="border border-solid border-black p-2"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 rounded-lg bg-pink-800 text-white shadow-md hover:shadow-lg"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((el) =>
                el.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              console.log("==", filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="ring-4 border border-solid border-black rounded-lg px-4 py-2"
            onClick={() => {
              onClick();
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-4 flex items-center">
          <input
            className="border border-solid border-black p-2"
            type="text"
            value={logedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.isOpen ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
