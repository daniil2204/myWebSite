import React from "react";
import { IProjectTag } from "@/types/Projects";

const ProjectTag = ({ text, isSelected, onClickBtn }: IProjectTag) => {
  const btnStyle = isSelected
    ? "text-white bg-purple-500"
    : "text-[#ADB7B#] border-slate-600 hover:border-white";
  return (
    <button
      className={`${btnStyle} rounded-full border-2 w-36 px-6 py-6 cursor-pointer`}
      onClick={onClickBtn}
    >
      {text}
    </button>
  );
};

export default ProjectTag;
