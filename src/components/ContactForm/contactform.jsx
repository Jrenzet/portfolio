import "./contactform.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3vnofop', 'template_q2y862j', form.current, {
        publicKey: 'KuRuG9lPA1vQsrpbv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent Successfully. I\'ll be in touch, thank you!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contactform">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Fill out the form below to send me an email!
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="from_name"/>
        <input type="email" className="email" placeholder="Your Email" name="from_email"/>
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message Here"
        />
        <button className="submitBtn" value="Send" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;