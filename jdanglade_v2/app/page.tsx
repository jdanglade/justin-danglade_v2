import Image from "next/image";
import LogoMotion from "./Components/LogoMotion";
import ProjectCard from "./Components/ProjectCard";
import profile_pic from "./assets/profile_pic.jpg";
import florida_pather from "./assets/florida_panther.jpg";
import mdc_kendall from "./assets/mdc_kendall.jpg";
import { ContactOptions } from "./Components/assets/logos";

// Simple foreground positioning
const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col relative w-full h-auto justify-start items-center text-center "
    >
      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:items-start w-full h-auto gap-2 p-6 ">
        <NavContainer />
        <ContentContainer />
      </div>
    </div>
  );
};

// Simple site navigation
const NavContainer: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center relative lg:sticky lg:top-6 z-10 w-4/6 lg:pl-12 gap-2 ">
      <div className="flex justify-center items-center relative text-4xl lg:2xl ">
        <span className="relative font-thin">Justin</span>
        <span className="relative font-mono">Danglade</span>
      </div>
      <Image
        src={profile_pic}
        alt="Profile Picture"
        priority
        className="flex object-fill w-5/6 min-w-96 lg:w-9/12 h-auto rounded-xl relative "
      />
      <div className="flex flex-row justify-center items-center w-full ">
        <ul className="flex flex-row justify-around items-center relative px-4 py-2 ">
          {ContactOptions.map((option, index) => {
            return (
              <li key={index + 1} className="relative z-100 px-2 ">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={option.link}
                  className=""
                >
                  <option.icon className="flex relative w-6 h-auto" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// A composition of Homepage elements.
// -Animated list of familiar technologies
// -Personal introduction
// -Project Portfolio
// -Education
// -Resume download
const ContentContainer: React.FC = () => {
  return (
    <div className="flex flex-col justify-start items-center relative w-full h-full z-0">
      <LogoMotion />
      <div className="flex flex-col justify-start items-center relative w-11/12">
        <span className="text-justify py-8 px-4 md:px-6">
          Throughout the years I&apos;ve learned alot about the internals
          several programming languages. C/C++, Java, Python, JavaScript and the
          topical the differences between them. How they all ultimately turn in
          to 1&apos;s and 0&apos;s at some point. I really enjoyed it, I even
          ended up as professor&apos;s assistance for multiple classes.
          Miami-Dade College was fun but at Florida International University it
          was really learning complete with a whole branch of mathematics and
          the internals of an adorably named processor, LC3 (Little Computer 3).
          LC3 taught us how processors work on the inside, ALUs and Registers,
          Assembly Language, the process of compilation, different methods of
          compilation and how higher level languages utilize them.
          <br />
          <br />
          ...On and on with school but fast forward to today I mainly work at
          the front-end with React and React Native. With that I know several
          frameworks like Nextjs with Tailwind (the framework this very website
          is built and styled with), Styled Components, Redux, and more.
          <br />
          <br />I enjoy the front-end mostly because I really love visual design
          but I&apos;m perfectly comforatable working the Full-Stack. Back those
          front-end frameworks with Node, Express, and Django as well as
          database tools like SQL, GraphQL with Prisma and Apollo, and MongoDB.
        </span>
      </div>
      <div className="flex flex-col justify-start items-center relative w-11/12">
        <div className="flex justify-center py-10 ">
          {/* border-2 border-blue-500 */}
          <span className="text-center text-4xl lg:2xl  ">
            Miami-Dade College
          </span>
        </div>
        <Image
          src={mdc_kendall}
          alt="Miami-Dade College Kendall Campus"
          className="w-4/5 min-w-64 h-auto lg:min-w-16 object-cover rounded-xl "
        />
        <span className="text-justify py-6 px-10 sm:px-14 md:px-20">
          I got my associates degree at Miami Dade College and while I was
          there, I took up a job as a tutor. At first, I provided tutoring for
          CGS1060, a basic Microsoft Office course that was for the most part
          intuitive for most people taking the class. I kept studying, multiple
          C++, Java, and Python courses and in time I ended up tutoring those
          classes as well. Seeing other&apos;s mistakes and misunderstandings
          was pretty useful when taking my studies further...
        </span>
      </div>
      <div className="flex flex-col justify-start items-center relative w-11/12 ">
        <div className="flex justify-center py-10 ">
          {/* border-2 border-blue-500 */}
          <span className="text-center text-4xl lg:2xl">
            Florida International University
          </span>
        </div>
        <Image
          src={florida_pather}
          alt="Florida International University"
          className="w-4/5 min-w-64  h-auto lg:min-w-16 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-start items-center relative w-11/12">
        <span className="text-justify py-6 px-10 sm:px-14 md:px-20">
          After MDC I moved on to Florida International University to complete
          my Bachelor&apos;s degree. The Florida Panthers, that is a pretty cool
          mascot and I worked hard to get that degree from The Panthers. There
          were highly abstract branches of math I had never heard of. There, I
          got a deep explorations into processor and networking architectures.
          We explored the inner workings of an operating system and I carry some
          pride getting my degree there.
        </span>
      </div>
    </div>
  );
};

export default Home;
