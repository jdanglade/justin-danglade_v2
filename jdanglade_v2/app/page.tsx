import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowUpOutline,
} from "react-icons/io5";
import CustomCard from "./components/custom-card";
import expressLogo from "../public/logos/express.svg";
import graphQLLogo from "../public/logos/graphql.svg";
import mongoDBLogo from "../public/logos/mongodb.svg";
import nextJSLogo from "../public/logos/next.svg";
import nodeJSLogo from "../public/logos/nodejs.svg";
import reactLogo from "../public/logos/react.svg";
import sqlLogo from "../public/logos/sql.svg";
import Link from "next/link";

const techStackLogos = [
  reactLogo,
  nextJSLogo,
  nodeJSLogo,
  expressLogo,
  mongoDBLogo,
  graphQLLogo,
  sqlLogo,
];

const HomePage = () => {
  const amazonClone = {
    title: "Amazon",
    details: "A clone of the amazon website",
    techStack: ["stuff", "othe stuff"],
  };

  return (
    <div className="flex justify-between relative h-full gap-2 py-24 border-2 border-white">
      <header className="flex-1 flex-col justify-between h-full sticky left-0 top-12 mx-12 border-2 border-red-500">
        <div className="flex flex-col justify-start relative text-slate-100 border-2 border-green-500">
          <div className="flex text-nowrap text-6xl pb-8 border-2 border-blue-500">
            <span className="font-thin">Justin</span>
            <span className="font-normal">Danglade</span>
          </div>
          <span className="text-2xl font-normal border-2 border-blue-500">
            Front End Developer
          </span>
        </div>
        <nav className="flex h-56 justify-start border-2 border-green-500">
          <ul className="flex flex-col justify-evenly pt-12 px-12 items-center border-2 border-blue-500">
            <li className="">
              <Link href="#top">
                <IoArrowUpOutline />
              </Link>
            </li>
            <li className="">
              <Link href="#tech-stack">Tech Stack</Link>
            </li>
            <li className="">
              <Link href="#experience">Experience</Link>
            </li>
            <li className="">
              <Link href="#education">Education</Link>
            </li>
            <li className="">Photography </li>
          </ul>
          <div className="flex relative justify-center items-center border-2 border-blue-500">
            <Image src="" alt="Profile Picture" width={45} height={45}></Image>
          </div>
        </nav>
        <div className="flex flex-row flex-grow-0 relative justify-center py-4 border-2 border-green-500">
          <div className="flex justify-center px-12 border-2 border-blue-500">
            <IoLogoGithub fontSize="30px" />
          </div>
          <div className="flex justify-center px-12 border-2 border-blue-500">
            <IoLogoLinkedin fontSize="30px" />
          </div>
        </div>
      </header>

      <main
        id="top"
        className="flex-1 flex-col justify-start h-full sticky top-12 mx-12 border-2 border-red-500"
      >
        <div className="flex flex-col justify-start border-2 border-green-500">
          <div className="flex-1 flex-col pb-12 border-2 border-blue-500 ">
            <span className="">
              From a young age I&apos;ve been so curious about how computers
              work. Why are there so many different kinds of computers? Why are
              some computers so unresonably slow and some so responsive it feels
              like magic? Curiosity took me to university, Florida International
              University. There I learned so much that I ended up viewing
              computers totally drifferently. Computers aren&apos;t magic and
              from product to product they aren&apos;t all that different from
              one another. Computers are the ultimate multi-tool, one of
              mankind&apos;s greatest achievements.
              <br />
              <br />
              As intimidating as this achievement is, to take advantage of this
              kind of power takes a skilled pilot.
            </span>
          </div>
          <div
            id="tech-stack"
            className="flex flex-1 flex-wrap justify-center items-center py-6 px-6 border-2 border-blue-500 "
          >
            {techStackLogos.map((logo, index) => {
              return (
                <span key={index} className="flex p-10">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={150}
                    height={150}
                    className=""
                  />
                </span>
              );
            })}
          </div>
          <div className="flex-grow h-96 overflow-scroll overscroll-auto border-2 border-blue-500">
            <div
              id="experience"
              className="flex flex-col justify-center items-center border-2 border-white"
            >
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
              <CustomCard
                title={amazonClone.title}
                details={amazonClone.details}
                techStack={amazonClone.techStack}
              />
            </div>
          </div>
        </div>
        <div
          id="education"
          className="flex flex-col relative pt-12 border-2 border-green-500 "
        >
          <span className="">
            I was born and raised in Miami Florida but interestingly enough, I
            don&apos;t speak Spanish, but I do know a couple of programming
            languages like C/C++ and JavaScript. I got my associates degree at
            Miami Dade College and while I was there, I took up a job as a
            tutor. At first, I provided tutoring for CGS1060, a basic Microsoft
            Office course that was, for the most part, intuitive for most people
            taking the class. I kept studying, multiple C++, Java, and Python
            courses and in time I ended up tutoring those classes as well.
            Seeing other&apos;s mistakes and misunderstandings was instrumental
            when taking my studies further...
          </span>
          <span className="">
            After MDC I moved on to Florida International University to complete
            my Bachelor&apos;s degree. Meeting so many career driven young
            adults was nothing short of inspirational. I saw myself in my
            classmates, they were just like me, confident that all this effort
            would pay off. A degree in Computer Science was not easy but after
            being able to complete the curriculum I can&apos;t help but carry
            some pride around wherever I go.
          </span>
        </div>
      </main>
    </div>
  );
};

const Summary = () => {
  return <h1>Summary</h1>;
};

export default HomePage;
