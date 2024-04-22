import Image from "next/image";

const ExperiencesSection = () => {
  return (
    <section className="w-screen bg-white">
      <div className="flex flex-col items-center justify-center md:mt-20">
        <div className="md:hidden py-10"></div>
        <h1 className="text-6xl font-extralight tracking-tight">Experiences</h1>
        <div className="md:hidden py-6"></div>
        <div className="flex flex-col items-center justify-center md:mt-12 md:space-x-60 md:px-36 md:flex-row">
          <div className="flex flex-col items-center justify-center px-10">
            <Image
              src="/experience1.png"
              alt=""
              width={300}
              height={300}
            ></Image>
            <div className="mt-4 text-lg font-extralight">React Developer</div>
            <div className="mt-1 text-lg font-extralight">
              Aug 2020 – May 2022
            </div>
          </div>
          <div className="md:hidden py-6"></div>
          <div className="flex flex-col items-center justify-center px-10">
            <Image
              src="/experience2.png"
              alt=""
              width={300}
              height={300}
            ></Image>
            <div className="mt-4 text-lg font-extralight">
              Senior Software Engineer
            </div>
            <div className="mt-1 text-lg font-extralight">
              May 2022 – March 2023
            </div>
          </div>
        </div>
        <div className="md:hidden py-6"></div>
        <div className="flex flex-col items-center md:mt-16 justify-center md:flex-row md:space-x-56 md:px-36 mb-24">
          <div className="flex flex-col items-center justify-center px-10">
            <Image
              src="/experience3.png"
              alt=""
              width={300}
              height={300}
            ></Image>
            <div className="mt-4 text-lg font-extralight">React Developer</div>
            <div className="mt-1 text-lg font-extralight">
              March 2023 – Present
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-10">
            <div className="w-80"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
