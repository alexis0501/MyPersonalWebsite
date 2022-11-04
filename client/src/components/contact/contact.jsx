import "./contact.css";
import {GoMail} from "react-icons/go"
// import { AiOutlineWhatsApp } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai"
import {GoMarkGithub} from "react-icons/go"

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/alexis-mayoral-27b186239/"
          className="contact youtube"
          target={"blank"}
        >
          <AiFillLinkedin className="icon" />
          <h2>
            Linkedin <span>Alexis Mayoral</span>
          </h2>
        </a>

        <div className="contact whatsapp">
          <a href="https://github.com/alexis0501" target={"blank"}>
          <GoMarkGithub className="icon" />
          <h2>
            Github <span>My Profile</span>
          </h2>
          </a>
        </div>

        <div href="#" className="contact instagram">
          <a href="mailto: alexismayoral0501@gmail.com">
          <GoMail className="icon" />
          <h2>
            Gmail <span>alexismayoral0501@gmail</span>
          </h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
