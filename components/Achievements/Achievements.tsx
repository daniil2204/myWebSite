import React from "react";

const achivements = [
  {
    metric: "Years",
    value: "2",
  },
  {
    metric: "ggdf",
    value: "5",
  },
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {achivements.map((item) => (
          <div
            key={item.metric}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold">{item.metric}</h2>
            <p className="text-[#ADB7BE] text-base">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
