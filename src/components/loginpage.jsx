import React from "react";
import loginimage from "../images/keyIllustration.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
function loginpage() {
  return (
    <div className="bg-[#F5F5F5] grid h-screen place-items-center">
      <div class="flex  justify-center items-center object-fill p-7 rounded-md bg-white focus-within:border-black ">
        <div className="flex flex-col  ">
          <form className="flex flex-col gap-6">
            <div className="flex p-3 text-black  border-gray-400 border-2 rounded focus-within:border-black ">
              <PersonOutlineIcon />
              <input
                type="name"
                placeholder="Username"
                className="ml-1 focus:outline-none w-[250px]"
              ></input>
            </div>

            <div className="flex p-3  text-black focus:ring-slate-800 border-gray-400 border-2 rounded focus-within:border-black">
              <LockIcon />
              <input
                type="password"
                placeholder="Password"
                className="ml-1 focus:outline-none"
              ></input>
            </div>
            <div className="flex">
              <input
                value="test"
                type="checkbox"
                className="mr-2 w-4 bg-[#7B61FF]"
              />
              <p className="text-[14px]">
                Remember me <a className="text-[#8e78ff]"> Forgot Password</a>
              </p>
            </div>

            <button
              type="submit"
              className="p-3  text-white rounded bg-[#7B61FF]"
            >
              Log in
            </button>
          </form>
          <div className="mt-2 text-left">
            <p className="text-[14px]">
              Or <button className="text-[#8e78ff]"> register now!</button>
            </p>
          </div>
        </div>
        <div className="ml-[40px] mr-[50px]">
          <img alt="" src={loginimage}></img>
        </div>
      </div>
    </div>
  );
}

export default loginpage;
