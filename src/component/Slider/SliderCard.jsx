import { FaChevronRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
const SliderCard = ({ image, text }) => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover md:h-[41rem] "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="flex justify-center md:justify-start pb-10 md:pb-0 lg:items-center md:items-start h-full bg-gray-900/70 ">
          <div className="e-container">
            <div className=" text-center md:text-start px-8 md:w-[50%] mt-10">
              <h1 className="text-xl font-semibold text-white lg:text-4xl line_height">
                {text}
              </h1>
              <p className="text-sm font-semibold text-white lg:text-2xl mt-3">
                Elevate your skills and enjoy the journey of learning, where
                learning meets passion.
              </p>
              <div className="flex flex-col md:flex-row items-center  gap-4">
                <button className="uppercase h-[68px] hover:bg-second hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-6 bg-yellow-400 justify-center text-black font-bold text-sm md:text-xl tracking-wide">
                  Get Started
                </button>
                <button className="uppercase h-[68px] hover:text-main  hover:transition-all hover:duration-300   mt-6 flex items-center gap-2 py-6 px-6 bg-white justify-center text-black font-bold text-sm md:text-xl tracking-wide">
                  Browse Assignment
                  <FaChevronRight />
                </button>
              </div>
              {/* join memmder */}
              <div className="flex items-center  text-white mt-8">
                <div className="flex">
                  <div className="avatar z-10">
                    <div className="w-24 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                  <div className="text-8xl text-main relative right-4 bg-white rounded-full overflow-clip">
                    <FaCirclePlay />
                  </div>
                </div>
                <p className="text-2xl font-bold">
                  Join 750+ members and <br /> enjoy the benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
