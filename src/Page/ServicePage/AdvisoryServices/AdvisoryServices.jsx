import AdvisoryServicesCard from "./AdvisoryServicesCard/AdvisoryServicesCard";

 
const AdvisoryServices = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 mt-14 ">
            <h1 className="text-2xl font-semibold"> Advisory Services</h1>
            <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            <AdvisoryServicesCard />
            </article>
        </div>
    );
};

export default AdvisoryServices;