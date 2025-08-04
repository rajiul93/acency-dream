import { FiCheckSquare } from "react-icons/fi";
const YouCanTryForMe = () => {
  return (
    <div className="mt-0">
      <h1 className="text-2xl font-semibold text-center px-4">
        {`It's Easy to Use! Why are you waiting for?`}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6 px-4 ">
        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5 p-3">
          <FiCheckSquare className="text-5xl text-success" />
          <div>
            <h1>No Coding Required</h1>
            <p>
              Bring your ideas to life effortlessly—no coding needed. Just
              point, click, and watch your vision take shape!
            </p>
          </div>
        </article>
        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5 p-3">
          <FiCheckSquare className="text-5xl text-success" />

          <div>
            <h1> Full requirement & Lifetime Support</h1>
            <p>
              Get exactly what you need with full customization and enjoy
              lifetime support. We are here for you every step of the way!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default YouCanTryForMe;
