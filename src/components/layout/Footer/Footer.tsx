import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__section">
          <h4>Sections:</h4>
          <ul>
            <li>
              <Link to="/#recipes">Recipes</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </section>

        <section className="footer__section">
          <h4>Contacts:</h4>
          <p>
            Email:{" "}
            <a href="mailto:kocobum17052075@gmail.com">
              kocobum17052075@gmail.com
            </a>
          </p>
          <p>
            Telephone: <a href="tel:+375(29)5816314">+375(29) 581-63-14</a>
          </p>
        </section>
      </div>

      <section className="footer__rights">
        <p>&copy; 2025 Cooking World. Все права защищены.</p>
      </section>
    </footer>
  );
};

export default Footer;
