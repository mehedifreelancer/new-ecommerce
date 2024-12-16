"use client";
import Slider from "react-slick";
import BgImage from "./BgImage";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container rounded ">
      <Slider {...settings}>
        <div className="relative flex justify-center items-center ">
          <div className=" gi-slide-content max-w-[33rem] max-[1399px]:max-w-[24rem] max-[1199px]:max-w-[20rem] max-[991px]:max-w-[17rem] max-[767px]:max-w-[14rem] max-[420px]:max-w-[12rem] max-[360px]:max-w-[10rem] ml-[100px] max-[991px]:ml-[70px] max-[767px]:ml-[30px] flex flex-col justify-center absolute z-[9] top-[25%]">
            <p className="mb-[20px] text-[20px] text-[#5caf90] leading-[1] tracking-[0] font-medium max-[767px]:text-[16px] max-[360px]:text-[13px]">
              Starting at $ <b>20.00</b>
            </p>
            <h1 className="gi-slide-title mb-[30px] text-[55px] leading-[68px] text-[#4b5966] tracking-[0.05rem] font-bold relative max-[1399px]:text-[40px] max-[1399px]:leading-[50px] max-[1199px]:text-[32px] max-[1199px]:leading-[42px] max-[991px]:text-[26px] max-[991px]:leading-[36px] max-[767px]:text-[22px] max-[767px]:leading-[32px] max-[767px]:mb-[20px] max-[420px]:text-[18px] max-[420px]:leading-[28px] max-[360px]:text-[17px] max-[360px]:leading-[27px]">
              Organic & healthy vegetables
            </h1>
            <div className="gi-slide-btn block">
              <a
                href="#"
                className="gi-btn-1 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#4b5966] text-[#fff] border-[0] text-[15px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#5caf90] hover:text-[#fff]"
              >
                Shop Now
                <i
                  className="fi-rr-angle-double-small-right ml-[5px] text-[#fff] flex"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <BgImage
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/2.jpg"
            minHeight="500px"
          />
        </div>
        <div className="relative ">
          <div className="gi-slide-content max-w-[33rem] max-[1399px]:max-w-[24rem] max-[1199px]:max-w-[20rem] max-[991px]:max-w-[17rem] max-[767px]:max-w-[14rem] max-[420px]:max-w-[12rem] max-[360px]:max-w-[10rem] ml-[100px] max-[991px]:ml-[70px] max-[767px]:ml-[30px] flex flex-col justify-center absolute z-[9] top-[25%]">
            <p className="mb-[20px] text-[20px] text-[#5caf90] leading-[1] tracking-[0] font-medium max-[767px]:text-[16px] max-[360px]:text-[13px]">
              Starting at $ <b>29.99</b>
            </p>
            <h1 className="gi-slide-title mb-[30px] text-[55px] leading-[68px] text-[#4b5966] tracking-[0.05rem] font-bold relative max-[1399px]:text-[40px] max-[1399px]:leading-[50px] max-[1199px]:text-[32px] max-[1199px]:leading-[42px] max-[991px]:text-[26px] max-[991px]:leading-[36px] max-[767px]:text-[22px] max-[767px]:leading-[32px] max-[767px]:mb-[20px] max-[420px]:text-[18px] max-[420px]:leading-[28px] max-[360px]:text-[17px] max-[360px]:leading-[27px]">
              Explore fresh & juicy fruits
            </h1>
            <div className="gi-slide-btn block">
              <a
                href="#"
                className="gi-btn-1 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[10px] max-[767px]:py-[6px] px-[15px] max-[767px]:px-[10px] bg-[#4b5966] text-[#fff] border-[0] text-[15px] max-[767px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#5caf90] hover:text-[#fff]"
              >
                Shop Now
                <i
                  className="fi-rr-angle-double-small-right ml-[5px] text-[#fff] flex"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
          <BgImage
            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/1.jpg"
            minHeight="500px"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
