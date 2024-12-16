import AddressCard from "@/app/component/AddressCard";
import BillingForm from "@/app/component/BillingForm";
import Image from "next/image";

const page = () => {
  return (
    <section className="gi-checkout-section py-[40px] text-[14px] max-[767px]:py-[30px]">
      <h2 className="hidden">Checkout Page</h2>
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
        <div className="flex flex-wrap w-full">
          <div className="gi-checkout-leftside px-[12px] min-[992px]:w-[66.66%] w-full max-[991px]:mt-[30px]">
            <AddressCard />
            <BillingForm />
          </div>
          <div className="gi-checkout-rightside px-[12px] min-[992px]:w-[33.33%] w-full">
            <div className="gi-sidebar-wrap gi-checkout-pay-wrap border-[1px] border-solid border-[#eee] mb-[30px] p-[15px] rounded-[5px]">
              <div className="gi-sidebar-block">
                <div className="gi-sb-title">
                  <h3 className="gi-sidebar-title text-[20px] max-[1199px]:text-[18px] font-semibold tracking-[0] mb-[0] relative text-[#4b5966] leading-[1.2]">
                    Payment Method
                  </h3>
                </div>
                <div className="gi-sb-block-content mt-[15px]">
                  <div className="gi-checkout-pay">
                    <div className="gi-pay-desc text-[#777] text-[14px] font-light leading-[24px] mb-[15px] block tracking-[0]">
                      Please select the preferred payment method to use on this
                      order.
                    </div>
                    <form action="#">
                      <span className="gi-pay-option">
                        <span>
                          <input type="radio" id="pay1" name="radio-group" />
                          <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0]">
                            Cash On Delivery
                          </label>
                        </span>
                      </span>
                      <br />
                      <span className="gi-pay-option">
                        <span>
                          <input type="radio" id="pay1" name="radio-group" />
                          <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0]">
                            Online Order
                          </label>
                        </span>
                      </span>

                      <span className="gi-pay-agree relative block mt-[20px]">
                        <input
                          className="absolute opacity-[0] cursor-pointer z-[999] top-[0] left-[0] h-[15px] w-[15px] outline-[0]"
                          type="checkbox"
                          value=""
                        />
                        <a
                          href="#"
                          className="ml-[27px] block text-[#777] text-[14px] mt-[0] leading-[18px] font-light tracking-[0] cursor-pointer"
                        >
                          I have read and agree to the{" "}
                          <span className="text-[#4b5966] font-medium">
                            Terms & Conditions.
                          </span>
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[15px] w-[15px] bg-[#fff] border-[1px] border-solid border-[#ededed] rounded-[4px]"></span>
                      </span>
                      <div className="gi-check-pay-img mt-5">
                        <Image
                          src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/payment.png"
                          className="w-full"
                          alt="payment"
                          height={150}
                          width={200}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-sidebar-wrap border-[1px] border-solid border-[#eee] mb-[30px] p-[15px] rounded-[5px]">
              <div className="gi-sidebar-block">
                <div className="gi-sb-title">
                  <h3 className="gi-sidebar-title text-[20px] max-[1199px]:text-[18px] font-semibold tracking-[0] mb-[0] relative text-[#4b5966] leading-[1.2]">
                    Summary
                  </h3>
                </div>
                <div className="gi-sb-block-content mt-[15px]">
                  <div className="gi-checkout-summary">
                    <div className="gi-checkout-pro">
                      <div className="w-full mb-[15px]">
                        <div className="gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px]">
                          <div className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative">
                            <div className="gi-pro-image overflow-hidden">
                              <a
                                href="product-left-sidebar.html"
                                className="image relative block overflow-hidden pointer-events-none"
                              >
                                <Image
                                  className="main-image max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                                  src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                                  alt="Product"
                                  height={200}
                                  width={200}
                                />
                        
                              </a>
                            </div>
                          </div>
                          <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
                            <h5 className="gi-pro-title h-full mb-[10px] text-[16px]">
                              <a
                                href="product-left-sidebar.html"
                                className="block text-[14px] leading-[22px] font-normal text-[#4b5966] tracking-[0.85px] capitalize font-Poppins hover:text-[#5caf90]"
                              >
                                Dates Value Pack Pouch
                              </a>
                            </h5>
                            <div className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
                              <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                              <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                              <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                              <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
                              <i className="gicon gi-star text-[14px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
                            </div>
                            <span className="gi-price">
                              <span className="old-price text-[14px] text-[#777] line-through">
                                $95.00
                              </span>
                              <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                                $79.00
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                  
                    </div>
                    <div className="flex justify-between items-center my-[10px]">
                      <span className="text-left text-[#777] text-[14px] leading-[24px] tracking-[0]">
                        Sub-Total
                      </span>
                      <span className="text-right text-[#4b5966] text-[15px] leading-[24px] font-medium">
                        $80.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-[10px]">
                      <span className="text-left text-[#777] text-[14px] leading-[24px] tracking-[0]">
                        Delivery Charges
                      </span>
                      <span className="text-right text-[#4b5966] text-[15px] leading-[24px] font-medium">
                        $80.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-[10px]">
                      <span className="text-left text-[#777] text-[14px] leading-[24px] tracking-[0]">
                        Coupan Discount
                      </span>
                      <span className="text-right text-[#4b5966] text-[15px] leading-[24px] font-medium">
                        <a className="gi-checkout-coupan text-[#5caf90] text-[14px] font-medium">
                          Apply Coupan
                        </a>
                      </span>
                    </div>
                    <div className="gi-checkout-coupan-content hidden flex justify-between items-center mb-[10px]">
                      <form
                        className="gi-checkout-coupan-form flex border-[1px] border-solid border-[#eee] p-[5px] rounded-[5px]"
                        name="gi-checkout-coupan-form"
                        method="post"
                        action="#"
                      >
                        <input
                          className="gi-coupan inline-block align-top leading-[35px] h-[35px] w-full text-[#777] text-[14px] border-[0] bg-transparent text-left pl-[10px] pr-[10px] tracking-[0.5px] rounded-[5px] outline-[0]"
                          type="text"
                          placeholder="Enter Your Coupan Code"
                          name="gi-coupan"
                          value=""
                        />
                        <button
                          type="submit"
                          className="gi-coupan-btn gi-btn-2 text-[16px] text-center px-[15px] transition-all duration-[0.3s] ease-in-out font-medium bg-[#5caf90] text-[#fff] rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                          name="subscribe"
                          value=""
                        >
                          Apply
                        </button>
                      </form>
                    </div>
                    <div className="gi-checkout-summary-total border-t-[1px] border-solid border-[#eee] pt-[19px] mb-[0] mt-[16px] flex justify-between items-center">
                      <span className="text-left text-[16px] font-semibold text-[#4b5966] tracking-[0] font-manrope">
                        Total Amount
                      </span>
                      <span className="text-right text-[16px] font-semibold text-[#4b5966] font-manrope">
                        $80.00
                      </span>
                    </div>
                    <button className="gi-check-order-btn p-[0] mt-5 w-full gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff] ">
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
