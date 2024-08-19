import { FcCellPhone, FcOrganization } from "react-icons/fc";
const OurLocation = () => {
  return (
    <section className="space-y-6 mb-24 ">
      <h1 className="text-2xl font-semibold uppercase">Our Location</h1>
      <p className="md:w-2/3">
      Betechlab is currently operating remotely, providing top-notch technology services wherever you are. While we're a digital-first company today, we plan to establish a physical presence in the near future. Stay tuned for updates on our future office location, where we'll continue to offer the same high-quality service and support.
      </p>
      {/* <img
        className="w-full"
        src="https://www.42gears.com/wp-content/uploads/2020/12/Main-Banner-1024x349.jpg"
        alt=""
      /> */}
      <div>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
          <div className="border p-2 md:p-6 space-y-4 rounded-lg ">
            <div className="flex gap-4">
              <FcOrganization  className="text-red-500 text-2xl" />
              <p>Kumarpara, Rajshahi, Bangladesh</p>
            </div>
            <p className="flex items-center">
            <FcCellPhone  className="text-red-500 text-2xl" />
              +8801700891599</p>
            <p className=" text-sm">
            Bangladesh is a country located in South Asia and Rajshahi is a city located in the northwest part of Bangladesh, near the border with India.
            </p>
           
          </div>
       
    
        </article>
      </div>
    </section>
  );
};

export default OurLocation;
