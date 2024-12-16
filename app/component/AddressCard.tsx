const AddressCard = () => {
  return (
    <div className="gi-sidebar-wrap gi-checkout-pay-wrap border-[1px] border-solid border-[#eee] mb-[30px] p-[15px] rounded-[5px] w-full">
      <div className="gi-sidebar-block">
        <div className="gi-sb-title">
          <h3 className="gi-sidebar-title text-[20px] max-[1199px]:text-[18px] font-semibold tracking-[0] mb-[0] relative text-[#4b5966] leading-[1.2]">
            Home Address
          </h3>
        </div>
        <div className="gi-sb-block-content mt-[15px]">
          <div className="gi-checkout-pay">
            <div className="gi-pay-desc text-[#777] text-[14px] font-light leading-[24px] mb-[15px] block tracking-[0]">
              1234 Elm Street, Suite 567 Springfield, XY 12345 United States
            </div>
            <form action="#">
              <span className="gi-pay-option">
                <span>
                  <input type="radio" id="pay1" name="radio-group" checked />
                  <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0]">
                    Cash On Delivery
                  </label>
                </span>
              </span>
              <br />
              <span className="gi-pay-option">
                <span>
                  <input type="radio" id="pay1" name="radio-group" checked />
                  <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0]">
                    Online Order
                  </label>
                </span>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
