import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";

const BlogDetails = () => {
    const {id} = useParams()
  const [data, detData] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(json =>detData(json))
  }, [id]);
  if (!data.length) {
    return <div className="mt-24 text-center h-[20vh]">Loading</div>
  }
console.log(data)


const find_data = data?.find(i=>i.id===parseInt(id));
const otherBlog = data?.filter(i=>i.id!==parseInt(id));
 

  return (
    <>
      <ScrollToTop />
    
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-white text-2xl font-bold">My Blog</h1>
          <a href="#" className="text-gray-400 hover:text-white">
            About
          </a>
        </div>
      </nav>
      <main className="container mx-auto mt-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-8/12 px-4 mb-8">
            <img
              src="https://via.placeholder.com/1200x600"
              alt="Featured Image"
              className="w-full h-64 object-cover rounded"
            />
            <h2 className="text-4xl font-bold mt-4 mb-2">{find_data.title}</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-700 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p className="text-gray-700 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <div className="w-full md:w-4/12 px-4 mb-8">
            <div className="bg-gray-100 px-4 py-6 rounded">
              <h3 className="text-lg font-bold mb-2">Other Blog</h3>
              <ul className="list-disc list-inside">
                {otherBlog?.map((e,i)=> <li key={i}>
                  <Link to={`/blog-details/${e.id}`} className="text-gray-700 hover:text-gray-900">
                    {e.title}
                  </Link>
                </li>)}
               
               
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
