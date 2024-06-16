import { FaMessage, FaVideo } from "react-icons/fa6";
import ScheduleMeetingButton1 from "./ScheduleMeetingButton1";
import ScheduleMeetingButton2 from "./ScheduleMeetingButton2";

const ScheduleMeeting = () => {
  return (
    <section className="max-w-5xl mx-auto  my-14 bg-neutral p-6 text-base-100 ">
      <div className="md:flex justify-between items-center">
        <div className="border-l pl-2 border-info">
          <h1>Ready to being building your custom software?</h1>
        </div>
        <div className="md:flex  gap-4 items-center">
          <div className="p-2">
            <div className="flex gap-4">
              <FaVideo />
              <small> Video Contact</small>
            </div>
            <ScheduleMeetingButton1 />
          </div>
          <div className="divider divider-info lg:divider-horizontal">OR</div> 
          <div className="p-2">
            <div className="flex gap-4">
              <FaMessage />
              <small>Text Contact</small>
            </div>
            <ScheduleMeetingButton2 />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
