import "./contact.css";
import {GoMail} from "react-icons/go"
import { AiOutlineWhatsApp } from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai"

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

        <div
          className="contact whatsapp"
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            Phone Number <span>657 282 7838</span>
          </h2>
        </div>

        <div href="#" className="contact instagram">
          <GoMail className="icon" />
          <h2>
            Gmail <span>alexismayoral0501@gmail.com</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
