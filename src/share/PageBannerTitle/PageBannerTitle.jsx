const PageBannerTitle = () => {
  return (
    <div
    className="w-full min-h-[70vh] relative pt-20 bg-no-repeat bg-cover object-cover curved-bg " >
    <div className="z-0 bg-gradient-to-r from-[#0f172a] top-0 to-[#374151] curved w-full h-full opacity-80 absolute"></div>
    <div className="z-20 relative text-base-100 max-w-6xl mx-auto lg:p-14  ">
      {/* title link */}
      <div className="text-sm breadcrumbs p-6">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
        </ul>
      </div>
      <div className="w-2/3 space-y-6 p-6">
        <h1 className="lg:text-4xl font-semibold">
          {" "}
          Web Scraping Service -Data <br />
          collection Solution
        </h1>
        <p className="font-sans">
          Phosfluorescently simplify virtual results before exceptional
          catalysts for change. Collaboratively syndicate out-of-the-box
          synergy without innovative vortals. Appropriately disintermediate
          granular content with collaborative technologies. Appropriately
          implement functionalized infomediaries after magnetic quality
          vectors. Credibly incentivize cross.
        </p>
        <button className="btn btn-outline btn-info">Get Start</button>
      </div>
    </div>
  </div>
  );
};

export default PageBannerTitle;
