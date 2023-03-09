import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-5 py-3">
      <a href="https://www.linkedin.com/in/urvish-j-p/" target="_blank">
        <i className="fa-brands fa-linkedin duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://github.com/UrvishJP" target="_blank">
        <i className="fa-brands fa-github duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://www.instagram.com/urvish_j_p/" target="_blank">
        <i className="fa-brands fa-instagram duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://twitter.com/UrvishJP" target="_blank">
        <i className="fa-brands fa-twitter duration-300 hover:opacity-30 cursor-pointer" />
      </a>
      <a href="https://www.facebook.com/urvish.prajapati.167" target="_blank">
        <i className="fa-brands fa-facebook duration-300 hover:opacity-30 cursor-pointer" />
      </a>
    </div>
  );
};

export default Footer;
