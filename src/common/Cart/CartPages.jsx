// CartPage.js
import React from 'react';
import Cart from './Cart';
import CartHeader from './CartHeader';
import CartEmpty from './CartEmpty';



const CartPage = ({ CartItem, addToCart, decreaseQty }) => {
  const hasItems = CartItem.length > 0;
  
  return (
    <div>
      <CartHeader />
      {hasItems ? (
        <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartPage;
