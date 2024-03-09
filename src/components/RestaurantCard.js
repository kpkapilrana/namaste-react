import { CDN_URL, checkTextLength } from "../utils/constant";

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
    costForTwo,
    sla: { slaString },
  } = resData?.info;
  // console.log(resData);
  return (
    <div className="m-4 p-4 w-[200] bg-gray-200 shadow-lg rounded-lg">
      <img
        className="w-44 h-40 rounded-md"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{checkTextLength([name], 10)}</h3>
      <h4 className="text-ellipsis">{checkTextLength(cuisines, 15)}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

// High Order Component

// Input - RestaurantCard => RestaurantCardPromoted

// Take Component and return its Enhance Version of that Component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute p-2 m-4 rounded-md bg-black text-white">
          Open
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </>
    );
  };
};

export default RestaurantCard;
