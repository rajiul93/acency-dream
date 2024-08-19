 

const MissionHero = ({image}) => {
    return (
        <div className="hero bg-contain bg-no-repeat bg-center min-h-[40vh] px-6 md:px-0" style={{backgroundImage: `url(${image})`}}>
        <div className="hero-overlay hidden md:block bg-opacity-0"></div>
       
      </div>
    );
};

export default MissionHero;