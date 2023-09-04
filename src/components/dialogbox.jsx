import React from "react";
import dash_image from "../images/rightColumnImg.svg";

export const PromoBox = () => {
  return (
    <div className=" bg-[#2bebc8] p-5 rounded-lg w-[1000px] h-[230px] flex">
      <div>
        <p className="font-semibold text-[20px]">Welcome to your dashboard!</p>
        <p className="text-[12px] w-[300px] mt-[30px] text-slate-700 ">
          Try our new Admin Dashboard Template, build with live Ant-Design
          components. Customize it to your needs and release to production!
        </p>
      </div>
      <div>
        <img src={dash_image} title="h1" alt=""></img>
      </div>
    </div>
  );
};
export default PromoBox;
