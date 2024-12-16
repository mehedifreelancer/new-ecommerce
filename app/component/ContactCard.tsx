import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactCard = () => {
  return (
    <div className="gi-box h-full p-[24px] border-[1px] border-solid border-[#eee] bg-[#f8f8fb] relative rounded-[5px] transition-all duration-[0.3s] ease-in-out">
      <div className="detail flex flex-col justify-center items-center text-center">
        <div className="icon w-[70px] h-[70px] mb-[15px] bg-[#4b5966] flex flex-col justify-center items-center rounded-[5px] text-center">
        <FontAwesomeIcon
              className="h-[30px] text-white"
              icon={faEnvelope}
            />
        </div>
        <div className="info text-center">
          <h3 className="title text-[20px] font-semibold text-[#4b5966] capitalize tracking-[0.01rem] leading-[1.2] mb-[6px]">
            Mail & Website
          </h3>
          <p className="m-[0] text-[14px] text-[#777] leading-[28px] font-light tracking-[0.02rem]">
            &nbsp; mail.example@gmail.com
          </p>
          <p className="m-[0] text-[14px] text-[#777] leading-[28px] font-light tracking-[0.02rem]">
            <i
              className="fa fa-globe text-[14px] text-[#777] text-center"
              aria-hidden="true"
            ></i>{" "}
            &nbsp; www.yourdomain.com
          </p>
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
};

export default ContactCard;
