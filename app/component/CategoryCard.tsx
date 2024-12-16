import { faLemon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoryCard = () => {
  return (
      <div className="gi-cat-icon h-full p-[15px] flex flex-col items-center justify-center bg-[#fff] relative rounded-[5px] z-[5] shadow-md">
        <span className="gi-lbl px-[5px] absolute top-[0] right-[0] bg-[#5caf90] text-[#fff] text-[12px] font-semibold rounded-bl-[5px] rounded-tr-[5px]">
          30%
        </span>
        <FontAwesomeIcon className="h-[40px]" icon={faLemon} />
        <div className="gi-cat-detail text-center">
          <a href="shop-left-sidebar-col-3.html">
            <h4 className="gi-cat-title m-[0] text-[15px] leading-[22px] font-semibold text-[#4b5966] capitalize font-manrope">
              Fruits
            </h4>
          </a>
          <p className="items m-[0] text-[13px] leading-[28px] text-[#777]">
            320 Items
          </p>
        </div>
      </div>
  );
};

export default CategoryCard;
