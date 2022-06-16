import Logo from "../assets/logo.svg";
import Location from "../assets/icon-location.svg";
import Email from "../assets/icon-email.svg";
import Phone from "../assets/icon-phone.svg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer bg-footer-bg pt-64 pb-12 text-14 flex justify-center items-center">
      <div className="w-5/6">
        <img
          src={Logo}
          alt="Fylo logo"
          className="cursor-pointer mb-8 w-24 lg:w-fit"
        />
        <div className="flex flex-col lg:flex-row lg:justify-between items-start">
          <div className="flex items-start gap-8 mb-6 lg:w-84">
            <img src={Location} alt="location" />
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>

          <div className="">
            <div className="flex items-center gap-8 mb-6">
              <img src={Phone} alt="location" />
              <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
                +1-543-123-4567
              </p>
            </div>

            <div className="flex items-center gap-8 mb-16">
              <img src={Email} alt="location" />
              <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
                example@fylo.com
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              About Us
            </p>
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Jobs
            </p>
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Press
            </p>
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Blog
            </p>
          </div>

          <div className="flex flex-col gap-4 mb-16 lg:mb-8">
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Contact Us
            </p>
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Terms
            </p>
            <p className="cursor-pointer hover:text-cyan-400 hover:font-bold">
              Privacy
            </p>
          </div>

          <div className="flex gap-4 w-full lg:w-fit justify-center items-center">
            <div className="outline-2 outline outline-white rounded-full w-8 h-8 inline-flex justify-center items-center cursor-pointer transition-outline duration-300 hover:outline-offset-4 hover:outline-twitter hover:bg-twitter-bg hover:animate-shake">
              <TwitterIcon fontSize="small" />
            </div>

            <div className="outline-2 outline outline-white rounded-full w-8 h-8 inline-flex justify-center items-center cursor-pointer transition-outline duration-300 hover:outline-offset-4 hover:outline-facebook hover:bg-facebook-bg hover:animate-shake">
              <FacebookOutlinedIcon fontSize="small" />
            </div>

            <div className="outline-2 outline outline-white rounded-full w-8 h-8 inline-flex justify-center items-center cursor-pointer transition-outline duration-300 hover:outline-offset-4 hover:outline-instagram hover:bg-ig-gradient hover:animate-shake">
              <InstagramIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
