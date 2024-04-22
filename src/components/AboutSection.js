import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="w-screen h-full bg-stone-200">
      <div className="flex flex-col text-center items-center justify-center sm:py-32 md:py-16 md:flex-row md:space-x-10 md:text-center">
        <div className="md:w-1/4 sm:w-auto">
          <Image
            src="/profilePic.png"
            alt=""
            width={500}
            height={500}
            className="rounded-full"
          ></Image>
        </div>
        <div className="flex flex-col md:mt-0 md:w-3/5 pb-10 justify-center items-center px-20">
          <h1 className="text-6xl text-center mb-12 mt-0 font-extralight tracking-tight sm:mt-4">
            About Me
          </h1>
          <div className="text-lg mt-2 font-extralight w-sm text-center ml-6">
            My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia
            hamdard University at New Delhi with a degree in Masters of Computer
            Application . I'm most passionate about giving back to the
            community, and my goal is to pursue this passion within the field of
            software engineering. In my free time I like working on open source
            projects.
          </div>
          <button className="text-black border border-black rounded-lg px-4 py-2 text-lg font-normal mt-4 hover:bg-black hover:text-white cursor-pointer">
            <a href="https://docs.google.com/document/d/1gDdMSvyTkcT8WWzZ3-gbiTpt9ROAjjQ0/edit">
              Resume
              </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
