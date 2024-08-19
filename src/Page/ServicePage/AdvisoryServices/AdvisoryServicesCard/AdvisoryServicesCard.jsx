import { MdKeyboardArrowRight } from "react-icons/md";

const AdvisoryServicesCard = () => {
  return (
    <div>
      <article className="  p-4 shadow-sm hover:bg-white hover:shadow-2xl duration-300 ease-in-out rounded-md bg-[#f9fafb] space-y-4 relative pb-14">
        <span className="text-info">01</span>
        <h2 className="text-xl font-semibold about-font">Product Design</h2>
        <article className="font-body text-md ">
          Phosfluorescently cultivate strategic catalysts for change before
          client-based outsourcing. Conveniently utilize cross functional
          e-commerce after viral processes. Collaboratively streamline
          client-centered.
        </article>
        <button className="flex absolute bottom-3 right-3 text-transparent duration-300 ease-in-out group justify-start items-center gap-3 hover:text-info underline">
          Learn more{" "}
          <MdKeyboardArrowRight className="text-xl  duration-300 ease-in-out  text-white group-hover:bg-info rounded-badge bg-gray-500" />
        </button>
      </article>
    </div>
  );
};

export default AdvisoryServicesCard;
