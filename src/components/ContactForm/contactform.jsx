import "./contactform.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      console.log("Missing EmailJS environment variables.");
      alert("Email service error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, { publicKey })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent Successfully. I'll be in touch, thank you!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <section id="contactform">
      <h1 className="contactPageTitle">Let&apos;s Connect!</h1>
      <span className="contactDesc">
        If you&apos;d like to collaborate, ask a question, or chat about an
        opportunity, send me a message below.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="from_name"
          required
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="from_email"
          required
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Tell me a little about what you'd like to discuss..."
          required
        />
        <button className="submitBtn" value="Send" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
