"use client";
import useCountdown from "../hooks/useCountdown";
import ProductSlider from "./ProductSlider";

const Deal = () => {
  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    centerPadding: "60px",
    centerMode: true,
    slidesToScroll: 2,
    initialSlide: 0,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
  ];

  const targetDate = new Date(2024, 11, 31, 23, 59, 59); // Dec 31, 2024, 23:59:59
  const timeLeft = useCountdown(targetDate);
  return (
    <section
      className="gi-deal-section py-[40px] max-[767px]:py-[30px] wow fadeInUp mt-[50px]"
      data-wow-duration="2s"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full flex flex-wrap px-[12px] overflow-hidden">
          <div className="gi-deal-section w-full">
            <div className="gi-products">
              <div
                className="section-title mb-[20px] relative flex justify-between pb-[20px] z-[5] max-[767px]:flex-col"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <div className="section-detail">
                  <h2 className="gi-title mb-[0] text-[36px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]">
                    Day of the <span className="text-[#5caf90]">deal</span>
                  </h2>
                  <p className="max-w-[400px] mt-[10px] text-[18px] text-[#777] leading-[14px] mt-5">
                    Don't wait. The time will never be just right.
                  </p>
                </div>
                <div
                  id="dealend"
                  className="dealend-timer max-[767px]:mt-[15px] bg-green-100 rounded p-3"
                >
                  <div className="flex items-center justify-center text-center text-3xl font-bold">
                    <div className="mr-4">
                      {timeLeft.days} <span className="text-sm">Days</span>
                    </div>
                    <div className="mr-4">
                      {String(timeLeft.hours).padStart(2, "0")}{" "}
                      <span className="text-sm">:</span>
                    </div>
                    <div className="mr-4">
                      {String(timeLeft.minutes).padStart(2, "0")}{" "}
                      <span className="text-sm">:</span>
                    </div>
                    <div>{String(timeLeft.seconds).padStart(2, "0")}</div>
                  </div>
                </div>
              </div>
              <div className="slider-container ">
                <ProductSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deal;
