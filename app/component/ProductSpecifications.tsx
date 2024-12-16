"use client";
import Image from "next/image";
import { useState } from "react";

const ProductSpecifications = () => {
  const [activeTab, setActiveTab] = useState("details");
  console.log(activeTab);

  return (
    <div className="gi-single-pro-tab mt-[40px]">
      <div className="gi-single-pro-tab-wrapper flex flex-col">
        <div className="gi-single-pro-tab-nav w-full m-auto relative block text-center float-left">
          <ul className="nav-tabs inline-block float-left" id="singleprotab">
            <li
              className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                activeTab === "details" ? "active" : ""
              }`}
            >
              <button
                onClick={() => setActiveTab("details")}
                className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] leading-[0] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]"
              >
                Detail
              </button>
            </li>
            <li
              className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                activeTab === "specifications" ? "active" : ""
              }`}
            >
              <button
                onClick={() => setActiveTab("specifications")}
                className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] leading-[0] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]"
              >
                Specifications
              </button>
            </li>
            <li
              className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                activeTab === "vendor" ? "active" : ""
              }`}
            >
              <button
                onClick={() => setActiveTab("vendor")}
                className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] leading-[0] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]"
              >
                Vendor
              </button>
            </li>
            <li
              className={`mr-[5px] ml-auto mb-[5px] inline-block float-left ${
                activeTab === "reviews" ? "active" : ""
              }`}
            >
              <button
                onClick={() => setActiveTab("reviews")}
                className="capitalize leading-[24px] py-[8px] px-[28px] m-[0] text-[15px] font-medium relative transition-all duration-[300ms] linear inline-block cursor-pointer bg-[#fff] text-[#4b5966] border-[1px] border-solid border-[#eee] rounded-[5px] leading-[0] hover:bg-[#5caf90] hover:text-[#fff] hover:border-[#5caf90]"
              >
                Reviews
              </button>
            </li>
          </ul>
        </div>
        <div
          className="tab-content transition-all w-full overflow-hidden bg-[#fff] text-left p-[30px] border-[1px] border-solid border-[#eee] text-[#202020] text-[18px] tracking-[0] leading-[1.6] rounded-[5px]"
          id="singleTabContent"
        >
          <div
            id="gi-spt-nav-details"
            className={`tab-single-pane ${
              activeTab === "details" ? "" : "hidden"
            }`}
          >
            <div className="gi-single-pro-tab-desc">
              <p className="mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal font-Poppins">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <ul className="mb-[15px] pl-[24px]">
                <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                  Any Product types that You want - Simple, Configurable
                </li>
                <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                  Downloadable/Digital Products, Virtual Products
                </li>
                <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                  Inventory Management with Backordered items
                </li>
                <li className="list-disc text-[15px] mb-[4px] text-[#777]">
                  Flatlock seams throughout.
                </li>
              </ul>
              <p className="font-Poppins mb-[15px] text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="font-Poppins text-[14px] tracking-[0] text-[#777] leading-[28px] font-normal">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
            </div>
          </div>
          <div
            id="gi-spt-nav-info"
            className={`tab-single-pane ${
              activeTab === "specifications" ? "" : "hidden"
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <p className="font-Poppins text-[#777] text-[14px] font-normal leading-[28px] mb-[16px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>
              <ul className="pl-[24px]">
                <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                  <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                    Model
                  </span>{" "}
                  SKU140
                </li>
                <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                  <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                    Weight
                  </span>{" "}
                  500 g
                </li>
                <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                  <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                    Dimensions
                  </span>{" "}
                  35 × 30 × 7 cm
                </li>
                <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                  <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                    Color
                  </span>{" "}
                  Black, Pink, Red, White
                </li>
                <li className="list-disc mb-[4px] text-[15px] text-[#777] tracking-[0.02rem] leading-[1.6] max-[575px]:mb-[10px]">
                  <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                    Size
                  </span>{" "}
                  10 X 20
                </li>
              </ul>
            </div>
          </div>
          <div
            id="gi-spt-nav-vendor"
            className={`tab-single-pane ${
              activeTab === "vendor" ? "" : "hidden"
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <div className="gi-product-vendor">
                <div className="gi-vendor-info mb-[15px] flex flex-row">
                  <span>
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="vendor"
                      className="w-[80px] mr-[15px] border-[1px] border-solid border-[#eee]"
                      height={200}
                      width={200}
                    />
                  </span>
                  <div>
                    <h5 className="text-[15px] font-semibold text-[#4b5966]">
                      Ocean Crate
                    </h5>
                    <p className="text-[#777] font-Poppins text-[14px] font-normal leading-[28px]">
                      Products : 358
                    </p>
                    <p className="text-[#777] font-Poppins text-[14px] font-normal leading-[28px]">
                      Sales : 5587
                    </p>
                  </div>
                </div>
                <div className="gi-detail">
                  <ul className="mb-[15px] pl-[24px]">
                    <li className="mb-[4px] text-[15px] list-disc text-[#777] max-[575px]:mb-[10px]">
                      <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                        Phone No. :
                      </span>{" "}
                      +00 987654321
                    </li>
                    <li className="mb-[4px] text-[15px] list-disc text-[#777] max-[575px]:mb-[10px]">
                      <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                        Email. :
                      </span>{" "}
                      Example@gmail.com
                    </li>
                    <li className="mb-[4px] text-[15px] list-disc text-[#777] max-[575px]:mb-[10px]">
                      <span className="mr-[25px] min-w-[150px] text-[15px] text-[#4b5966] inline-block font-medium tracking-[0.02rem] max-[575px]:w-full">
                        Address. :
                      </span>{" "}
                      2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                    </li>
                  </ul>
                  <p className="text-[#777] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.02rem]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="gi-spt-nav-review"
            className={`tab-single-pane ${
              activeTab === "reviews" ? "" : "hidden"
            }`}
          >
            <div className="flex flex-wrap w-full">
              <div className="gi-t-review-wrapper mt-[10px]">
                <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                  <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="user"
                      className="max-w-full rounded-[5px]"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="gi-t-review-content">
                    <div className="gi-t-review-top flex flex-col mb-[10px]">
                      <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                        Mariya Lykra
                      </div>
                      <div className="gi-t-review-rating mt-[5px]">
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                      </div>
                    </div>
                    <div className="gi-t-review-bottom">
                      <p className="w-full text-[14px] text-[#777] font-normal">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gi-t-review-item flex mb-[25px] pb-[25px] border-b-[1px] border-solid border-[#eee]">
                  <div className="gi-t-review-avtar basis-[50px] grow-[0] shrink-[0] mr-[15px]">
                    <Image
                      src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="user"
                      className="max-w-full rounded-[5px]"
                      height={200}
                      width={200}
                    />
                  </div>
                  <div className="gi-t-review-content">
                    <div className="gi-t-review-top flex flex-col mb-[10px]">
                      <div className="gi-t-review-name text-[15px] m-[0] leading-[1.5] block text-[#4b5966]">
                        Moris Willson
                      </div>
                      <div className="gi-t-review-rating mt-[5px]">
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[#f27d0c] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[#b2b2b2] float-left text-[14px] mr-[3px]"></i>
                      </div>
                    </div>
                    <div className="gi-t-review-bottom">
                      <p className="w-full text-[14px] text-[#777] font-normal">
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gi-ratting-content w-full">
                <h3 className="mb-[10px] text-[20px] font-semibold leading-[1] font-Poppins text-[#4b5966] tracking-[0.01rem]">
                  Add a Review
                </h3>
                <div className="gi-ratting-form">
                  <form action="#">
                    <div className="gi-ratting-star flex mt-[5px] mb-[25px] items-center">
                      <span className="mr-[18px] text-[16px] text-[#777] tracking-[0.02rem]">
                        Your rating:
                      </span>
                      <div className="gi-t-review-rating">
                        <i className="gicon gi-star fill inline-block text-[18px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star fill inline-block text-[18px] text-[#f27d0c] float-left mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                        <i className="gicon gi-star-o inline-block text-[18px] text-[#b2b2b2] float-left mr-[3px]"></i>
                      </div>
                    </div>
                    <div className="gi-ratting-input mb-[10px]">
                      <input
                        name="your-name"
                        placeholder="Name"
                        type="text"
                        className="text-[14px] rounded-[5px] w-full mb-[15px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#eee] text-[#777] h-[50px]"
                      />
                    </div>
                    <div className="gi-ratting-input mb-[10px]">
                      <input
                        name="your-email"
                        placeholder="Email*"
                        type="email"
                        className="text-[14px] rounded-[5px] w-full mb-[15px] py-[5px] px-[20px] outline-[0] border-[1px] border-solid border-[#eee] text-[#777] h-[50px]"
                        required
                      />
                    </div>
                    <div className="gi-ratting-input form-submit">
                      <textarea
                        name="your-commemt"
                        placeholder="Enter Your Comment"
                        className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] h-[150px] p-[20px] mb-[15px] w-full outline-[0] text-[14px] rounded-[5px]"
                      ></textarea>
                      <button
                        type="submit"
                        className="gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                        value="Submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;
