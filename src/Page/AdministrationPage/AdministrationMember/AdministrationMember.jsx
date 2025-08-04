import { FaUserGraduate } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";
import AdministrationCard from "./AdministrationCard";

const AdministrationMember = () => {
  const managementPerson = [
    {
      name: "Amit Chakraborty",
      position: "Founder and CEO",
      education: "M. Engg. in CSE, Rajshahi University",
      image: "http://betechlab.com/image/Amit-Chakraborty.jpg",
      icon_1: IoPerson,
      icon_2: RiUserStarFill,
      icon_3: FaUserGraduate,
    },
    {
      name: "Md. Rajiul Islam",
      position: "FrontEnd Developer",
      education: "World University of Bangladesh",
      image: "http://betechlab.com/image/rajiul-1.jpg",
      icon_1: IoPerson,
      icon_2: RiUserStarFill,
      icon_3: FaUserGraduate,
    },
  ];
  return (
    <section id="our-team" className="py-32">
      <div className=" px-4">
        <h2 className=" xl md:text-3xl font-sans uppercase font-bold text-center mb-8 text-info">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center items-center w-full ">
          {managementPerson?.map((person, index) => (
            <AdministrationCard key={index} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdministrationMember;
