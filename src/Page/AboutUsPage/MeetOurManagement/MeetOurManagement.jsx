import { FaUserGraduate } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";
import ManagementPerson from "./ManagementPerson/ManagementPerson";
const MeetOurManagement = () => {
  const managementPerson =[
    {
      name:"Amit Chakraborty",
      position:"Founder and CEO",
      education:"M. Engg. in CSE, Rajshahi University",
      image:"http://betechlab.com/image/Amit-Chakraborty.jpg",
      icon_1:IoPerson,
      icon_2:RiUserStarFill,
      icon_3:FaUserGraduate,
    },
 
  ]
  return (
    <section className="space-y-6 my-24 ">
      <h1 className="text-2xl font-semibold uppercase">Meet Our Management</h1>
     
      <article className="md:flex justify-center items-center gap-6">
        {
            managementPerson?.map((item, index)  => <ManagementPerson key={index} item={item} />)
        }
      
      </article>
    </section>
  );
};

export default MeetOurManagement;
