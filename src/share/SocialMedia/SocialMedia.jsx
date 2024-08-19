 
import { ImWhatsapp } from "react-icons/im";
import { TfiEmail, TfiSkype } from "react-icons/tfi";

const SocialMedia = () => {
  return (
    <div className="space-y-4 text-base-100">
      <p className="flex items-center  gap-4">
        <TfiEmail className="text-xl" />info@betechlab.com
      </p>
      <p className="flex items-center  gap-4">
        <ImWhatsapp className="text-xl" /> WhatsApp:+8801700891599
      </p>
      <p className="flex items-center  gap-4">
        <TfiSkype className="text-xl" />  live.akchakraborty55
      </p>
    </div>
  );
};

export default SocialMedia;
