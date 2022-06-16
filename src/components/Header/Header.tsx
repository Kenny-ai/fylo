import React from "react";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <>
      <div className="header-container font-raleway p-4 lg:p-12 flex justify-between items-center">
        <div className="w-24 md:w-max">
          {/* <Logo /> */}
          <img className="cursor-pointer" src={Logo} alt="Fylo logo" />
        </div>
        <div className="flex text-gray-200 gap-6 lg:gap-10">
          <button className="hover:underline hover:text-cyan-400">Features</button>
          <button className="hover:underline hover:text-cyan-400">Team</button>
          <button className="hover:underline hover:text-cyan-400">Sign In</button>
        </div>
      </div>
    </>
  );
};

export default Header;
