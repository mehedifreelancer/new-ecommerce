const Pagination = () => {
  return (
    <div className="gi-pro-pagination pt-[15px] flex justify-between items-center border-t-[1px] border-solid border-[#eee] max-[575px]:flex-col">
      <span className="text-[14px] text-[#777] max-[575px]:mb-[10px]">
        Showing 1-12 of 21 item(s)
      </span>
      <ul className="gi-pro-pagination-inner">
        <li className="inline-block float-left mr-[5px]">
          <a
            className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] active"
            href="#"
          >
            1
          </a>
        </li>
        <li className="inline-block float-left mr-[5px]">
          <a
            className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
            href="#"
          >
            2
          </a>
        </li>
        <li className="inline-block float-left mr-[5px]">
          <a
            className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
            href="#"
          >
            3
          </a>
        </li>
        <li className="inline-block float-left mr-[5px]">
          <span className="w-[20px] text-[#777] block text-center text-[14px] tracking-[0.02rem] max-[575px]:mb-[10px]">
            ...
          </span>
        </li>
        <li className="inline-block float-left mr-[5px]">
          <a
            className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px] hover:text-[#fff] hover:bg-[#5caf90]"
            href="#"
          >
            8
          </a>
        </li>
        <li className="inline-block float-left">
          <a
            className="next w-auto px-[13px] text-[#fff] bg-[#5caf90] leading-[30px] h-[32px] bg-[#eee] flex text-center align-top text-[16px] justify-center items-center rounded-[5px]"
            href="#"
          >
            Next{" "}
            <i className="gicon gi-angle-right ml-[10px] transition-all duration-[0.3s] ease-in-out text-[#fff]"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
