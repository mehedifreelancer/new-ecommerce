const Badge = () => {
  return (
    <span className="gi-select-btn m-[5px] px-[10px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[#777] text-[14px] flex items-center capitalize">
      Clothes
      <a
        className="gi-select-cancel ml-[15px] text-[#ff8585] text-[18px] transition-all duration-[0.3s] ease-in-out"
        href="javascript:void(0)"
      >
        ×
      </a>
    </span>
  );
};

export default Badge;
