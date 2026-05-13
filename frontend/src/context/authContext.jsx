import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_REQUEST":
      return { ...state, loading: true, error: null };
    case "AUTH_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };
    case "AUTH_FAIL":
      return { loading: false, error: action.payload };
    case "LOGOUT":
      return { userInfo: null, loading: false, error: null };
    case "CLEAR_ERROR":
      return { ...state, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Unified Auth Function (Login or Signup)
  const authenticate = async (type, credentials) => {
    dispatch({ type: "AUTH_REQUEST" });
    console.log(type, credentials);
    try {
      let endpoint;
      if (type === "login") {
        endpoint = "/api/users/login";
      } else if (type === "signup") {
        endpoint = "/api/users/register";
      } else {
        throw new Error("Unknown auth type");
      }
      const { data } = await axios.post(endpoint, credentials);
      console.log(data);
      dispatch({ type: "AUTH_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: "AUTH_FAIL",
        payload: err.response?.data?.message || err.message,
      });
    }
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "LOGOUT" });
  };

  const clearError = () => dispatch({ type: "CLEAR_ERROR" });

  return (
    <AuthContext.Provider
      value={{ ...state, authenticate, logout, clearError }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
