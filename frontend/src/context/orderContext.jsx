import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

const OrderContext = createContext();

const initialState = {
  order: null,
  loading: false,
  error: null,
  success: false,
};

const orderReducer = (state, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return { loading: true };
    case "ORDER_CREATE_SUCCESS":
      return { loading: false, success: true, order: action.payload };
    case "ORDER_CREATE_FAIL":
      return { loading: false, error: action.payload };
    case "ORDER_RESET":
      return initialState;
    default:
      return state;
  }
};

export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const createOrder = async (orderData) => {
    try {
      dispatch({ type: "ORDER_CREATE_REQUEST" });

      // Get user token from localStorage (assuming you saved it there)
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post("/api/orders", orderData, config);

      dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });

      // Clear cart from localStorage after successful order
      localStorage.removeItem("cartItems");
    } catch (error) {
      dispatch({
        type: "ORDER_CREATE_FAIL",
        payload: error.response?.data?.message || error.message,
      });
    }
  };

  return (
    <OrderContext.Provider value={{ ...state, createOrder, dispatch }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => useContext(OrderContext);
