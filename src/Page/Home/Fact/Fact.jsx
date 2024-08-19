import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaHandshake } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
const Fact = () => {
  const countUpRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const items = [
    {
      id: 1,
      title: "Years Of IT Services",
      icon: SlBadge,
      count: 10,
    },
    {
      id: 2,
      title: "Jobs Completed",
      icon: HiBriefcase,
      count: 500,
    },
    {
      id: 3,
      title: "Total Clients",
      icon: FaHandshake,
      count: 300,
    },
    {
      id: 4,
      title: "Full Satisfaction & Support",
      icon: MdSupportAgent,
      count: 24,
    },
  ];
  return (
    <div className="max-w-6xl my-14 mx-auto ">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center my-14   md:p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center gap-4 text-center p-2"
          >
            <item.icon className="text-5xl mx-auto text-info" />

            <h1 ref={countUpRef} className="text-xl font-semibold">
        
           
              {startCount && (
                <CountUp start={0} end={item.count} duration={1} />
              )}
                  {item.id !==4 && "+"}
              {item.id === 4 && "h/7"  }
            </h1>
            <small>{item.title}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fact;
