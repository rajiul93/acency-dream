import { Helmet } from "react-helmet";
import ScrollToTop from "../../share/ScrollToTop/ScrollToTop";
import Contact from "../Home/Contact/Contact";
import AdministrationMember from "./AdministrationMember/AdministrationMember";

const AdministrationPage = () => {
  return (
    <>
    
    
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dream | Administration</title>
      </Helmet>
      <ScrollToTop />

      <AdministrationMember />
    </div>
      <Contact />
    </>
  );
};

export default AdministrationPage;
