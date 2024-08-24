import { IColor } from "@/lib/types";
import React from "react";

export const Board = () => {
  const files = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const ranks = ["8", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="w-full h-screen flex justify-center items-center m-auto">
      <div className="flex justify-center items-start">
        <div className="flex flex-col justify-evenly items-center gap-[15px] h-[500px]">
          {ranks.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center m-auto">
          <div className="border border-primary drop-shadow-xl rounded-xl overflow-hidden grid grid-cols-8 gap-0 h-[500px] w-[500px]">
            {Array.from({ length: files.length }, (r_item, r_idx) =>
              Array.from({ length: ranks.length }, (c_item, c_idx) => (
                <Block
                  key={`${r_idx}${c_idx}`}
                  color={(c_idx + r_idx) % 2 === 0 ? "black" : "white"}
                />
              )),
            )}
          </div>
          <div className="w-[560px] mt-3 flex justify-evenly items-center">
            {files.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Block: React.FC<IColor> = ({ color = "white" }) => {
  return (
    <div
      className={`${color === "white" ? "bg-primary text-secondary" : "bg-secondary text-primary"} flex justify-center items-center m-auto h-full w-full`}
    ></div>
  );
};
