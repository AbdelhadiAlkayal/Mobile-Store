import React from "react";
import clasess from "./OurDevices.module.css";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
function OurDevices() {
  return (
    <div className={clasess.container}>
      <h1 className={clasess.heading}>Our Devices</h1>
      <div className={clasess.boxContainer}>
        <div className={clasess.box}>
          <img src={img1} alt="device" className={clasess.image} />
          <h3>Samsung S23 Ultra</h3>
          <p>
            Specifications are top-notch including 6.8-inch Dynamic AMOLED
            display with 120Hz refresh rate.
          </p>
        </div>
        <div className={clasess.box}>
          <img src={img2} alt="device" className={clasess.image} />
          <h3>Asus ROG G701</h3>
          <p>
            Intel Core i7-6700HQ or higher - G701 trumps that with an
            overclockable Intel i7 6820HK processor for desktop-like
            performance.
          </p>
        </div>
        <div className={clasess.box}>
          <img src={img4} alt="device" className={clasess.image} />
          <h3>Asus ROG Phone 6 Pro</h3>
          <p>
            As well as its 6-inch AMOLED 2160 x 1080 auxiliary screen, it packs
            a front-facing quad-speaker system.
          </p>
        </div>
        <div className={clasess.box}>
          <img src={img3} alt="device" className={clasess.image} />
          <h3>Macbook pro m2</h3>
          <p>
            Apple 2022 MacBook Pro Laptop with M2 chip: 13-inch Retina Display.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurDevices;
