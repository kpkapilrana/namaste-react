import { useDispatch, useSelector } from "react-redux";
import ItemCards from "../components/ItemCards";
import { clearCart } from "../utils/cartSlice";

const Services = () => {
  const items = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const onClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex content-center justify-center  mt-4 my-auto mb-0">
      <div className="max-w-[800] w-full font-semibold text-lg">
        <div className="flex justify-between">
          <h1 className="text-2xl text-center">Cart</h1>
          <button
            onClick={onClear}
            className="bg-red-500 text-white p-2 m-2 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
        {items.length === 0 && <h1>Cart is Empty! Add Items to Cart</h1>}
        <ItemCards cards={items}></ItemCards>
      </div>
    </div>
  );
};

export default Services;
