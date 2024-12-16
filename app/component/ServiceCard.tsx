const ServiceCard = () => {
  return (
    <div className="min-[992px]:w-[25%] min-[576px]:w-[50%] w-full p-[12px] wow fadeInUp">
      <div className="gi-ser-inner transition-all duration-[0.3s] ease delay-[0s] p-[30px] max-[991px]:p-[24px] h-full flex items-center justify-center flex-col text-center bg-[#fff] rounded-[5px] border-[1px] border-solid border-[#eee]">
        <div className="gi-service-image mb-[15px]">
          <i className="fi fi-ts-truck-moving text-[40px] text-[#5caf90] leading-[0]"></i>
        </div>
        <div className="gi-service-desc">
          <h3 className="font-Poppins text-[18px] font-medium text-[#4b5966] leading-[1.2] tracking-[0.6px] mb-[10px] max-[575px]:text-[16px]">
            Free Shipping
          </h3>
          <p className="m-[0] text-[14px] text-[#777] leading-[1.5] tracking-[0.5px]">
            Free shipping on all US order or order above $200
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
