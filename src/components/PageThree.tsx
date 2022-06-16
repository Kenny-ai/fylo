import StayProductive from "../assets/illustration-stay-productive.png";
import Arrow from "../assets/icon-arrow.svg";

const PageThree = () => {
  return (
    <div className="bg-main-bg flex justify-center items-center py-24">
      <div className="lg:flex lg:items-center lg:gap-12 w-5/6 xl:w-3/4">
        <div className="mb-8 flex justify-center items-center lg:w-1/2">
          <img src={StayProductive} alt="stay-productive" />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-xl font-raleway font-bold mb-4 md:text-2xl lg:text-3xl xl:text-4xl">
            Stay productive, wherever you are
          </h3>
          <p className="text-base mb-4">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs. <br /> <br />
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <p className="cursor-pointer w-fit text-button bg-text-gradient bg-0 bg-no-repeat bg-left-bottom hover:font-bold hover:bg-3 hover:transition-bg-size hover:duration-300">
            See how Fylo works
            <span>
              <img className="inline" src={Arrow} alt="arrow" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
