import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  // Local State Variable - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // let listOfRestaurants = [
  //   {
  //     info: {
  //       id: "430768",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "mwakaqib8te8rp4bjb3d",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 4.5,
  //       parentId: "2456",
  //       sla: {
  //         deliveryTime: 35,
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "430769",
  //       name: "KFC",
  //       cloudinaryImageId: "mwakaqib8te8rp4bjb3d",
  //       costForTwo: "₹400 for two",
  //       cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
  //       avgRating: 3.5,
  //       parentId: "2456",
  //       sla: {
  //         deliveryTime: 35,
  //       },
  //     },
  //   },
  // ];
  onClick = (e) => {
    // e, preventDefault();
    const filterList = listOfRestaurants.filter(
      (el) => el.info.avgRating > 4.2
    );
    setListOfRestaurants(filterList);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={onClick}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="search">Search</div>
      <div className="rest-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
