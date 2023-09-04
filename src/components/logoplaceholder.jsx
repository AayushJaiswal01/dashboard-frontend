import React from "react";

export const LogoPlaceholder = ({
  logoStyle,
  className,
  frame = "https://generation-sessions.s3.amazonaws.com/6022869113bd552112e6bd833c360b53/img/frame-2@2x.png",
  frameClassName,
}) => {
  return (
    <div
      className={`w-[calc(100.00%_-_20px)] flex left-[20px] flex-col items-center gap-[6px] p-[24px] h-[71px] justify-center relative ${
        logoStyle === "text-logo" ? "top-[115px]" : "top-[20px]"
      } ${className}`}
    >
      {logoStyle === "img-logo" && (
        <img
          className={`relative w-[84px] h-[22px] ${frameClassName}`}
          alt="Frame"
          src={frame}
        />
      )}

      {logoStyle === "text-logo" && (
        <div
          className={`relative w-fit [font-family:'Mulish',_Helvetica] font-bold text-white text-[16px] text-center tracking-[0] leading-[normal] ${frameClassName}`}
        >
          Company Name
        </div>
      )}
    </div>
  );
};

export default LogoPlaceholder;
