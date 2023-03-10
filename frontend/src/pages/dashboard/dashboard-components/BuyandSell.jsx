import React from "react";

//assets
import { gustCoin } from "../../../assets";
import { downIcon, swap1 } from "../../../icons";
import { Divider } from "antd";

//components
import BuyButton from "../../../widgets/buttons/BuyButton";

function BuyandSell() {
  return (
    <div className="w-[576px] h-[720px]  rounded-[10px] ml-[162px] mr-[432px] mt-[20px] pt-[40px] pb-[71px] border-white-20 border-[1px] pl-[128px] pr-[128]">
      <div className="w-[320px] h-[45px] flex flex-row items-start ">
        <div className="w-[150px] h-[45px] items-center justify-center  rounded-[5px] bg-primary-light mr-[20px] pt-[11px] pb-[11px] pl-[62px] pr-[62px] ">
          <h1 className="w-[26px] h-[23px] font-Jost not-italic font-medium text-s text-center leading-[23px] text-Rectangle">
            Buy
          </h1>
        </div>
        <div className="w-[150px] h-[45px] items-center justify-center  rounded-[5px] pt-[11px] pb-[11px] pl-[62px] pr-[62px] ">
          <h1 className="w-[25px] h-[23px] font-Jost not-italic font-regular text-s text-center leading-[23px] text-white-30">
            Sell
          </h1>
        </div>
      </div>
      <div className="w-[300px] h-[441px] mt-[39px] ml-[10px] mr-[10px] flex flex-col items-start ">
        <h1 className="w-[105px] h-[19px] font-Jost not-italic font-medium text-xs leading-[19px] text-secondary-main">
          Select Coin to buy
        </h1>
        <div className="w-[300px] h-[50px]  pt-[10px] pb-[10px] pl-[89.92px] pr-[99.91px] border-[1px] rounded-[5px] border-primary-90 mt-[5px]">
          <div className="w-[110.17px] h-[30px] flex flex-row justify-center items-center rounded-[5px] ">
            <img src={gustCoin} alt="gustCoin" className="mr-[10px]" />
            <h1 className="w-[32px] h-[19px] not-italic font-regular text-xs leading-[19px] text-white-30 mr-[10px] ">
              GU$T
            </h1>
            <img src={downIcon} alt="downIcon" className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="mt-[5px] ml-[75.5px]">
          <h1 className=" w-[149px] h-[19px] text-white-30 font-Jost not-italic font-regular  text-xs leading-[19px] ">
            Available Balance: 0 GUST
          </h1>
        </div>
        <h1 className="w-[127px] h-[19px] font-Jost not-italic font-medium text-xs leading-[19px] text-secondary-main mt-[64px]">
          Enter Amount to Send
        </h1>
        <div className="w-[300px] h-[50px] mt-[5px] border-[1px] border-primary-90 rounded-[5px] flex flex-row items-center justify-between pr-[14px]">
          <div className="w-[83px] h-[33px] rounded-[5px] pt-[5px] pb-[5px] pl-[15px] flex flex-row items-center ">
            <h1 className="mr-[5px] w-[33px] h-[23px] font-Jost not-italic font-regular text-s leading-[23px] text-secondary-main">
              NGN
            </h1>
            <img src={downIcon} alt="" />
          </div>
          <h1 className="font-Jost not-italic font-medium text-sm leading-[27px] text-secondary-main">
            0.00
          </h1>
        </div>
        <h1 className="mt-[40px] w-[45px] h-[19px] font-Jost not-italic text-xs leading-[19px] text-white-30">
          Recieve
        </h1>
        <h1 className="mt-[5px] w-[96px] h-[27px] font-Jost not-italic font-medium text-sm leading-[27px] text-white-30 ">
          GU$T 0.00
        </h1>
        <Divider className="border-white-30 mt-[40px] " dashed />
        <div className=" w-[300px] h-[20px] flex flex-row justify-between items-center mt-[10px] ">
          <h1 className=" w-[80px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
            Exchange Rate
          </h1>
          <div className=" flex flex-row items-center ">
            <h1 className="w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 mr-[5px] ">
              1 GU$T
            </h1>
            <img src={swap1} alt="" className="mr-[5px]" />
            <h1 className="w-[44px] h-[19px] font-Jost not-italic font-regular text-xs leading-[19px] text-white-30 ">
              N725
            </h1>
          </div>
        </div>
        <div className=" w-[300px] h-[19px] mt-[10px] flex flex-row items-center justify-between ">
          <h1 className=" w-[20px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            Fee
          </h1>
          <h1 className=" w-[46px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            0 GU$T
          </h1>
        </div>
        <div className=" w-[300px] h-[19px] mt-[10px] flex flex-row items-center justify-between ">
          <h1 className=" w-[126px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            Amount you'll receive
          </h1>
          <h1 className=" w-[66px] h-[19px] font-Jost not-italic  font-regular text-xs leading-[19px] text-white-30 ">
            0.00 GU$T
          </h1>
        </div>
      </div>
      <div className=" mt-[60px] ml-[60px] ">
        <BuyButton />
      </div>
    </div>
  );
}

export default BuyandSell;
