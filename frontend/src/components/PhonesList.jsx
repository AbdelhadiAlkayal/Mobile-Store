import React from "react";
import clasess from "./PhonesList.module.css";
import { Link } from "react-router-dom";

function PhonesList({ events }) {
  return (
    <div className={clasess.container}>
      <h1 className={clasess.heading}>All Devices</h1>
      <div className={clasess.boxContainer}>
        {events.map((phone) => (
          <div className={clasess.box} key={phone.id}>
            <Link to={phone.id}>
              <img src={phone.image} alt="device" className={clasess.image} />
              <h3>{phone.title}</h3>
              <p>Price: {phone.price} JD</p>
              <p>Hardware: {phone.hardware}</p>
              <p>Software: {phone.software}</p>
              <p>Battery: {phone.battery}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
    // <div className={classes.events}>
    //   <h1>All Devices</h1>
    //   <ul className={classes.list}>
    //     {events.map((event) => (
    //       <li key={event.id} className={classes.item}>
    //         <Link to={event.id}>
    //           <img src={event.image} alt={event.title} />
    //           <div className={classes.content}>
    //             <h2>{event.title}</h2>
    //             <p>Price: {event.price} JD</p>
    //             <p>Hardware: {event.hardware}</p>
    //             <p>Software: {event.software}</p>
    //             <p>Battery: {event.battery}</p>
    //           </div>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default PhonesList;
