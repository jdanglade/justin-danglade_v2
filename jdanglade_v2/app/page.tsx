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
import profilePic from "../public/profile-pic.jpg";
import fiuPanther from "../public/florida-panther.jpg";
import mdcKendall from "../public/mdc-kendall-campus.jpg";
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
            <span className="font-mono">Danglade</span>
          </div>
          <span className="font-mono text-2xl font-thin border-2 border-blue-500">
            Front End Developer
          </span>
        </div>
        <nav className="flex h-56 justify-start font-mono border-2 border-green-500">
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
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="w-max h-full object-cover rounded-xl"
            />
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

      <main className="flex-1 flex-col justify-start h-full sticky font-mono top-12 mx-12 border-2 border-red-500">
        <div
          id="top"
          className="flex flex-1 flex-col justify-start border-2 border-green-500"
        >
          <div className="flex flex-col border-2 border-blue-500 ">
            <span className="text-center">
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
                    width={75}
                    height={75}
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
          className="flex flex-col justify-start items-center relative text-center border-2 border-green-500 "
        >
          <div className="py-12">
            <div className="flex justify-center pb-8 border-2 border-blue-500">
              <span className="text-nowrap text-center text-4xl">
                Miami-Dade College
              </span>
            </div>
            <Image
              src={mdcKendall}
              alt="Miami-Dade College Kendall Campus"
              className="w-max h-full object-cover rounded-xl"
            />
          </div>

          <span className="">
            I got my associates degree at Miami Dade College and while I was
            there, I took up a job as a tutor. At first, I provided tutoring for
            CGS1060, a basic Microsoft Office course that was for the most part
            intuitive for most people taking the class. I kept studying,
            multiple C++, Java, and Python courses and in time I ended up
            tutoring those classes as well. Seeing other&apos;s mistakes and
            misunderstandings was pretty useful when taking my studies
            further...
          </span>

          <div className="py-12">
            <div className="flex justify-center pb-8 border-2 border-blue-500">
              <span className="text-balance text-center text-4xl">
                Florida International University
              </span>
            </div>
            <Image
              src={fiuPanther}
              alt="Florida International University"
              className="w-max h-full object-cover rounded-xl"
            />
          </div>
          {/* <div className="flex justify-center pt-8 border-2 border-blue-500">
            <span className="text-4xl">Florida Internation University</span>
          </div>
          <div className="pt-12">
            <Image
              src={fiuPanther}
              alt="Florida International University"
              className="w-max h-full object-cover rounded-xl"
            />
          </div> */}
          <span className="">
            After MDC I moved on to Florida International University to complete
            my Bachelor&apos;s degree. The Florida Panthers, that is a cool
            mascot, I worked hard to get that degree from The Panthers. Branches
            of math I had never heard of and this time I was&apos;t working and
            studying at the same time and place. This time I was on the
            professor&apos;s schedule. Still I can carry some Panther pride
            because I got my Bachelor Degree there.
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
