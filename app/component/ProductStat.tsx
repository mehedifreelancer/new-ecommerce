import ProductCardTwo from "./ProductCardTwo";

const ProductStat = () => {
  return (
    <section className="gi-offer-section overflow-hidden py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="w-full grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3  p-4">
            <div className="gi-banner-inner h-full p-[0] flex flex-row items-center justify-between rounded-[5px] overflow-hidden">
              <div className="gi-banner-block w-full h-full bg-[url('https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/4.jpg')] bg-center bg-cover bg-no-repeat max-[767px]:h-[450px] max-[767px]:bg-bottom max-[480px]:h-[400px] max-[420px]:h-[350px]">
                <div className="banner-block relative flex overflow-hidden justify-center items-center">
                  <div className="banner-content w-full h-full flex flex-col items-start justify-center p-[30px] cursor-pointer rounded-[30px]">
                    <div className="banner-text mb-[15px] flex flex-col">
                      <span className="gi-banner-title text-[22px] relative leading-[32px] text-[#444] font-semibold tracking-[0] mb-[10px] capitalize max-[420px]:text-[20px]">
                        Our top most products check it now
                      </span>
                    </div>
                    <a
                      href="shop-left-sidebar-col-3.html"
                      className="gi-btn-2 transition-all duration-[0.3s] ease-in-out overflow-hidden text-center relative rounded-[5px] py-[5px] max-[360px]:py-[3px] px-[15px] max-[360px]:px-[10px] bg-[#5caf90] text-[#fff] border-[0] text-[14px] max-[360px]:text-[13px] tracking-[0] font-medium inline-flex items-center hover:bg-[#4b5966] hover:text-[#fff]"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-9 p-4">
            <div className="all-stats flex gap-3 ">
              <div className="top-selling flex">
                <div className="w-full" data-wow-delay=".4s">
                  <div className="w-full">
                    <div className="section-title mb-[0] pb-[15px]">
                      <div className="section-detail">
                        <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                          Trending <span className="text-[#5caf90]">Items</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="gi-trending gap-2 flex flex-col">
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
                  </div>
                </div>
              </div>
              <div className="top-rated flex">
                <div className="w-full" data-wow-delay=".4s">
                  <div className="w-full">
                    <div className="section-title mb-[0] pb-[15px]">
                      <div className="section-detail">
                        <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                          Top-Rated{" "}
                          <span className="text-[#5caf90]">Items</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="gi-trending gap-2 flex flex-col">
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
                  </div>
                </div>
              </div>
              <div className="reviewed flex">
                <div className="w-full" data-wow-delay=".4s">
                  <div className="w-full">
                    <div className="section-title mb-[0] pb-[15px]">
                      <div className="section-detail">
                        <h2 className="gi-title mb-[0] text-[25px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                          Reviewed <span className="text-[#5caf90]">Items</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="gi-trending gap-2 flex flex-col">
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
                    <ProductCardTwo />
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

export default ProductStat;
