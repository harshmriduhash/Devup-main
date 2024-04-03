import "./Footer.scss";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { Anchor, RouterLink } from "../Buttons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="upper">
        <div className="info">
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="logo">
              <img src="/Images/Logo.webp" alt="" />
              <h2>InfiniGen</h2>
            </div>
          </Link>
          <p>
            We are dedicated to delivering customized and high quality web
            solutions that meet your specific business needs. Our team builds
            responsive, search engine optimized and user-friendly websites that
            attract visitors and generate business opportunities.
          </p>
        </div>
        <div className="links">
          <h3>Navigation</h3>
          <RouterLink to="/portfolio" variant="link">
            Portfolio
          </RouterLink>
          <RouterLink to="/pricing" variant="link">
            Pricing
          </RouterLink>
          <RouterLink to="/about" variant="link">
            Abour us
          </RouterLink>
          <RouterLink to="/contact" variant="link">
            Contact
          </RouterLink>
        </div>
        <div className="contacts">
          <h3>Contact us</h3>
          <div className="email">
            <div className="icon">
              <MdEmail size={20} color="#ccc" />
            </div>
            <div>
              <h4>Email:</h4>
              <Anchor href="mailto:Sahayharsh2709@gmail.com" variant="link">
                Sahayharsh2709@gmail.com
              </Anchor>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      <p className="copyright">Copyright © 2024 AI</p>
    </footer>
  );
};

export default Footer;