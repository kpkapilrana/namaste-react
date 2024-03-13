import { useDispatch } from "react-redux";
import { MENU_IMG_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";
const ItemCards = ({ cards }) => {
  const dispatch = useDispatch();

  const onAdd = (item) => {
    // const {ca}=item
    // console.log("Added");
    // Dispatch Action
    dispatch(addItem(item));
  };
  return (
    <>
      {cards.map((item) => {
        return (
          <div
            data-testid="catCard"
            key={item?.card?.info?.id}
            className="flex p-2 justify-between pl-8 mx-4 mb-2 border-gray-300 border-b-2"
          >
            <div className="w-5/6">
              <h2 className="mr-4 text-xl font-medium break-words text-['#3e4152']">
                {" "}
                {item?.card?.info?.name}{" "}
              </h2>
              <p>
                <span>&#8377;</span>{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </p>
              <p className="text-gray-400 text-sm">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="relative">
              <img
                className="w-20 h-20"
                src={MENU_IMG_URL + item?.card?.info?.imageId}
              ></img>

              <button
                className="absolute bottom-2 bg-white text-green-500 uppercase text-md px-4 mx-2 shadow-md rounded-md border border-solid border-gray-400"
                onClick={() => {
                  onAdd(item);
                }}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemCards;
