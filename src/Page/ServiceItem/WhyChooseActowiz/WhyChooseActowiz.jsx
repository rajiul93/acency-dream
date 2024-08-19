import { FcBriefcase, FcFlowChart, FcMindMap } from "react-icons/fc";
const WhyChooseActowiz = () => {
  return (
    <section className="max-w-6xl mx-auto my-14 p-6">
      <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 ">
        <article className="flex justify-center flex-col text-center items-center gap-4  p-4 rounded-xl shadow-xl ">
        <FcFlowChart  className="text-4xl text-success"/>
          <h2>Our Premier Services</h2>
          <p>
          Experience top-tier technology solutions designed to propel your business forward. Our expert team delivers tailored services that meet your unique needs and drive exceptional results
          </p>
        </article>
        <article className="flex justify-center flex-col text-center items-center gap-4  p-4 rounded-xl shadow-xl ">
          <FcMindMap  className="text-4xl"/>
          <h2>Our Cutting-Edge Products</h2>
          <p>
          Discover innovative products that set new standards in the industry. Our cutting-edge tools and technologies are crafted to enhance your business performance and efficiency.
          </p>
        </article>
        <article className="flex justify-center flex-col text-center items-center gap-4  p-4 rounded-xl shadow-xl ">
          <FcBriefcase className="text-4xl text-info"/>
          <h2>Our Impressive Portfolio</h2>
          <p>
          Explore our portfolio of success stories and see how we’ve transformed businesses with our expertise. Each project showcases our commitment to excellence and client satisfaction.
          </p>
        </article>
      </div>
    
    </section>
  );
};

export default WhyChooseActowiz;
