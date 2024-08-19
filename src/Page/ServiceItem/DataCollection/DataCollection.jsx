const DataCollection = ({ title2, content, topListDescription }) => {
  return (
    <div className="max-w-6xl  mx-auto p-6 space-y-6">
      <div className="w-2/3">
        <p className="text-2xl font-semibold">{title2}</p>

        <div className="mb-4">
          {content?.map((e, i) =>
            e?.length ? (
              <li className="mt-2 font-medium " key={i}>
                {e}
              </li>
            ) : (
              ""
            )
          )}
        </div>
        <span className="text-[16px]    font-semibold">
          {topListDescription.slice(0, 7)}
        </span>
        <span className="text-[16px]    font-normal ms-1">
          {topListDescription.slice(8, topListDescription.length)}
        </span>
      </div>
    </div>
  );
};

export default DataCollection;
