import GoogleMapReact from 'google-map-react';
import { googleApiKey } from "../../../assets/googleApiKey/googleApiKey";
const AnyReactComponent = ({ text }) => <div>{text}</div>;


const ContactLocation = () => {

    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
  return <section className="bg-gray-100 pt-20 max-w-6xl mx-auto mb-24">
 <div className="md:flex gap-6">
 <div  className=" bg-info p-6 text-base-100 w-1/3 space-y-4">
        <h1 className="text-2xl font-semibold ">Directly Contact Us</h1>
        <p>Email icon: abc@gamil.com</p>
        <p>WhatsApp:XYZ XXXXXXXX </p>
        <p>Skype icon: XYZ XXXXXX</p>
        <p>Location Icon:</p>
        <p className="ms-10">127 DHOS Dhaka Banani</p>
    </div>
    <div className="md:w-2/3">
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleApiKey}}
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
};

export default ContactLocation;
