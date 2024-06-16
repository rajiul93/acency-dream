import CountUp from 'react-countup';
import { FaHandshakeAngle, FaSnowman } from "react-icons/fa6";
import { GiConfirmed, GiFulguroPunch } from "react-icons/gi";

import { useEffect, useRef, useState } from 'react';


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
  return (
 <div className="max-w-6xl my-14 mx-auto "> 

     <div className="flex flex-col justify-around w-full lg:flex-row items-center my-14   md:p-4">
      <div className="flex flex-col justify-center gap-4 text-center p-2">
        <FaSnowman className="text-5xl mx-auto text-info" />
        <h1 ref={countUpRef} className="text-xl font-semibold">+    {startCount && <CountUp start={0} end={8} duration={1}  />}</h1>
        <small>Years of IT Service</small>
      </div> 
      <div className="flex flex-col justify-center gap-4 text-center p-2">
        <GiFulguroPunch className="text-5xl mx-auto text-info" />
        <h1 ref={countUpRef} className="text-xl font-semibold">+    {startCount && <CountUp start={0} end={45} duration={1}  />}</h1>

        <small>Years of IT Service</small>
      </div> 
      <div className="flex flex-col justify-center gap-4 text-center p-2">
        <FaHandshakeAngle className="text-5xl mx-auto text-info" />
        <h1 ref={countUpRef} className="text-xl font-semibold">+    {startCount && <CountUp start={0} end={75} duration={1}  />}</h1>

        <small>Years of IT Service</small>
      </div> 
      <div className="flex flex-col justify-center gap-4 text-center p-2">
        <GiConfirmed className="text-5xl mx-auto text-info" />
        <h1 ref={countUpRef} className="text-xl font-semibold">+    {startCount && <CountUp start={0} end={2750} duration={1}  />}</h1>

        <small>Years of IT Service</small>
      </div>
    </div>
 </div>
  );
};

export default Fact;
