import "./footer.css";
import { BsMouse } from "react-icons/bs";
import {GoMarkGithub} from "react-icons/go"
import {AiFillLinkedin} from "react-icons/ai"

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Thank You
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        {/* Github */}
        <a href="https://github.com/alexis0501" target="_blank">
          <GoMarkGithub className="social" />
        </a>
        <a href="https://www.linkedin.com/in/alexis-mayoral-27b186239/" target="_blank">
          <AiFillLinkedin className="social"/>
        </a>
      </div>
    </div>
  );
}
export default Footer;
