import React, { createContext, useReducer } from 'react';
import cartReducer from './cart-reducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, total: 0 };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addProduct = (product) =>
    dispatch({ type: 'ADD_ITEM', payload: product });
    const increase = (product) =>
      dispatch({ type: 'INCREASE_ITEM', payload: product });
    const decrease = (product) =>
      dispatch({ type: 'DECREASE_ITEM', payload: product });
    const removeProduct = (product) =>
      dispatch({ type: 'REMOVE_ITEM', payload: product });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
