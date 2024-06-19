const ContactContent = () => {
  return (
    <div className="md:p-4">
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4  pt-2 rounded-full bg-base-100 ">1</div>
        </div>
        <h1 className="text-sm text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1 >
      </div>
      <div className="divider bg-base-100 flex  flex-col h-6 w-[.5px] ms-5 my-0"></div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4 pt-2 rounded-full bg-base-100 ">2</div>
        </div>
        <h1 className="text-sm text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
      </div>
      <div className="divider bg-base-100 flex  flex-col h-6 w-[.5px] ms-5 my-0"></div>
      <div className="flex gap-4">
        <div className="avatar">
          <div className="w-10 h-10 text-info px-4 pt-2 rounded-full bg-base-100 ">3</div>
        </div>
        <h1 className="text-sm text-start">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
      </div>
    </div>
  );
};

export default ContactContent;
