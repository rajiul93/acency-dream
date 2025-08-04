import classNames from "classnames";
import image1 from "../../../assets/Companies Logos/1.jpg";
import image10 from "../../../assets/Companies Logos/10.png";
import image2 from "../../../assets/Companies Logos/2.jpg";
import image3 from "../../../assets/Companies Logos/3.png";
import image4 from "../../../assets/Companies Logos/4.png";
import image5 from "../../../assets/Companies Logos/5.png";
import image6 from "../../../assets/Companies Logos/6.png";
import image7 from "../../../assets/Companies Logos/7.png";
import image8 from "../../../assets/Companies Logos/8.png";
import image9 from "../../../assets/Companies Logos/9.png";
const TrustedUs = () => {
  const logo = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <div className="max-w-6xl mx-auto mb-0 px-6 my-24">
      <h1 className="text-xl md:text-4xl text-center font-semibold mb-6">
        Our Honored <span className="text-info">Clients</span>
      </h1>

      <div className=" grid grid-cols-2 lg:grid-cols-5 gap-6">
        {logo.map((item, index) => (
          <div
            key={index}
            className="hover:-translate-y-2 flex items-center gap-4   p-6 rounded-xl hover:shadow-xl duration-300"
          >
            <img
              className={classNames({
                "h-[36px]": index === 6,
                "h-14": index === 8 || index === 9,
                "h-24":
                  index === 4 ||
                  (index !== 9 && index !== 6 && index !== 8 && index !== 7),
                "h-[90px]": index === 7,
              })}
              src={item}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedUs;
