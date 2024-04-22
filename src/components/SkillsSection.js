"use client";
import { useState } from "react";

const SkillsSection = () => {
    const [technical, setTechnical] = useState(true);
    const [softskills, setSoftskille] = useState(false);

  return (
    <section className="w-full bg-white" id="skills">
      <div className="pb-20">
        <div className="flex justify-center">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight">
            Skills
          </h1>
        </div>
        <div className="mt-10 md:mt-16">
          <div className="flex items-center justify-center md:space-x-0">
            <button
              className={
                technical
                  ? "px-20 md:px-64 text-base border-t-2 border-l-2 border-r-2 border-slate-100 py-2 rounded"
                  : "px-20 md:px-64 text-base text-blue-600 border-t-2 border-l-2 border-r-2 border-slate-100 py-2 rounded hover:border-b-2 hover:border-slate-100 cursor-pointer"
              }
              onClick={() => {
                setTechnical(true);
                setSoftskille(false);
              }}
            >
              Technical Skills
            </button>
            <button
              className={
                technical
                  ? "px-20 md:px-64 text-base text-blue-600 border-b-2 border-l-2 border-slate-100 py-2 rounded  hover:border-r-2 hover:border-t-2 hover:border-slate-100 cursor-pointer"
                  : "px-20 md:px-64 text-base border-b-2 border-l-2 border-slate-100 py-2 rounded"
              }
              onClick={() => {
                setTechnical(false);
                setSoftskille(true);
              }}
            >
              {" "}
              Soft Skills
            </button>
          </div>
          {technical && (
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 mt-6">
              <div className="flex flex-col text-lg">
                <div>
                  <h1>React</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[90%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Javascript</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[90%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Data Structures</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[60%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
              </div>
              <div className="px-48 flex flex-col">
                <div>
                  <h1>HTML/CSS</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[60%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Typescript</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[80%] h-full"></div>
                  </div>
                </div>
                <div>
                  <h1>SQL</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[70%] h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {softskills && (
            <div className="flex flex-col items-center justify-center md:flex-row md:space-x-8 mt-6">
              <div className="flex flex-col text-lg">
                <div>
                  <h1>Goal-Oriented</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[70%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Collaboration</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[90%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Positivity</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[60%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Adaptability</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[80%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
              </div>
              <div className="px-48 flex flex-col">
                <div>
                  <h1>Problem Solving</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[70%] h-full text-xs text-white font-bold"></div>
                  </div>
                </div>
                <div>
                  <h1>Empathy</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[90%] h-full"></div>
                  </div>
                </div>
                <div>
                  <h1>Organization</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[60%] h-full"></div>
                  </div>
                </div>
                <div>
                  <h1>Creativity</h1>
                  <div className="w-96 bg-slate-200 h-4 rounded-lg overflow-hidden mt-2 mb-2">
                    <div className="bg-blue-500 flex justify-center items-center w-[90%] h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
