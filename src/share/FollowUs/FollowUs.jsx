import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

 

const FollowUs = () => {
    return (
        <div className="flex gap-4 mt-2 justify-center">
           <Link to=''> <FaFacebook className="text-base-100 text-2xl" /></Link>
           <Link to=''> <FaInstagram className="text-base-100 text-2xl" /></Link>
           <Link to=''> <FaYoutube className="text-red-600  text-2xl" /></Link>
           <Link to=''> <FaLinkedin className="text-base-100 text-2xl" /></Link>
           <Link to=''> <FaTwitter  className="text-base-100 text-2xl" /></Link>
          </div>
    );
};

export default FollowUs;