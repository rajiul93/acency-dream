import { FaHandshake } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const Ensuring = () => {
  const ensuring = [
    {
      id: 1,
      title: "1+ year Free",
      content: "Maintenance snd Support",
      icon:SlBadge
    },
    {
      id: 2,
      title: "Digital Promotion",
      content: "Boosters",
      icon:HiBriefcase
    },
    {
      id: 3,
      title: "NDA",
      content: "Producted Apps",
      icon: FaHandshake
    },
    {
      id: 4,
      title: "100% Money-Back",
      content: "Guarantee",
      icon:MdSupportAgent
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <article className="space-y-4">
        <h1 className="text-4xl  text-center">Our Way of Ensuring</h1>
        <h1 className="text-4xl  text-center">
          Complete Satisfaction for Our Partners
        </h1>
        <h2 className="text-2xl font-bold text-center">
          WE EMPOWER YOUR DIGITAL BRAND
        </h2>
      </article>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-24">
        {ensuring.map((item) => (
          <article
            key={item.id}
            className="text-center flex flex-col justify-center items-center hover:shadow-xl hover:-translate-y-4 p-3 duration-300 ease-in-out"
          >
            <item.icon className="text-6xl text-info mb-10" />
            <p className="text-neutral">{item.title}</p>
            <p className="text-neutral">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Ensuring;
