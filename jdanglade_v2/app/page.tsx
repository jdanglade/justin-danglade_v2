import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoArrowUpOutline,
} from "react-icons/io5";
import CustomCard from "./components/custom-card";
import expressLogo from "../public/express.svg";
import graphQLLogo from "../public/graphql.svg";
import mongoDBLogo from "../public/mongodb.svg";
import nextJSLogo from "../public/next.svg";
import nodeJSLogo from "../public/nodejs.svg";
import reactLogo from "../public/react.svg";
import sqlLogo from "../public/sql.svg";
import varcelLogo from "../public/vercel.svg";
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

export const Home = () => {
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
          </ul>
          <div className="flex flex-1 relative justify-center items-center border-2 border-blue-500">
            Profile picture
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
        <div className="flex flex-col relative pt-12 border-2 border-green-500 ">
          <span id="education" className="">
            Suspendisse gravida imperdiet vulputate. Suspendisse potenti. Proin
            semper odio quis mauris efficitur, ut tristique odio bibendum.
            Praesent eget urna eu ligula ultrices viverra ac et ipsum. Etiam ut
            facilisis risus. Nullam aliquam tristique enim, id semper nibh
            viverra a. Curabitur feugiat, sem ut consequat fringilla, lectus
            justo vestibulum ante, eu dignissim nisi leo vel arcu. Pellentesque
            nulla justo, consectetur sit amet sagittis sed, sagittis non felis.
            Cras vestibulum blandit arcu, sit amet convallis metus dignissim
            nec. Donec sit amet maximus dui, et ultricies tellus. Etiam quis
            enim tincidunt, scelerisque odio sed, porta nulla. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Morbi ex ipsum, eleifend nec augue in, fermentum
            ullamcorper velit. Quisque interdum tincidunt lectus, nec rhoncus
            odio bibendum vel. Proin dictum sit amet tellus non efficitur.
            Vivamus diam ipsum, ullamcorper ullamcorper aliquet vel, fringilla
            ut erat. Aenean malesuada sit amet erat ut blandit. Nunc quis dui
          </span>
          <span className="">
            nec ex eleifend venenatis vitae nec lectus. Donec quis lorem
            condimentum, volutpat tellus sed, mattis lectus. Cras vitae dui eget
            purus aliquam fermentum. Sed enim risus, blandit non lacus vel,
            aliquam finibus nibh. Sed rhoncus sollicitudin molestie. Donec
            posuere aliquam neque. Etiam vestibulum orci eleifend enim
            ullamcorper euismod. Ut venenatis egestas lorem, rutrum pulvinar
            libero congue eu. Mauris ut mi leo. Mauris pellentesque fringilla
            dolor, sed cursus ipsum hendrerit vel. Mauris vitae ligula eu urna
            cursus pretium ac sit amet augue. Quisque vulputate condimentum
            augue, ut dictum turpis consequat nec. Duis efficitur ligula mi, non
            faucibus nisl suscipit semper. Duis fermentum maximus orci sed
            egestas. Suspendisse a est aliquam, egestas lorem eu, consectetur
            ipsum. Nulla ut finibus mauris. Vivamus vel porta purus. Sed
          </span>
          <span className="">
            consequat iaculis auctor. Maecenas dapibus nec odio vitae luctus.
            Cras consectetur nulla nec ligula mollis, nec malesuada tellus
            scelerisque. Vestibulum blandit lobortis pharetra. Aliquam sagittis
            pulvinar efficitur. Suspendisse massa metus, viverra et tortor eget,
            vulputate volutpat nunc. Vivamus in est eget ex porttitor dapibus.
            Nulla gravida nec ante in ornare. Pellentesque vitae faucibus nisi.
            Curabitur ut consequat nulla, quis egestas velit. Integer fermentum,
            odio quis euismod auctor, lectus quam imperdiet orci, et lacinia
            ipsum lorem at enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Maecenas viverra leo mauris, at rutrum velit
            porttitor aliquet. Integer eu dui ac nisl feugiat convallis eget a
          </span>
          <span className="">
            dolor. Integer id sollicitudin urna. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. In id rutrum lorem. Donec feugiat
            tortor vel diam rutrum, sed varius turpis consequat. In ultrices
            sapien sit amet maximus convallis. Mauris in nisl risus. In feugiat,
            nulla eu tristique hendrerit, risus eros convallis lorem, sed varius
            nibh erat eu mauris. Suspendisse gravida imperdiet vulputate.
            Suspendisse potenti. Proin semper odio quis mauris efficitur, ut
            tristique odio bibendum. Praesent eget urna eu ligula ultrices
            viverra ac et ipsum. Etiam ut facilisis risus. Nullam aliquam
            tristique enim, id semper nibh viverra a. Curabitur feugiat, sem ut
            consequat fringilla, lectus justo vestibulum ante, eu dignissim nisi
            leo vel arcu. Pellentesque nulla justo, consectetur sit amet
            sagittis sed, sagittis non felis. Cras vestibulum blandit arcu, sit
            amet convallis metus dignissim nec. Donec sit amet maximus dui, et
            ultricies tellus. Etiam quis enim tincidunt, scelerisque odio sed,
            porta nulla. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. Morbi ex ipsum, eleifend nec
            augue in, fermentum ullamcorper velit. Quisque interdum tincidunt
            lectus, nec rhoncus odio bibendum vel. Proin dictum sit amet tellus
            non efficitur. Vivamus diam ipsum, ullamcorper ullamcorper aliquet
            vel, fringilla ut erat. Aenean malesuada sit amet erat ut blandit.
            Nunc quis dui nec ex eleifend venenatis vitae nec lectus. Donec quis
            lorem condimentum, volutpat tellus sed, mattis lectus. Cras vitae
          </span>
          <span className="">
            dui eget purus aliquam fermentum. Sed enim risus, blandit non lacus
            vel, aliquam finibus nibh. Sed rhoncus sollicitudin molestie. Donec
            posuere aliquam neque. Etiam vestibulum orci eleifend enim
            ullamcorper euismod. Ut venenatis egestas lorem, rutrum pulvinar
            libero congue eu. Mauris ut mi leo. Mauris pellentesque fringilla
            dolor, sed cursus ipsum hendrerit vel. Mauris vitae ligula eu urna
            cursus pretium ac sit amet augue. Quisque vulputate condimentum
            augue, ut dictum turpis consequat nec. Duis efficitur ligula mi, non
            faucibus nisl suscipit semper. Duis fermentum maximus orci sed
            egestas. Suspendisse a est aliquam, egestas lorem eu, consectetur
            ipsum. Nulla ut finibus mauris. Vivamus vel porta purus. Sed
            consequat iaculis auctor. Maecenas dapibus nec odio vitae luctus.
            Cras consectetur nulla nec ligula mollis, nec malesuada tellus
            scelerisque. Vestibulum blandit lobortis pharetra. Aliquam sagittis
            pulvinar efficitur. Suspendisse massa metus, viverra et tortor eget,
            vulputate volutpat nunc. Vivamus in est eget ex porttitor dapibus.
            Nulla gravida nec ante in ornare. Pellentesque vitae faucibus nisi.
            Curabitur ut consequat nulla, quis egestas velit. Integer fermentum,
            odio quis euismod auctor, lectus quam imperdiet orci, et lacinia
            ipsum lorem at enim.
          </span>
        </div>
      </main>
    </div>
  );
};

const Summary = () => {
  return <h1>Summary</h1>;
};

export default Home;
