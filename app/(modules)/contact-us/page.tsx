import ContactCard from "@/app/component/ContactCard";

const contactUs = () => {
  return (
    <section className="gi-contact py-[40px] max-[767px]:py-[30px]">
      <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
        <div className="section-title-2 w-full mb-[20px] pb-[20px] flex flex-col justify-center items-center">
          <h2 className="gi-title mb-[0] font-manrope text-[26px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1]">
            Get in <span className="text-[#5caf90]">Touch</span>
          </h2>
          <p className="max-w-[400px] mt-[15px] text-[14px] text-[#777] text-center leading-[23px]">
            Please select a topic below related to you inquiry. If you don't
            fint what you need, fill out our contact form.
          </p>
        </div>
        <div className="w-full flex flex-wrap gi-contact-detail my-[-12px]">
          {[0, 1, 2].map((item) => (
            <div
              key={item}
              className="min-[992px]:w-[33.33%] min-[576px]:w-[50%] w-full px-[12px] py-[12px]"
            >
              <ContactCard />
            </div>
          ))}
        </div>
        <div className="w-full flex flex-wrap pt-[80px] max-[576px]:pt-[60px]">
          <div className="min-[768px]:w-[50%] w-full px-[12px]">
            <iframe
              src="//maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"
              className="h-full w-full mb-[-7px] border-[1px] border-solid border-[#eee] rounded-[5px] max-[767px]:h-[300px]"
            ></iframe>
          </div>
          <div className="min-[768px]:w-[50%] w-full px-[12px]">
            <form className="max-[767px]:mt-[50px]">
              <div className="form-group mb-[30px]">
                <input
                  type="text"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="fname"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group mb-[30px]">
                <input
                  type="email"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="umail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group mb-[30px]">
                <input
                  type="text"
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group mb-[30px]">
                <textarea
                  className="form-control py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[5px] text-[15px] text-[#777] block w-full font-normal leading-[1.5]"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="gi-btn-2 transition-all duration-[0.3s] ease-in-out py-[10px] px-[15px] text-[14px] font-medium bg-[#5caf90] text-[#fff] text-center rounded-[5px] hover:bg-[#4b5966] hover:text-[#fff]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactUs;
