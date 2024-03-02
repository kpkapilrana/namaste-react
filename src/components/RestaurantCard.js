import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (prop) => {
  const { resData } = prop;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla: { deliveryTime },
  } = resData?.info;
  // console.log(resData);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Star</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
