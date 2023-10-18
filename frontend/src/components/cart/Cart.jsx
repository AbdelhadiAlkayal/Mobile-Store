import React, { useEffect } from "react";
import classes from "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsCartDashFill } from "react-icons/bs";
import { BsFillTrash3Fill } from "react-icons/bs";
import { cartAction } from "../../store/Cart-Slice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
function Cart() {
  const cartItem = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  let pargraph = (
    <p
      style={{
        color: " black",
        marginTop: "5rem",
        marginLeft: "23rem",
        marginRight: "20rem",
        backgroundColor: "#f5f5f5",
        padding: "35px 56px",
        borderRadius: "30px",
      }}
    >
      Your Cart Is Empity
    </p>
  );

  const getTotalAmountForCartItem = () => {
    let totalAmount = 0;

    for (let index = 0; index < cartItem.length; index++) {
      const element = cartItem[index];

      totalAmount += element.price * element.quantity;
    }

    return totalAmount;
  };
  const totalAmount = getTotalAmountForCartItem();
  useEffect(() => {
    if (cartItem.length > 0) getTotalAmountForCartItem();
  }, [cartItem]);
  const orderHandler = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you for order ",
      text: "Your order is on the way to you",
    });
    dispatch(cartAction.resetCart());
    setTimeout(() => {
      navigate("/");
      return <></>;
    }, 50);
  };
  const orderShow = (
    <div className={classes.total}>
      <p>
        <span>Total Price</span>

        <span>{totalAmount} JD</span>
      </p>
      <button className={classes.button} onClick={orderHandler}>
        <span className={classes.span}></span> Proceed to Checkout
      </button>
    </div>
  );
  const dispatch = useDispatch();
  const addToCartHandler = (index, item, type) => {
    dispatch(cartAction.addOrLessQuantity({ index, item, type }));
  };
  const removeFromCartHandler = (index, item, type) => {
    dispatch(cartAction.removeCartItems({ index, item, type }));
  };

  return (
    <div className={classes.container}>
      <h1>Shopping Cart</h1>
      {cartItem.length === 0 ? pargraph : ""}
      <div className={classes.cart}>
        <div className={classes.products}>
          {cartItem.map((item, index) => (
            <div className={classes.product} key={item.id}>
              <div className={classes.p}>
                <h3>{item.name}</h3>
                <BsFillTrash3Fill
                  className={classes.remove}
                  onClick={() => removeFromCartHandler(index, item, "REMOVE")}
                />
              </div>
              <div className={classes.info}>
                <div className={classes.img}>
                  <img src={item.img} alt={item.title} />
                </div>
                <div style={{ fontFamily: "math" }}>
                  <h3 className={classes.name}>{item.name}</h3>
                  <h4 className={classes.price}>Price: {item.price} JD</h4>
                  <p className={classes.quantity}>
                    Quantity: <input value={item.quantity} disabled />
                  </p>
                </div>
                <div className={classes.icon}>
                  <BsFillCartPlusFill
                    className={classes.plus}
                    onClick={() => addToCartHandler(index, item, "ADD")}
                  />

                  {item.quantity === 1 ? (
                    <BsFillTrash3Fill
                      onClick={() => addToCartHandler(index, item, "REMOVE")}
                      className={classes.minus}
                    />
                  ) : (
                    <BsCartDashFill
                      onClick={() => addToCartHandler(index, item, "REMOVE")}
                      className={classes.minus}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItem.length === 0 ? "" : orderShow}
      </div>
    </div>
  );
}

export default Cart;
