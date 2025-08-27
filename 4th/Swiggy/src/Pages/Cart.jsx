import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../Components/MenuItem";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center w-6/12 m-auto">
      <div className="w-full flex justify-between items-center">
        <h2 className="font-bold text-xl">CART</h2>
        <button 
        className="border border-gray-300 bg-red-500 text-white px-4 py-1 rounded-md font-bold font-sans text-lg hover:cursor-pointer hover:bg-red-600"
        onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      {cartItems.length === 0 ? (
        <h3 className="font-semibold text-lg">Your cart is empty! Go buy some items.</h3>
      ) : (
        cartItems.map((item, index) => (
          <MenuItem key={index} item={item} from="cart" />
        ))
      )}
    </div>
  );
};

export default Cart;
