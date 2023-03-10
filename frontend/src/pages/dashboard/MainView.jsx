import React from "react";
import Overview from "./dashboard-components/Overview";
import BuyandSell from "./dashboard-components/BuyandSell";

function MainView({ activeLink }) {
  return (
    <div className="w-[100%] mt-24 h-auto absolute right-0 top-0 bg-White lg:w-4/5">
      <div className="w-full relative h-auto">{activeLink === 0 && <Overview />}</div>
      <div className="w-full h-4/5">{activeLink === 1 && <BuyandSell />}</div>
    </div>
  );
}

export default MainView;
