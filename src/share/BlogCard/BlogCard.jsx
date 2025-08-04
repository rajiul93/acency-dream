import { useNavigate } from "react-router-dom";

const BlogCard = ({ item }) => {
  const navigate = useNavigate();
  const handleNavigate = (url) => {
    navigate(`/blog-details/${url}`);
  };

  return (
    <article
      onClick={() => handleNavigate(item.url_id)}
      rel="noopener noreferrer"
      className="bg-base-100 hover:scale-105 ease-in-out duration-300  shadow-lg hover:cursor-pointer 
      max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      data-abc="true"
    >
      <img
        role="presentation"
        className="object-cover w-full  h-44 dark:bg-gray-500"
        src={item.image}
      />
      <div className="space-y-2 p-2 md:p-6 mt-3">
        <p className="text-xl font-semibold group-hover:underline group-focus:underline cursor-pointer">
          {item?.tab_title}
        </p>
        <small>
          {item?.para_1}
        </small>
      </div>
    </article>
  );
};

export default BlogCard;
