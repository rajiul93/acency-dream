import { FaWifi } from "react-icons/fa6";
import { MdOutlineDangerous, MdOutlineMan } from "react-icons/md";
import { RiStackshareLine } from "react-icons/ri";
const WhyChooseActowiz = () => {
  return (
    <section className="max-w-6xl mx-auto my-14 p-6">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
        <article className="flex justify-center flex-col text-center items-center gap-4  p-2 rounded-xl shadow-xl ">
        <FaWifi  className="text-4xl text-success"/>
          <h2>Scale on a Huge Canvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            omnis dicta saepe sit distinctio est.
          </p>
        </article>
        <article className="flex justify-center flex-col text-center items-center gap-4  p-2 rounded-xl shadow-xl ">
          <MdOutlineMan  className="text-4xl"/>
          <h2>Scale on a Huge Canvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            omnis dicta saepe sit distinctio est.
          </p>
        </article>
        <article className="flex justify-center flex-col text-center items-center gap-4  p-2 rounded-xl shadow-xl ">
          <RiStackshareLine className="text-4xl text-info"/>
          <h2>Scale on a Huge Canvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            omnis dicta saepe sit distinctio est.
          </p>
        </article>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 mt-14 gap-4 ">
        <article className="flex justify-center flex-col text-center items-center gap-4  md:p-6 rounded-xl shadow-xl ">
        <FaWifi  className="text-4xl text-success"/>
          <h2>Scale on a Huge Canvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            omnis dicta saepe sit distinctio est.
          </p>
        </article>
        <article className="flex justify-center flex-col text-center items-center gap-4  md:p-6 rounded-xl shadow-xl ">
          <MdOutlineDangerous  className="text-4xl text-error"/>
          <h2>Scale on a Huge Canvas</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            omnis dicta saepe sit distinctio est.
          </p>
        </article>
         
      </div>
    </section>
  );
};

export default WhyChooseActowiz;
