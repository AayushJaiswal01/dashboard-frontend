import React from "react";
import { LogoPlaceholder } from "./logoplaceholder.jsx";
import BarChartIcon from "@mui/icons-material/BarChart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SettingsIcon from "@mui/icons-material/Settings";

export const SideMenu = ({ darkMode, logo, className }) => {
  return (
    <div className="flex flex-col h-[100%] w-[200px] bg-white">
      <LogoPlaceholder
        className={
          darkMode
            ? "!self-stretch !h-[72px] !left-[unset] !bg-black !w-full !top-[unset]"
            : "!self-stretch !h-[72px] !left-[unset] !bg-gray-100 !w-full !top-[unset]"
        }
        frame={
          !darkMode && logo === "image"
            ? "https://generation-sessions.s3.amazonaws.com/6022869113bd552112e6bd833c360b53/img/frame-1@2x.png"
            : darkMode && logo === "image"
            ? "https://generation-sessions.s3.amazonaws.com/6022869113bd552112e6bd833c360b53/img/frame-3@2x.png"
            : undefined
        }
        frameClassName={
          !darkMode && logo === "text"
            ? "!text-[color:var(--backgroundsdark-cards)]"
            : undefined
        }
        logoStyle={logo === "text" ? "text-logo" : "img-logo"}
      />

      <div className="flex  mt-2 border-b p-3 hover:bg-gray-100">
        <BarChartIcon color="action" />
        <p className="text-[14px] text-black ml-2 ">Dashboard</p>
      </div>
      <div className="flex border-b p-3 hover:bg-gray-100 ">
        <ShoppingCartIcon color="action" />
        <p className="text-[14px] text-black ml-2">Orders</p>
      </div>
      <div className="flex  border-b p-3 hover:bg-gray-100">
        <PermIdentityIcon color="action" />
        <p className="text-[14px] text-black ml-2">Account</p>
      </div>
      <div className="flex  border-b p-3 hover:bg-gray-100 ">
        <SettingsIcon color="action" />
        <p className="text-[14px]  ml-2 hover:text-blue text-black">Settings</p>
      </div>
    </div>
  );
};

export default SideMenu;
