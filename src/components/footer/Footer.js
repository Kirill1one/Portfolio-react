import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/kirilll_kup" target="_block">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://instagram.com/kirilll_kup?igshid=YmMyMTA2M2Y="
                target="_block"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>

            <li className="social__item">
              <a href="https://github.com/Kirill1one" target="_block">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2023 </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
