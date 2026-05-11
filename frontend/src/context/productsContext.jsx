import React, {
  createContext,
  useReducer,
  useEffect,
  useContext,
  use,
} from "react";
import axios from "axios";

// 1. Initialize the Context
const ProductsContext = createContext();

// 2. Define the Initial State
const initialState = {
  products: [],
  loading: false,
  error: null,
};

// 3. The Reducer: A function that decides how the "Cloud" state changes
const productsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// 4. The Provider Component
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      // Replace with your actual backend URL
      const { data } = await axios.get("/api/products");
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({
        type: "FETCH_FAIL",
        payload: err.response?.data?.message || err.message,
      });
    }
  };

  // Automatically fetch products when the app loads
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ ...state, refreshProducts: fetchProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// 5. Custom Hook for easy access (Best Practice)
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
