import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#244d3f]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 font-geist text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center pb-2 leading-tight">
            KeenKeeper
          </h1>

          <p className="text-sm sm:text-base text-white text-center font-semibold max-w-xl sm:max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="py-4">
            <h2 className="text-lg font-semibold text-white mb-4">Social</h2>

            <ul className="flex items-center justify-center gap-2 sm:gap-3">
              <li className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#101727] rounded-full flex items-center justify-center text-base sm:text-xl cursor-pointer">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>

              <li className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#101727] rounded-full flex items-center justify-center text-base sm:text-xl cursor-pointer">
                <a href="#">
                  <FaTwitter />
                </a>
              </li>

              <li className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-[#101727] rounded-full flex items-center justify-center text-base sm:text-xl cursor-pointer">
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>

          <div className="border border-[#dddddd10] w-full mb-4"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 text-center sm:text-left">
            <div className="text-sm text-[#fafafa80]">
              © {new Date().getFullYear()} KeenKeeper. All rights reserved.
            </div>

            <ul className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-6 text-base">
              <li className="cursor-pointer text-[#fafafa80]">
                Privacy Policy
              </li>
              <li className="cursor-pointer text-[#fafafa80]">
                Terms of Service
              </li>
              <li className="cursor-pointer text-[#fafafa80]">Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
