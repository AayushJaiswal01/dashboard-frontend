import React from "react";
export const UserAvatar = ({ shape, type, className }) => {
  return (
    <div
      className={`w-[40px] left-[20px] h-[40px] relative ${
        type === "image" && shape === "square"
          ? "top-[84px]"
          : type === "letter" && shape === "square"
          ? "top-[148px]"
          : shape === "circle" && type === "letter"
          ? "top-[212px]"
          : "top-[20px]"
      } ${className}`}
    >
      <div className="h-[40px]" />
    </div>
  );
};
export default UserAvatar;
