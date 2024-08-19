import PropTypes from "prop-types";
import { BiDetail } from "react-icons/bi";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ProductTableRow = ({ product,handleDelete }) => {
  const { firstTitle, imageUrl1, listOne1, _id ,dataType,category} = product;



  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={imageUrl1} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{firstTitle}</div>
            <div className="text-sm opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm">{listOne1}</span>
      </td>
      <td>
        <FaDeleteLeft
          onClick={()=>handleDelete(_id)}
          className="text-xl text-error cursor-pointer "
        />
      </td>
      <td>
       <Link to={`/dashboard/update/${_id}`}>
       <FaEdit className="text-xl" />
       </Link>
      </td>
      <th>
       {dataType==="service" && <Link to={`/service-item/${_id}`} className="">
          <BiDetail className="text-xl" />
        </Link>}
       {dataType==="portfolio" && <Link to={`/portfolio-item/${_id}`} className="">
          <BiDetail className="text-xl" />
        </Link>}
       {dataType==="product" && <Link to={`/product-items/${_id}`} className="">
          <BiDetail className="text-xl" />
        </Link>}
    
      </th>
    </tr>
  );
};

export default ProductTableRow;

ProductTableRow.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  product: PropTypes.object,
  handleDelete: PropTypes.func,
};
