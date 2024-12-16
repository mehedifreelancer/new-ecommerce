"use client";
import Slider from "react-slick";
import CategoryCard from "./CategoryCard";

const CategorySlider = () => {
  var settings = {
    className: "center",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];
  return (
    <div className="slider-container mt-[50px] container mx-auto">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="gi-cat-box transition-all duration-[0.3s] ease-in-out p-[15px] rounded-[5px] relative "
          >
            <CategoryCard key={index} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategorySlider;
