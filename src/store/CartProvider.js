import {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    // The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    const updatedItems = state.items.concat(action.item); // update array in an immutable way
    const updatedTotalAmount = state.totalAmount + state.item.price * state.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === 'ADD') {}
  return defaultCartState;
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartProvider;
