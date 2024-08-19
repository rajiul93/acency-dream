import { Helmet } from "react-helmet";
import BlogItemVBannerButton from "../../../component/Button/BlogItemVBannerButton";
import ScrollToTop from "../../../share/ScrollToTop/ScrollToTop";
import Contact from "../../Home/Contact/Contact";
import BlogItemTab from "../BlogItemPage/BlogItemTab/BlogItemTab";

 

const BlogPage = () => {

    return (
        <>
        <div className=" max-w-6xl mx-auto my-24 px-6">
                  <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Blog</title>
      </Helmet>
      <ScrollToTop />

        <div className="card border-none shadow-none glass md:flex-row-reverse">
          <figure className="md:w-1/2 rounded-none">
            <img
              // className="max-h-64" 
              src="https://betechlab.com/image/blog.jpg"
              alt="blog"
            />
          </figure>
          <div className="card-body md:w-1/2 rounded-none items-start gap-6">
            <h2 className="card-title card-font">
            Insights & Innovations: The Betechlab Blog

            </h2>
            <p className="text-sm text-info">Jun 11, 2024•8 min</p>
            <p className="text-xl card-font">
            Welcome to the Betechlab Blog, your go-to source for the latest trends, insights, and innovations in the technology world. Our expert team shares valuable knowledge, industry updates, and practical tips to help you stay ahead in the ever-evolving digital landscape. Join us on a journey of discovery and transformation, as we explore the cutting-edge developments shaping the future of technology.

            </p> 
            <BlogItemVBannerButton />
          </div>
        </div>
        <section className="my-24">
    
          <BlogItemTab />
        </section>
      </div>
        <Contact />
        </>
    );
};

export default BlogPage;