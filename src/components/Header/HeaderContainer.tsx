import React from "react";
import Header from "./Header";
import Intro from "../../assets/illustration-intro.png";
import CurvyMobile from "../../assets/bg-curvy-mobile.png";
import CurvyDesktop from "../../assets/bg-curvy-desktop.png";
// import { ReactComponent as CurvyDesktop } from "../../assets/bg-curvy-desktop.svg";

const HeaderContainer = () => {
  return (
    <div className="" style={{ backgroundColor: "hsl(217, 28%, 15%)" }}>
      <Header />

      <div className="flex flex-col justify-center items-center">
        <div className="absolute w-full lg:hidden">
          <img src={CurvyMobile} className="w-full" alt="" />
        </div>

        <div className="hidden lg:block w-full absolute">
          <img src={CurvyDesktop} className="w-full" alt="" />
        </div>

        <div className="flex flex-col justify-center items-center text-center font-raleway w-5/6 lg:w-min leading-10 z-10 relative">
          <div className="mt-8 w-4/5 lg:w-max">
            <img src={Intro} alt="" />
          </div>

          <h3 className="header-text text-2xl lg:text-4xl font-bold mb-4 leading-relaxed lg:leading-high">
            All your files in one secure location, accessible anywhere.
          </h3>
          <p className="text-base text-gray-200 font-body leading-relaxed lg:text-lg lg:w-3/4">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>

          <button className="bg-button text-base w-56 py-3 rounded-full mt-8 font-bold hover:bg-hover-button">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
