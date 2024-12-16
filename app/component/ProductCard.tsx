import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faCartPlus, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ src }: { src: string }) => {
  return (
    <>
    <div className="gi-product-content h-full flex w-full p-[12px]">
      <div className="w-full gi-product-inner transition-all duration-[0.3s] ease-in-out cursor-pointer flex flex-col overflow-hidden border-[1px] border-solid border-[#eee] rounded-[5px] justify-center items-center">
        <Link
          href={"/product/1"}
          className="gi-pro-image-outer transition-all duration-[0.3s] delay-[0s] ease z-[11] relative"
        >
          <div className="gi-pro-image overflow-hidden ">
            <div className="image relative block overflow-hidden pointer-events-none">
              <Image
                height={250}
                width={250}
                className="main-image max-w-full transition-all duration-[0.3s] ease delay-[0s]"
                src={src}
                alt="Product"
              />
            </div>
            <span className="flags flex flex-col p-[0] uppercase absolute top-[10px] right-[10px] z-[2]">
              <span className="sale px-[10px] py-[5px] text-[11px] font-medium leading-[12px] text-left uppercase flex items-center bg-[#ff7070] text-[#fff] tracking-[0.5px] relative rounded-[5px]">
                Sale
              </span>
            </span>
            <div className="gi-pro-actions transition-all duration-[0.3s] ease-in-out absolute z-[9] left-[0] right-[0] bottom-[-10px] max-[991px]:opacity-[1] max-[991px]:bottom-[10px] flex flex-row items-center justify-center my-[0] mx-auto opacity-0">
              <button
                className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                title="Wishlist"
              >
                <FontAwesomeIcon className="text-[black]" icon={faCartPlus} />
              </button>

              <button
                className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                title="Wishlist"
              >
                <FontAwesomeIcon className="text-[black]" icon={faHeart} />
              </button>
              <button
                className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out h-[30px] w-[30px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[5px]"
                title="Wishlist"
              >
                <FontAwesomeIcon className="text-[black]" icon={faEye} />
              </button>
            </div>
          </div>
        </Link>
        <div className="gi-pro-content h-full p-[20px] relative z-[10] flex flex-col text-left border-t-[1px] border-solid border-[#eee]">
          <a href="shop-left-sidebar-col-3.html">
            <h6 className="gi-pro-stitle mb-[10px] font-normal text-[#999] text-[13px] leading-[1.2] capitalize">
              Dried Fruits
            </h6>
          </a>
          <h5 className="gi-pro-title h-full mb-[10px] text-[16px]">
            <Link
              href={"/product/1"}
              className="block text-[14px] leading-[22px] font-normal text-[#4b5966] tracking-[0.85px] capitalize font-Poppins hover:text-[#5caf90]"
            >
              Dates Value Fresh Pouch
            </Link>
          </h5>
          <div className="gi-pro-rat-price mt-[5px] mb-[0] flex flex-col">
            <span className="gi-pro-rating mb-[10px] opacity-[0.7] relative">
              <span>4 </span>
              <FontAwesomeIcon
                className=" text-orange-600 h-[15px]"
                icon={faStar}
              />
            </span>
            <span className="gi-price">
              <span className="new-price text-[#4b5966] font-bold text-[14px] mr-[7px]">
                $78.00
              </span>
              <span className="old-price text-[14px] text-[#777] line-through">
                $85.00
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
