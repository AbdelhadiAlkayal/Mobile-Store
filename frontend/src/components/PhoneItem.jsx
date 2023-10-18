import classes from "./PhoneItem.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../store/Cart-Slice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function PhoneItem({ event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemToCart({
        id: event.id,
        title: event.title,
        price: event.price,
        image: event.image,
      })
    );
    toast.success(`The ${event.title} has been added successfully`);
  };
  const backCartHandler = () => {
    navigate(-1);
  };
  return (
    <article className={classes.phone}>
      <img src={event.image} alt={event.title} />
      <div className={classes.product}>
        <h1>{event.title}</h1>
        <p>{event.price} JD</p>
        <p>{event.description}</p>
      </div>
      <menu className={classes.actions}>
        <button onClick={backCartHandler}>Back</button>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </menu>
    </article>
  );
}

export default PhoneItem;
