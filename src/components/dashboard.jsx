import React from "react";

import { SideMenu } from "./sidemenu.jsx";
import { TopMenu } from "./topmenu.jsx";
import PromoBox from "./dialogbox.jsx";
import BarChart from "./Barchart.jsx";
import BarChartLg from "./BarChartLg.jsx";
import linegreen from "../images/line-green.svg";
import linered from "../images/line-red.svg";
import lineyellow from "../images/line-yellow.svg";
import PieChart from "./PieChart.jsx";
import arrow from "../images/arrow_upward.svg";

export const DashboardMain = () => {
  return (
    <div className="bg-neutral-100 flex flex-row justify-center w-full">
      <div className="bg-neutral-100 w-[1440px] h-[945px] relative">
        <div>
          <TopMenu
            className="!absolute !left-[200px] !w-[1240px] !top-0"
            darkMode={false}
            searchBoxStyle="fill-imground"
          />
        </div>

        <div className="flex flex-col w-[1100px] items-center justify-center gap-[24px] absolute top-[120px] ml-[250px] ">
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto] mr-[40px]">
            <PromoBox />
            <div className="bg-white h-[230px] rounded-lg w-[480px]  ">
              <p className="ml-2 mt-2">Chart title</p>
              <div className="mt-5">
                <BarChart />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex-1 bg-white  h-[120px] rounded-md flex">
              <div className="flex flex-col p-5">
                <p className=" text-[10px] ">CHART TITLE</p>
                <p className="font-bold text-[18px]	">2,643</p>
                <div className="flex mr-2">
                  <img src={arrow} className="h-[12px] mr-1" alt=""></img>
                  <p className=" text-[10px]"> 1.1% Since yesterday</p>
                </div>
              </div>
              <div className="p-3">
                <img src={linered} alt="" className=""></img>
              </div>
            </div>
            <div className="flex-1 bg-white  h-[120px] rounded-md flex">
              <div className="flex flex-col p-5">
                <p className=" text-[10px] ">CHART TITLE</p>
                <p className="font-bold text-[18px]	">2,643</p>
                <div className="flex mr-2">
                  <img src={arrow} className="h-[12px] mr-1" alt=""></img>
                  <p className=" text-[10px]"> 1.1% Since yesterday</p>
                </div>
              </div>
              <div className="p-3">
                <img src={lineyellow} alt="" className=""></img>
              </div>
            </div>
            <div className="flex-1 bg-white  h-[120px] rounded-md flex">
              <div className="flex flex-col p-5">
                <p className=" text-[10px] ">CHART TITLE</p>
                <p className="font-bold text-[18px]	">2,643</p>
                <div className="flex mr-2">
                  <img src={arrow} className="h-[12px] mr-1" alt=""></img>
                  <p className=" text-[10px]"> 1.1% Since yesterday</p>
                </div>
              </div>
              <div className="p-3">
                <img src={linegreen} alt="" className=""></img>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-[24px] relative self-stretch w-full flex-[0_0_auto]">
            <div className=" flex-1 h-[300px] bg-white rounded-md">
              <p className="mt-3 ml-3">Chart Title</p>
              <BarChartLg />
            </div>
            <div className=" h-[300px] !w-[350px] bg-white rounded-md">
              <div className="flex mt-3 ml-3 justify-between">
                <p className="">Chart Title</p>
                <div className="flex mr-2">
                  <img src={arrow} className="h-[12px] mr-1" alt=""></img>
                  <p className=" text-[10px]"> 1.1% Since yesterday</p>
                </div>
              </div>
              <div className="align-middle mb-[40px] jusify-center">
                <PieChart />
              </div>
            </div>
          </div>
        </div>

        <SideMenu
          className="!h-[945px] !w-[200px] !absolute !left-0 !top-0"
          darkMode={false}
          logo="image"
        />
      </div>
    </div>
  );
};
export default DashboardMain;
