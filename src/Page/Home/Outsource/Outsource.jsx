import OutsourceContent from "./OutsourceContent";

const Outsource = () => {
  const outSourceData = [
    {
      title:"Tailored Solutions",
      content:"We provide customized technology solutions designed to meet the unique needs of your business, ensuring optimal results and satisfaction."
    },
    {
      title:"Cost Efficiency",
      content:"By outsourcing with Betechlab, you can reduce overhead costs while gaining access to a team of skilled experts, maximizing your investment."
    },
    {
      title:"Quality Assurance",
      content:"Our rigorous quality control processes guarantee that every project is delivered to the highest standards, meeting your expectations and beyond."
    },
    {
      title:"Quick Turnaround Time",
      content:"With our efficient processes and dedicated team, we ensure timely delivery of projects, helping you meet your deadlines without compromising on quality."
    },
    {
      title:"Comprehensive Support",
      content:"Enjoy peace of mind with our reliable support services, available to assist you whenever needed, ensuring smooth and uninterrupted operations."
    }
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 py-14"> 

      <div className="flex items-center justify-center gap-3">
        <div className="w-8 h-1 bg-info"></div>
        <div className="uppercase">WHY OUTSOURCE FROM US?</div>
        <div className="w-8 h-1 bg-info"></div>
      </div>
      <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold text-center my-6">
      Experience the Advantage of Expert Outsourcing
      </h1>
      { outSourceData?.map((item, index)=>  <OutsourceContent key={index} item={item} />)}
    </div>
  );
};

export default Outsource;
