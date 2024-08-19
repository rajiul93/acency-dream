import PropTypes from 'prop-types';

import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Card = ({item}) => {
  return (
    <div className="card card-font shadow-lg bg-[#002366] min-h-72 rounded-none hover:scale-105 duration-300 ease-in-out  shadow-xl image-full overflow-hidden">
      <figure className="cad-bg-image">
        <img
          src="https://betechlab.com/image/product/product-bg.png"
          className="opacity-80"
          alt="Shoes"
        />
      </figure>
      {/* <div className="bg-"></div> */}
      <div className="card-body ">
        <h2 className="card-title text-white  ">{item?.category}</h2>
        <h2 className="card-title text-white text-xl ">
         {item?.firstTitle.slice(0,45)} . . .
        </h2>
        <p className="card-content text-white">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Link to={`/product-items/${item?._id}`} >
          
          <button className="card-button text-info text-white  flex gap-2 items-center">View Details<FaArrowRightFromBracket className="text-accent" /> </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = { 
  item: PropTypes.object,
}