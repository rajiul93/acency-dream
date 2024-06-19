const BlogItemVBannerButton = () => {
  return (
    <div className="   flex justify-center items-center">
      <div className="relative inline-flex  group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px 
        bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] 
        blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href="#"
          title="Get quote now"
          className="relative inline-flex items-center justify-center px-8 py-2 md:py-4 
          text-lg font-bold text-white transition-all duration-200 bg-error 
          font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          Get it now
        </a>
      </div>
    </div>
  );
};

export default BlogItemVBannerButton;
