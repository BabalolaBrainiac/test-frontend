import React from "react";

import ItemsContainer from "./ItemsContainer";
import { logo2 } from "../../assets";
import SocialIcons from "./SocialIcons";
import { Divider } from "antd";

function Footer() {
  return (
    <footer className=" bg-secondary-main text-white-60 ">
      <div className="lg:pt-[65px] lg:ml-[103px] lg:mr-[103px] lg:flex lg:flex-col ">
        <img src={logo2} alt="" className="lg:w-[204px] lg:h-[40px] " />
        <ItemsContainer />
        <div className=" lg:mt-[60px] lg:flex lg:flex-row lg:justify-between lg:items-center  ">
          <h1 className="font-Jost font-regular lg:text-s lg:leading-[23px]">
            All right reserved ©️ Gipperpay Inc
          </h1>
          <SocialIcons />
        </div>
        <Divider className=" border-[#E5E5E5] lg:mb-[124px]  rounded-[2px]   " />
      </div>
    </footer>
  );
}

export default Footer;
