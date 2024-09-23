import React from "react";
import logo from "./../../asset/loogo.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-slate-900   text-white p-10">
        <aside>
          <Image alt="" width="80" height="90" viewBox="0 0 24 24" src={logo} />

          <p className="mt-3">
            PatholeFix Industries Ltd.
            <br />
            Providing reliable service to fix holes, problems on roads.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title ">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          {/* <a className="link link-hover">Press kit</a> */}
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
