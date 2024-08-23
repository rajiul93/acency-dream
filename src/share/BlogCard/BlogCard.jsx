import { Link } from "react-router-dom";

const BlogCard = ({ item }) => {

 
  return (
    <article
      rel="noopener noreferrer"
      className="bg-base-100 hover:scale-105 ease-in-out duration-300  shadow   
      max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      data-abc="true"
    >
      <img
        role="presentation"
        className="object-cover w-full  h-44 dark:bg-gray-500"
        src={item.image}
      />
      <div className="space-y-2 p-2 md:p-6 mt-3">
        <Link to={`/blog-details/${item.url_id}`} className="text-xl font-semibold group-hover:underline group-focus:underline cursor-pointer">
          {item?.tab_title}
        </Link>
        <br />
        <span className="text-xs dark:text-gray-600">January 23, 2021</span>
     
      </div>
    </article>
  );
};

export default BlogCard;
