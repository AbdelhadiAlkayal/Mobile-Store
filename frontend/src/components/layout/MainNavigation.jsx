import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.lis}>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className={classes.lis}>
            <NavLink
              to={"phones"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Phones & Labtops
            </NavLink>
          </li>
          <li className={classes.lis}>
            <NavLink
              to={"about"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"cart"}
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              <HeaderCartButton />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
