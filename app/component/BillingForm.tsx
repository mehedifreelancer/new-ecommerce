const BillingForm = () => {
  return (
    <div className="gi-checkout-content">
      <div className="gi-checkout-inner">
        <div className="gi-checkout-wrap pb-[3px] p-[30px] border-[1px] border-solid border-[#eee] bg-[#fff] rounded-[5px] mb-[40px]">
          <div className="gi-checkout-block gi-check-bill">
            <h3 className="gi-checkout-title mb-[26px] leading-[1.2] text-[20px] font-semibold tracking-[0] relative block text-[#4b5966] font-Montserrat max-[575px]:text-[18px]">
              Billing Details
            </h3>
            <div className="gi-bl-block-content">
              <div className="gi-check-subtitle mb-[10px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                Checkout Options
              </div>
              <span className="gi-bill-option mb-[32px] block">
                <span className="mr-[45px]">
                  <input
                    type="radio"
                    id="bill1"
                    name="radio-group"
                    value={""}
                  />
                  <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0] mb-[15px]">
                    I want to use an existing address
                  </label>
                </span>
                <span className="mr-[45px]">
                  <input type="radio" id="bill2" name="radio-group" checked />
                  <label className="relative pl-[26px] cursor-pointer leading-[16px] inline-block text-[#777] tracking-[0] mb-[15px]">
                    I want to use new address
                  </label>
                </span>
              </span>
              <div className="gi-check-bill-form mb-[2px]">
                <form
                  action="#"
                  method="post"
                  className="flex flex-row flex-wrap mx-[-15px]"
                >
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Enter your first name"
                      className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter your last name"
                      className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>
                  <span className="gi-bill-wrap w-full px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      placeholder="Address Line 1"
                      className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
                    />
                  </span>
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      City *
                    </label>
                    <span className="gi-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#eee] text-[14px] p-[0] mb-[27px] rounded-[5px]">
                      <select
                        name="gi_select_city"
                        id="gi-select-city"
                        className="gi-bill-select"
                      >
                        <option selected disabled>
                          City
                        </option>
                        <option value="1">City 1</option>
                        <option value="2">City 2</option>
                        <option value="3">City 3</option>
                        <option value="4">City 4</option>
                        <option value="5">City 5</option>
                      </select>
                    </span>
                  </span>
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      Post Code
                    </label>
                    <input
                      type="text"
                      name="postalcode"
                      placeholder="Post Code"
                      className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
                    />
                  </span>
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      Country *
                    </label>
                    <span className="gi-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#eee] text-[14px] p-[0] mb-[27px] rounded-[5px]">
                      <select
                        name="gi_select_country"
                        id="gi-select-country"
                        className="gi-bill-select"
                      >
                        <option selected disabled>
                          Country
                        </option>
                        <option value="1">Country 1</option>
                        <option value="2">Country 2</option>
                        <option value="3">Country 3</option>
                        <option value="4">Country 4</option>
                        <option value="5">Country 5</option>
                      </select>
                    </span>
                  </span>
                  <span className="gi-bill-wrap gi-bill-half w-[50%] px-[15px]">
                    <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
                      Region State
                    </label>
                    <span className="gi-bl-select-inner relative flex w-full h-[50px] border-[1px] border-solid border-[#eee] text-[14px] p-[0] mb-[27px] rounded-[5px]">
                      <select
                        name="gi_select_state"
                        id="gi-select-state"
                        className="gi-bill-select"
                      >
                        <option selected disabled>
                          Region/State
                        </option>
                        <option value="1">Region/State 1</option>
                        <option value="2">Region/State 2</option>
                        <option value="3">Region/State 3</option>
                        <option value="4">Region/State 4</option>
                        <option value="5">Region/State 5</option>
                      </select>
                    </span>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
