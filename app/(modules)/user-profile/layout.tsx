"use client";
import { faAnglesRight, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const menuItems = [
    { label: "Orders", link: "/user-profile/" },
    { label: "Wishlist", link: "/user-profile/wishlist" },
    { label: "Manage Address", link: "/user-profile/manage-address" },
    { label: "Change Password", link: "/user-profile/change-password" },
  ];

  const [isProfileSideBarOpen, setProfileSideBar] = useState(true);

  return (
    <div className="min-h-screen flex  container mx-auto relative">
      {/* Sidebar */}

      <div
        style={{ boxShadow: "4px 0 6px -2px rgba(0, 0, 0, 0.1)" }}
        className={` bg-white  p-1 lg:p-5  w-64 transition-all duration-300 ${
          !isProfileSideBarOpen && "translate-x-[-450px] w-0 "
        } absolute lg:relative h-[100%] lg:h-screen z-[10] `}
      >
        <div className=" justify-end flex lg:hidden">
          <button
            onClick={() => {
              setProfileSideBar(!isProfileSideBarOpen);
            }}
          >
            <FontAwesomeIcon className="p-2" icon={faXmark} />
          </button>
        </div>
        {/* User Info */}
        <div className="flex flex-col items-center mb-6  ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="User Profile"
            className="w-20 h-20 rounded-full border-2 border-[#5caf90]"
            height={300}
            width={300}
          />
          <h2 className="text-lg font-bold text-gray-800">Jane Doe</h2>
          <p className="text-sm text-gray-500">jane.doe@example.com</p>
        </div>
        {/* Navigation */}
        <nav className="text-center">
          {menuItems.map((item) => (
            <Link
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-[#5caf90] hover:text-white"
              key={item.link}
              href={item.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex flex-col p-0 md:p-6 w-full">
        <div className={`bg-white p-[5px] lg:p-[10px] shadow-md rounded mb-5 `}>
          <button
            onClick={() => {
              setProfileSideBar(!isProfileSideBarOpen);
            }}
            className="border border-solid p-3 rounded"
          >
            <FontAwesomeIcon
              className={`h-[15px] transform transition-all duration-400 ${
                isProfileSideBarOpen ? "rotate-[-180deg]" : ""
              }`}
              icon={faAnglesRight}
            />
          </button>
        </div>
        <div className="bg-white  rounded shadow-md p-4">{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;
