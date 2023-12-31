import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-5" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64"/>
        <article>
            <SectionTitle text="About me" />
            <p className="text-slate-600 mt-8 leading-loose">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis atque sequi, culpa reiciendis beatae velit? Quo odio cupiditate obcaecati provident commodi officia assumenda nemo, laborum porro reprehenderit minus quasi adipisci!
            </p>
        </article>
      </div>
    </section>
  );
};

export default About;
