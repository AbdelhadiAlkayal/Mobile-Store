import React, { useState, useEffect } from "react";
import { BsCart4 } from "react-icons/bs";
import clasess from "./HeaderCartButton.module.css";
import { useSelector } from "react-redux";
function HeaderCartButton() {
  const [btnEffect, setBtnEffect] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const btnBump = `${clasess.cartQuantitiy} ${btnEffect ? clasess.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnEffect(true);
    const timer = setTimeout(() => {
      setBtnEffect(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <div className={clasess.cart}>
      <>Your Cart</>
      <div className={btnBump}>
        <BsCart4 />
        <label>{cartQuantity}</label>
      </div>
    </div>
  );
}

export default HeaderCartButton;
