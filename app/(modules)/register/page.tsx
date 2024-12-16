const page = () => {
  return (
    <section className="gi-register py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
          <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
            Register<span></span>
          </h2>
          <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
            Best place to buy and sell digital products.
          </p>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="gi-register-wrapper max-w-[934px] my-[0] mx-auto px-[12px]">
            <div className="gi-register-container border-[1px] border-solid border-[#eee] p-[30px] text-left bg-[#fff] rounded-[5px] max-[575px]:p-[15px]">
              <div className="gi-register-form">
                <form
                  action="#"
                  method="post"
                  className="flex flex-row flex-wrap mx-[-15px]"
                >
                  <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                    <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                      First Name*
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Enter your first name"
                      className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>
                  <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                    <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Enter your last name"
                      className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>
                  <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                    <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email add..."
                      className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>
                  <span className="gi-register-wrap gi-register-half w-[50%] px-[15px]">
                    <label className="inline-block mb-[9px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1]">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      name="phonenumber"
                      placeholder="Enter your phone number"
                      className="w-full bg-transparent border-[1px] border-solid border-[#eee] text-[#777] text-[14px] mb-[26px] px-[15px] outline-[0] rounded-[5px] h-[50px]"
                      required
                    />
                  </span>

                  <span className="gi-register-wrap gi-register-btn flex flex-row justify-between items-center w-full px-[15px] max-[767px]:flex-col ">
                    <span className="text-[#777] text-[14px] tracking-[0.02rem]">
                      Already have an account?
                      <a
                        href="login.html"
                        className="ml-[10px] text-[#4b5966] text-[14px] transition-all duration-[0.3s] ease-in-out hover:text-[#5caf90]"
                      >
                        Login
                      </a>
                    </span>
                    <button
                      type="submit"
                      className="gi-btn-1 py-[8px] px-[15px] bg-[#4b5966] text-[#fff] border-[0] transition-all duration-[0.3s] ease-in-out overflow-hidden text-center text-[14px] font-semibold relative rounded-[5px] max-[767px]:mt-[15px] hover:bg-[#5caf90]"
                    >
                      Register
                    </button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
