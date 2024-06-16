import { FaHome } from "react-icons/fa";

const YouCanTryForMe = () => {
  return (
    <div className="my-24">
      <h1 className="text-2xl font-semibold text-center">
        Its Easy to Use! You can try for free
      </h1>
      <p className="text-center max-w-3xl mx-auto text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia
        non, ipsam blanditiis tempore optio hic modi necessitatibus molestias
        harum.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-6  ">
        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5">
          <FaHome className="text-5xl text-info" />
          <div>
            <h1>No Coding Required</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem quidem molestiae ex tempora amet!{" "}
            </p>
          </div>
        </article>

        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5">
          <FaHome className="text-5xl text-success" />
          <div>
            <h1>No Coding Required</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem quidem molestiae ex tempora amet!{" "}
            </p>
          </div>
        </article>
        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5">
          <FaHome className="text-5xl text-error" />
          <div>
            <h1>No Coding Required</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem quidem molestiae ex tempora amet!{" "}
            </p>
          </div>
        </article>
        <article className="md:flex gap-4 shadow-xl md:p-8 rounded-xl mt-5">
          <FaHome className="text-5xl text-warning" />
          <div>
            <h1>No Coding Required</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolorem quidem molestiae ex tempora amet!{" "}
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default YouCanTryForMe;
