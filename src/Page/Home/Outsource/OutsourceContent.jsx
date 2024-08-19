import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { FaRegHandPointRight } from "react-icons/fa";
AOS.init();

const OutsourceContent = ({item}) => {
    return (
        <div
     data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
         className="flex items-start gap-3 mt-8">
        <div>
          <FaRegHandPointRight className="text-2xl text-info " />
        </div>
        <div className="space-y-4">
          <h1 className="text-[18px] font-semibold">{item?.title}</h1>
          <p> 
      {item?.content}
          </p>
        </div>
      </div>
    );
};

export default OutsourceContent;