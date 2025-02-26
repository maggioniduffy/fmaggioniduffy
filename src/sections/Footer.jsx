import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"
    >
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions </p>
        <p> |</p>
        <p>Privacy Policy </p>
      </div>

      <div className="flex gap-3">
        <a
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/maggioniduffy"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          className="social-icon"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/maggioniduffy"
        >
          <img
            src="/assets/linkedin.svg"
            alt="linkedin"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
      <p className="text-white-500"> © 2025 Faustino. All rights reserved. </p>
    </footer>
  );
};

export default Footer;
