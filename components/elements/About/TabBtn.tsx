import React from "react";
import { ITabBtn } from "@/types/About";
const TabBtn = ({ active, selectTab, children }: ITabBtn) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabBtn;
