import React from "react";
import { useState } from "react";
import { gustCoin } from "../../../../assets";
import { Facebook, instagram, linkedIn, Snapchat, twitter } from "../../../../icons";

function SendGust({nextStep}) {
  const [active, setActive] = useState(0);
  const [method,setMethod] = useState('')
  console.log(method)
  const sendMethods = [
    {
      logo: gustCoin,
      label: "GU$T tag",
    },
    {
      logo: twitter,
      label: "@Twitter Username",
    },
    {
      logo: instagram,
      label: "@Instagram Username",
    },
    {
      logo: linkedIn,
      label: "@Linkedin Username",
    },
    {
      logo: Snapchat,
      label: "@Snapchat Username",
    },
    {
      logo: Facebook,
      label: "@Facebook Username",
    },
  ];

  const selectMethod = (i,label) => {
    setActive(i);
    setMethod(label)
  };
  return (
    <div className="w-[30rem] mx-auto mt-5 h-[38.5rem] pt-11 px-24 bg-whiteText">
      <p className="text-s font-medium leading-6 text-secondary-main">
        Choose Method to Send GU$T
      </p>
      <p className="text-white-30 text-xs font-regular leading-5">
        You can send GU$T to anyone using any method listed below
      </p>
      <div className="h-auto">
        {sendMethods.map((method, i) => (
          <div
            key={i}
            className={`w-[18.75rem] h-[2.8rem] border flex justify-between items-center ${
              active === i ? "border-primary-main" : "border-white-20"
            } mt-[1.25rem]  py-2 px-5 cursor-pointer bg-whiteText`}
            onClick={() => selectMethod(i,method.label)}
          >
            <div className="flex gap-1">
              <img height={20} width={20} src={method.logo} alt="" />
              <p className="text-white-30 text-s leading-6">{method.label}</p>
            </div>
            <div
              className={`w-3 h-3 cursor-pointer border flex justify-center items-center ${
                active === i ? "border-primary-main" : "border-white-20"
              } rounded-full`}
            >
              <div
                className={`${
                  active === i ? "bg-primary-main" : "bg-white-20"
                } w-2 h-2  rounded-full`}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <button
          type="submit"
          className="mt-10 w-24 h-12 bg-primary-main rounded-md text-whiteText text-s font-regular leading-6"
        >
          Proceed
        </button>
    </div>
  );
}

export default SendGust;