"use client";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

const ProductSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    centerPadding: "0px",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoPlay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
    "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg",
  ];
  return (
    <div className="slider-container mt-[50px] container mx-auto">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            key={index}
            className="gi-cat-box transition-all duration-[0.3s] ease-in-out rounded-[5px] relative "
          >
            <ProductCard src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
