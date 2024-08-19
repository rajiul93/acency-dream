import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import ContactForm from "./ContactForm/ContactForm";
import ContactLocation from "./ContactLocation/ContactLocation";
import ScheduleACall from "./ScheduleACall/ScheduleACall";

const ContactPage = () => {
  return (
    <div className="pt-16">
      <ScrollToTop />

      <ContactForm />

      <div className="pt-24 max-w-6xl mx-auto px-6">
        <ScheduleACall />

        <ContactLocation />
      </div>
    </div>
  );
};

export default ContactPage;

//
