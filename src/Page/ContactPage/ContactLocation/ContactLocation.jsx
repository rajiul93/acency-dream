import GoogleMapReact from "google-map-react";
import { IoLocationOutline } from "react-icons/io5";
import { googleApiKey } from "../../../assets/googleApiKey/googleApiKey";
import FollowUs from "../../../share/FollowUs/FollowUs";
import SocialMedia from "../../../share/SocialMedia/SocialMedia";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactLocation = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <section className="bg-gray-100  max-w-6xl mx-auto mb-24">
      <div className="md:flex  ">
        <div className=" bg-info p-6 text-base-100 md:w-1/2  space-y-4">
          <h1 className="text-2xl font-semibold ">Directly Contact Us</h1>
          <SocialMedia />
        
          <p className="flex items-center  gap-4"><IoLocationOutline className="text-2xl" /> Kumarpara, Rajshahi, Bangladesh</p>
       
          <div>
           <div className="flex mt-9 items-center gap-5">
           <h1 className=" text-xl font-semibold">Follow Us</h1>
           <FollowUs />
           </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: googleApiKey }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
