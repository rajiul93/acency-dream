 
const OurVision = () => {
    return (
        <div className="hero min-h-[40vh] bg-base-100">
      <div className="hero-content items-start max-w-6xl mx-auto flex-col flex-col-reverse   lg:flex-row">
      <div className=" lg:w-1/2">
          <h1 className="text-2xl font-bold">Our Vision</h1>
          <p className="py-6">
          Our vision is to be a global leader in technology solutions, known for our unwavering commitment to excellence, innovation, and customer satisfaction. We strive to transform the way businesses operate, helping them achieve their full potential through cutting-edge technology and expert guidance.
          </p>
          <h1 className="text-xl font-bold">BeTechLab</h1>
          
           {/* <h1 className=" font-semibold text-error">CEO</h1> */}
        </div>
        <img
          src="https://betechlab.com/image/vision.png"

          className="lg:w-1/2"
        />
       
      </div>
    </div>
    );
};

export default OurVision;