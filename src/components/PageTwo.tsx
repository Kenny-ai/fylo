import { ReactComponent as AccessAnywhere } from "../assets/icon-access-anywhere.svg";
import { ReactComponent as Security } from "../assets/icon-security.svg";
import { ReactComponent as Collaboration } from "../assets/icon-security.svg";
import { ReactComponent as AnyFile } from "../assets/icon-any-file.svg";

const PageTwo = () => {
  return (
    <div className="bg-main-bg flex justify-center items-center pt-24 lg:pt-0">
      <div className="flex flex-col justify-center items-center py-12 gap-24 lg:flex-row lg:flex-wrap w-5/6 xl:w-3/4">
        <div className="text-center flex flex-col items-center lg:w-1/3">
          <AccessAnywhere className="mb-6" />
          <h3 className="text-xl font-raleway font-bold mb-4">
            Access your files, anywhere
          </h3>
          <p className="text-base">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div className="text-center flex flex-col items-center lg:w-1/3">
          <Security className="mb-6" />
          <h3 className="text-xl font-raleway font-bold mb-4">
            Security you can trust
          </h3>
          <p className="text-base">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div className="text-center flex flex-col items-center lg:w-1/3 ">
          <Collaboration className="mb-6" />
          <h3 className="text-xl font-raleway font-bold mb-4">
            Real-time collaboration
          </h3>
          <p className="text-base">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div className="text-center flex flex-col items-center lg:w-1/3">
          <AnyFile className="mb-6" />
          <h3 className="text-xl font-raleway font-bold mb-4">
            Store any type of file
          </h3>
          <p className="text-base">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
