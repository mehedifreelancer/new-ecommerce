import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Breadcum = () => {
  return (
    <div className="gi-breadcrumb mb-[40px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="flex flex-wrap justify-between  m-0 p-[15px] border-[1px] border-solid border-[#eee] rounded-b-[5px] border-t-[0] gi_breadcrumb_inner">
              <div className="  px-[12px]">
                <h2 className="gi-breadcrumb-title text-[#4b5966] block text-[15px] font-Poppins leading-[22px] font-semibold my-[0] mx-auto capitalize max-[767px]:mb-[5px] max-[767px]:text-center">
                  Shop Page
                </h2>
              </div>
              <div className="px-[12px]">
                <ul className="gi-breadcrumb-list text-right max-[767px]:text-center flex items-center gap-2">
                  <li className="gi-breadcrumb-item inline-block text-[14px] font-normal tracking-[0.02rem] leading-[1.2] capitalize">
                    <Link href="index.html" className="relative text-[#4b5966]">
                      Home
                    </Link>
                  </li>
                  <li className="gi-breadcrumb-item  text-[14px] font-normal   capitalize active flex gap-1 items-center ">
                    <FontAwesomeIcon
                      className="h-[15px]"
                      icon={faAnglesRight}
                    />{" "}
                    <span> Shop Page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcum;
