import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Location from "../assets/icon-location.svg";
import Email from "../assets/icon-email.svg";
import Phone from "../assets/icon-phone.svg";

const Footer = () => {
  return (
    <div className="bg-footer-bg pt-64 text-14 flex justify-center items-center">
      <div className="w-5/6">
        <Logo className="mb-8" />
        <div className="flex flex-col lg:flex-row lg:justify-between items-start">
          <div className="flex items-start gap-8 mb-6 lg:w-84">
            <img src={Location} className="" alt="location" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="">
            <div className="flex items-center gap-8 mb-6">
              <img src={Phone} className="" alt="location" />
              <p className="">+1-543-123-4567</p>
            </div>

            <div className="flex items-center gap-8 mb-16">
              <img src={Email} className="" alt="location" />
              <p className="">example@fylo.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Jobs</p>
            <p className="cursor-pointer">Press</p>
            <p className="cursor-pointer">Blog</p>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <p className="cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
