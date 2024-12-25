import "./Contact.css";
import { useState } from "react";
export default function Contact() {
  const [isDarkMode] = useState(false);

  return (
    <>
      <div className={`contact ${isDarkMode ? "dark-mode" : ""}`} id="contact">
        <p>Contact</p>
        <h3>Let’s Discuss Your <span>Project</span></h3>
      </div>
      <div className="contactInfo">
        <div className="contactNum">
          <div className="number">
              <img src="./images/phone.png" alt="" />
            <num>
              <p>Call me</p>
              <p className="ph_num">+963 997524646</p>
            </num>
          </div>
          <div className="number">
              <img src="./images/email.png" alt="" />
            <num>
              <p>Email me</p>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                lama.hsiean@gmail.com
              </a>
            </num>
          </div>
          <div className="number">
              <img src="./images/location.png" alt="" />
            <num>
              <p>Address</p>
              <p className="loc">Damascus, Syria</p>
            </num>
          </div>
        </div>
        <div className="contactDesc">
          <div className="inputs">
            <input type="text" placeholder="Full name" />
            <input type="email" placeholder="Your email" />
          </div>
          <input type="phone" placeholder="Phone number" className="Ph_input" />
          <input className="message" type="text" placeholder="Message" />
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
}
