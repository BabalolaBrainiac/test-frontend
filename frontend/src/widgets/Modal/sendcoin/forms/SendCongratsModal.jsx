import React from "react";
import { congrats } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import {BiCopy} from 'react-icons/bi'

function SendCongratsModal({setShowSendModal,transactionDetails}) {
  const navigate = useNavigate();
  const handleFinish = () => {
    setShowSendModal(false);
    navigate("/dashboard");
  };
  return (
    <div className="w-[100%] fixed top-0 left-0 h-[100vh] flex justify-center backdrop-blur-sm z-20">
      <div className="w-[29.3rem] h-[33.3rem] mt-10 bg-[white] rounded-3xl shadow-sm">
        <div className="h-[15rem] p-10">
          <img className="w-full h-full object-contain" src={congrats} alt="" />
        </div>
        <p className="text-m leading-8 font-bold text-white-50 flex justify-center items-center">
          Success!
        </p>
        <div className="w-[8rem] h-14 rounded-xl bg-primary-light mx-auto mt-9 mb-3 text-s flex justify-center items-center font-medium text-primary-main leading-6">
          {" "}
          {parseInt(transactionDetails.gustAmount).toFixed(2)} GU$T{" "}
        </div>
        <p className="text-xs leading-5 text-center font-medium text-white-30 mt-2 mb-2">
          Has Been Sent to @{transactionDetails.gustTag ? transactionDetails.gustTag : transactionDetails.recieversUsername}
        </p>
        <p className="text-xs leading-5 text-center font-medium text-white-30 mt-2 mb-2">
          Copy link to share with receiver
        </p>
        {/* copy link */}
        <button className="w-[8rem] h-11 bg-primary-main mx-auto mt-8 text-s flex justify-center items-center gap-2 font-medium text-primary-main leading-6 rounded-[5px]" onClick={handleFinish}>
          <p className="text-s font-regular text-whiteText">Get Link</p><BiCopy size='1rem' color='white'/>
        </button>
      </div>
    </div>
  );
}

export default SendCongratsModal;
