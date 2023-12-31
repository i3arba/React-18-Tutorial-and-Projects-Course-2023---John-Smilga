import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-sky-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Barba</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            <p>Solidity Developer</p>
            <p>React & Figma Student</p>
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/i3arba">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-sky-600 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/carneiro-patrick77/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-sky-600 duration-300" />
            </a>
            <a href="https://x.com/i3arba">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-sky-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
