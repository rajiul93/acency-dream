import { Link } from "react-router-dom";

const BlogItemVBannerButton = () => {
  return (
    <div className="   flex justify-center items-center">
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px 
        bg-gradient-to-r from-info via-[#FF44EC] to-info 
        blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <Link
          to="/contact"
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-2 md:py-4 
          text-lg font-bold text-white transition-all duration-200 bg-info 
          font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
         Contact Us
        </Link>
      </div>
    </div>
  );
};

export default BlogItemVBannerButton;
