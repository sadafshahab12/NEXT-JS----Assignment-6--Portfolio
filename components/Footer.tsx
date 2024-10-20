import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="grid sm:grid-cols-3 grid-cols-1">
          <div className="bg-[#D9D9D9] xss:space-y-5 md:space-y-3 py-2 md:py-5 px-5 md:px-10 md:text-left text-center">
            <div>
              <h1 className="text-[2rem] font-black">
                Sa<span className="text-red">daf</span>
                <span className="text-[3rem] leading-none">.</span>
              </h1>
            </div>
            <div>
              <form action="/" className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-[0.8rem] md:text-[1.2rem] tracking-wider font-medium block"
                >
                  Subscribe to NewsLetter
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email ..."
                  className="bg-black text-white py-[0.7rem] w-[12rem] md:w-auto  px-4 md:px-7 rounded-md"
                />
              </form>
            </div>
            <div className="links text-[0.7rem] md:text-[0.9rem] flex gap-5 md:justify-start justify-center ">
              <p className="hover:underline cursor-pointer">Terms</p>
              <p className="hover:underline cursor-pointer">Privacy & Policy</p>
            </div>
            <div>
              <h1 className="text-black text-[1.5rem] md:text-[2.25rem] font-black">
                2024 <span className="text-red ">Portfolio</span>
              </h1>
            </div>
          </div>
          <div className="bg-[#413D3D] space-y-5 md:space-y-6 md:py-0 py-5 flex flex-col justify-center items-center">
            <h1 className="text-[1.3rem] font-medium text-white">Menu</h1>

            <div className="text-white  text-[0.8rem] grid md:grid-cols-2 grid-cols-1 gap-3   md:gap-6">
              <Link href="/" className="block hover:underline">
                Home
              </Link>
              <Link href="/about" className="block hover:underline">
                About
              </Link>
              <Link href="/skill" className="block hover:underline">
                Skills
              </Link>
              <Link href="/projects" className="block hover:underline">
                Porjects
              </Link>
              <Link href="/service" className="block hover:underline">
                Service
              </Link>
              <Link href="/getintouch" className="block hover:underline">
                Get in touch
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-white sm:text-[1rem] md:text-[1.3rem] font-medium">
                You Need a Consult?
              </h1>
              <Link href="https://wa.me/+923402195735" className="text-white  text-[0.8rem] ">
                Call: +92340295735
              </Link>
            </div>
          </div>

          <div className="bg-[#D9D9D9] space-y-6  md:space-y-6 flex flex-col justify-center items-center">
            <h1 className="text-[1.3rem] font-black text-black sm:py-0 py-5  ">
              Quick Links
            </h1>

            <div className="text-black text-[0.8rem] grid md:grid-cols-2 md:gap-6 grid-cols-1 gap-3 ">
              <div>
                <Link href="https://www.linkedin.com/in/sadaf-shahab-ssr123" className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faLinkedin} width={20} height={20} />
                  Linkedin
                </Link>
              </div>
              <div>
                <Link href="https://github.com/sadafshahab12" className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faGithub} width={20} height={20} />
                  GitHub
                </Link>
              </div>
              <div>
                <Link href="https://x.com/sadafshahab12" className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faTwitter} width={20} height={20} />
                  Twitter
                </Link>
              </div>
              <div>
                <Link href="https://www.facebook.com/profile.php?id=61556555833599" className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faFacebook} width={20} height={20} />
                  Facebook
                </Link>
              </div>
              <div>
                <Link href="https://wa.me/+923402195735" className="flex gap-3 items-center">
                  <FontAwesomeIcon icon={faWhatsapp} width={20} height={20} />
                  Whatsapp
                </Link>
              </div>
            </div>
            <div className="md:pb-0 pb-5">
              <h1 className=" flex items-center gap-1 sm:text-[0.8rem] text-[1rem] font-medium">
                All Rights Reserved{" "}
                <FontAwesomeIcon icon={faCopyright} width={15} height={15} />{" "}
                2024
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
