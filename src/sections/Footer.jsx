import { footerLogo } from "../../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <>
      <section className="w-full flex flex-col md:px-10 md:pt-8 lg:flex-row justify-between gap-10">
        <section>
          <img src={footerLogo} alt="nike" className="w-40" />
          <p className="text-white text-md mt-5 font-montserrat">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. <br />
            Get Rewards
          </p>
          <div className="flex gap-3 mt-10 mb-10">
            {socialMedia.map((social, index) => (
              <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300">
                <img
                  src={social.src}
                  alt={social.alt}
                  key={index}
                  className="w-7 h-7 cursor-pointer object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="w-full flex flex-wrap gap-10 md:gap-0 justify-between">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className="mb-15">
              <h3 className="text-white text-2xl font-medium font-montserrat mb-5">
                {footerlink.title}
              </h3>
              {footerlink.links.map((link) => (
                <p
                  key={link.name}
                  className="text-white text-md font-montserrat mb-3 cursor-pointer hover:text-gray-400"
                >
                  {link.name}
                </p>
              ))}
            </div>
          ))}
        </section>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-white text-md font-montserrat">
          &copy; Copyright 2024 Nike, Inc. All rights reserved
        </p>
        <p className="text-white text-md font-montserrat">
          Terms and Condition.
        </p>
      </section>
    </>
  );
};

export default Footer;
