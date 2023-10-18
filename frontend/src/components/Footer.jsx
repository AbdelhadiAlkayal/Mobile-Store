import React from "react";
import clasess from "./Footer.module.css";
import { BsFacebook, BsGithub, BsLinkedin, BsGoogle } from "react-icons/bs";
function Footer() {
  return (
    <footer>
      <div className={clasess.content}>
        <h3>code opecity</h3>
        <p>
          Your mobile destination for cutting-edge tech, top brands, and
          unbeatable deals. Shop smart with us today !
        </p>
        <ul className={clasess.socials}>
          <li>
            <a href="https://web.facebook.com/Mkmk.alkayal/?_rdc=1&_rdr">
              <BsFacebook className={clasess.icon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/AbdelhadiAlkayal">
              <BsGithub className={clasess.icon} />
            </a>
          </li>
          <li>
            <a href="https://jo.linkedin.com/in/abdelhadi-alkayal-1a2379261">
              <BsLinkedin className={clasess.icon} />
            </a>
          </li>
          <li>
            <a href="mailto:Abdelhadi.alkayal@gmail.com">
              <BsGoogle className={clasess.icon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={clasess.bottom}>
        <p>
          copyright &copy;2023 codeOpacity. designed by <span>Abdelhadi</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
