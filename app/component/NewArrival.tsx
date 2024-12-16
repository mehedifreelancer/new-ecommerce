import ProductCard from "./ProductCard";

const NewArrival = () => {
  return (
    <section className="gi-product-tab gi-products  max-[767px] ">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="gi-tab-title w-full inline-flex justify-between px-[12px] max-[991px]:flex-col">
          <div className="gi-main-title">
            <div className="section-title mb-[20px] pb-[20px] flex flex-start">
              <div className="section-detail">
                <h2 className="gi-title mb-[0] text-[36px] max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope tracking-[0.01rem]">
                  New <span className="text-[#5caf90]">Arrivals</span>
                </h2>
                <p className="max-w-[400px] mt-[10px] text-[18px] text-[#777] leading-[18px] font-light">
                  Shop online for new arrivals and get free shipping!
                </p>
              </div>
            </div>
          </div>
          <div className="gi-pro-tab mt-[40px] max-[991px]:mt-[-20px] max-[991px]:mb-[30px]">
            <ul
              className="nav-tabs flex flex-wrap max-[991px]:justify-start"
              id="myproTab"
            >
              <li className="active inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                <a
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#all"
                >
                  All
                </a>
              </li>
              <li className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                <a
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#snack"
                >
                  Snack & Spices
                </a>
              </li>
              <li className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px] mr-[50px] max-[991px]:mr-[30px] max-[480px]:mr-[20px]">
                <a
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#fruit"
                >
                  Fruits
                </a>
              </li>
              <li className="inline-block align-top text-[14px] text-[#777] uppercase p-[0] cursor-pointer font-medium transition-all duration-[0.3s] ease delay-[0s] leading-[20px] tracking-[0.7px]">
                <a
                  className="nav-link relative font-medium p-[0] max-[480px]:text-[13px] max-[480px]:leading-[28px]"
                  href="#veg"
                >
                  Vegetables
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-wrap mb-[-24px]">
          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-auto">
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
              <ProductCard src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/3_1.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
