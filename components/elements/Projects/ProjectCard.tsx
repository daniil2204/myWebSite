import React from "react";
import { IProjectCard } from "@/types/Projects";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  desc,
  title,
  gitUrl,
  previewUrl,
}: Omit<IProjectCard, "id" | "tag">) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group mt-10"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay flex gap-10 items-center absolute justify-center top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full border[#ADB7B3] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7B3] cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border[#ADB7B3] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7B3] cursor-pointer hover:white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
