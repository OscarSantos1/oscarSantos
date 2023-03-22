import { useEffect } from "react";
import Image from "next/image";

const AboutMe = ({ setAnimate, animate }) => {
  useEffect(() => {
    function handleResize(box) {
      document.getElementById("slider-head").style.height = `${
        box.offsetHeight - 8
      }px`;
      document.getElementById("slider-head").style.width = `${
        box.offsetHeight - 8
      }px`;
    }
    const box = document.getElementById("slider-frame");
    handleResize(box);
    window.addEventListener("resize", () => handleResize(box));
  }, []);
  return (
    <div className="flex flex-col-reverse md:flex-row justify-around md:justify-between md:items-center h-[30%] sm:h-[50%] md:h-[36%] md:min-h-[226px] lg:pl-2 md:pr-10 mt-3 md:mt-0">
      <p className="w-[85%] md:w-[55%] text-[#646464] text-[10px] sm:text-[12px] 2xl:text-3xl lg:text-[16px] md:text-[14px]">
        I'm passionate about creating new products and tools. I love working
        with other people and most importantly helping a vision come to life.
      </p>
      <div
        id="slider-frame"
        className="relative w-[40%] pt-[20%] sm:w-[40%] sm:pt-[20%] md:w-[40%] md:pt-[20%] lg:w-[34%] lg:pt-[17%]"
      >
        <div
          className={`slider flex items-center bg-[#2954B5] rounded-full overflow-clip ${
            animate && "activate"
          }`}
        >
          <div className="flex w-full h-full relative items-center mx-1">
            <div
              className={`absolute py-1 flex items-center h-full w-min right-0 ${
                animate && "roll-in"
              }`}
            >
              <div
                id="slider-head"
                className="relative rounded-full overflow-hidden"
              >
                <Image
                  onLoad={() => setAnimate(true)}
                  alt={"image"}
                  src="/../public/images/home-office.png"
                  fill
                  priority
                  sizes="(max-width: 9999px) 9999vw,
              (max-width: 9999px) 9999vw,
              9999vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
