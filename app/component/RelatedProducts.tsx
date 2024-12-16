import ProductCard from "./ProductCard";
import ProductSlider from "./ProductSlider";

const RelatedProducts = () => {
  return (
    <section className="gi-related-product gi-new-product py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap overflow-hidden">
          <div className="gi-new-prod-section w-full px-[12px]">
            <div className="gi-products">
              <div
                className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
                  Related <span className="text-[#5caf90]">Products</span>
                </h2>
                <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
                  Browse The Collection of Top Products
                </p>
              </div>
            </div>
          </div>

          <ProductSlider/>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
