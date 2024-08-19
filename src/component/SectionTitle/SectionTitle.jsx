const SectionTitle = ({ title }) => {
  return (
    <div className="text-center   max-w-xl mx-auto mb-10 ">
      <article className="text-2xl md:text-4xl flex gap-4 justify-center text-info font-semibold uppercase">
        <div>
          <span className="text-neutral ">Our</span>
      <div className="flex gap-3">
      <div className="h-1 w-12 ms-1 rounded-full bg-info"></div>
      <div className="h-1 w-3 rounded-full bg-info"></div>
      </div>
        </div>
        {title}
      </article>
    </div>
  );
};

export default SectionTitle;
