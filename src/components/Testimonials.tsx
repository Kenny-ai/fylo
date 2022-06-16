import React from "react";
import Profile1 from "../assets/profile-1.jpg";
import Profile2 from "../assets/profile-2.jpg";
import Profile3 from "../assets/profile-3.jpg";
import Quotes from "../assets/bg-quotes.png";
import Form from "./Form";

const Testimonials = () => {
  return (
    <div className="bg-main-bg flex flex-col justify-center items-center">
      <div className="flex flex-col gap-8 xl:flex-row pt-5 w-fit relative lg:pt-8 mb-64">
        <img
          className="w-8 lg:w-max absolute top-0 left-2 lg:-left-2"
          src={Quotes}
          alt=""
        />
        <div className="bg-testimonial-bg w-96 h-56 flex flex-col justify-center p-8 text-sm rounded-md z-10">
          <p className="mb-4 leading-loose">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-full" src={Profile1} alt="" />
            <div className="">
              <p className="font-bold">Satish Patel</p>
              <p className="text-xs text-gray-400">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="bg-testimonial-bg w-96 h-56 flex flex-col justify-center p-8 text-sm rounded-lg">
          <p className="mb-4 leading-loose">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-full" src={Profile2} alt="" />
            <div className="">
              <p className="font-bold">Bruce McKenzie</p>
              <p className="text-xs text-gray-400">Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="bg-testimonial-bg w-96 h-56 flex flex-col justify-center p-8 text-sm rounded-lg">
          <p className="mb-4 leading-loose">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>

          <div className="flex items-center gap-4">
            <img className="h-10 w-10 rounded-full" src={Profile3} alt="" />
            <div className="">
              <p className="font-bold"> Iva Boyd</p>
              <p className="text-xs text-gray-400 text">
                Founder & CEO, Huddle
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-mb-44 lg:-mb-32">
        <Form />
      </div>
    </div>
  );
};

export default Testimonials;
