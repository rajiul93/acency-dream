import ContactForm from "./ContactForm/ContactForm";
import ContactLocation from "./ContactLocation/ContactLocation";
import ScheduleACall from "./ScheduleACall/ScheduleACall";

 

const ContactPage = () => {
    return (
        <div className="pt-24 max-w-6xl mx-auto px-6" >
           <ContactForm />
            <ScheduleACall />

            <ContactLocation />
        </div>
    );
};

export default ContactPage;

// 