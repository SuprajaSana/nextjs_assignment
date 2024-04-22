import Image from "next/image";

const LeadershipSection = () => {
  return (
    <section className="w-screen h-full bg-white">
      <div className="pb-48">
        <div className="flex justify-center mt-10 md:mt-20">
          <h1 className="text-5xl md:text-6xl font-extralight tracking-tight">
            Leadership
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row mt-16 md:mt-10 md:space-x-6">
          <div className="w-9/12 md:w-5/12 md:text-lg font-extralight">
            <div>
              As a React developer with leadership experience, I bring technical
              expertise, project management skills, and strong communication
              abilities to the table. I have a proven track record of building
              large-scale applications, optimizing code for performance, and
              implementing best practices. Additionally, I have experience
              leading teams and projects, creating and maintaining project
              plans, managing timelines and budgets, and ensuring timely
              delivery of high-quality work. I excel at communicating
              effectively with team members, stakeholders, and clients, both
              verbally and in writing, and am a skilled listener who can provide
              clear and constructive feedback. I am also passionate about
              mentoring and training other developers to help them develop their
              skills and achieve their goals. With my ability to solve complex
              technical problems and think creatively, I am always up-to-date
              with the latest developments in React and related technologies,
              and am able to innovate and inspire a positive, collaborative work
              environment.
            </div>
          </div>
          <div className="mt-4">
            <Image src="/secImage.png" alt="" width={620} height={370}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
