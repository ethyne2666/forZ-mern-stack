import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 25;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;
