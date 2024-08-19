import PropTypes from 'prop-types';
const ScrapingService = ({ loadData}) => {
 
  return (
    <div className="py-14 max-w-6xl mx-auto p-5">
      <div className=" md:flex items-center">
        <div className="md:w-1/2 p-4 md:p-0">
          <img
          className='w-full'
            src={loadData?.imageUrl1}
            alt=""
          />
        </div>
        <div className="md:w-1/2">
          <article className="p-4">
            <h1 className="text-2xl mb-4 font-semibold"> {loadData?.firstTitle}</h1>
            <p>
              <span className='font-semibold'>{loadData?.description1?.slice(0,8)}</span>
              
              {loadData?.description1?.slice(8,loadData?.description1?.length +1)}</p>
              <h1 className='font-semibold mt-4'>{loadData?.list_title_one}</h1>
            <ul className="mt-2">
              {loadData?.listOne?.map((e, i) => (
                <li key={i} className="flex gap-4 mt-2">
                  <span className="font-medium text-xl"> {e.length>0 && i + 1}</span>
                  {e.length>0 && e}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      <div className=" md:flex flex-row-reverse items-center">
        <div className="md:w-1/2 p-4 md:p-0">
          <img src={loadData?.imageUrl2} alt=""  />
        </div>
        <div className="md:w-1/2">
        <article className="p-4">
            <h1 className="text-2xl mb-4 font-semibold"> {loadData?.secondTitle}</h1>
            <p>
            <span className='font-semibold'>{loadData?.description1?.slice(0,8)}</span>
              
              {loadData?.description2?.slice(8,loadData?.description2?.length +1)}</p>
              <h1 className='font-semibold mt-4'>{loadData?.list_title_two}</h1>
            <ul className="mt-2">
              {loadData?.listTwo?.map((e, i) => (
                <li key={i} className="flex gap-4 mt-2">
                  <span className="font-medium text-xl"> {e.length>0 && i + 1}</span>
                  {e.length>0 && e}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
   
    </div>
  );
};

export default ScrapingService;

ScrapingService.propTypes = {
  loadData: PropTypes.object,
}