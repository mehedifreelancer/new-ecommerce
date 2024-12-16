"use client";
import {
  faAnglesRight,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faTableCellsLarge,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  return (
    <>
      <header className="gi-header bg-[#fff] z-[14] max-[991px]:z-[16] relative">
        <div className="header-top py-[10px] text-[#777] bg-[#f8f8fb]">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px]">
              <div className="grow-[1] shrink-[0] basis-[0%] min-[992px]:block max-[767px]:hidden">
                <div className="header-top-social">
                  <ul className="mb-[0] p-[0] flex">
                    <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px] mr-[15px]">
                      <a
                        href="javascript:void(0)"
                        className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                      >
                        <i className="fi fi-rr-phone-call transition-all duration-[0.3s] ease-in-out text-[#777]"></i>
                      </a>
                      +91 987 654 3210
                    </li>
                    <li className="list-inline-item transition-all duration-[0.3s] ease-in-out flex text-[13px]">
                      <a
                        href="javascript:void(0)"
                        className="mx-[5px] text-center flex items-center justify-center text-[15px]"
                      >
                        <i className="fi fi-brands-whatsapp transition-all duration-[0.3s] ease-in-out text-[#777]"></i>
                      </a>
                      +91 987 654 3210
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grow-[1] shrink-[0] basis-[0%] text-center max-[1199px]:hidden">
                <div className="header-top-message text-[13px]"></div>
              </div>
              <div className="grow-[1] shrink-[0] basis-[0%] hidden min-[992px]:block">
                <div className="header-top-right-inner flex justify-end">
                  <a
                    className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                    href="faq.html"
                  >
                    Help?
                  </a>
                  <a
                    className="gi-help pl-[20px] text-[13px] text-[#777] tracking-[0.7px] font-normal hover:text-[#5caf90]"
                    href="track-order.html"
                  >
                    Track Order?
                  </a>
                  <div className="header-top-lan-curr header-top-lan dropdown pl-[20px] flex flex-wrap relative">
                    <button
                      type="button"
                      className="dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px]"
                    >
                      English
                      <i className="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex"></i>
                    </button>
                    <ul className="hidden dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee]">
                      <li className="active border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                        <a
                          className="dropdown-item p-[7px] text-[14px] bg-transparent"
                          href="#"
                        >
                          English
                        </a>
                      </li>
                      <li className="leading-[1.5] py-[5px]">
                        <a
                          className="dropdown-item p-[7px] text-[14px] bg-transparent"
                          href="#"
                        >
                          Italiano
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-top-lan-curr header-top-curr dropdown pl-[20px] flex flex-wrap relative">
                    <button
                      type="button"
                      className="dropdown-toggle text-[13px] flex items-center p-[0] transition-all duration-[0.3s] ease delay-0 text-[#777] border-[0] tracking-[0.7px]"
                    >
                      Dollar
                      <i className="fi-rr-angle-small-down text-[14px] ml-[5px] text-[#777] transition-all duration-[0.3s] ease delay-0 flex"></i>
                    </button>
                    <ul className="hidden dropdown-menu absolute top-[32px] left-[auto] right-[0] min-w-[130px] truncate px-[10px] bg-[#fff] z-[1] rounded-[5px] border-[1px] border-solid border-[#eee]">
                      <li className="active border-b-[1px] border-solid border-[#eee] leading-[1.5] py-[5px]">
                        <a
                          className="dropdown-item p-[7px] text-[14px] bg-transparent"
                          href="#"
                        >
                          USD $
                        </a>
                      </li>
                      <li className="leading-[1.5] py-[5px]">
                        <a
                          className="dropdown-item p-[7px] text-[14px] bg-transparent"
                          href="#"
                        >
                          EUR €
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-header-bottom py-[30px] max-[991px]:py-[15px] max-[991px]:border-b-[1px] border-solid border-[#eee]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="w-full flex flex-wrap px-[12px]">
              <div className="gi-flex flex flex-row justify-between w-full max-[575px]:flex-col">
                <div className="self-center gi-header-logo max-[575px]:mb-[15px]">
                  <div className="header-logo text-left">
                    <a href="index.html">
                      <Image
                        src="https://pub-e63b17b4d990438a83af58c15949f8a2.r2.dev/type/liva.png"
                        alt="Site Logo"
                        className="w-[144px] max-[1199px]:w-[130px] max-[991px]:w-[120px] max-[767px]:w-[100px] "
                        height={100}
                        width={100}
                      />
                    </a>
                  </div>
                </div>
                <div className="self-center gi-header-search my-[0] mx-[auto] max-[991px]:m-0">
                  <div className="header-search w-full min-w-[700px] px-[30px] relative max-[1399px]:min-w-[500px] max-[1199px]:min-w-[400px] max-[991px]:p-0 max-[767px]:min-w-[350px] max-[480px]:min-w-[300px] max-[320px]:min-w-full">
                    <form
                      className="gi-search-group-form relative flex border-[1px] border-solid border-[#eee] items-center rounded-[5px]"
                      action="#"
                    >
                      <input
                        className="form-control gi-search-bar block w-full min-h-[50px] h-[50px] max-[991px]:h-[40px] max-[991px]:min-h-[40px] px-[15px] text-[13px] font-normal leading-[1] text-[#777] bg-transparent outline-[0] border-[0] tracking-[0.6px]"
                        placeholder="Search Products..."
                        type="text"
                      />
                      <button
                        type="submit"
                        className="search_submit relative flex items-center justify-center w-[48px] h-[40px] basis-[48px]"
                      >
                        <FontAwesomeIcon
                          className="h-[15px] text-gray-400"
                          icon={faMagnifyingGlass}
                        />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="gi-header-action self-center max-[991px]:hidden">
                  <div className="gi-header-bottons flex justify-end">
                    <div className="gi-acc-drop relative">
                      <button
                        className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                        title="Account"
                      >
                        <Link
                          href="/login"
                          className="gi-btn-desc flex flex-col uppercase ml-[10px] justify-center items-center gap-2"
                        >
                          <div className="header-icon relative flex">
                            <FontAwesomeIcon
                              className="h-[15px]"
                              icon={faUser}
                            />
                          </div>
                          <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                            Log In
                          </span>
                        </Link>
                      </button>
                    </div>
                    <Link
                      href="/wishlist"
                      className="gi-header-btn gi-wish-toggle mr-[30px] transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Wishlist"
                    >
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px] justify-center items-center gap-2">
                        <div className="header-icon relative flex">
                          <FontAwesomeIcon
                            className="h-[15px]"
                            icon={faHeart}
                          />
                        </div>
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Wishlist
                        </span>
                      </div>
                    </Link>
                    <button
                      onClick={() => setIsCartOpen(true)}
                      className="gi-header-btn gi-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex text-[#4b5966] w-[auto] items-center whitespace-nowrap"
                      title="Cart"
                    >
                      <div className="gi-btn-desc flex flex-col uppercase ml-[10px] justify-center items-center gap-2">
                        <div className="header-icon relative flex">
                          <FontAwesomeIcon
                            className="h-[15px]"
                            icon={faCartShopping}
                          />
                        </div>
                        <span className="gi-btn-title transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-[#777] mb-[6px] tracking-[0.6px] capitalize font-medium">
                          Cart
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-header-cat transition-all duration-[0.3s] ease-in-out bg-[#fff] border-t-[1px] border-b-[1px] border-solid border-[#eee] hidden min-[992px]:block">
          <div className="flex flex-wrap justify-between items-center mx-auto min-[1600px]:max-w-[1600px] min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px] relative">
            <div className="gi-nav-bar flex flex-row justify-between relative w-full px-[12px]">
              <div className="gi-category-icon-block py-[5px] static">
                <div className="gi-category-menu relative">
                  <div className="gi-category-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#5caf90] rounded-[5px] cursor-pointer max-[1199px]:w-auto max-[991px]:border-[0]">
                    <FontAwesomeIcon
                      className="h-[15px] me-1 text-white"
                      icon={faTableCellsLarge}
                    />
                    <span className="text ml-[10px] text-[15px] text-[#fff] font-medium max-[1199px]:hidden">
                      All Categories
                    </span>
                    <FontAwesomeIcon
                      className="h-[15px] ms-1 transform rotate-[90deg] text-white"
                      icon={faAnglesRight}
                    />
                  </div>
                </div>
                <div className="gi-cat-dropdown transition-all duration-[0.3s] ease-in-out w-[600px] mt-[15px] p-[15px] absolute bg-[#fff] opacity-[0] invisible left-[0] z-[-15] rounded-[5px] border-[1px] border-solid border-[#eee]">
                  <div className="gi-cat-block">
                    <div className="gi-cat-tab flex">
                      <ul
                        className="nav-tabs min-w-[230px] bg-[#f8f8fb] p-[15px] rounded-[5px] flex-col justify-center mr-[16px]"
                        id="myTab"
                      >
                        <li className="active transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center mb-[10px]">
                          <a href="#v-pills-home">
                            <i className="fi-rr-cupcake transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0]"></i>
                            Dairy & Bakery
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center mb-[10px]">
                          <a href="#v-pills-profile">
                            <i className="fi fi-rs-apple-whole transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0]"></i>
                            Fruits & Vegetable
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center mb-[10px]">
                          <a href="#v-pills-messages">
                            <i className="fi fi-rr-popcorn transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0]"></i>
                            Snack & Spice
                          </a>
                        </li>
                        <li className="transition-all duration-[0.3s] ease-in-out cursor-pointer px-[15px] py-[10px] bg-[#fff] text-[13px] text-[#4b5966] font-medium text-left capitalize border-[1px] border-solid border-[#eee] rounded-[5px] flex items-center">
                          <a href="#v-pills-settings">
                            <i className="fi fi-rr-popcorn transition-all duration-[0.3s] ease-in-out mr-[10px] text-[18px] leading-[0]"></i>
                            Juice & Drinks
                          </a>
                        </li>
                      </ul>
                      <div
                        className="tab-content transition-all w-full"
                        id="myTabContent"
                      >
                        <div className="tab-pane" id="v-pills-home">
                          <div className="tab-list w-full flex flex-wrap">
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Dairy
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Milk
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Ice cream
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cheese
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Frozen custard
                                  </a>{" "}
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Frozen yogurt
                                  </a>{" "}
                                </li>
                              </ul>
                            </div>
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Bakery
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cake and Pastry
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Rusk Toast
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Bread & Buns
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Chocolate Brownie
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cream Roll
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-profile">
                          <div className="tab-list w-full flex flex-wrap">
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Fruits
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cauliflower
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Bell Peppers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Broccoli
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cabbage
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Tomato
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Vegetable
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cauliflower
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Bell Peppers
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Broccoli
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cabbage
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Tomato
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-messages">
                          <div className="tab-list w-full flex flex-wrap">
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Snacks
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    French fries
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    potato chips
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Biscuits & Cookies
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Popcorn
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Rice Cakes
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Spice
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cinnamon Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Cumin Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Fenugreek Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Pepper Powder
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Long Pepper
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane" id="v-pills-settings">
                          <div className="tab-list w-full flex flex-wrap">
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                Juice
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Mango Juice
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Coconut Water
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Tetra Pack
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Apple Juices
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Lychee Juice
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="px-[12px] grow-[1]">
                              <h6 className="gi-col-title text-[#5caf90] font-Poppins text-[15px] font-medium leading-[30px] capitalize block border-b-[1px] border-solid border-[#eee] mb-[10px] pb-[5px] h-auto">
                                soft drink
                              </h6>
                              <ul className="cat-list">
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Breizh Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Green Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Jolt Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Mecca Cola
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="shop-left-sidebar-col-3.html"
                                    className="text-[#777] capitalize leading-[28px] font-normal text-[13px] block py-[5px] border-[0] h-auto hover:text-[#5caf90]"
                                  >
                                    Topsia Cola
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
              </div>

              <div
                id="gi-main-menu-desk"
                className="w-full flex items-center min-[992px]:block hidden"
              >
                <div className="nav-desk">
                  <div className="w-full flex flex-wrap px-[12px] min-[1400px]:relative">
                    <div className="basis-auto w-full self-center">
                      <div className="gi-main-menu flex">
                        <ul className="w-full flex justify-center flex-wrap pl-[0]">
                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              href="/"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Home
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </Link>
                          </li>
                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              href="/products"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Products
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </Link>
                          </li>

                          <li className=" drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              href="/compare"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Compares
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </Link>
                          </li>
                          <li className=" drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              href="/offers"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Offers
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </Link>
                          </li>

                          <li className="dropdown drop-list relative ml-[20px] mr-[30px] transition-all duration-[0.3s] ease-in-out max-[1199px]:ml-[15px]">
                            <Link
                              href="/contact-us"
                              className="dropdown-arrow relative transition-all duration-[0.3s] ease-in-out text-[15px] leading-[60px] capitalize text-[#4b5966] flex items-center font-medium"
                            >
                              Contact Us
                              <i className="fi-rr-angle-small-right transition-all duration-[0.3s] ease-in-out mr-[5px] text-[#4b5966] absolute right-[-27px] text-[18px] rotate-[90deg] flex"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gi-location-block py-[5px]">
                <div className="gi-location-menu transition-all duration-[0.3s] ease-in-out relative">
                  {/* <div className="gi-location-toggle w-[200px] min-h-[50px] px-[15px] flex items-center bg-[#5caf90] rounded-[5px] cursor-pointer">
                    <i className="fi fi-rr-marker location text-[#fff] text-[18px] leading-[0]"></i>
                    <span className="gi-location-title gi-location w-[calc(100%-30px)] px-[10px] text-[15px] text-[#fff] font-medium tracking-[0.2px] whitespace-nowrap truncate">
                      New York
                    </span>
                    <i
                      className="fi-rr-angle-small-down gi-angle text-[18px] uppercase text-[#fff] text-center absolute right-[15px] leading-[0]"
                      aria-hidden="true"
                    ></i>
                  </div> */}
                  <div className="gi-location-content transition-all duration-[0.3s] ease-in-out w-[200px] py-[15px] px-[13px] mt-[15px] block absolute invisible left-auto right-0 top-[100%] rounded-[5px] z-[14] border-[1px] border-solid border-[#eee] bg-[#fff] overflow-auto">
                    <div className="gi-location-dropdown">
                      <div className="w-full flex flex-wrap gi-location-wrapper">
                        <ul className="loc-grid w-full">
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              current Location
                            </span>
                          </li>
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              Los Angeles
                            </span>
                          </li>
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              Chicago
                            </span>
                          </li>
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              Houston
                            </span>
                          </li>
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90] mb-[10px]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              Phoenix
                            </span>
                          </li>
                          <li className="loc-list current w-full p-[10px] relative flex items-center flex-row justify-left text-[13px] font-medium capitalize border-[1px] border-solid border-[#eee] rounded-[5px] cursor-pointer hover:border-[#5caf90] hover:text-[#5caf90]">
                            <i className="fi fi-rr-map-marker-plus text-[14px] mr-[10px] text-[#777] leading-[0]"></i>
                            <span className="gi-detail gi-detail-current w-[calc(100%-30px)] block truncate text-[#4b5966]">
                              San Diego
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="gi-mobile-menu-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc] z-[16]"></div>
        <div
          id="gi-mobile-menu"
          className="gi-mobile-menu transition-all duration-[0.3s] ease-in-out w-[340px] h-full pt-[15px] pb-[20px] px-[20px] fixed top-[0] right-[auto] left-[0] bg-[#fff] flex flex-col z-[17] overflow-auto max-[480px]:w-[300px]"
        >
          <div className="gi-menu-title w-full pb-[10px] flex flex-wrap justify-between">
            <span className="menu_title flex items-center text-[16px] text-[#4b5966] font-semibold">
              My Menu
            </span>
            <button
              type="button"
              className="gi-close-menu relative text-[30px] leading-[1] text-[#777] bg-transparent border-0 mx-[5px]"
            >
              ×
            </button>
          </div>
        </div>
      </header>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Header;
