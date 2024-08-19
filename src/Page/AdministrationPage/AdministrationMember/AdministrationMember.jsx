import { FaUserGraduate } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";

const AdministrationMember = () => {
  const managementPerson = [
    {
      name: "Amit Chakraborty",
      position: "Founder and CEO",
      education: "M. Engg. in CSE, Rajshahi University",
      image: "http://betechlab.com/image/Amit-Chakraborty.jpg",
      icon_1:IoPerson,
      icon_2:RiUserStarFill,
      icon_3:FaUserGraduate,
    },
    {
      name: "Md. rajiul Islam",
      position: "FrontEnd Developer",
      education: "World University of Bangladesh",
      image: "http://betechlab.com/image/rajiul-1.jpg",
      icon_1:IoPerson,
      icon_2:RiUserStarFill,
      icon_3:FaUserGraduate,
    },
  ];
  return (
    <section id="our-team" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-info">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

{
    managementPerson?.map((person, index)=>{
        return   <div key={index} className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={person.image}
            alt="Shoes"
            className="h-72 object-cover"
          />
        </figure>
        <div className="card-body"> 
          <p className="flex items-start gap-4 font-bold"><person.icon_1 className="text-primary"/>{person.name}</p>
          <p className="flex items-start gap-4"><person.icon_2 className="text-primary"/>{person.position}</p>
          <p className="flex items-start gap-4"><person.icon_3 className="text-primary"/>{person.education}</p>
        </div>
      </div>
    })
}

        
           

         
        </div>
      </div>
    </section>
  );
};

export default AdministrationMember;
