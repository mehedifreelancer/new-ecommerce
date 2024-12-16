import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const CompareCard = () => {
  return (
    <div className="gi-compare-col mr-[-1px] w-[314px] min-w-[314px] h-full block border-[1px] border-solid border-[#eee] relative max-[1399px]:w-[280px] max-[1399px]:min-w-[280px] max-[991px]:w-[251px] max-[991px]:min-w-[251px]">
    <a
      href="javascript:void(0)"
      className="remove-compare-product absolute top-[15px] right-[15px] leading-[15px] z-[5]"
    >
      <Image
        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/icons/close.svg"
        className="svg_img transition-all duration-[0.3s] ease-in-out w-[15px] h-[15px] opacity-[0.5]"
        alt="close"
        height={100}
        width={100}
      />
    </a>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <div className="list w-full min-h-[221px] h-full flex items-center justify-center">
        <Image
          src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
          alt="product"
          className="h-[200px] m-auto"
          height={500}
          width={500}
        />
        <div className="gi-action transition-all duration-[0.3s] ease-in-out absolute top-[50%] right-[0] left-[0] translate-y-[-50%] opacity-[0] max-[991px]:opacity-[1] max-[991px]:bottom-[3px] max-[991px]:top-auto max-[991px]:transform-none">
          <ul className="flex flex-row items-center justify-center">
            <li className="m-[2px]">
              <a
                className="gi-btn-group wishlist transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] flex items-center justify-center rounded-[5px] bg-[#4b5966] hover:bg-[#5caf90]"
                title="Wishlist"
              >
                <FontAwesomeIcon
                  className="text-white"
                  icon={faHeart}
                />
              </a>
            </li>
            <li className="m-[2px]">
              <a
                href="javascript:void(0)"
                title="Add To Cart"
                className="gi-btn-group add-to-cart transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] flex items-center justify-center rounded-[5px] bg-[#4b5966] hover:bg-[#5caf90]"
              >
                <FontAwesomeIcon
                  className="text-white"
                  icon={faCartPlus}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        Smoked Honey Spiced Nuts
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        Snack & Spices
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <span className="gi-pro-rating">
        <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
        <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
        <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
        <i className="gicon gi-star fill text-[14px] text-[#f27d0c] mr-[3px] float-left mr-[3px]"></i>
        <i className="gicon gi-star text-[14px] text-[#777] mr-[3px] float-left mr-[3px]"></i>
      </span>
      <p className="rating-info ml-[5px] text-[12px] text-[#999] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        (15 Review)
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#02d302] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        In Stock
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        In Store , Online
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        Bhisma Organics
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        54786
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        1 Pack
      </p>
    </div>
    <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
      <p className="m-[0] text-[14px] text-[#777] font-light leading-[28px] overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02rem]">
        1 Kg
      </p>
    </div>
    <div className="gi-compare-cell px-[15px] py-[10px] flex items-center relative">
      <div className="desc h-[115px] flex items-center">
        <p className="h-[115px] max-h-[288px] flex whitespace-pre-wrap overflow-hidden text-ellipsis m-[0] text-[14px] text-[#777] font-light leading-[28px]">
          There are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in
          some form, by injected humour.
        </p>
      </div>
    </div>
  </div>
  );
};

export default CompareCard;