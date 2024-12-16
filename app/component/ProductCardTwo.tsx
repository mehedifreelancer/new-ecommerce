import Image from "next/image";

const ProductCardTwo = () => {
  return (
    <div className="w-full gi-all-product-block">
      <div className="gi-all-product-inner mr-[1px] p-[15px] flex flex-wrap items-center bg-[#fff] border-[1px] border-solid border-[#eee] overflow-hidden relative rounded-[5px]">
        <div className="gi-pro-image-outer basis-[70px]">
          <div className="gi-pro-image overflow-hidden rounded-[15px]">
            <a href="product-left-sidebar.html" className="image">
              <Image
                className="main-image w-full"
                src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/19_1.jpg"
                alt="Product"
                height={500}
                width={500}
              />
            </a>
          </div>
        </div>
        <div className="gi-pro-content w-[calc(100%-70px)] basis-[calc(100%-70px)] pl-[15px]">
          <h5 className="gi-pro-title text-[16px] mb-[5px]">
            <a
              href="product-left-sidebar.html"
              className="text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block font-Poppins text-[14px] leading-[24px] font-medium tracking-[0.2px] capitalize"
              title="Healthy Nutmix, 200g Pack"
            >
              Healthy Nutmix, 200g Pack
            </a>
          </h5>
          <h6 className="gi-pro-stitle text-[#777] whitespace-nowrap overflow-hidden text-ellipsis block text-[13px] leading-[24px] font-normal tracking-[0.3px] capitalize mb-[5px]">
            <a
              href="shop-left-sidebar-col-3.html"
              className="text-[#999] hover:text-[#5caf90]"
            >
              Driedfruit
            </a>
          </h6>
          <div className="gi-pro-rat-price">
            <div className="gi-pro-rat-pri-inner">
              <span className="gi-price text-[14px] flex items-center text-[#5caf90]">
                <span className="new-price text-[#4b5966] font-bold text-[14px]">
                  $42.00
                </span>
                <span className="old-price text-[12px] line-through text-[#777] ml-[9px]">
                  $45.00
                </span>
                <span className="qty text-[12px] text-[#777] ml-[9px] hidden">
                  - 5 kg
                </span>
              </span>
            </div>
          </div>
          <a
            href="javascript:void(0)"
            className="add-to-cart w-[30px] h-[30px] absolute bottom-[10px] right-[10px] bg-[#fff] rounded-[3px] border-[1px] border-solid border-[#eee] flex items-center justify-center opacity-[0] max-[991px]:opacity-[1]"
            title="Add To Cart"
          >
            <i className="fi-rr-shopping-basket text-[18px] text-[#777] leading-[0]"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
