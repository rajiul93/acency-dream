import { FaArrowRightFromBracket } from "react-icons/fa6";
const Card = () => {
  return (
    <div className="card card-font bg-neutral min-h-72 rounded-none hover:scale-105 duration-300 ease-in-out  shadow-xl image-full overflow-hidden">
      <figure className="cad-bg-image">
        <img
          src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717632000&semt=sph"
          className="opacity-50"
          alt="Shoes"
        />
      </figure>
      {/* <div className="bg-"></div> */}
      <div className="card-body ">
        <h2 className="card-title text-base  ">CASE STUDY</h2>
        <h2 className="card-title text-base text-xl ">
          Fighting poverty with technology and humanity
        </h2>
        <p className="card-content text-base">
          If a dog chews shoes whose shoes does he choose?If a dog chews shoes
          whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <button className="card-button  text-base  flex gap-2 items-center">Buy Now<FaArrowRightFromBracket /> </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
