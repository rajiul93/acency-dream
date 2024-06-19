import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <Link
      rel="noopener noreferrer"
      href="#"
      className="bg-base-100 hover:scale-105 ease-in-out duration-300  shadow   
      max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
      data-abc="true"
    >
      <img
        role="presentation"
        className="object-cover w-full  h-44 dark:bg-gray-500"
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="space-y-2 p-2 md:p-6 mt-3">
        <h3 className="text-xl font-semibold group-hover:underline group-focus:underline">
          In usu laoreet repudiare legendos
        </h3>
        <span className="text-xs dark:text-gray-600">January 23, 2021</span>
        <p>
          Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur,
          ex has tantas percipit perfecto. At per tempor albucius perfecto, ei
          probatus consulatu patrioque mea, ei vocent delicata indoctum pri.
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
