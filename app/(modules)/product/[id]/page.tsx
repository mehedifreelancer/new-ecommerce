"use client";
import ProductSpecifications from "@/app/component/ProductSpecifications";
import QtyInput from "@/app/component/QtyInput";
import RelatedProducts from "@/app/component/RelatedProducts";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Slider from "react-slick";

const page = ({ params }: any) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            className="slider-thumbs"
            alt="error"
            height={250}
            width={250}
            src={`https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/2_${
              i + 1
            }.jpg`}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="gi-single-product py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full px-[12px]">
          <div className="gi-pro-rightside gi-common-rightside w-full">
            <div className="single-pro-block">
              <div className="single-pro-inner">
                <div className="flex flex-wrap w-full">
                  <div className="single-pro-img single-pro-img-no-sidebar w-[40%] max-[991px]:w-full relative pr-[12px] max-[991px]:pl-[12px] max-[991px]:w-full max-[991px]:max-w-[500px] max-[991px]:m-auto max-[420px]:px-[0]">
                    <div className="single-product-scroll p-[15px] sticky top-[30px] rounded-[5px] border-[1px] border-solid border-[#eee]">
                      <div className="slider-container">
                        <Slider {...settings}>
                          <div>
                            <Image
                              src={
                                "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/2_1.jpg"
                              }
                              height={250}
                              width={250}
                              alt="error"
                            />
                          </div>
                          <div>
                            <Image
                              src={
                                "https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/2_1.jpg"
                              }
                              height={250}
                              width={250}
                              alt="error"
                            />
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                  <div className="single-pro-desc single-pro-desc-no-sidebar w-[60%] max-[991px]:w-full relative pl-[12px] max-[991px]:pl-[0] max-[991px]:mt-[30px] max-[991px]:w-full">
                    <div className="single-pro-content">
                      <h5 className="gi-single-title text-[#4b5966] text-[22px] capitalize mb-[20px] block font-Poppins font-medium leading-[35px] tracking-[0.02rem] max-[1199px]:text-[20px] max-[1199px]:leading-[33px] max-[767px]:text-[18px] max-[767px]:text-[18px] max-[767px]:leading-[31px]">
                        Potato Chips 52g, American Cream & Onion Flavour,
                        Crunchy Chips & Snacks.
                      </h5>
                      <div className="gi-single-rating-wrap flex mb-[14px] items-center">
                        <div className="gi-single-rating pr-[15px] leading-[17px]">
                          <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                          <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                          <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                          <i className="gicon gi-star fill text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                          <i className="gicon gi-star-o text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                        </div>
                        <span className="gi-read-review text-[#999] leading-[17px]">
                          |&nbsp;&nbsp;
                          <a
                            href="#gi-spt-nav-review"
                            className="text-[#999] text-[14px] leading-[20px] hover:text-[#5caf90]"
                          >
                            992 Ratings
                          </a>
                        </span>
                      </div>
                      <div className="gi-single-price-stoke mb-[15px] pt-[15px] pb-[15px] flex justify-between">
                        <div className="gi-single-price flex flex-col">
                          <div className="final-price mb-[15px] text-[#4b5966] font-semibold text-[22px] leading-[32px] font-Poppins tracking-[0] max-[1199px]:text-[20px]">
                            $664.00
                            <span className="price-des ml-[15px] text-[#5caf90] font-medium text-[18px] tracking-[0.02rem]">
                              -78%
                            </span>
                          </div>
                          <div className="mrp text-[#777]">
                            M.R.P. :{" "}
                            <span className="text-[#999] line-through">
                              $2,999.00
                            </span>
                          </div>
                        </div>
                        <div className="gi-single-stoke flex flex-col">
                          <span className="gi-single-sku mb-[15px] text-[18px] leading-[32px] text-[#4b5966] font-semibold tracking-[0.02rem]">
                            SKU#: WH12
                          </span>
                          <span className="gi-single-ps-title leading-[1] text-[16px] text-[#5caf90] tracking-[0]">
                            IN STOCK
                          </span>
                        </div>
                      </div>
                      <div className="gi-single-desc mb-[12px] text-[#777] text-[14px] tracking-[0] break-all leading-[26px] font-Poppins">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1990.
                      </div>
                      <div className="gi-single-list">
                        <ul className="mb-[30px] pl-[18px]">
                          <li className="my-[10px] text-[#777] text-[14px] list-circle">
                            <strong className="font-semibold">Closure :</strong>{" "}
                            Hook & Loop
                          </li>
                          <li className="my-[10px] text-[#777] text-[14px] list-circle">
                            <strong className="font-semibold">Sole :</strong>{" "}
                            Polyvinyl Chloride
                          </li>
                          <li className="my-[10px] text-[#777] text-[14px] list-circle">
                            <strong className="font-semibold">Width :</strong>{" "}
                            Medium
                          </li>
                          <li className="my-[10px] text-[#777] text-[14px] list-circle">
                            <strong className="font-semibold">
                              Outer Material :
                            </strong>{" "}
                            A-Grade Standard Quality
                          </li>
                        </ul>
                      </div>
                      <div className="gi-pro-variation mb-[20px] pb-[5px]">
                        <div className="gi-pro-variation-inner gi-pro-variation-size text-[16px] font-semibold text-[#4b5966] flex-col mb-[15px] flex">
                          <span className="mb-[10px] text-[#202020] font-medium text-[15px] leading-[1.1] tracking-[0.04rem] uppercase font-Poppins block">
                            Weight
                          </span>
                          <div className="gi-pro-variation-content">
                            <ul>
                              <li className="active h-[22px] font-normal transition-all duration-[0.3s] ease-in-out py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                <span className="">250g</span>
                              </li>
                              <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                <span>500g</span>
                              </li>
                              <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                <span>1kg</span>
                              </li>
                              <li className="h-[22px] font-normal transition-all duration-[0.3s] ease-in-out ml-[10px] py-[5px] px-[10px] cursor-pointer flex items-center justify-center text-[12px] leading-[22px] border-[1px] border-solid border-[#eee] float-left rounded-[5px]">
                                <span>2kg</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="gi-single-qty flex flex-wrap w-full m-[-5px]">
                        <QtyInput height="40px" />
                        <div className="gi-single-cart">
                          <button
                            type="button"
                            className="btn btn-primary gi-btn-1 flex h-[40px] leading-[50px] text-center text-[14px] m-[5px] py-[10px] px-[15px] uppercase justify-center bg-[#4b5966] text-[#fff] transition-all duration-[0.3s] ease-in-out relative rounded-[5px] items-center min-w-[160px] font-semibold tracking-[0.02rem] border-[0] hover:bg-[#5caf90] hover:text-[#fff]"
                          >
                            Add To Cart
                          </button>
                        </div>
                        <div className="gi-single-wishlist m-[5px]">
                          <button
                            className="  gi-btn-group wishlist w-[40px] h-[40px] flex items-center justify-center transition-all duration-[0.3s] ease delay-[0s] text-[#17181c] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px] hover:text-[#ffffff] hover:bg-[#5caf90] hover:border-[#5caf90]"
                            title="Wishlist"
                          >
                            <FontAwesomeIcon
                              className="text-[black] h-[15px]"
                              icon={faHeart}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ProductSpecifications />
            <RelatedProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
