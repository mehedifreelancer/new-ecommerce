import CompareCard from "@/app/component/CompareCard";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const page = () => {
  return (
    <section className="gi-compare py-[40px] max-[767px]:py-[30px]">
      <h2 className="hidden">Compare</h2>
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
        <div className="flex flex-wrap w-full overflow-hidden">
          <div className="w-full px-[12px]">
            <div className="gi-compare-box flex flex-row overflow-auto">
              <div className="gi-compare-col title-col border-[1px] border-r-[1px] border-solid border-[#eee] relative block h-full w-[314px] min-w-[314px] max-[1399px]:w-[280px] max-[1399px]:min-w-[280px] mr-[-1px] max-[991px]:w-[150px] max-[991px]:min-w-[150px]">
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <div className="title w-full min-h-[221px] h-full flex items-center">
                    <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                      Product Image
                    </h5>
                  </div>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Name
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Category
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Ratings
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Availability
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    location
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Brand
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    SKU
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Quantity
                  </h5>
                </div>
                <div className="gi-compare-cell border-b-[1px] border-solid border-[#eee] px-[15px] py-[10px] flex items-center relative">
                  <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                    Weight
                  </h5>
                </div>
                <div className="gi-compare-cell px-[15px] py-[10px] flex items-center relative">
                  <div className="desc flex items-center h-[115px]">
                    <h5 className="m-[0] leading-[28px] text-[15px] font-semibold">
                      Description
                    </h5>
                  </div>
                </div>
              </div>
              
              <CompareCard/>
              <CompareCard/>
              <CompareCard/>
              <CompareCard/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
