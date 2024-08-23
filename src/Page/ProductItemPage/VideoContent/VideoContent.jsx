const VideoContent = ({ loadData }) => {
  return (
    <div className="md:flex justify-center gap-6 flex-row-reverse max-w-6xl mx-auto">
      <div className="flex items-center w-full  col-span-6">
        <div className="px-6 h-96 lg:h-100% w-full max-w-2xl col-span-6 flex items-center mx-auto">
          <div style={{ width: "100%", height: "100%" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <video
                controls
                width="100%"
                height="100%"
                src={loadData?.videoUrl1}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-6 mt-6 md:mt-0  ">
        <p className="text-justify">
          {loadData?.videoContent} 
        </p>
      </div>
    </div>
  );
};

export default VideoContent;
