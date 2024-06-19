import { FaFlagUsa } from "react-icons/fa6";
const OurLocation = () => {
  return (
    <section className="space-y-6 my-24 ">
      <h1 className="text-2xl font-semibold uppercase">Our Location</h1>
      <p className="md:w-2/3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        aliquam optio repudiandae aspernatur. Sunt tenetur eligendi corrupti
        facilis placeat eius?
      </p>
      <img
        className="w-full"
        src="https://www.42gears.com/wp-content/uploads/2020/12/Main-Banner-1024x349.jpg"
        alt=""
      />
      <div>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="border p-2 md:p-6 space-y-4 rounded-lg ">
            <div className="flex gap-4">
              <FaFlagUsa className="text-red-500 text-2xl" />
              <p>New jersey , USA</p>
            </div>
            <p className=" ">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            <p>+8800179855969</p>
          </div>
          <div className="border p-2 rounded-lg md:p-6 space-y-4 ">
            <div className="flex gap-4">
              <FaFlagUsa className="text-red-500 text-2xl" />
              <p>New jersey , USA</p>
            </div>
            <p className=" ">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            +8800179855969
          </div>
          <div className="border p-2 rounded-lg md:p-6 space-y-4">
            <div className="flex gap-4">
              <FaFlagUsa className="text-red-500 text-2xl" />
              <p>New jersey , USA</p>
            </div>
            <p className=" ">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            +8800179855969
          </div>
          <div className="border p-2 rounded-lg md:p-6 space-y-4">
            <div className="flex gap-4">
              <FaFlagUsa className="text-red-500 text-2xl" />
              <p>New jersey , USA</p>
            </div>
            <p className=" ">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            </p>
            +8800179855969
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurLocation;
