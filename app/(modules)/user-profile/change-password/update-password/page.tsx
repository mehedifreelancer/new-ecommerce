const page = () => {
  return (
    <form
      action="#"
      method="post"
      className="flex flex-col flex-wrap mx-[-15px] p-5"
    >
      <div>
        <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
          OTP*
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your first name"
          className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
          required
        />
      </div>
      <div>
        <label className="mb-[7px] text-[#4b5966] text-[15px] font-medium tracking-[0] leading-[1] inline-block">
          Set New Password *
        </label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your first name"
          className="bg-transparent border-[1px] border-solid border-[#eee] text-[#4b5966] text-[14px] mb-[26px] px-[15px] w-full outline-[0] rounded-[5px] h-[50px]"
          required
        />
      </div>
      <button className="text-center bg-[#5caf90] w-full text  p-2 text-white">
        {" "}
        Update Password
      </button>
    </form>
  );
};

export default page;
