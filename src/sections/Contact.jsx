import React, { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import emailjs from "@emailjs/browser";

const SERVICE = import.meta.env.EMAILJS_SERVICE;
const KEY = import.meta.env.EMAILJS_KEY;

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      emailjs.send(
        SERVICE,
        "template_r1b5jfr",
        {
          from_name: form.name,
          to_name: "Faustino",
          from_email: form.email,
          to_email: "fausmaggioni5@gmail.com",
          message: form.message,
        },
        KEY
      );

      alert("Your message has been sent");

      setForm({
        name: "",
        message: "",
        email: "",
      });
    } catch (e) {
      console.log(e);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const isTablet = useMediaQuery({ maxWidth: 1154 });

  return (
    <section id="contact" className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {!isTablet && (
          <img
            src="/assets/terminal.png"
            alt="terminal background"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text"> Let's talk</h3>{" "}
          <p className="text-lg text-white-600 mt-3">.... bla clad </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label"> Full Name </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label"> Email </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="youremail@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label"> Your Message </span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I'm interested in..."
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
