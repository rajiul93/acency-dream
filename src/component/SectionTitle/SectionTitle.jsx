import PropTypes from "prop-types";
const SectionTitle = ({ title }) => {
  return (
    <div className="text-center   max-w-xl mx-auto mb-5 ">
      <article className="text-xl md:text-4xl flex md:gap-4 justify-center text-info font-semibold uppercase">
        <div>
          <span className="text-neutral ">Our</span>
          <div className="flex gap-1 md:gap-3 ms-3 md:ms-0">
            <div className="h-1 w-10 md:w-12 ms-1 rounded-full bg-info"></div>
            <div className="h-1 w-3 rounded-full bg-info"></div>
          </div>
        </div>
        {title}
      </article>
    </div>
  );
};

export default SectionTitle;
SectionTitle.propTypes = {
  title: PropTypes.string,
};
