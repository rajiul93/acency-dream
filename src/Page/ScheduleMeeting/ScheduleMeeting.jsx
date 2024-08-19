import { useEffect } from "react";

const ScheduleMeeting = () => { 
  useEffect(() => { 
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
 
    return () => {
      document.body.removeChild(script);
    };
  }, [ ]);

  return (
    <div className="min-h-[screen-50px] max-w-6xl mx-auto">
      <div className="mt-24">
      <script
        type="text/javascript"
        async
        src="https://static.zcal.co/embed/v1/embed.js"
      ></script>
      <div className="zcal-inline-widget">
        <a href="https://zcal.co/i/JAS-b1Lt">
          Schedule a Meeting - Schedule a meeting
        </a>
      </div>
        
        </div>{" "}
    </div>
  );
};

export default ScheduleMeeting;
