"use client";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-scroll/modules";

const HomeSection = () => {
  return (
    <section id="home">
      <div className="w-screen h-screen bg-emerald-400 flex flex-col items-center">
        <div className="md:my-48">
          <div className="md:hidden py-10"></div>
          <h1 className="text-white text-center text-8xl font-extralight tracking-tight">
            Mohd Shahid Iqbal
          </h1>
          <div className="text-white my-5 text-center font-extralight text-lg">
            Passionate about changing the world with technology.
          </div>
          <div className="text-white my-14 flex justify-center space-x-1 mb-12">
            <IoLogoGithub size={57}></IoLogoGithub>
            <IoLogoFacebook size={57}></IoLogoFacebook>
            <IoLogoInstagram size={57}></IoLogoInstagram>
            <IoLogoLinkedin size={57}></IoLogoLinkedin>
          </div>
          <div className="flex justify-center">
            <button className="text-white border py-2.5 rounded-lg px-4 text-xl font-light hover:bg-white hover:text-black cursor-pointer">
              <Link
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                More about me
              </Link>
            </button>
          </div>
          <div className="md:hidden py-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
