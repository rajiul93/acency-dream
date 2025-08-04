 
import { ImWhatsapp } from "react-icons/im";
import { TfiEmail} from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
const SocialMedia = () => {
  return (
    <div className="space-y-4 text-base-100">
      <p className="flex items-center  gap-4">
        <TfiEmail className="text-xl" />mrsmousumi5501@gmail.com
      </p>
      <p className="flex items-center  gap-4">
        <ImWhatsapp className="text-xl" />+8801700891599
      </p>
      <p className="flex items-center  gap-4">
        <CgProfile className="text-xl" /> Mousumi Chakraborty
      </p>
    </div>
  );
};

export default SocialMedia;
