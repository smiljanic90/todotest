import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
  //   const { orders } = useOrderCartStore();
  const router = useNavigate();
  const handleClickCart = () => {
    router('/cretae');
  };
  return (
    <div className="cart_icon" onClick={() => handleClickCart()}>
      {/* <span>{orders.length}</span> */}
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-1433158-1211836.png?f=webp"
        alt="Cart Icon"
      />
    </div>
  );
};

export default CartIcon;
