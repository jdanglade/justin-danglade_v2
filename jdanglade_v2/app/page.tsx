import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowUpOutline,
  IoImage,
} from "react-icons/io5";
import Link from "next/link";
import ExperienceCard from "./components/ExperienceCard";
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
  return (
    <div className="flex justify-between relative h-full gap-2 py-24">
      {/* border-2 border-white */}
      <Header />
      <Content />
    </div>
  );
};

const Header = () => {
  {
    /* border-2 border-red-500 */
  }

  return (
    <header className="flex-1 flex-col justify-between h-full sticky left-0 top-12 mx-12 ">
      {/* border-2 border-red-500 */}
      <div className="flex flex-col justify-start relative text-slate-100 ">
        {/* border-2 border-green-500 */}
        <div className="flex justify-center items-center text-nowrap text-6xl pb-8 ">
          {/* border-2 border-blue-500 */}
          <span className="font-thin">Justin</span>
          <span className="font-mono">Danglade</span>
        </div>
      </div>
      <nav className="flex h-56 justify-start font-mono">
        {/* border-2 border-green-500 */}
        <ul className="flex flex-col justify-evenly items-center pt-12 px-12">
          {/* border-2 border-blue-500 */}
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
        </ul>
        <div className="flex justify-center items-center">
          {/* border-2 border-blue-500 */}
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="w-max h-full object-cover rounded-xl"
          />
        </div>
      </nav>
      <div className="flex flex-row flex-grow-0 justify-center py-16 ">
        {/* border-2 border-green-500 */}
        <div className="flex justify-center px-12">
          {/* border-2 border-blue-500 */}
          <a target="_blank" href="https://www.github.com/jdanglade">
            <IoLogoGithub fontSize="30px" />
          </a>
        </div>
        <div className="flex justify-center px-12 ">
          {/* border-2 border-blue-500 */}
          <a target="_blank" href="https://www.linkedin.com/justin-danglade/">
            <IoLogoLinkedin fontSize="30px" />
          </a>
        </div>
        <div className="flex justify-center px-12 ">
          {/* border-2 border-blue-500 */}
          <a target="_blank" href="https://www.github.com/jdanglade">
            <IoImage fontSize="30px" />
          </a>
        </div>
      </div>
    </header>
  );
};

const Content = () => {
  const amazonClone = {
    title: "Amazon",
    details:
      "A clone of the amazon website Why THE FUCK WON'T THIS FUCKING TEXT CENTERS",
    techStack: ["tech", " stack", "item", "after", "item"],
  };

  return (
    <main
      id="top"
      className="flex-1 flex-col justify-start sticky top-12 h-full mx-12 font-mono"
    >
      <div className="flex flex-1 flex-col justify-start">
        {/* border-2 border-green-500 */}
        <div className="flex flex-col pt-16">
          {/* border-2 border-blue-500 */}
          <span className="text-justify">
            Back at Miami-Dade College I learned alot about the internals
            several programming languages. C, C++, Java, Python and the topical
            the differences between them and that all of them ultimately turn in
            to 1&apos;s and 0&apos;s at some point. I really enjoyed it, I even
            ended up as professor&apos;s assistance for multiple classes. MDC
            was fun but at Florida International University it was really
            learning. That was complete with a whole branch of mathematics and
            the internals of an adorably named processor, LC3 (Little Computer
            3). LC3 taught us how processors work on the inside, ALUs and
            Registers, Assembly Language, the process of compilation, different
            methods of compilation and how higher level languages utilize them.
            <br />
            <br />
            On and on with school but fast forward to today I mainly work at the
            front-end with React and React Native. With that I know several
            frameworks like Nextjs with Tailwind (the framework this very
            website is built and styled with), Styled Components, Redux, and
            more.
            <br />
            <br />I enjoy the front-end mostly because I really love visual
            design but I&apos;m perfectly comforatable working the Full-Stack.
            Back those front-end frameworks with Node, Express, and Django as
            well as database tools like SQL, GraphQL with Prisma and Apollo, and
            MongoDB.
          </span>
        </div>
        <div
          id="tech-stack"
          className="flex flex-1 flex-wrap justify-center items-center py-6 px-6  "
        >
          {/* border-2 border-blue-500 */}
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
        <div className="expCardContainer flex-grow h-96 overflow-scroll overscroll-auto">
          {/* border-2 border-blue-500 */}
          <div
            id="experience"
            className="flex flex-col justify-center items-center"
          >
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
            <ExperienceCard
              title={amazonClone.title}
              details={amazonClone.details}
              techStack={amazonClone.techStack}
              image={profilePic}
            />
          </div>
        </div>
      </div>
      <div
        id="education"
        className="flex flex-col justify-start items-center relative text-center"
      >
        {/* border-2 border-green-500 */}
        <div className="">
          <div className="flex justify-center py-12">
            {/* border-2 border-blue-500 */}
            <span className="text-center text-4xl">Miami-Dade College</span>
          </div>
          <Image
            src={mdcKendall}
            alt="Miami-Dade College Kendall Campus"
            className="w-max h-full object-cover rounded-xl"
          />
        </div>
        <span className="py-4">
          I got my associates degree at Miami Dade College and while I was
          there, I took up a job as a tutor. At first, I provided tutoring for
          CGS1060, a basic Microsoft Office course that was for the most part
          intuitive for most people taking the class. I kept studying, multiple
          C++, Java, and Python courses and in time I ended up tutoring those
          classes as well. Seeing other&apos;s mistakes and misunderstandings
          was pretty useful when taking my studies further...
        </span>
        <div className="flex justify-center py-12">
          {/* border-2 border-blue-500 */}
          <span className="text-center text-4xl">
            Florida International University
          </span>
        </div>
        <Image
          src={fiuPanther}
          alt="Florida International University"
          className="w-max h-full object-cover rounded-xl"
        />
        <span className="py-4">
          After MDC I moved on to Florida International University to complete
          my Bachelor&apos;s degree. The Florida Panthers, that is a pretty cool
          mascot and I worked hard to get that degree from The Panthers. There
          were branches of math I had never heard of, deep explorations into the
          processor and networking architectures. I carry some pride getting my
          degree there.
        </span>
      </div>
    </main>
  );
};

const Summary = () => {
  return <h1>Summary</h1>;
};

export default HomePage;
