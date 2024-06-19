import { FaForward } from "react-icons/fa6";
import BlogItemVBannerButton from "../../../component/Button/BlogItemVBannerButton";
import Contact from "../../Home/Contact/Contact";
import BlogItemTab from "./BlogItemTab/BlogItemTab";
const BlogItemPage = () => {
  return (
    <div className=" max-w-6xl mx-auto my-24 px-6">
      <div className="card border-none shadow-none glass md:flex-row-reverse">
        <figure className="md:w-1/2 rounded-none">
          <img
            className=""
            src="https://wolfpack-digital-attachments-production.s3.eu-west-2.amazonaws.com/store/blogpost/312/featured_image/1920/AI%20Cover.webp"
            alt="car!"
          />
        </figure>
        <div className="card-body md:w-1/2 rounded-none items-start gap-6">
          <h2 className="card-title card-font">
            AI Trends: Shaping the Future of Web & Mobile App Development with
            Wolfpack Digital
          </h2>
          <p className="text-sm">Jun 11, 2024•8 min</p>
          <p className="text-sm card-font">
            Discover how Wolfpack Digital leverages cutting-edge AI trends and
            tools to create innovative web and mobile applications, including a
            successful collaboration with EqualityAI. Explore key AI
            advancements, real-world applications, and our expertise driving
            digital transformation through AI technologies.
          </p>
          {/* <button className="btn btn-primary ">Learn now!</button> */}
          <BlogItemVBannerButton />
        </div>
      </div>
      <section className="my-24">
        <div className="flex items-center">
          <FaForward  className="text-4xl text-error" />
          <h1 className="text-2xl font-semibold -ms-4">
            world of wolves, tech, and app development news
          </h1>
        </div>
        <BlogItemTab />
      </section>
      <Contact />
    </div>
  );
};

export default BlogItemPage;
