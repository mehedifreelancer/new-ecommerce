import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const page = () => {
  return (
    <section className="gi-faq py-[10px] max-[767px]:py-[10px] gi-wishlist ">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="gi-vendor-dashboard-card    rounded-[5px] overflow-y-auto">
              <div className="gi-vendor-card-body min-w-[700px] p-[30px]">
                <div className="gi-vendor-card-table">
                  <table className="table gi-table w-full mb-[1rem]">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Image
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="p-[0.5rem] text-left text-[#4b5966]"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="wish-empt border-t-[3px] border-solid border-[#eee] border-solid border-[#dee2e6]">
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            225
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Californian Almonds Value 250g + 50g Pack
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            16 Jul 2021
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $65
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#5caf90] tracking-[0.02rem]">
                            Available
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish mx-[3px] text-[20px] font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            548
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Healthy Nutmix, 200g Pack
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            13 Aug 2016
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $68
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#e9abab] tracking-[0.02rem]">
                            Out Of Stock
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish mx-[3px] text-[20px] font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            684
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Capsicum - Red
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            20 Jul 2015
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $360
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#5caf90] tracking-[0.02rem]">
                            Available
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish mx-[3px] text-[20px] font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            987
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Ginger - Organic
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            05 Feb 2014
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $584
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#e9abab] tracking-[0.02rem]">
                            Out Of Stock
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish mx-[3px] text-[20px] font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            225
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Lemon - Seedless
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            23 Jul 2013
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $65
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#e9abab] tracking-[0.02rem]">
                            Out Of Stock
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish mx-[3px] text-[20px] font-normal btn w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            548
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Organic fresh Broccoli
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            28 Mar 2011
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $68
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#999] tracking-[0.02rem]">
                            Disabled
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish btn mx-[3px] text-[20px] font-normal w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                      <tr className="pro-gl-content">
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            684
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <img
                            className="prod-img h-[58px] w-[58px]"
                            src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/product-images/1_1.jpg"
                            alt="product image"
                          />
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            Fresh Lichi
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            16 Apr 2010
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#777] tracking-[0.02rem]">
                            $360
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="max-[767px]:text-[14px] py-[14px] flex text-[#5caf90] tracking-[0.02rem]">
                            Available
                          </span>
                        </td>
                        <td className="p-[0.5rem] border-b-[1px] border-solid border-[#dee2e6]">
                          <span className="tbl-btn py-[14px] flex text-[#777]">
                            <a
                              className="gi-btn-2 add-to-cart w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Add To Cart"
                            >
                              <FontAwesomeIcon icon={faCartPlus} />
                            </a>
                            <a
                              className="gi-btn-1 gi-remove-wish btn mx-[3px] text-[20px] font-normal w-[30px] h-[30px] inline-flex items-center justify-center transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#4b5966] text-[#fff] text-center rounded-[5px] hover:bg-[#5caf90] hover:text-[#fff]"
                              href="javascript:void(0)"
                              title="Remove From List"
                            >
                              ×
                            </a>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
