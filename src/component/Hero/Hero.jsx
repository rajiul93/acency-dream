import Lottie from 'react-lottie';
import Art3 from '../../assets/header.json';
import HeroButton from '../Button/HeroButton';
const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Art3,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="card    rounded-none  bg-base-100   image-full"> 

      {/* <figure className="rounded-none  opacity-70">

        
        <img
          className="w-full  max-h-[600px] rounded-none"
          src="https://www.tributemedia.com/hubfs/Social%20media%20agency-social.jpg"
          alt=" "
        />
      </figure> */}
      <div>
 
      </div>
      <div className="card-body md:flex-row flex-col-reverse items-center max-w-6xl mx-auto gap-6 ">
         
         <div className="flex flex-col gap-6">
         <span  className="text-xl md:text-5xl font-light italic text-gray-900">You have the <span className="text-info">Idea</span></span>
          <h1 className=" text-xl  md:text-5xl font-semibold text-gray-900">We have the <br /> technology</h1>
          <p className="text-sm md:text-2xl text-gray-900">Agile PHP & JavaScript teams ready to elevate your business.</p>
        <HeroButton /> 
         </div> 
        <div className="card-actions w-1/2 justify-end">
        <Lottie options={defaultOptions} height={400} width={400} />

        </div>
      </div>
    </div>
  );
};

export default Hero;
