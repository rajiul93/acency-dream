import { Helmet } from "react-helmet";

const ContactContent = () => {
  return (
    <div className="md:p-4">
        <Helmet>
        <meta charSet="utf-8" />
        <title>BeTechLab | Contact</title>
      </Helmet>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4  pt-2 rounded-full bg-base-100 ">1</div>
        </div>
        <h1 className="text-sm text-start"><b>Consultation:</b> We schedule a meeting to discuss about your needs. </h1 >
      </div>
      <div className="divider bg-warning flex  flex-col h-3 w-[.5px] ms-5 my-0"></div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4 pt-2 rounded-full bg-base-100 ">2</div>
        </div>
        <h1 className="text-sm text-start"><b>Proposal:</b> We make a plan with costs and timeline, outlining our given solutions. </h1>
      </div>
      <div className="divider bg-warning flex  flex-col h-3 w-[.5px] ms-5 my-0"></div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4 pt-2 rounded-full bg-base-100 ">3</div>
        </div>
        <h1 className="text-sm text-start"><b>Execution:</b> Our team execute the plan, providing support and updates. </h1>
      </div>
    </div>
  );
};

export default ContactContent;
