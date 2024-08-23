import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, detData] = useState([]);
  useEffect(() => {
    fetch("/Blog_data.json")
      .then((response) => response.json())
      .then((json) => detData(json));
  }, [id]);
  if (!data.length) {
    return <div className="mt-24 text-center h-[20vh]">Loading</div>;
  }
  console.log(data);

  const find_data = data?.find((i) => i.url_id == id);
  const otherBlog = data?.filter((i) => i.url_id !== id);
  

  const {
    tab_title,
    meta_tag,
    image,
    header_title,
    para_1,
    list_title,
    list_options,
    para_2,
    para_3,
    para_4,
    button_1_text,
    button_1_link,
    button_2_text,
    button_2_link,
    other_blog_1,
    other_blog_2,
    other_blog_3,
  } = find_data; 
  return (
    <section className="max-w-6xl mx-auto">
      <ScrollToTop />
      <Helmet>
        <title>BeTechLab | {tab_title}</title>
        <meta name="description" content={header_title} />
        <meta name="keywords" content={meta_tag} />
        <meta property="og:title" content={data.pageTitle} />
        <meta charSet="utf-8" />
      </Helmet>
      <main className="container mx-auto  mt-24">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <img
              src={image}
              alt="Featured Image"
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-4xl font-bold mt-4 mb-2">{header_title}</h2>
            <article className="text-gray-700 mb-4"> {para_1}</article>
            <article className="text-gray-700 mb-4"> {para_2}</article>
            <article className="text-gray-700 mb-4"> {para_3}</article>
            <article className="text-gray-700 mb-4"> {para_4}</article>
            <article className="mb-14">
              <h1 className="text-xl font-semibold">{list_title}</h1>
              <ul>
                {list_options?.map((e, i) => (
                  <li className="list-disc ms-7" key={i}>
                    {e}
                  </li>
                ))}
              </ul>
            </article>
            <div className="md:flex justify-between">
              <button className="btn btn-outline">{button_1_text}</button>
              <button className="btn btn-outline">{button_2_text}</button>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Other Blog</h3>
              <ul className="list-disc list-inside">
                {otherBlog?.map((e,i)=> <li key={i} className="list-none">
                  <Link to={`/blog-details/${e.url_id}`} className="text-gray-700 hover:text-gray-900 hover:underline ">
                    {e.header_title}
                  </Link>
                </li>)}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default BlogDetails;
