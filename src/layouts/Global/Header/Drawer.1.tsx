import React from "react";
import { BiXCircle, BiRightArrowAlt } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { navigationLinks } from "./data";
import Image from "next/image";


export default function Drawer() {
  return (
    <div className="drawer w-1/2 z-40">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ml-3">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="drawer-button">
          <MdMenu className="w-10 h-20" />
        </label>
      </div>
      <div className="drawer-side bg-transparent">
        <label
          htmlFor="my-drawer text-white"
          className="drawer-overlay"
        ></label>
        <ul className="menu w-full min-h-full bg-bg-3 text-base-content">
          <div className="flex justify-between items-center w-full  px-2 border-gray border-b-2">
            <Image
              alt="logo"
              src={require("../../../utils/image/icon/logoPng.png")}
              className="w-[50%] h-auto" />
            <label htmlFor="my-drawer" className="text-white">
              <BiXCircle className="w-10 h-20 text-white" />
            </label>
          </div>
          {/* Sidebar content here */}

          <li className="w-full flex justify-center">
            {navigationLinks.map((item: any, index: any) => (
              <a
                key={index}
                href={item?.href}
                className="text-lg w-full font-semibold text-black capitalize"
              >
                {item?.text}
                <div className="relative right-[-95%]">
                  <BiRightArrowAlt className="" />
                </div>
              </a>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
