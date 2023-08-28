import React, { useRef } from "react";
import { useState } from "react";
import { init, send } from "emailjs-com";
import AnimateOpacity from "../motion/AnimateOpacity";
import Footer from "./Footer";
import Header from "./Header";

export const Contact = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const userID = import.meta.env.VITE_USER_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        to_name: name,
        from_name: mail,
        message: message,
      };

      send(serviceID, templateID, template_param).then(() => {
        window.alert("お問い合わせを送信致しました。");

        setName("");
        setMail("");
        setMessage("");
      });
    }
  };

  return (
    <AnimateOpacity>
      <Header />
      <section className="contact">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="contact-label" htmlFor="nameForm">
              お名前
            </label>
          </div>
          <input
            type="text"
            id="nameForm"
            className="contact-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div>
            <label className="contact-label" htmlFor="mailForm">
              メールアドレス
            </label>
          </div>
          <input
            type="email"
            id="mailForm"
            className="contact-input"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <div>
            <label className="contact-label" htmlFor="mailContentForm">
              メッセージ
            </label>
          </div>
          <textarea
            type="text"
            id="mailContentForm"
            className="contact-message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            className="contact-send"
            type="submit"
            value="Send"
            disabled=""
          >
            送 信
          </button>
        </form>
      </section>
      <Footer />
    </AnimateOpacity>
  );
};

export default Contact;
