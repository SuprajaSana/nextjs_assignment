"use client";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-scroll/modules";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-screen h-auto pb-28 bg-gray-200">
      <div>
        <div className="flex justify-center mt-20 md:mt-20">
          <h1 className="text-4xl font-extralight tracking tight md:text-5xl">
            Recent Projects
          </h1>
        </div>
        <div className="flex flex-col justify-center mt-16">
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10">
            <div className="w-fit pr-8 md:pr-20 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
              <h1 className="mt-10 font-medium text-lg">myportfolio</h1>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Clone Project
                </button>
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Repo
                </button>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="text-sm">Languages:</div>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  Javascript: 51.5 %
                </Link>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  SCSS: 43.5 %
                </Link>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  HTML: 3 %
                </Link>
              </div>
              <div className="flex text-start items-center mt-4 mb-6">
                <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                <span className="text-sm">Stars</span>
                <span className="text-sm ml-6">
                  Updated on January 17, 2024
                </span>
              </div>
            </div>
            <div className="w-5/6 md:w-fit pr-8 md:pr-56 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl mt-10 md:mt-0">
              <h1 className="mt-10 font-medium text-lg">
                create-react-app-lambda
              </h1>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Clone Project
                </button>
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Repo
                </button>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="text-sm">Languages:</div>
                <div className="text-sm">code yet to be deployed.</div>
              </div>
              <div className="flex text-start items-center mt-4 mb-6">
                <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                <span className="text-sm">Stars</span>
                <span className="text-sm ml-6">
                  Updated on December 7, 2023
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 mt-10 ">
            <div className="w-fit pr-8 md:pr-20 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
              <h1 className="mt-10 font-medium text-lg">Task-Management</h1>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Clone Project
                </button>
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Repo
                </button>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="text-sm">Languages:</div>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  Javascript: 78.8 %
                </Link>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  CSS: 19 %
                </Link>
                <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
                  HTML: 2.1 %
                </Link>
              </div>
              <div className="flex text-start items-center mt-4 mb-6">
                <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                <span className="text-sm">Stars</span>
                <span className="text-sm ml-6">
                  Updated on February 5, 2023
                </span>
              </div>
            </div>
            <div className="w-5/6 md:w-fit pr-8 md:pr-56 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl mt-10 md:mt-0">
              <h1 className="mt-10 font-medium text-lg">Mohd-shahid-iqbal</h1>
              <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Clone Project
                </button>
                <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
                  <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                  Repo
                </button>
              </div>
              <div className="flex items-center mt-6 space-x-6">
                <div className="text-sm">Languages:</div>
                <div className="text-sm">code yet to be deployed.</div>
              </div>
              <div className="flex text-start items-center mt-4 mb-6">
                <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
                <span className="text-sm">Stars</span>
                <span className="text-sm ml-6">
                  Updated on October 27, 2023
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

//  <div>
//    <div className="flex justify-center mt-20 md:mt-20">
//      <h1 className="text-4xl font-extralight tracking tight md:text-5xl">
//        Recent Projects
//      </h1>
//    </div>
//    <div className="flex flex-col justify-center mt-16">
//      <div className="flex flex-col items-center justify-center space-y-10 md:flex-row md:space-x-10">
//        <div className="w-fit pr-8 md:pr-20 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
//          <h1 className="mt-10 font-medium text-lg">myportfolio</h1>
//          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//              Clone Project
//            </button>
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>Repo
//            </button>
//          </div>
//          <div className="flex items-center mt-6 space-x-6">
//            <div className="text-sm">Languages:</div>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              Javascript: 51.5 %
//            </Link>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              SCSS: 43.5 %
//            </Link>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              HTML: 3 %
//            </Link>
//          </div>
//          <div className="flex text-start items-center mt-4 mb-6">
//            <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//            <span className="text-sm">Stars</span>
//            <span className="text-sm ml-6">Updated on January 17, 2024</span>
//          </div>
//        </div>
//        <div className="w-fit pr-6 md:pr-20 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
//          <h1 className="mt-10 font-medium text-lg">create-react-app-lambda</h1>
//          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//              Clone Project
//            </button>
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>Repo
//            </button>
//          </div>
//          <div className="flex items-center mt-6 space-x-2">
//            <div className="text-sm">Languages:</div>
//            <div className="text-sm pr-52 ">code yet to be deployed.</div>
//          </div>
//          <div className="flex text-start items-center mt-4 mb-6">
//            <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//            <span className="text-sm">Stars</span>
//            <span className="text-sm ml-6">Updated on December 7, 2023</span>
//          </div>
//        </div>
//      </div>
//      <div className="md:hidden py-6"></div>
//      <div className="flex flex-col items-center justify-center space-y-10 sm:space-x-0 md:flex-row md:space-x-10">
//        <div className="w-4/5 pr-6 md:w-2/5 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
//          <h1 className="mt-10 font-medium text-lg">Task-Management</h1>
//          <span className="md:w-5/6 text-sm mt-2 font-light">
//            It is a task management system where all user can track their own
//            tasks with the status of in-progress, pending and completed
//          </span>
//          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//              Clone Project
//            </button>
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>Repo
//            </button>
//          </div>
//          <div className="flex items-center mt-6 space-x-6">
//            <div className="text-sm">Languages:</div>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              Javascript: 78.8 %
//            </Link>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              CSS: 19 %
//            </Link>
//            <Link className="text-xs font-bold bg-slate-50 border-slate-50 px-2 border rounded-md">
//              HTML: 2.1 %
//            </Link>
//          </div>
//          <div className="flex text-start items-center mt-4 mb-6">
//            <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//            <span className="text-sm">Stars</span>
//            <span className="text-sm ml-6">Updated on February 5, 2023</span>
//          </div>
//        </div>
//        <div className="w-fit pr-8 md:pr-32 flex flex-col text-start pl-10 bg-white border rounded-lg shadow-2xl">
//          <h1 className="mt-10 font-medium text-lg">Mohd-shahid-iqbal</h1>
//          <span className="text-sm mt-2 font-light">
//            Config files for my GitHub profile.
//          </span>
//          <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 mt-4 ml-2">
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//              Clone Project
//            </button>
//            <button className="flex items-center text-medium justify-center border border-black rounded-lg px-2 py-1">
//              <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>Repo
//            </button>
//          </div>
//          <div className="flex items-center mt-6 space-x-2">
//            <div className="text-sm">Languages:</div>
//            <div className="text-sm pr-52 ">code yet to be deployed.</div>
//          </div>
//          <div className="flex text-start items-center mt-4 mb-6">
//            <IoLogoGithub size={17} className="mr-1"></IoLogoGithub>
//            <span className="text-sm">Stars</span>
//            <span className="text-sm ml-6">Updated on October 27, 2023</span>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>;
