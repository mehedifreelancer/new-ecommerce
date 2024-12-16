import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="gi-footer bg-[#fff] border-t-[1px] border-solid border-[#eee] mt-[40px]">
      <div className="footer-container">
        <div className="footer-top py-[80px] max-[767px]:py-[60px]">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap justify-between">
              <div className="min-[992px]:w-[25%] px-[12px] w-full gi-footer-cat wow fadeInUp">
                <div className="gi-footer-widget gi-footer-company flex flex-col">
                  <img
                    src="https://pub-e63b17b4d990438a83af58c15949f8a2.r2.dev/type/liva.png"
                    className="gi-footer-logo max-w-[144px] max-[767px]:max-w-[130px]  mb-[30px]"
                    alt="footer logo"
                  />
                  <p className="gi-footer-detail max-w-[400px] mb-[30px] p-[0] text-[14px] leading-[27px] font-normal text-[#777] inline-block relative max-[1199px]:text-[14px]">
                    Grabit is the biggest market of grocery products. Get your
                    daily needs from our store.
                  </p>
                </div>
              </div>
              <div
                className="min-[992px]:w-[16.66%] gi-footer-toggle px-[12px] w-full gi-footer-info wow fadeInUp"
                data-wow-delay="0.2s"
              ></div>

              <div
                className="min-[992px]:w-[25%] gi-footer-toggle px-[12px] w-full gi-footer-cont-social mb-[-20px] wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="gi-footer-contact mb-[30px] max-[991px]:mb-[0]">
                  <div className="gi-footer-widget">
                    <h4 className="gi-footer-heading text-[18px] font-medium mb-[20px] text-[#4b5966] leading-[1.2] tracking-[0] relative block w-full pb-[15px] capitalize font-Poppins border-b-[1px] border-solid border-[#eee] max-[991px]:mb-[20px] max-[991px]:text-[14px]">
                      Contact
                    </h4>
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center">
                        <li className="gi-footer-link gi-foo-location m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                          <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                            <FontAwesomeIcon
                              className="h-[15px] text-[#5caf90]"
                              icon={faLocationDot}
                            />
                          </span>
                          <p className="m-[0] text-[14px] font-normal text-[#777]">
                            2548 Broaddus Maple Court, Madisonville KY 4783,
                            USA.
                          </p>
                        </li>
                        <li className="gi-footer-link gi-foo-call m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                          <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                            <FontAwesomeIcon
                              className="h-[15px] text-[#5caf90]"
                              icon={faPhone}
                            />
                          </span>
                          <a
                            href="tel:+009876543210"
                            className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                          >
                            +00 9876543210
                          </a>
                        </li>
                        <li className="gi-footer-link gi-foo-mail m-[0] leading-[1.5] border-[0] p-[0] font-normal text-[16px] text-[#5caf90] flex items-center mb-[16px]">
                          <span className="w-[25px] flex basis-auto grow-[0] shrink-[0]">
                            <FontAwesomeIcon
                              className="h-[15px] text-[#5caf90]"
                              icon={faEnvelope}
                            />
                          </span>
                          <a
                            href="mailto:example@email.com"
                            className="transition-all duration-[0.3s] ease-in-out text-[14px] leading-[20px] p-[0] text-[#777] mb-[0] inline-block relative break-all tracking-[0] font-normal hover:text-[#5caf90] hover:opacity-[1]"
                          >
                            example@email.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="gi-footer-social">
                  <div className="gi-footer-widget">
                    <div className="gi-footer-links gi-footer-dropdown">
                      <ul className="align-itegi-center flex flex-wrap">
                        <li className="gi-footer-link pr-[5px]">
                          <a
                            href="#"
                            className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"
                          >
                            <FontAwesomeIcon
                              className="h-[15px]  text-white"
                              icon={faFacebook}
                            />
                          </a>
                        </li>
                        <li className="gi-footer-link pr-[5px]">
                          <a
                            href="#"
                            className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"
                          >
                            <FontAwesomeIcon
                              className="h-[15px] text-white"
                              icon={faInstagram}
                            />
                          </a>
                        </li>
                        <li className="gi-footer-link pr-[5px]">
                          <a
                            href="#"
                            className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"
                          >
                            <FontAwesomeIcon
                              className="h-[15px] text-white"
                              icon={faLinkedin}
                            />
                          </a>
                        </li>
                        <li className="gi-footer-link pr-[5px]">
                          <a
                            href="#"
                            className="h-[30px] w-[30px] bg-[#4b5966] rounded-[5px] capitalize flex items-center justify-center text-[15px]"
                          >
                            <FontAwesomeIcon
                              className="h-[15px] text-white"
                              icon={faTwitter}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-[10px] max-[991px]:py-[15px] border-t-[1px] border-solid border-[#eee] bg-[#f8f8fb]">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap">
              <div className="gi-bottom-info flex flex-row items-center justify-between w-full px-[12px] max-[991px]:flex-col">
                <div className="footer-copy max-[991px]:mb-[15px]">
                  <div className="footer-bottom-copy">
                    <div className="gi-copy text-[#777] text-[13px] tracking-[1px] text-center font-light">
                      Copyright ©
                      <a className="site-name text-[#5caf90]" href="index.html">
                        Grabit
                      </a>
                      all rights reserved. Powered by Grabit.
                    </div>
                  </div>
                </div>

                <div className="footer-bottom-right">
                  <div className="footer-bottom-payment flex justify-content-center">
                    <div className="payment-link">
                      <Image
                        src="https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/hero-bg/payment.png"
                        alt="payment"
                        height={100}
                        width={250}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
