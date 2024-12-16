const OtpForm = () => {
  return (
    <form
      action="#"
      method="post"
      className="flex flex-row flex-wrap mx-[-15px] p-5"
    >
      <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
        Email Address *
      </label>
      <input
        type="text"
        name="firstname"
        placeholder="Enter your first name"
        className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
        required
      />
      <button className="text-center bg-[#5caf90] w-full text  p-2 text-white">
        {" "}
        Send OTP
      </button>
    </form>
  );
};

export default OtpForm;
