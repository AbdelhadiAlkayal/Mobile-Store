import React from "react";
import classes from "./About.module.css";
function About() {
  const style = {
    color: "#3a3aa8",
  };
  return (
    <section className={classes.aboutSection}>
      <h1 className={classes.About}>
        About Us- <span style={style}>Mobile Technology Store</span>
      </h1>
      <p className={classes.introText}>
        Welcome to Mobile Technology Store, your premier destination for
        cutting-edge mobile gadgets and accessories. Founded by a team of
        passionate mobile tech enthusiasts, we're here to simplify your choices
        and provide you with top-notch products and exceptional customer
        service.
      </p>
      <div className={classes.whyChooseUs}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Carefully Curated Selection:</strong> We handpick the latest
            and finest mobile gadgets and accessories from leading brands.
          </li>
          <li>
            <strong>Customer-Centric Approach:</strong> Your satisfaction is our
            priority. We're here to assist you every step of the way.
          </li>
          <li>
            <strong>Tech Community:</strong> Join our community of mobile tech
            enthusiasts and stay updated on industry trends.
          </li>
        </ul>
      </div>
      <div className={classes.contactInfo}>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Reach out to us:</p>
        <p className={classes.contactDetails}>
          <strong>Email:</strong>{" "}
          <a className={classes.H} href="mailto:contact@mobiletechstore.com">
            contact@mobiletechstore.com
          </a>
        </p>
        <p className={classes.contactDetails}>
          <strong>Phone:</strong> +962-777-432-1111
        </p>
      </div>
      <div className={classes.socialMedia}>
        <h2>Connect With Us</h2>
        <p>Follow us on social media for the latest updates:</p>
        <ul className={classes.socialLinks}>
          <li>
            <a href="https://www.facebook.com/mobiletechstore">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com/mobiletechstore">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/mobiletechstore">Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
