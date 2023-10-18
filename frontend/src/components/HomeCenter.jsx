import clases from "./HomeCenter.module.css";
// import SlideImage from "./helper/SlideImage";
import { Link } from "react-router-dom";

function HomeCenter() {
  return (
    <div className={clases.countiner}>
      <section className={clases.hero}>
        <h1 className={clases.title}>
          <span>Tech Gadgets Galore, Come Discover</span>
        </h1>
        <p className={clases.welcomeParagraph}>
          Dive into the world of{" "}
          <span className={clases.highlightText}>tech excellence</span> with us.
          <br /> Explore our handpicked selection of the latest
          <br />{" "}
          <span className={clases.highlightText}>
            smartphones, laptops, and more.
          </span>{" "}
          Your tech adventure begins here
        </p>
        <div>
          <Link to={"phones"}>
            <button>
              <span className={clases.span}></span>GO TO SHOP
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomeCenter;
