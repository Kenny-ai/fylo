import React from "react";

const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-testimonial-bg w-96 p-8 flex flex-col text-center rounded-lg shadow-3xl lg:w-100 lg:items-center lg:px-20 lg:py-12"
    >
      <h3 className="text-xl lg:text-3xl font-bold font-raleway mb-4">
        Get early access today
      </h3>
      <p className="mb-6 text-14 text-gray-200">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:justify-between lg:items-center">
        <input
          type="email"
          className="rounded-full h-12 text-black px-4 lg:w-2/3 focus:outline-cyan-400"
          placeholder="email@example.com"
        />
        <button
          type="submit"
          className="bg-button text-base py-3 lg:px-6 rounded-full font-bold hover:bg-hover-button"
        >
          Get Started For Free
        </button>
      </div>
    </form>
  );
};

export default Form;
