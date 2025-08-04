import PropTypes from "prop-types";

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Card = ({ item, card_bg,bg_color }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateCondition = location.pathname;

  const handleNavigate = (path) => {
    if (navigateCondition == "/" || navigateCondition == "/product") {
      // control navigate details page
      navigate(`/product-items/${path}`);
      return;
    }
    if (navigateCondition == "/portfolio") {
      // control navigate details page
      navigate(`/portfolio-item/${path}`);
      return;
    }
  }; 
  return (
    <div className={`card font-sans shadow-lg ${bg_color} min-h-72 rounded-none scale-95 hover:scale-100 duration-300 ease-in-out image-full overflow-hidden`}>
      <figure className="cad-bg-image">
        <img src={card_bg} className="opacity-80" alt="Shoes" />
      </figure>
      {/* <div className="bg-"></div> */}
      <div className="card-body ">
        <h2 className=" text-sm text-white  ">{item?.category}</h2>
        <Link to={`/product-items/${item?.url}`}>
          <h2 className="hover:underline cursor-pointer text-white hover:text-[#6A5ACD] duration-300 ease-in-out text-[18px] font-semibold">
            {item?.pageTitle}
          </h2>
        </Link>

        <p className="card-content text-white ">
          {item?.pageSortDesc?.split(" ").slice(1, 15).join(" ")}...
        </p>
        <div className="card-actions justify-end  hover:underline">
          <button
            onClick={() => handleNavigate(item?.url)}
            className="card-button text-white  flex gap-2 items-center"
          >
            View Details
            <FaArrowRightFromBracket className="text-accent" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object,
  card_bg: PropTypes.string,
  bg_color: PropTypes.string,
};
