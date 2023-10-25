import React, { useRef, useState } from "react";
import "./Contact.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i4e47ku",
        "template_y1oc7kp",
        form.current,
        "RMJAyJ2aRQ2sJ1CBN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            required
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            required
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          {/* <input
            type="text"
            name="user_subject"
            className="user"
            placeholder="subject"
          /> */}
          <textarea
            required
            name="message"
            className="user"
            placeholder="Message"
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && "thanks for Contact me !"}</span>
          <div
            className="blur c-blur1 "
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
