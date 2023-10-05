import React, { createContext, useContext, useReducer, useEffect} from 'react';
const AppContext = createContext();

const appReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],};
      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,};
      default:
        return state;
    }
  };


  export const AppProvider = ({ children }) => {
    const carritoItems = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [];
    const initialState = {
      cart: carritoItems,    
      products: [],   
    };
  
    const [state, dispatch] = useReducer(appReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state.cart));}, [state.cart]);

    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };

  export const useAppContext = () => {
    return useContext(AppContext);
  };