"use client";
import { CgCodeSlash } from "react-icons/cg";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-scroll/modules";
import { IoLogoReact } from "react-icons/io5";

const FooterSection = () => {
  return (
    <footer className="w-full bg-slate-100">
      <div className="flex flex-col items-center justify-center text-center pb-10">
        <h1 className="text-6xl font-extralight mt-16">Get In Touch</h1>
        <div className="text-base md:text-xl font-extralight tracking-tight mt-10 px-10 md:px-20">
          I'm currently looking for full-time React Developer/Frontend Developer
          opportunities! If you know of any positions available, if you have any
          questions, or if you just want to say hi, please feel free to email me
          at, <a className="text-blue-500">khansaif59@gmail.com.</a>
        </div>
        <div className="flex iems-center justify-center space-x-1 mt-8">
          <CgCodeSlash size={20}></CgCodeSlash>
          <span className="text-sm">with</span>
          <IoMdHeart size={20}></IoMdHeart>
          <span className="text-sm">by</span>
          <Link className="text-xs font-bold bg-black border-black text-white px-2 border rounded-md">
            Mohd Shahid Iqbal
          </Link>
                  <span className="text-sm">using</span>
                  <IoLogoReact size={20}></IoLogoReact>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
